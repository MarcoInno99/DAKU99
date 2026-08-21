import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";
import { isAdminEmail } from "../../lib/identity";
import { clubBalance, ensureLeagueStateSchema, getEffectiveTeam, getEffectiveTeams, managerSeason } from "../../lib/league-state";

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("team");
  const teams = slug ? [await getEffectiveTeam(slug)].filter(Boolean) : await getEffectiveTeams();
  const balances = await Promise.all(teams.map(async team => ({ teamSlug:team!.slug, balance:await clubBalance(team!) })));
  return Response.json({ balances }, { headers:{"cache-control":"no-store, no-cache, must-revalidate"} });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!isAdminEmail(user?.email)) return Response.json({error:"Operazione riservata agli amministratori"},{status:403});
  const body = await request.json() as {teamSlug?:string;balance?:number;note?:string};
  const team = body.teamSlug ? await getEffectiveTeam(body.teamSlug) : null, target = Number(body.balance);
  if (!team || !Number.isInteger(target) || target < -999 || target > 9999) return Response.json({error:"Club o saldo non valido"},{status:400});
  await ensureLeagueStateSchema();
  const current = await clubBalance(team), delta = target-current, now = new Date().toISOString();
  if (delta) await env.DB.prepare("INSERT INTO team_credit_adjustments(team_slug,season,reference,amount,note,created_at,created_by) VALUES(?,?,?,?,?,?,?)")
    .bind(team.slug,managerSeason,`admin-${crypto.randomUUID()}`,delta,body.note?.trim()||`Saldo impostato da ${current} a ${target}`,now,user!.email).run();
  return Response.json({ok:true,balance:target,previous:current,delta});
}

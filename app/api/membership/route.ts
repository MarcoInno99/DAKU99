import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";
import { getTeam } from "../../data/league";
import { ensureMembershipSchema, reservedSeats, teamForEmail } from "../../lib/identity";

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Accesso richiesto" }, { status: 401 });
  if (await teamForEmail(user.email)) return Response.json({ error: "La tua email è già associata a una squadra" }, { status: 409 });
  const body = await request.json() as { teamSlug?: string };
  const team = body.teamSlug ? getTeam(body.teamSlug) : null;
  if (!team) return Response.json({ error: "Squadra non valida" }, { status: 400 });
  await ensureMembershipSchema();
  const row = await env.DB.prepare("SELECT COUNT(*) AS total FROM team_memberships WHERE team_slug=?").bind(team.slug).first<{total:number}>();
  if (Number(row?.total ?? 0) + reservedSeats(team.slug) >= 2) return Response.json({ error: "Questa squadra ha già due allenatori associati" }, { status: 409 });
  try {
    await env.DB.prepare("INSERT INTO team_memberships(user_id,user_email,team_slug,created_at) VALUES(?,?,?,?)")
      .bind(user.userId, user.email.trim().toLowerCase(), team.slug, new Date().toISOString()).run();
    return Response.json({ ok: true, teamSlug: team.slug });
  } catch {
    return Response.json({ error: "Associazione già registrata o squadra appena occupata" }, { status: 409 });
  }
}

import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../../chatgpt-auth";
import { sponsorSeason } from "../../../data/sponsors";
import { getTeam } from "../../../data/league";
import { isAdminEmail } from "../../../lib/identity";

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user || !isAdminEmail(user.email)) return Response.json({ error: "Operazione riservata all’amministratore" }, { status: 403 });
  const body = await request.json() as { teamSlug?: string };
  const team = body.teamSlug ? getTeam(body.teamSlug) : null;
  if (!team) return Response.json({ error: "Club non valido" }, { status: 400 });
  const existing = await env.DB.prepare("SELECT sponsor_slug FROM club_sponsors WHERE team_slug=? AND season=?").bind(team.slug, sponsorSeason).first<{ sponsor_slug: string }>();
  if (!existing) return Response.json({ error: "Questo club non ha uno sponsor da resettare" }, { status: 404 });
  await env.DB.prepare("DELETE FROM club_sponsors WHERE team_slug=? AND season=?").bind(team.slug, sponsorSeason).run();
  return Response.json({ ok: true, removedSponsor: existing.sponsor_slug });
}

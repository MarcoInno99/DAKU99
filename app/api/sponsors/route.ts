import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";
import { getSponsor, sponsorSeason } from "../../data/sponsors";
import { teamForEmail } from "../../lib/identity";

async function ensureSchema() {
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS club_sponsors (id INTEGER PRIMARY KEY AUTOINCREMENT,team_slug TEXT NOT NULL,season TEXT NOT NULL,sponsor_slug TEXT NOT NULL,user_email TEXT NOT NULL,locked_at TEXT NOT NULL)`),
    env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_club_sponsors_team_season ON club_sponsors(team_slug,season)"),
  ]);
}

export async function GET(request: Request) {
  await ensureSchema();
  const user = await getChatGPTUser();
  const ownTeam = await teamForEmail(user?.email);
  const requested = new URL(request.url).searchParams.get("team");
  const team = requested ?? ownTeam;
  if (!team) return Response.json({ sponsor: null });
  const sponsor = await env.DB.prepare("SELECT sponsor_slug,locked_at FROM club_sponsors WHERE team_slug=? AND season=?").bind(team,sponsorSeason).first();
  return Response.json({ sponsor, ownTeam });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Accesso richiesto" }, { status: 401 });
  const team = await teamForEmail(user.email);
  if (!team) return Response.json({ error: "Squadra non associata" }, { status: 403 });
  const body = await request.json() as { sponsorSlug?: string };
  const sponsor = getSponsor(body.sponsorSlug);
  if (!sponsor) return Response.json({ error: "Sponsor non valido" }, { status: 400 });
  await ensureSchema();
  const existing = await env.DB.prepare("SELECT sponsor_slug FROM club_sponsors WHERE team_slug=? AND season=?").bind(team,sponsorSeason).first();
  if (existing) return Response.json({ error: "Lo sponsor è già stato scelto e bloccato" }, { status: 423 });
  const now = new Date().toISOString();
  await env.DB.prepare("INSERT INTO club_sponsors(team_slug,season,sponsor_slug,user_email,locked_at) VALUES(?,?,?,?,?)").bind(team,sponsorSeason,sponsor.slug,user.email,now).run();
  return Response.json({ ok: true, sponsor: { sponsor_slug: sponsor.slug, locked_at: now } });
}

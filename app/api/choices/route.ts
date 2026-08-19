import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";
import { teamForEmail } from "../../lib/identity";

const season = "2027-2028";

async function ensureSchema() {
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS club_choices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    team_slug TEXT NOT NULL,
    season TEXT NOT NULL DEFAULT '2027-2028',
    user_email TEXT NOT NULL,
    sporting_director INTEGER NOT NULL DEFAULT 0,
    stadium INTEGER NOT NULL DEFAULT 0,
    formation TEXT,
    lineup_json TEXT,
    updated_at TEXT NOT NULL
  )`).run();
  await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_club_choices_team_season ON club_choices(team_slug, season)").run();
}

export async function GET(request: Request) {
  await ensureSchema();
  const team = new URL(request.url).searchParams.get("team");
  if (team) {
    const row = await env.DB.prepare("SELECT team_slug, sporting_director, stadium, formation, lineup_json, updated_at FROM club_choices WHERE team_slug = ? AND season = ?").bind(team, season).first();
    return Response.json({ choice: row ?? null });
  }
  const rows = await env.DB.prepare("SELECT team_slug, sporting_director, stadium, formation, updated_at FROM club_choices WHERE season = ? ORDER BY team_slug").bind(season).all();
  return Response.json({ choices: rows.results });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Accesso richiesto" }, { status: 401 });
  const ownedTeam = teamForEmail(user.email);
  if (!ownedTeam) return Response.json({ error: "Nessuna squadra associata a questa email" }, { status: 403 });
  const body = await request.json() as { teamSlug?: string; sportingDirector?: boolean; stadium?: boolean; formation?: string | null; lineup?: Record<string, string> | null };
  if (body.teamSlug !== ownedTeam) return Response.json({ error: "Puoi modificare soltanto la tua società" }, { status: 403 });
  await ensureSchema();
  const now = new Date().toISOString();
  await env.DB.prepare(`INSERT INTO club_choices (team_slug, season, user_email, sporting_director, stadium, formation, lineup_json, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(team_slug, season) DO UPDATE SET user_email=excluded.user_email, sporting_director=excluded.sporting_director, stadium=excluded.stadium, formation=excluded.formation, lineup_json=excluded.lineup_json, updated_at=excluded.updated_at`)
    .bind(ownedTeam, season, user.email, body.sportingDirector ? 1 : 0, body.stadium ? 1 : 0, body.formation ?? null, JSON.stringify(body.lineup ?? {}), now).run();
  return Response.json({ ok: true, updatedAt: now });
}

import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";
import { teamForEmail } from "../../lib/identity";

async function ensureSchema() { await env.DB.prepare(`CREATE TABLE IF NOT EXISTS club_identity (id INTEGER PRIMARY KEY AUTOINCREMENT,team_slug TEXT NOT NULL UNIQUE,user_email TEXT NOT NULL,avatar_json TEXT NOT NULL,kit_json TEXT NOT NULL,crest_key TEXT,updated_at TEXT NOT NULL)`).run(); }

export async function GET(request: Request) {
  await ensureSchema(); const team = new URL(request.url).searchParams.get("team");
  if (!team) return Response.json({ error: "Club mancante" }, { status: 400 });
  const columns = await env.DB.prepare("PRAGMA table_info(club_identity)").all<{name:string}>();
  const hasCoach = (columns.results ?? []).some(column => column.name === "coach_name");
  const row = await env.DB.prepare(`SELECT team_slug,crest_key,updated_at${hasCoach ? ",coach_name" : ""} FROM club_identity WHERE team_slug=?`).bind(team).first();
  return Response.json({ identity: row ?? null });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Accesso richiesto" }, { status: 401 });
  const team = await teamForEmail(user.email);
  if (!team) return Response.json({ error: "Club non associato alla tua email" }, { status: 403 });
  try {
    await ensureSchema(); const form = await request.formData();
    if (String(form.get("teamSlug")) !== team) return Response.json({ error: "Puoi modificare solo il tuo club" }, { status: 403 });
    const candidate = form.get("crest");
    if (!candidate || typeof candidate === "string" || typeof candidate.arrayBuffer !== "function" || candidate.size === 0) return Response.json({ error: "Il file dello stemma non è arrivato correttamente" }, { status: 400 });
    if (candidate.size > 12_000_000 || !candidate.type.startsWith("image/")) return Response.json({ error: "Lo stemma deve essere un’immagine sotto i 12 MB" }, { status: 400 });
    const existing = await env.DB.prepare("SELECT crest_key FROM club_identity WHERE team_slug=?").bind(team).first<{crest_key:string|null}>();
    const crestKey = `club-crests/${team}-${Date.now()}.webp`, now = new Date().toISOString();
    await env.CRESTS.put(crestKey, await candidate.arrayBuffer(), { httpMetadata: { contentType: candidate.type || "image/webp" } });
    await env.DB.prepare(`INSERT INTO club_identity (team_slug,user_email,avatar_json,kit_json,crest_key,updated_at) VALUES (?,?,?,?,?,?) ON CONFLICT(team_slug) DO UPDATE SET user_email=excluded.user_email,crest_key=excluded.crest_key,updated_at=excluded.updated_at`).bind(team,user.email,"{}","{}",crestKey,now).run();
    if (existing?.crest_key && existing.crest_key !== crestKey) await env.CRESTS.delete(existing.crest_key).catch(() => {});
    return Response.json({ ok: true, crestUrl: `/api/identity/crest?team=${team}`, updatedAt: now });
  } catch (error) { return Response.json({ error: error instanceof Error ? `Errore salvataggio: ${error.message}` : "Errore interno durante il salvataggio" }, { status: 500 }); }
}

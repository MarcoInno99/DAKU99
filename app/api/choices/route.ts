import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";
import { teamForEmail } from "../../lib/identity";

const season = "2027-2028";
const extraColumns = [
  ["medical_center", "INTEGER NOT NULL DEFAULT 0"],
  ["youth_academy", "INTEGER NOT NULL DEFAULT 0"],
  ["training_center", "INTEGER NOT NULL DEFAULT 0"],
  ["locked_at", "TEXT"],
  ["third_choice", "TEXT"],
] as const;

async function ensureSchema() {
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS club_choices (
    id INTEGER PRIMARY KEY AUTOINCREMENT, team_slug TEXT NOT NULL, season TEXT NOT NULL DEFAULT '2027-2028',
    user_email TEXT NOT NULL, sporting_director INTEGER NOT NULL DEFAULT 0, stadium INTEGER NOT NULL DEFAULT 0,
    medical_center INTEGER NOT NULL DEFAULT 0, youth_academy INTEGER NOT NULL DEFAULT 0, training_center INTEGER NOT NULL DEFAULT 0,
    locked_at TEXT, formation TEXT, lineup_json TEXT, updated_at TEXT NOT NULL
  )`).run();
  const info = await env.DB.prepare("PRAGMA table_info(club_choices)").all<{name:string}>();
  const existing = new Set(info.results.map(column => column.name));
  for (const [name, definition] of extraColumns) if (!existing.has(name)) await env.DB.prepare(`ALTER TABLE club_choices ADD COLUMN ${name} ${definition}`).run();
  await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_club_choices_team_season ON club_choices(team_slug, season)").run();
}

const fields = "team_slug, sporting_director, stadium, medical_center, youth_academy, training_center, third_choice, locked_at, formation, lineup_json, updated_at";

export async function GET(request: Request) {
  await ensureSchema();
  const team = new URL(request.url).searchParams.get("team");
  if (team) return Response.json({ choice: await env.DB.prepare(`SELECT ${fields} FROM club_choices WHERE team_slug = ? AND season = ?`).bind(team, season).first() ?? null });
  const rows = await env.DB.prepare(`SELECT ${fields} FROM club_choices WHERE season = ? ORDER BY team_slug`).bind(season).all();
  return Response.json({ choices: rows.results });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Accesso richiesto" }, { status: 401 });
  const ownedTeam = await teamForEmail(user.email);
  if (!ownedTeam) return Response.json({ error: "Nessuna squadra associata a questa email" }, { status: 403 });
  const body = await request.json() as Record<string, unknown>;
  if (body.teamSlug !== ownedTeam) return Response.json({ error: "Puoi modificare soltanto la tua società" }, { status: 403 });
  await ensureSchema();
  const now = new Date().toISOString();
  if (body.kind === "formation") {
    await env.DB.prepare(`INSERT INTO club_choices (team_slug, season, user_email, formation, lineup_json, updated_at) VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(team_slug,season) DO UPDATE SET formation=excluded.formation,lineup_json=excluded.lineup_json,updated_at=excluded.updated_at`)
      .bind(ownedTeam, season, user.email, body.formation ?? null, JSON.stringify(body.lineup ?? {}), now).run();
    return Response.json({ ok: true, updatedAt: now });
  }
  const current = await env.DB.prepare("SELECT locked_at FROM club_choices WHERE team_slug = ? AND season = ?").bind(ownedTeam, season).first<{locked_at:string|null}>();
  if (current?.locked_at) return Response.json({ error: "Le scelte sono bloccate. Deve riaprirle l’amministratore." }, { status: 423 });
  const keys = ["sportingDirector","stadium","prestanome","youthAcademy","trainingCenter"];
  const sponsor=await env.DB.prepare("SELECT sponsor_slug FROM club_sponsors WHERE team_slug=? AND season=?").bind(ownedTeam,season).first<{sponsor_slug:string}>().catch(()=>null),max=sponsor?.sponsor_slug==="lido-domizia"?3:2,count=keys.filter(key => body[key] === true).length,third=typeof body.thirdChoice==="string"?body.thirdChoice:null;
  if (count > max) return Response.json({ error: `Puoi selezionare al massimo ${max} scelte societarie.` }, { status: 400 });
  if(count===3&&(!third||!keys.includes(third)||body[third]!==true))return Response.json({error:"Indica quale struttura riceve lo sconto Costruzione abusiva"},{status:400});
  await env.DB.prepare(`INSERT INTO club_choices (team_slug,season,user_email,sporting_director,stadium,medical_center,youth_academy,training_center,third_choice,locked_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(team_slug,season) DO UPDATE SET user_email=excluded.user_email,sporting_director=excluded.sporting_director,stadium=excluded.stadium,medical_center=excluded.medical_center,youth_academy=excluded.youth_academy,training_center=excluded.training_center,third_choice=excluded.third_choice,locked_at=excluded.locked_at,updated_at=excluded.updated_at`)
    .bind(ownedTeam,season,user.email,body.sportingDirector?1:0,body.stadium?1:0,body.prestanome?1:0,body.youthAcademy?1:0,body.trainingCenter?1:0,third,now,now).run();
  return Response.json({ ok: true, updatedAt: now, lockedAt: now });
}

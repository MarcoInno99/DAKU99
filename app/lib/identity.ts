import { env } from "cloudflare:workers";

const reservedEmailToTeam: Record<string, string> = {
  "marcoizzo1999@hotmail.com": "ffi-leonardus",
};

const ownerEmail = "marcoizzo1999@hotmail.com";
const adminEmails = new Set([ownerEmail, "petrella254@gmail.com"]);

export async function ensureMembershipSchema() {
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS team_memberships (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      user_email TEXT NOT NULL,
      team_slug TEXT NOT NULL,
      created_at TEXT NOT NULL
    )`),
    env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_team_memberships_user_id ON team_memberships(user_id)"),
    env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_team_memberships_email ON team_memberships(user_email)"),
    env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_team_memberships_team ON team_memberships(team_slug)"),
  ]);
  await env.DB.prepare("PRAGMA optimize").run();
}

export async function teamForEmail(email?: string | null) {
  if (!email) return null;
  const normalized = email.trim().toLowerCase();
  if (reservedEmailToTeam[normalized]) return reservedEmailToTeam[normalized];
  try {
    await ensureMembershipSchema();
    const row = await env.DB.prepare("SELECT team_slug FROM team_memberships WHERE user_email=?").bind(normalized).first<{team_slug:string}>();
    return row?.team_slug ?? null;
  } catch {
    return null;
  }
}

export function reservedSeats(teamSlug: string) {
  return Object.values(reservedEmailToTeam).filter(slug => slug === teamSlug).length;
}

export function isAdminEmail(email?: string | null) {
  return adminEmails.has(email?.trim().toLowerCase() ?? "");
}

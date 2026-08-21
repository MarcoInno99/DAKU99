import { env } from "cloudflare:workers";
import { teams as fallbackTeams, type Player, type Team } from "../data/league";

export const managerSeason = "2027-2028";

export async function ensureLeagueStateSchema() {
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS imported_roster_players (
      id INTEGER PRIMARY KEY AUTOINCREMENT, team_slug TEXT NOT NULL, player_name TEXT NOT NULL,
      club TEXT NOT NULL, role TEXT NOT NULL, age INTEGER NOT NULL DEFAULT 0, cost INTEGER NOT NULL DEFAULT 0,
      quotation INTEGER NOT NULL DEFAULT 0, fvm INTEGER NOT NULL DEFAULT 0, fuori_lista TEXT,
      row_order INTEGER NOT NULL DEFAULT 0, import_batch TEXT NOT NULL, imported_at TEXT NOT NULL, imported_by TEXT NOT NULL
    )`),
    env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_imported_roster_team_player ON imported_roster_players(team_slug, player_name)"),
    env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_imported_roster_team_order ON imported_roster_players(team_slug, row_order)"),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS team_credit_adjustments (
      id INTEGER PRIMARY KEY AUTOINCREMENT, team_slug TEXT NOT NULL, season TEXT NOT NULL,
      reference TEXT NOT NULL, amount INTEGER NOT NULL, note TEXT, created_at TEXT NOT NULL, created_by TEXT NOT NULL
    )`),
    env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_credit_adjustment_reference ON team_credit_adjustments(team_slug, season, reference)"),
  ]);
}

export function normalizeClubName(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function slugForImportedTeam(name: string) {
  const normalized = normalizeClubName(name);
  return fallbackTeams.find(team => normalizeClubName(team.name) === normalized)?.slug ?? null;
}

export async function getEffectiveTeams(): Promise<Team[]> {
  try {
    await ensureLeagueStateSchema();
    const rows = await env.DB.prepare("SELECT team_slug,player_name,club,role,age,cost,quotation,fvm,fuori_lista FROM imported_roster_players ORDER BY team_slug,row_order,id").all<Record<string, unknown>>();
    if (!rows.results.length) return fallbackTeams;
    const grouped = new Map<string, Player[]>();
    for (const row of rows.results) {
      const player: Player = { name:String(row.player_name), club:String(row.club), role:String(row.role), age:Number(row.age), cost:Number(row.cost), quotation:Number(row.quotation), fvm:Number(row.fvm), fuoriLista:row.fuori_lista };
      grouped.set(String(row.team_slug), [...(grouped.get(String(row.team_slug)) ?? []), player]);
    }
    return fallbackTeams.map(team => {
      const roster = grouped.get(team.slug) ?? team.roster;
      const spent = roster.reduce((sum, player) => sum + player.cost, 0);
      return { ...team, roster, players:roster.length, spent, remaining:500-spent, under21:roster.filter(player => player.age <= 21).length };
    });
  } catch { return fallbackTeams; }
}

export async function getEffectiveTeam(slug: string) {
  return (await getEffectiveTeams()).find(team => team.slug === slug);
}

export async function clubBalance(team: Team) {
  await ensureLeagueStateSchema();
  const [adjustments, salaries, prizes] = await Promise.all([
    env.DB.prepare("SELECT COALESCE(SUM(amount),0) total FROM team_credit_adjustments WHERE team_slug=? AND season=?").bind(team.slug, managerSeason).first<{total:number}>(),
    env.DB.prepare("SELECT COALESCE(SUM(amount),0) total FROM salary_payments WHERE team_slug=?").bind(team.slug).first<{total:number}>().catch(()=>({total:0})),
    env.DB.prepare("SELECT COALESCE(SUM(awarded_credits),0) total FROM minigame_bets WHERE team_slug=?").bind(team.slug).first<{total:number}>().catch(()=>({total:0})),
  ]);
  return team.remaining + Number(adjustments?.total ?? 0) - Number(salaries?.total ?? 0) + Number(prizes?.total ?? 0);
}

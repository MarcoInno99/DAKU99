import { env } from "cloudflare:workers";

export const leagueAccessCookie = "bdc_league_access";

function runtimeValues() {
  return env as unknown as Record<string, string | undefined>;
}

export function leaguePassword() {
  return runtimeValues().LEAGUE_PASSWORD ?? "";
}

export function leagueAccessToken() {
  return runtimeValues().LEAGUE_ACCESS_TOKEN ?? "";
}

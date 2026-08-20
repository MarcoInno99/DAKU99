import { leagueAccessCookie, leagueAccessToken, leaguePassword } from "../../lib/league-access";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({})) as { password?: string };
  const expectedPassword = leaguePassword();
  const token = leagueAccessToken();
  if (!expectedPassword || !token) return Response.json({ error: "Accesso alla lega non configurato" }, { status: 503 });
  if (body.password !== expectedPassword) return Response.json({ error: "Parola d’ordine errata" }, { status: 401 });
  return Response.json({ ok: true }, { headers: {
    "set-cookie": `${leagueAccessCookie}=${encodeURIComponent(token)}; Path=/; Max-Age=31536000; HttpOnly; Secure; SameSite=Lax`,
  } });
}

import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../../chatgpt-auth";
import { isAdminEmail } from "../../../lib/identity";

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user || !isAdminEmail(user.email)) return Response.json({ error: "Operazione riservata all’amministratore" }, { status: 403 });
  const body = await request.json() as { teamSlug?: string };
  if (!body.teamSlug) return Response.json({ error: "Club mancante" }, { status: 400 });
  await env.DB.prepare("UPDATE club_choices SET locked_at = NULL WHERE team_slug = ? AND season = '2027-2028'").bind(body.teamSlug).run();
  return Response.json({ ok: true });
}

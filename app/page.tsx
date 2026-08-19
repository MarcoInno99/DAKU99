import { getChatGPTUser } from "./chatgpt-auth";
import { AppHeader } from "./components/AppHeader";
import { TeamDashboard } from "./components/TeamDashboard";
import { getTeam } from "./data/league";
import { isAdminEmail, teamForEmail } from "./lib/identity";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await getChatGPTUser();
  const teamSlug = teamForEmail(user?.email);
  const team = teamSlug ? getTeam(teamSlug) : null;
  return <main className="app-shell"><AppHeader teamSlug={teamSlug} email={user?.email ?? null} isAdmin={isAdminEmail(user?.email)} />{team ? <TeamDashboard team={team} canEdit /> : <section className="empty-state"><p className="eyebrow">Account non associato</p><h1>La tua squadra non è ancora collegata.</h1><p>Puoi consultare tutti i club, ma un amministratore deve associare questa email a una società prima di salvare decisioni.</p><a className="primary-link" href="/squadre">Visualizza i club</a></section>}</main>;
}

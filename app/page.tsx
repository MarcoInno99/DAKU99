import { requireChatGPTUser } from "./chatgpt-auth";
import { AppHeader } from "./components/AppHeader";
import { TeamDashboard } from "./components/TeamDashboard";
import { getTeam } from "./data/league";
import { isAdminEmail, teamForEmail } from "./lib/identity";
import { teams } from "./data/league";
import { TeamOnboarding } from "./components/TeamOnboarding";
import { SponsorSelector } from "./components/SponsorSelector";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await requireChatGPTUser("/");
  const teamSlug = await teamForEmail(user.email);
  const team = teamSlug ? getTeam(teamSlug) : null;
  if (!team) return <main className="app-shell"><TeamOnboarding teams={teams} email={user.email}/></main>;
  return <main className="app-shell"><AppHeader teamSlug={teamSlug} email={user.email} isAdmin={isAdminEmail(user.email)} /><SponsorSelector teamSlug={teamSlug}/><TeamDashboard team={team} canEdit /></main>;
}

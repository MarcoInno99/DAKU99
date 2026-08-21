import { notFound } from "next/navigation";
import { getChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { AdminPanel } from "../components/AdminPanel";
import { MarketSettingsAdmin } from "../components/MarketSettingsAdmin";
import { LeagueAdminTools } from "../components/LeagueAdminTools";
import { getEffectiveTeams } from "../lib/league-state";
import { isAdminEmail, teamForEmail } from "../lib/identity";

export const dynamic = "force-dynamic";
export default async function AdminPage(){const user=await getChatGPTUser();if(!isAdminEmail(user?.email))notFound();const teams=await getEffectiveTeams();return <main className="app-shell"><AppHeader teamSlug={await teamForEmail(user?.email)} email={user?.email??null} isAdmin/><LeagueAdminTools teams={teams}/><MarketSettingsAdmin/><AdminPanel teams={teams}/></main>}

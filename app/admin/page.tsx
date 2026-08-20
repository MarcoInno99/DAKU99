import { notFound } from "next/navigation";
import { getChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { AdminPanel } from "../components/AdminPanel";
import { MarketSettingsAdmin } from "../components/MarketSettingsAdmin";
import { teams } from "../data/league";
import { isAdminEmail, teamForEmail } from "../lib/identity";

export const dynamic = "force-dynamic";
export default async function AdminPage(){const user=await getChatGPTUser();if(!isAdminEmail(user?.email))notFound();return <main className="app-shell"><AppHeader teamSlug={await teamForEmail(user?.email)} email={user?.email??null} isAdmin/><MarketSettingsAdmin/><AdminPanel teams={teams}/></main>}

import { notFound } from "next/navigation";
import { getChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { AdminPanel } from "../components/AdminPanel";
import { teams } from "../data/league";
import { isAdminEmail, teamForEmail } from "../lib/identity";

export const dynamic = "force-dynamic";
export default async function AdminPage(){const user=await getChatGPTUser();if(!isAdminEmail(user?.email))notFound();return <main className="app-shell"><AppHeader teamSlug={teamForEmail(user?.email)} email={user?.email??null} isAdmin/><AdminPanel teams={teams}/></main>}

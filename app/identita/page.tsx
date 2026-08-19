import { notFound } from "next/navigation";
import { requireChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { IdentityStudio } from "../components/IdentityStudio";
import { getTeam } from "../data/league";
import { isAdminEmail, teamForEmail } from "../lib/identity";
export const dynamic="force-dynamic";
export default async function IdentityPage(){const user=await requireChatGPTUser("/identita"),slug=teamForEmail(user.email),team=slug?getTeam(slug):null;if(!team)notFound();return <main className="app-shell"><AppHeader teamSlug={slug} email={user.email} isAdmin={isAdminEmail(user.email)}/><IdentityStudio team={team}/></main>}

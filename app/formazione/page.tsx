import { getChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { FormationBuilder } from "../components/FormationBuilder";
import { getEffectiveTeam } from "../lib/league-state";
import { teamForEmail } from "../lib/identity";
export const dynamic="force-dynamic";
export default async function FormationPage(){const user=await getChatGPTUser(),slug=await teamForEmail(user?.email),team=slug?await getEffectiveTeam(slug):null;return <main className="app-shell"><AppHeader teamSlug={slug} email={user?.email??null}/>{team?<FormationBuilder team={team}/>:<section className="empty-state"><h1>Nessuna squadra associata</h1><p>Serve l’associazione tra email e club per creare una formazione.</p></section>}</main>}

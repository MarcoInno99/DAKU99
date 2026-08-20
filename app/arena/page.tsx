import { requireChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { ArenaClient } from "../components/ArenaClient";
import { SoloArena } from "../components/SoloArena";
import { isAdminEmail,teamForEmail } from "../lib/identity";
export const dynamic="force-dynamic";
export default async function ArenaPage(){
 const user=await requireChatGPTUser("/arena"),team=await teamForEmail(user.email);
 return <main className="app-shell"><AppHeader teamSlug={team} email={user.email} isAdmin={isAdminEmail(user.email)}/><section className="page-heading"><p className="eyebrow">Sfide e modalità giocatore singolo</p><h1>BDC Arena</h1><p>Allenati da solo oppure trova chi è online, lancia una sfida e scala la classifica generale.</p></section>{team?<><SoloArena/><ArenaClient/></>:<section className="surface empty-state"><h2>Prima associa una squadra</h2><a className="primary-link" href="/">Vai alla scelta del club</a></section>}</main>
}

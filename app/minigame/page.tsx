import{env}from"cloudflare:workers";
import{getChatGPTUser}from"../chatgpt-auth";
import{AppHeader}from"../components/AppHeader";
import{MiniGame}from"../components/MiniGame";
import{teamForEmail}from"../lib/identity";
export const dynamic="force-dynamic";
async function hasPrestanome(team:string){try{const row=await env.DB.prepare("SELECT medical_center FROM club_choices WHERE team_slug=? AND season='2027-2028'").bind(team).first<{medical_center:number}>();return row?.medical_center===1}catch{return false}}
export default async function Page(){const user=await getChatGPTUser(),slug=teamForEmail(user?.email),enabled=slug?await hasPrestanome(slug):false;return <main className="app-shell"><AppHeader teamSlug={slug} email={user?.email??null}/>{!slug?<section className="empty-state"><h1>Squadra non associata</h1><p>Serve un club collegato alla tua email per giocare.</p></section>:enabled?<MiniGame/>:<section className="empty-state betting-locked"><p className="eyebrow">Centro scommesse bloccato</p><h1>Serve il Prestanome.</h1><p>Il tuo club non ha attivato la scelta societaria Prestanome. Senza questa struttura non puoi compilare né salvare schedine.</p><a className="primary-link" href="/">Vai alle scelte societarie</a></section>}</main>}

import { getChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { teams } from "../data/league";
import { teamForEmail } from "../lib/identity";
export const dynamic="force-dynamic";
export default async function TeamsPage(){const user=await getChatGPTUser(),own=teamForEmail(user?.email);return <main className="app-shell"><AppHeader teamSlug={own} email={user?.email??null}/><section className="page-heading"><p className="eyebrow">Baia Domitia Championship</p><h1>Tutti i club</h1><p>Consulta rose, bilanci e decisioni pubblicate dalle altre società.</p></section><section className="club-directory">{teams.map((team,index)=><a className={`directory-card ${team.slug===own?"mine":""}`} key={team.slug} href={`/club/${team.slug}`}><div><span>{String(index+1).padStart(2,"0")}</span>{team.slug===own&&<em>La mia squadra</em>}</div><h2>{team.name}</h2><p>{team.players} giocatori · {team.under21} Under 21</p><dl><div><dt>Spesi</dt><dd>{team.spent}</dd></div><div><dt>Residui</dt><dd>{team.remaining}</dd></div></dl></a>)}</section></main>}

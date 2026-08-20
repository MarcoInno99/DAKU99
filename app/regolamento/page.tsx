import { getChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { teamForEmail } from "../lib/identity";
export const dynamic="force-dynamic";
const rules=[
  ["Budget","Ogni società riceve 500 crediti annuali e può riportarne al massimo 75 dalla stagione precedente."],
  ["Stipendi","Si pagano nella stagione corrente in due rate: 3% del valore della rosa a settembre e 3% a febbraio. Ogni rata resta fissata al momento dell’addebito e non viene ricalcolata retroattivamente."],
  ["Bonus societari","Ogni club può attivare al massimo due bonus per stagione, pagandoli prima dell’asta."],
  ["Direttore Sportivo","Costo 25 crediti: permette una seconda riconferma Under 21."],
  ["Stadio","Costo 30 crediti: assegna +0,5 nelle gare casalinghe, escluse le finali in campo neutro."],
  ["Riconferme","Una Under 21 e una Over di base; massimo due riconferme consecutive dello stesso calciatore."],
  ["Trasparenza","Le decisioni salvate da ogni società sono consultabili dagli altri partecipanti."],
  ["Fonte ufficiale","Formazioni, voti e risultati restano di competenza dell’app Leghe Fantacalcio."],
];
export default async function RulesPage(){const user=await getChatGPTUser(),slug=teamForEmail(user?.email);return <main className="app-shell"><AppHeader teamSlug={slug} email={user?.email??null}/><section className="page-heading"><p className="eyebrow">Bozza manageriale</p><h1>Regole in costruzione</h1><p>Questa sezione raccoglie le impostazioni già definite. Prima della stagione saranno trasformate nel regolamento definitivo.</p></section><section className="rules-list">{rules.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</section></main>}

import { getChatGPTUser } from "../chatgpt-auth";
import { AppHeader } from "../components/AppHeader";
import { teamForEmail } from "../lib/identity";

export const dynamic = "force-dynamic";

const rules = [
  ["Accesso alla lega", "Il portale è raggiungibile tramite link, ma è protetto dalla parola d’ordine della lega. Dopo l’ingresso l’identità viene riconosciuta tramite l’account ChatGPT utilizzato."],
  ["Associazione alla squadra", "Al primo accesso ogni partecipante sceglie il proprio club. L’associazione viene salvata e non può essere cambiata autonomamente. Ogni squadra può avere al massimo due allenatori associati."],
  ["Budget e saldo", "I 500 crediti sono il boost annuale, non un saldo garantito. Acquisti, stipendi, scelte societarie, premi e altri movimenti modificano i crediti attuali del club. Le scelte societarie vengono pagate subito dal saldo della stagione in corso, nel momento in cui vengono confermate."],
  ["Stipendi", "Gli stipendi riguardano la stagione in corso e vengono addebitati dall’amministratore in due tranche separate. Ogni tranche può essere scalata una sola volta e viene sottratta direttamente dai crediti residui."],
  ["Riporto e debiti", "A fine stagione il club può aggiungere al boost annuale al massimo 75 crediti di saldo positivo. Se chiude in negativo, i crediti mancanti per tornare a zero vengono invece sottratti dai 500 crediti della nuova stagione: per esempio, un saldo di −20 produce un budget iniziale di 480 e nessun riporto."],
  ["Debito insoluto e penalizzazioni", "Se il boost annuale non basta a saldare completamente il debito, la parte rimasta insoluta genera una penalizzazione in classifica: da 1 a 10 crediti mancanti −1 punto; da 11 a 25 −3 punti; da 26 a 50 −6 punti; oltre 50 −10 punti e mercato bloccato fino al rientro. Conta esclusivamente il debito ancora presente dopo l’applicazione del boost."],
  ["Sponsor obbligatorio", "All’inizio di ogni stagione ogni club deve scegliere un solo sponsor. Lo sponsor concede un privilegio manageriale specifico e, dopo la conferma, resta bloccato per tutta la stagione. Solo l’amministratore può resettarlo e permettere una nuova scelta."],
  ["Scelte societarie", "Ogni club può attivare da zero a un massimo di due scelte societarie per stagione. Alcuni privilegi possono consentire una terza scelta o modificare costi e limiti. Dopo la conferma le decisioni diventano definitive e può riaprirle soltanto l’amministratore."],
  ["Riconferme", "Di base ogni società può riconfermare una Under 21 e una Over. Lo stesso calciatore può essere trattenuto per non più di due stagioni consecutive: alla terza deve essere lasciato libero. Eventuali privilegi possono modificare questi limiti."],
  ["Centro Scommesse", "Il Centro Scommesse è utilizzabile soltanto dai club che hanno attivato il requisito societario previsto. I pronostici si riferiscono alla giornata corrente, si bloccano alla scadenza e assegnano crediti solo quando vengono soddisfatte tutte le condizioni della modalità scelta."],
  ["Trasparenza tra i club", "Rose, sponsor e scelte societarie pubblicate sono visibili a tutti i partecipanti. Ogni allenatore può simulare e modificare soltanto le decisioni della propria squadra."],
  ["Ruolo dell’amministratore", "L’amministratore controlla i blocchi stagionali, può riaprire le scelte, resettare uno sponsor, addebitare le tranche degli stipendi, correggere i crediti dei club e sostituire tutte le rose tramite il file Excel ufficiale. Le operazioni definitive non possono essere eseguite dagli altri allenatori."],
  ["Fonte ufficiale", "Formazioni ufficiali, voti, risultati e calcolo delle giornate restano gestiti nell’app Leghe Fantacalcio. Questo portale gestisce esclusivamente la parte manageriale aggiuntiva della Baia Domitia Championship."],
] as const;

export default async function RulesPage() {
  const user = await getChatGPTUser();
  const slug = await teamForEmail(user?.email);
  return <main className="app-shell">
    <AppHeader teamSlug={slug} email={user?.email ?? null}/>
    <section className="page-heading"><p className="eyebrow">Regolamento manageriale</p><h1>Come funziona la lega</h1><p>Il riepilogo operativo della Baia Domitia Championship: cosa deve fare ogni club, cosa viene bloccato e quali operazioni spettano all’amministratore.</p></section>
    <section className="rules-list">{rules.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</section>
  </main>;
}

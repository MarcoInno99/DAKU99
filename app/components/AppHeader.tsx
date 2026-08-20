import { GlobalArenaStatus } from "./GlobalArenaStatus";

export function AppHeader({ teamSlug, email, isAdmin = false }: { teamSlug: string | null; email: string | null; isAdmin?: boolean }) {
  return <header className="app-header">
    <a href="/" className="brand-link"><img className="league-logo" src="/bdc-league-crest.png" alt="Stemma Baia Domitia Championship"/><span><strong>Baia Domitia Championship</strong><small>Manager League · Mantra</small></span></a>
    <nav aria-label="Navigazione principale">
      {teamSlug&&<details className="nav-dropdown"><summary>La mia squadra</summary><div><a href="/">Società e sponsor</a><a href="/formazione">Formazione</a></div></details>}
      <a href="/minigame">Centro Scommesse</a>{teamSlug&&<a href="/arena">BDC Arena</a>}<a href="/squadre">Club</a><a href="/regolamento">Regole</a>{isAdmin&&<a href="/admin">Amministrazione</a>}
    </nav>
    <div className="account-chip"><span>{email??"Anteprima locale"}</span><i/></div>
    {teamSlug&&<GlobalArenaStatus teamSlug={teamSlug}/>}
  </header>;
}

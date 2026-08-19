export function AppHeader({ teamSlug, email, isAdmin = false }: { teamSlug: string | null; email: string | null; isAdmin?: boolean }) {
  return <header className="app-header">
    <a href="/" className="brand-link"><span className="brand-mark">BDC</span><span><strong>Baia Domitia Championship</strong><small>Manager League · Mantra</small></span></a>
    <nav aria-label="Navigazione principale"><a href="/">La mia società</a>{teamSlug && <a href="/formazione">Formazione</a>}<a href="/squadre">Club</a><a href="/regolamento">Regole</a>{isAdmin && <a href="/admin">Amministrazione</a>}</nav>
    <div className="account-chip"><span>{email ?? "Anteprima locale"}</span><i /></div>
  </header>;
}

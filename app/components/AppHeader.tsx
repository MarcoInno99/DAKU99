import Link from "next/link";

export function AppHeader({ teamSlug, email }: { teamSlug: string | null; email: string | null }) {
  return <header className="app-header">
    <Link href="/" className="brand-link"><span className="brand-mark">BDC</span><span><strong>Baia Domitia Championship</strong><small>Manager League · Mantra</small></span></Link>
    <nav aria-label="Navigazione principale"><Link href="/">La mia società</Link>{teamSlug && <Link href="/formazione">Formazione</Link>}<Link href="/squadre">Club</Link><Link href="/regolamento">Regole</Link></nav>
    <div className="account-chip"><span>{email ?? "Anteprima locale"}</span><i /></div>
  </header>;
}

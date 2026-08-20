"use client";

import { useState } from "react";

export function LeagueAccessGate() {
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function enter(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true); setMessage("");
    const response = await fetch("/api/access", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ password }) });
    const data = await response.json().catch(() => ({}));
    if (response.ok) window.location.reload();
    else { setBusy(false); setMessage(data.error ?? "Accesso non riuscito"); }
  }
  return <main className="league-gate"><section className="league-gate-card">
    <img src="/bdc-league-crest.png" alt="Baia Domitia Championship"/>
    <p className="eyebrow">Area riservata · 5ª edizione</p>
    <h1>Entra nella lega</h1>
    <p>Inserisci la parola d’ordine condivisa dagli allenatori della Baia Domitia Championship.</p>
    <form onSubmit={enter}><label htmlFor="league-password">Parola d’ordine</label><input id="league-password" type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} placeholder="••••••••••••"/><button disabled={!password || busy}>{busy ? "Accesso…" : "Entra nel campionato"}</button></form>
    {message && <small className="gate-error">{message}</small>}
  </section></main>;
}

"use client";
import { useState } from "react";
import type { Team } from "../data/league";

export function TeamOnboarding({ teams, email }: { teams: Team[]; email: string }) {
  const [teamSlug, setTeamSlug] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function confirm() {
    if (!teamSlug) return;
    setBusy(true); setMessage("");
    const response = await fetch("/api/membership", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ teamSlug }) });
    const data = await response.json().catch(() => ({}));
    if (response.ok) window.location.href = "/";
    else { setBusy(false); setMessage(data.error ?? "Associazione non riuscita"); }
  }
  return <section className="onboarding-shell"><div className="onboarding-card"><img src="/bdc-league-crest.png" alt="Baia Domitia Championship"/><p className="eyebrow">Primo accesso</p><h1>Qual è la tua squadra?</h1><p>Stai entrando con <b>{email}</b>. La scelta verrà salvata e ai prossimi accessi arriverai direttamente nella tua società.</p><label>Seleziona il club<select value={teamSlug} onChange={event => setTeamSlug(event.target.value)}><option value="">Scegli la squadra…</option>{teams.map(team => <option value={team.slug} key={team.slug}>{team.name}</option>)}</select></label><div className="onboarding-warning"><b>Occhio alla scelta</b><span>Dopo la conferma soltanto l’amministratore potrà modificarla. Ogni club può avere al massimo due allenatori.</span></div><button disabled={!teamSlug || busy} onClick={confirm}>{busy ? "Associazione in corso…" : "Conferma la mia squadra"}</button>{message && <small className="form-message">{message}</small>}</div></section>;
}

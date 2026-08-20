"use client";
import { useEffect, useState } from "react";
import { getSponsor, sponsors } from "../data/sponsors";

export function SponsorSelector({ teamSlug }: { teamSlug: string }) {
  const [selected, setSelected] = useState("");
  const [locked, setLocked] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => { fetch(`/api/sponsors?team=${teamSlug}`).then(r => r.json()).then(data => { if (data.sponsor) { setSelected(data.sponsor.sponsor_slug); setLocked(data.sponsor.locked_at); } }); }, [teamSlug]);
  async function save() { setBusy(true); const response = await fetch("/api/sponsors", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ sponsorSlug: selected }) }); const data = await response.json().catch(() => ({})); setBusy(false); if (response.ok) { setLocked(data.sponsor.locked_at); setMessage("Sponsor confermato e bloccato per la stagione."); } else setMessage(data.error ?? "Salvataggio non riuscito"); }
  const current = getSponsor(selected);
  return <section className="surface sponsor-surface"><div className="surface-title"><div><p className="eyebrow">Accordo commerciale 2027/28</p><h2>Sponsor principale</h2></div><span className="status-dot">{locked ? "Bloccato" : "Da scegliere"}</span></div>{locked && current ? <div className="sponsor-active"><img src={current.logo} alt={`Logo ${current.name}`}/><div><span>{current.name}</span><h3>{current.title}</h3><p>{current.benefit}</p></div></div> : <><div className="sponsor-grid">{sponsors.map(sponsor => <button className={selected === sponsor.slug ? "selected" : ""} key={sponsor.slug} onClick={() => setSelected(sponsor.slug)}><img src={sponsor.logo} alt={`Logo ${sponsor.name}`}/><div><b>{sponsor.name}</b><span>{sponsor.title}</span><small>{sponsor.benefit}</small></div></button>)}</div><button className="save-button" disabled={!selected || busy} onClick={save}>{busy ? "Salvataggio…" : "Conferma sponsor e blocca"}</button></>}{message && <p className="form-message">{message}</p>}<small className="sponsor-note">È possibile scegliere un solo sponsor per stagione. Dopo la conferma può intervenire soltanto l’amministratore.</small></section>;
}

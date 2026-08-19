"use client";
import { useEffect, useState } from "react";

export function ClubChoiceViewer({ teamSlug }: { teamSlug: string }) {
  const [choice, setChoice] = useState<Record<string, unknown> | null | undefined>(undefined);
  useEffect(()=>{fetch(`/api/choices?team=${teamSlug}`).then(r=>r.json()).then(data=>setChoice(data.choice)).catch(()=>setChoice(null));},[teamSlug]);
  if(choice===undefined)return <p className="muted">Caricamento scelte…</p>;
  if(!choice)return <div className="choice-empty">Questo club non ha ancora pubblicato le scelte per il 2027/28.</div>;
  return <div className="public-choices"><div><span>Direttore Sportivo</span><strong>{choice.sporting_director ? "Attivo" : "Non attivo"}</strong></div><div><span>Stadio</span><strong>{choice.stadium ? "Attivo" : "Non attivo"}</strong></div><div><span>Modulo salvato</span><strong>{String(choice.formation ?? "Non comunicato")}</strong></div></div>;
}

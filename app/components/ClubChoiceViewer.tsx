"use client";
import { useEffect, useState } from "react";

export function ClubChoiceViewer({ teamSlug }: { teamSlug: string }) {
  const [choice, setChoice] = useState<Record<string, unknown> | null | undefined>(undefined);
  useEffect(()=>{fetch(`/api/choices?team=${teamSlug}`).then(r=>r.json()).then(data=>setChoice(data.choice)).catch(()=>setChoice(null));},[teamSlug]);
  if(choice===undefined)return <p className="muted">Caricamento scelte…</p>;
  if(!choice)return <div className="choice-empty">Questo club non ha ancora pubblicato le scelte per il 2027/28.</div>;
  const rows=[["Direttore Sportivo",choice.sporting_director],["Stadio",choice.stadium],["Prestanome",choice.medical_center],["Settore giovanile",choice.youth_academy],["Centro allenamento",choice.training_center]];
  return <div className="public-choices">{rows.map(([label,active])=><div key={String(label)}><span>{String(label)}</span><strong>{active?"Scelto":"—"}</strong></div>)}<div><span>Stato</span><strong>{choice.locked_at?"Definitive":"Modificabili"}</strong></div><div><span>Modulo salvato</span><strong>{String(choice.formation ?? "Non comunicato")}</strong></div></div>;
}

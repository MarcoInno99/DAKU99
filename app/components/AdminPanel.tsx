"use client";
import { useEffect, useState } from "react";
import type { Team } from "../data/league";

export function AdminPanel({teams}:{teams:Team[]}){
  const [choices,setChoices]=useState<Record<string,Record<string,unknown>>>({}),[message,setMessage]=useState("");
  function refresh(){fetch("/api/choices").then(r=>r.json()).then(data=>setChoices(Object.fromEntries((data.choices??[]).map((choice:Record<string,unknown>)=>[choice.team_slug,choice]))));}
  useEffect(refresh,[]);
  async function unlock(teamSlug:string){const response=await fetch("/api/admin/unlock",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({teamSlug})});setMessage(response.ok?"Modifiche riaperte per il club.":"Sblocco non riuscito.");if(response.ok)refresh();}
  return <><section className="page-heading"><p className="eyebrow">Area amministratore</p><h1>Controllo scelte</h1><p>Puoi riaprire eccezionalmente le scelte di un club. Le opzioni già selezionate non vengono cancellate.</p></section>{message&&<p className="admin-message">{message}</p>}<section className="admin-grid">{teams.map(team=>{const choice=choices[team.slug],locked=Boolean(choice?.locked_at);return <article className="surface" key={team.slug}><div><h2>{team.name}</h2><span className={`admin-state ${locked?"locked":"open"}`}>{locked?"Bloccate":"Modificabili"}</span></div><button className="secondary-button" disabled={!locked} onClick={()=>unlock(team.slug)}>{locked?"Riapri modifiche":"Nessun blocco"}</button></article>})}</section></>;
}

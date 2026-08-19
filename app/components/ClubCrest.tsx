"use client";

import { useEffect, useState } from "react";

export function ClubCrest({teamSlug,teamName,size="normal",showCoach=false}:{teamSlug:string;teamName:string;size?:"normal"|"large";showCoach?:boolean}){
  const [failed,setFailed]=useState(false),[coach,setCoach]=useState("");
  const initials=teamName.split(" ").map(x=>x[0]).join("").slice(0,3);
  useEffect(()=>{setFailed(false);if(showCoach)fetch(`/api/identity?team=${teamSlug}`,{cache:"no-store"}).then(r=>r.json()).then(data=>setCoach(data.identity?.coach_name??"")).catch(()=>setCoach(""));},[teamSlug,showCoach]);
  return <div className="club-identity-mark"><div className={`club-crest ${size}`}>{failed?<span>{initials}</span>:<img src={`/api/identity/crest?team=${teamSlug}`} alt={`Stemma ${teamName}`} onError={()=>setFailed(true)}/>}</div>{showCoach&&<p className="club-coach">{coach?<>Allenatore <b>{coach}</b></>:<span>Allenatore non inserito</span>}</p>}</div>
}

"use client";
import { useEffect,useState } from "react";
type Member={teamSlug:string;teamName:string;coachName:string|null;online:boolean};
type Invite={id:string;challenger_team:string;challenger_name?:string;mode:string};
export function GlobalArenaStatus({teamSlug}:{teamSlug:string}){
 const[members,setMembers]=useState<Member[]>([]),[invites,setInvites]=useState<Invite[]>([]),[open,setOpen]=useState(false);
 async function heartbeat(){await fetch("/api/arena",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"heartbeat"})}).catch(()=>{})}
 async function refresh(){const data=await fetch("/api/arena?compact=1").then(r=>r.json()).catch(()=>null);if(data){setMembers(data.members??[]);setInvites(data.pending??[])}}
 useEffect(()=>{heartbeat().then(refresh);const pulse=setInterval(heartbeat,15000),poll=setInterval(refresh,3000);return()=>{clearInterval(pulse);clearInterval(poll)}},[]);
 const online=members.filter(member=>member.online).length;
 return <><details className="global-presence" open={open} onToggle={event=>setOpen((event.currentTarget as HTMLDetailsElement).open)}><summary><i/>{online}/{members.length||12} allenatori online</summary><div><p className="eyebrow">Presenze nella lega</p>{members.map(member=><a href={`/club/${member.teamSlug}`} key={member.teamSlug} className={member.online?"online":"offline"}><i/><span><b>{member.coachName??member.teamName}</b><small>{member.teamSlug===teamSlug?"La tua squadra":member.teamName}</small></span><em>{member.online?"Online":"Offline"}</em></a>)}</div></details>{invites.length>0&&<a className="global-arena-invite" href="/arena"><span>{invites.length}</span><div><b>Sfida Arena ricevuta!</b><small>{invites[0].challenger_name??invites[0].challenger_team} ti aspetta · apri per accettare</small></div></a>}</>;
}

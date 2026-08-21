"use client";
import{useEffect,useState}from"react";
export function ClubBalance({teamSlug,base}:{teamSlug:string;base:number}){const[value,setValue]=useState(base);useEffect(()=>{fetch(`/api/club-finances?team=${teamSlug}&v=${Date.now()}`,{cache:"no-store"}).then(r=>r.json()).then(data=>setValue(data.balances?.[0]?.balance??base)).catch(()=>{})},[teamSlug,base]);return <span className={value<0?"credit-negative":""}>{value}{value<0&&<small>mancano {Math.abs(value)} cr</small>}</span>}

"use client";
import{useEffect,useState}from"react";
export function ClubBalance({teamSlug,base}:{teamSlug:string;base:number}){const[value,setValue]=useState(base);useEffect(()=>{fetch(`/api/salaries?team=${teamSlug}&v=${Date.now()}`,{cache:"no-store"}).then(r=>r.json()).then(data=>setValue(base-(data.payments??[]).reduce((sum:number,p:{amount:number})=>sum+p.amount,0))).catch(()=>{})},[teamSlug,base]);return <span className={value<0?"credit-negative":""}>{value}{value<0&&<small>mancano {Math.abs(value)} cr</small>}</span>}

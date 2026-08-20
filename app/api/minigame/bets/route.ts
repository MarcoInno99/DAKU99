import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../../chatgpt-auth";
import { teamForEmail } from "../../../lib/identity";

async function schema(){
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS minigame_bets (id INTEGER PRIMARY KEY AUTOINCREMENT,team_slug TEXT NOT NULL,user_email TEXT NOT NULL,season TEXT NOT NULL,round INTEGER NOT NULL,mode TEXT NOT NULL,picks_json TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',base_reward INTEGER NOT NULL DEFAULT 0,awarded_credits INTEGER NOT NULL DEFAULT 0,streak INTEGER NOT NULL DEFAULT 0,locked_at TEXT NOT NULL,settled_at TEXT)`).run();
  await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_minigame_team_round ON minigame_bets(team_slug,season,round)").run();
}

async function hasPrestanome(team:string){
  try { const row=await env.DB.prepare("SELECT medical_center FROM club_choices WHERE team_slug=? AND season='2027-2028'").bind(team).first<{medical_center:number}>(); return row?.medical_center===1; }
  catch { return false; }
}

export async function GET(request:Request){
  await schema();
  const user=await getChatGPTUser(),team=await teamForEmail(user?.email);
  if(!team||!await hasPrestanome(team))return Response.json({error:"Il Centro scommesse richiede Prestanome"},{status:403});
  const round=Number(new URL(request.url).searchParams.get("round"));
  const bet=round?await env.DB.prepare("SELECT mode,picks_json,status,base_reward,awarded_credits,streak,locked_at FROM minigame_bets WHERE team_slug=? AND season='2026/27' AND round=?").bind(team,round).first():null;
  const board=await env.DB.prepare("SELECT team_slug,SUM(awarded_credits) credits,MAX(streak) streak FROM minigame_bets GROUP BY team_slug ORDER BY credits DESC,team_slug").all();
  return Response.json({bet,leaderboard:board.results});
}

export async function POST(request:Request){
  const user=await getChatGPTUser();
  if(!user)return Response.json({error:"Accesso richiesto"},{status:401});
  const team=await teamForEmail(user.email);
  if(!team)return Response.json({error:"Nessuna squadra associata"},{status:403});
  if(!await hasPrestanome(team))return Response.json({error:"Devi attivare Prestanome per usare il Centro scommesse"},{status:403});
  const body=await request.json() as {round:number;mode:string;picks:any[]};
  const required=body.mode==="easy"?5:body.mode==="medium"?3:0,reward=body.mode==="easy"?3:body.mode==="medium"?5:0;
  if(!required||!Number.isInteger(body.round)||body.picks?.length!==required||new Set(body.picks.map(p=>p.gameId)).size!==required)return Response.json({error:`Devi compilare esattamente ${required||"il numero corretto di"} partite diverse`},{status:400});
  if(body.mode==="easy"&&body.picks.some(p=>!["1","X","2"].includes(p.value)))return Response.json({error:"Pronostico 1X2 non valido"},{status:400});
  if(body.mode==="medium"&&body.picks.some(p=>!(/^(\d+)-(\d+)$/.test(p.value))))return Response.json({error:"Inserisci i risultati come 2-1"},{status:400});
  const feed=await fetch("https://api-sdp.legaseriea.it/v1/serie-a/football/seasons/serie-a%3A%3AFootball_Season%3A%3Aed7fdc2a3e7b408b942ec177b7b956b5/matches?locale=it-IT",{headers:{"user-agent":"Mozilla/5.0 Baia Domitia Championship"}});
  if(!feed.ok)return Response.json({error:"Non posso verificare gli orari ufficiali: riprova tra poco"},{status:503});
  const official=await feed.json() as {matches:any[]},chosen=new Set(body.picks.map(p=>p.gameId)),valid=(official.matches??[]).filter(m=>chosen.has(m.matchId)&&Number(String(m.matchSet?.name??"").match(/\d+/)?.[0])===body.round);
  if(valid.length!==required||valid.some(m=>Date.parse(m.matchDateUtc)<=Date.now()))return Response.json({error:"Una delle partite è già iniziata o non appartiene alla giornata attuale"},{status:409});
  await schema();
  try { await env.DB.prepare("INSERT INTO minigame_bets(team_slug,user_email,season,round,mode,picks_json,base_reward,locked_at) VALUES(?,?,'2026/27',?,?,?,?,?)").bind(team,user.email,body.round,body.mode,JSON.stringify(body.picks),reward,new Date().toISOString()).run(); return Response.json({ok:true}); }
  catch { return Response.json({error:"Hai già confermato la schedina di questa giornata"},{status:409}); }
}

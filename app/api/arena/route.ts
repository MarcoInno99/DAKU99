import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";
import { getTeam, teams } from "../../data/league";
import { teamForEmail } from "../../lib/identity";

type ArenaQuestion={prompt:string;clues?:string[];options:string[];answer:number};
type ArenaMatch={id:string;challenger_team:string;opponent_team:string;mode:string;status:string;questions_json:string;current_round:number;challenger_score:number;opponent_score:number;winner_team:string|null;created_at:string;started_at:string|null;finished_at:string|null};

async function ensureSchema(){
  await env.DB.batch([
    env.DB.prepare("CREATE TABLE IF NOT EXISTS arena_presence (team_slug TEXT PRIMARY KEY,user_email TEXT NOT NULL,last_seen TEXT NOT NULL)"),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS arena_matches (id TEXT PRIMARY KEY,challenger_team TEXT NOT NULL,opponent_team TEXT NOT NULL,mode TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',questions_json TEXT NOT NULL,current_round INTEGER NOT NULL DEFAULT 0,challenger_score INTEGER NOT NULL DEFAULT 0,opponent_score INTEGER NOT NULL DEFAULT 0,winner_team TEXT,created_at TEXT NOT NULL,started_at TEXT,finished_at TEXT)"),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS arena_answers (id INTEGER PRIMARY KEY AUTOINCREMENT,match_id TEXT NOT NULL,round INTEGER NOT NULL,team_slug TEXT NOT NULL,answer_index INTEGER NOT NULL,correct INTEGER NOT NULL,answered_at TEXT NOT NULL)"),
    env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_arena_answer_match_round_team ON arena_answers(match_id,round,team_slug)"),
    env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_arena_matches_players_status ON arena_matches(challenger_team,opponent_team,status)"),
    env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_arena_presence_last_seen ON arena_presence(last_seen)"),
  ]);
  await env.DB.prepare("PRAGMA optimize").run();
}

async function identity(){const user=await getChatGPTUser();if(!user)return null;const team=await teamForEmail(user.email);return team?{user,team}:null}
const shuffle=<T,>(items:T[])=>[...items].sort(()=>Math.random()-.5);
const allPlayers=()=>teams.flatMap(team=>team.roster.map(player=>({...player,owner:team.slug}))).filter((player,index,list)=>list.findIndex(item=>item.name===player.name)===index);
function choices(correct:string,pool:string[]){const alternatives=[...new Set(pool)].filter(value=>value!==correct);return shuffle([correct,...shuffle(alternatives).slice(0,3)]).slice(0,4)}
function buildQuestions(mode:string):ArenaQuestion[]{
  const players=shuffle(allPlayers());
  if(mode==="guess")return players.slice(0,5).map(player=>{const options=choices(player.name,players.map(p=>p.name));return{prompt:"Chi è il calciatore?",clues:[`Club: ${player.club}`,`Ruolo Mantra: ${player.role}`,`Età: ${player.age}`,`Quotazione: ${player.quotation}`],options,answer:options.indexOf(player.name)}});
  return players.slice(0,10).map((player,index)=>{if(index%2===0){const options=choices(player.club,players.map(p=>p.club));return{prompt:`In quale club gioca ${player.name}?`,options,answer:options.indexOf(player.club)}}const options=choices(player.role,players.map(p=>p.role));return{prompt:`Qual è il ruolo Mantra di ${player.name}?`,options,answer:options.indexOf(player.role)}});
}
function publicMatch(match:ArenaMatch,team:string,answered:boolean){const questions=JSON.parse(match.questions_json)as ArenaQuestion[],question=questions[match.current_round];return{id:match.id,mode:match.mode,status:match.status,currentRound:match.current_round,totalRounds:questions.length,myTeam:team,challengerTeam:match.challenger_team,opponentTeam:match.opponent_team,myScore:team===match.challenger_team?match.challenger_score:match.opponent_score,opponentScore:team===match.challenger_team?match.opponent_score:match.challenger_score,winnerTeam:match.winner_team,answered,question:question?{prompt:question.prompt,clues:question.clues??[],options:question.options}:null}}

export async function GET(request:Request){
  const actor=await identity();if(!actor)return Response.json({error:"Accesso richiesto"},{status:401});await ensureSchema();
  const matchId=new URL(request.url).searchParams.get("match");
  if(matchId){const match=await env.DB.prepare("SELECT * FROM arena_matches WHERE id=? AND (challenger_team=? OR opponent_team=?)").bind(matchId,actor.team,actor.team).first<ArenaMatch>();if(!match)return Response.json({error:"Sfida non trovata"},{status:404});const answered=match.status==="active"?Boolean(await env.DB.prepare("SELECT id FROM arena_answers WHERE match_id=? AND round=? AND team_slug=?").bind(match.id,match.current_round,actor.team).first()):false;return Response.json({match:publicMatch(match,actor.team,answered)})}
  const cutoff=new Date(Date.now()-45000).toISOString();
  const presence=await env.DB.prepare("SELECT team_slug FROM arena_presence WHERE last_seen>=? AND team_slug<>? ORDER BY last_seen DESC").bind(cutoff,actor.team).all<{team_slug:string}>();
  const pending=await env.DB.prepare("SELECT id,challenger_team,opponent_team,mode,status,created_at FROM arena_matches WHERE opponent_team=? AND status='pending' ORDER BY created_at DESC").bind(actor.team).all();
  const active=await env.DB.prepare("SELECT id,challenger_team,opponent_team,mode,status,created_at FROM arena_matches WHERE (challenger_team=? OR opponent_team=?) AND status='active' ORDER BY started_at DESC LIMIT 1").bind(actor.team,actor.team).first();
  const finished=await env.DB.prepare("SELECT challenger_team,opponent_team,winner_team FROM arena_matches WHERE status='finished'").all<{challenger_team:string;opponent_team:string;winner_team:string|null}>();
  const table=new Map<string,{teamSlug:string;wins:number;losses:number;draws:number;played:number}>();for(const team of teams)table.set(team.slug,{teamSlug:team.slug,wins:0,losses:0,draws:0,played:0});for(const match of finished.results){const a=table.get(match.challenger_team),b=table.get(match.opponent_team);if(!a||!b)continue;a.played++;b.played++;if(!match.winner_team){a.draws++;b.draws++}else if(match.winner_team===a.teamSlug){a.wins++;b.losses++}else{b.wins++;a.losses++}}
  const leaderboard=[...table.values()].map(row=>({...row,teamName:getTeam(row.teamSlug)?.name??row.teamSlug,points:row.wins*3+row.draws})).sort((a,b)=>b.points-a.points||b.wins-a.wins||a.losses-b.losses);
  return Response.json({myTeam:actor.team,online:presence.results.map(row=>({teamSlug:row.team_slug,teamName:getTeam(row.team_slug)?.name??row.team_slug})),pending:pending.results,active,leaderboard});
}

export async function POST(request:Request){
  const actor=await identity();if(!actor)return Response.json({error:"Accesso richiesto"},{status:401});await ensureSchema();const body=await request.json()as{action?:string;opponentTeam?:string;mode?:string;matchId?:string;round?:number;answerIndex?:number},now=new Date().toISOString();
  if(body.action==="heartbeat"){await env.DB.prepare("INSERT INTO arena_presence(team_slug,user_email,last_seen) VALUES(?,?,?) ON CONFLICT(team_slug) DO UPDATE SET user_email=excluded.user_email,last_seen=excluded.last_seen").bind(actor.team,actor.user.email,now).run();return Response.json({ok:true})}
  if(body.action==="challenge"){const opponent=body.opponentTeam?getTeam(body.opponentTeam):null;if(!opponent||opponent.slug===actor.team||!["guess","quiz"].includes(body.mode??""))return Response.json({error:"Sfida non valida"},{status:400});const cutoff=new Date(Date.now()-45000).toISOString(),online=await env.DB.prepare("SELECT team_slug FROM arena_presence WHERE team_slug=? AND last_seen>=?").bind(opponent.slug,cutoff).first();if(!online)return Response.json({error:"L’avversario non è più online"},{status:409});const id=crypto.randomUUID();await env.DB.prepare("INSERT INTO arena_matches(id,challenger_team,opponent_team,mode,status,questions_json,created_at) VALUES(?,?,?,?,'pending',?,?)").bind(id,actor.team,opponent.slug,body.mode,JSON.stringify(buildQuestions(body.mode!)),now).run();return Response.json({ok:true,matchId:id})}
  const match=body.matchId?await env.DB.prepare("SELECT * FROM arena_matches WHERE id=?").bind(body.matchId).first<ArenaMatch>():null;if(!match||![match.challenger_team,match.opponent_team].includes(actor.team))return Response.json({error:"Sfida non trovata"},{status:404});
  if(body.action==="accept"){if(match.opponent_team!==actor.team||match.status!=="pending")return Response.json({error:"Sfida non accettabile"},{status:409});await env.DB.prepare("UPDATE arena_matches SET status='active',started_at=? WHERE id=? AND status='pending'").bind(now,match.id).run();return Response.json({ok:true,matchId:match.id})}
  if(body.action==="answer"){if(match.status!=="active"||body.round!==match.current_round)return Response.json({error:"Questo turno è già terminato"},{status:409});const questions=JSON.parse(match.questions_json)as ArenaQuestion[],question=questions[match.current_round],answer=Number(body.answerIndex);if(!question||!Number.isInteger(answer)||answer<0||answer>=question.options.length)return Response.json({error:"Risposta non valida"},{status:400});const correct=answer===question.answer;try{await env.DB.prepare("INSERT INTO arena_answers(match_id,round,team_slug,answer_index,correct,answered_at) VALUES(?,?,?,?,?,?)").bind(match.id,match.current_round,actor.team,answer,correct?1:0,now).run()}catch{return Response.json({error:"Hai già risposto a questo turno"},{status:409})}
    const responseCount=Number((await env.DB.prepare("SELECT COUNT(*) total FROM arena_answers WHERE match_id=? AND round=?").bind(match.id,match.current_round).first<{total:number}>())?.total??0);if(!correct&&responseCount<2)return Response.json({ok:true,correct:false,waiting:true});
    let challenger=match.challenger_score,opponent=match.opponent_score;if(correct){if(actor.team===match.challenger_team)challenger++;else opponent++}const final=match.current_round>=questions.length-1,nextRound=match.current_round+1,winner=final?(challenger===opponent?null:challenger>opponent?match.challenger_team:match.opponent_team):null;
    await env.DB.prepare("UPDATE arena_matches SET challenger_score=?,opponent_score=?,current_round=?,status=?,winner_team=?,finished_at=? WHERE id=? AND current_round=?").bind(challenger,opponent,nextRound,final?"finished":"active",winner,final?now:null,match.id,match.current_round).run();return Response.json({ok:true,correct,finished:final});
  }
  return Response.json({error:"Operazione non valida"},{status:400});
}

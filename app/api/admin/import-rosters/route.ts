import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../../chatgpt-auth";
import { teams } from "../../../data/league";
import { isAdminEmail } from "../../../lib/identity";
import { ensureLeagueStateSchema, slugForImportedTeam } from "../../../lib/league-state";

type Row={teamName:string;name:string;club:string;role:string;age:number;cost:number;quotation:number;fvm:number;fuoriLista?:string|null;rowOrder:number};
export async function POST(request:Request){
  const user=await getChatGPTUser();if(!isAdminEmail(user?.email))return Response.json({error:"Operazione riservata agli amministratori"},{status:403});
  const body=await request.json() as {rows?:Row[];fileName?:string};const rows=Array.isArray(body.rows)?body.rows:[];
  if(!rows.length||rows.length>1000)return Response.json({error:"Il file non contiene una rosa valida"},{status:400});
  const parsed=rows.map(row=>({...row,teamSlug:slugForImportedTeam(String(row.teamName??""))}));
  const unknown=[...new Set(parsed.filter(row=>!row.teamSlug).map(row=>row.teamName))];if(unknown.length)return Response.json({error:`Squadre non riconosciute: ${unknown.join(", ")}`},{status:400});
  const present=new Set(parsed.map(row=>row.teamSlug));const missing=teams.filter(team=>!present.has(team.slug)).map(team=>team.name);if(missing.length)return Response.json({error:`Importazione annullata: mancano le rose di ${missing.join(", ")}`},{status:400});
  if(parsed.some(row=>!row.name||!row.club||!row.role||!Number.isFinite(Number(row.cost))))return Response.json({error:"Una o più righe hanno dati obbligatori mancanti"},{status:400});
  await ensureLeagueStateSchema();const now=new Date().toISOString(),batch=crypto.randomUUID();
  const statements=[env.DB.prepare("DELETE FROM imported_roster_players"),...parsed.map(row=>env.DB.prepare("INSERT INTO imported_roster_players(team_slug,player_name,club,role,age,cost,quotation,fvm,fuori_lista,row_order,import_batch,imported_at,imported_by) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)").bind(row.teamSlug,row.name,row.club,row.role,Number(row.age)||0,Number(row.cost)||0,Number(row.quotation)||0,Number(row.fvm)||0,row.fuoriLista??null,Number(row.rowOrder)||0,batch,now,user!.email))];
  await env.DB.batch(statements);return Response.json({ok:true,players:parsed.length,teams:present.size,importedAt:now,fileName:body.fileName??null});
}

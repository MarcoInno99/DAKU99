"use client";
import { useEffect, useState } from "react";
import type { Team } from "../data/league";

async function optimizeImage(file: File) {
  if (!file.type.startsWith("image/")) throw new Error("Seleziona un file immagine valido.");
  if (file.size > 20_000_000) throw new Error("Il file originale non può superare 20 MB.");
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/webp", .9));
  if (!blob) throw new Error("Non sono riuscito a preparare questa immagine.");
  return new File([blob], `${file.name.replace(/\.[^.]+$/, "")}.webp`, { type: "image/webp" });
}

export function CrestUploader({ team }: { team: Team }) {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [exists, setExists] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [coachName, setCoachName] = useState("");

  useEffect(() => { fetch(`/api/identity?team=${team.slug}`).then(r => r.json()).then(data => { if (data.identity?.crest_key) { setExists(true); setUrl(`/api/identity/crest?team=${team.slug}&v=${Date.now()}`); } setCoachName(data.identity?.coach_name ?? ""); }); }, [team.slug]);

  async function choose(input: File | null) {
    setMessage("");
    if (!input) { setFile(null); return; }
    setBusy(true);
    try { const prepared = await optimizeImage(input); setFile(prepared); setUrl(URL.createObjectURL(prepared)); setMessage(`Immagine pronta: ${(prepared.size / 1024).toFixed(0)} KB.`); }
    catch (error) { setFile(null); setMessage(error instanceof Error ? error.message : "Immagine non valida."); }
    finally { setBusy(false); }
  }

  async function save() {
    if (!file) { setMessage("Seleziona prima un’immagine."); return; }
    setBusy(true); setMessage("Caricamento dello stemma…");
    try {
      const form = new FormData(); form.set("teamSlug", team.slug); form.set("crest", file);
      const response = await fetch("/api/identity", { method: "POST", body: form });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.crestUrl) throw new Error(data.error ?? `Caricamento non riuscito (${response.status}).`);
      setExists(true); setFile(null); setUrl(`${data.crestUrl}&v=${Date.now()}`); setMessage("Stemma salvato e pubblicato accanto al club.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Caricamento non riuscito."); }
    finally { setBusy(false); }
  }

  async function saveCoach() { setBusy(true); const response = await fetch("/api/identity/coach", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ coachName }) }); const data = await response.json().catch(() => ({})); setBusy(false); setMessage(response.ok ? "Nome dell’allenatore salvato." : data.error ?? "Salvataggio non riuscito."); }

  return <section className="crest-page"><div className="crest-copy"><p className="eyebrow">Identità della squadra</p><h1>Stemma e allenatore</h1><p>Personalizza l’identità pubblica del club. L’immagine viene ottimizzata automaticamente prima del caricamento.</p><div className="coach-field"><label>Nome dell’allenatore<input value={coachName} maxLength={60} placeholder="Es. Marco Izzo" onChange={event => setCoachName(event.target.value)}/></label><button className="secondary-button" disabled={busy || coachName.trim().length < 2} onClick={saveCoach}>Salva allenatore</button></div><div className="crest-rules"><span>PNG, JPG o WEBP</span><span>File originale fino a 20 MB</span><span>Formato consigliato 1:1</span></div></div><div className="crest-card"><div className="crest-preview">{url ? <img src={url} alt={`Stemma ${team.name}`}/> : <div>{team.name.split(" ").map(x => x[0]).join("").slice(0,3)}</div>}</div><h2>{team.name}</h2><p>{coachName ? `Allenatore: ${coachName}` : exists ? "Stemma attualmente pubblicato" : "Nessuno stemma caricato"}</p><label className="crest-file"><input type="file" accept="image/png,image/jpeg,image/webp" disabled={busy} onChange={event => choose(event.target.files?.[0] ?? null)}/><span>{busy ? "Preparazione…" : file ? file.name : "Scegli immagine"}</span></label><button onClick={save} disabled={busy || !file}>{busy ? "Attendi…" : "Salva stemma squadra"}</button>{message && <small>{message}</small>}</div></section>;
}

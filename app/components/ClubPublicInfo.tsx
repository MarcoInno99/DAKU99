"use client";

import { useEffect, useState } from "react";
import { getSponsor } from "../data/sponsors";

type Choice = Record<string, unknown> & { team_slug: string };
type Sponsor = { team_slug: string; sponsor_slug: string };
type PublicData = { choices: Record<string, Choice>; sponsors: Record<string, Sponsor> };

let publicDataPromise: Promise<PublicData> | null = null;

function loadPublicData() {
  if (!publicDataPromise) publicDataPromise = Promise.all([
    fetch("/api/choices").then(response => response.json()),
    fetch("/api/sponsors?all=1").then(response => response.json()),
  ]).then(([choiceData, sponsorData]) => ({
    choices: Object.fromEntries((choiceData.choices ?? []).map((choice: Choice) => [choice.team_slug, choice])),
    sponsors: Object.fromEntries((sponsorData.sponsors ?? []).map((sponsor: Sponsor) => [sponsor.team_slug, sponsor])),
  }));
  return publicDataPromise;
}

const choiceLabels = [
  ["sporting_director", "Direttore Sportivo"],
  ["stadium", "Stadio"],
  ["medical_center", "Prestanome"],
  ["youth_academy", "Settore giovanile"],
  ["training_center", "Centro allenamento"],
] as const;

export function ClubPublicInfo({ teamSlug }: { teamSlug: string }) {
  const [data, setData] = useState<PublicData | null>(null);
  useEffect(() => { loadPublicData().then(setData).catch(() => setData({ choices: {}, sponsors: {} })); }, []);
  if (!data) return <div className="club-public-info loading">Caricamento decisioni…</div>;
  const choice = data.choices[teamSlug];
  const selected = choiceLabels.filter(([key]) => Boolean(choice?.[key])).map(([, label]) => label);
  const sponsor = getSponsor(data.sponsors[teamSlug]?.sponsor_slug);
  return <div className="club-public-info">
    <div><span>Sponsor</span><b>{sponsor?.name ?? "Non scelto"}</b></div>
    <div><span>Scelte societarie</span>{selected.length ? <ul>{selected.map(label => <li key={label}>{label}</li>)}</ul> : <b>Nessuna scelta</b>}</div>
  </div>;
}

"use client";

import { useMemo, useState } from "react";

const teams = [
  { name: "ASD Real Grazzanise", players: 30, spent: 498, remaining: 2, under21: 2, star: "Lautaro Martinez", starCost: 212 },
  { name: "Ajejax Brazorf", players: 27, spent: 499, remaining: 1, under21: 3, star: "Hojlund", starCost: 160 },
  { name: "Aureliana De Papponis", players: 27, spent: 445, remaining: 55, under21: 4, star: "Thuram", starCost: 100 },
  { name: "BONI A PERRDERE", players: 30, spent: 499, remaining: 1, under21: 5, star: "Scamacca", starCost: 92 },
  { name: "FFI Leonardus", players: 30, spent: 426, remaining: 74, under21: 4, star: "Yildiz", starCost: 87 },
  { name: "HAVERZ FC", players: 30, spent: 472, remaining: 28, under21: 2, star: "Kean", starCost: 133 },
  { name: "I Salsicciari", players: 26, spent: 413, remaining: 87, under21: 3, star: "McTominay", starCost: 75 },
  { name: "Los gnomettos", players: 28, spent: 492, remaining: 8, under21: 1, star: "Gonçalo Ramos", starCost: 121 },
  { name: "Patathinaikos AO", players: 29, spent: 490, remaining: 10, under21: 2, star: "Nico Paz", starCost: 100 },
  { name: "Pisellini Findus", players: 30, spent: 462, remaining: 38, under21: 4, star: "Malen", starCost: 149 },
  { name: "SALVEZZA TRANQUILLA", players: 25, spent: 499, remaining: 1, under21: 1, star: "Kolo Muani", starCost: 122 },
  { name: "TotoRiino FC", players: 30, spent: 469, remaining: 31, under21: 5, star: "Baturina", starCost: 66 },
];

const features = [
  ["Economia", "Stipendi rosa", "Percentuale sul costo storico della rosa, con fasce progressive."],
  ["Economia", "Riporto crediti", "Massimo 50 crediti conservabili per evitare divari eterni."],
  ["Mercato", "Plus e minusvalenze", "Storico automatico di acquisto, vendita e rendimento economico."],
  ["Mercato", "Prestiti e clausole", "Scadenze, riscatti, percentuali sulla rivendita e approvazione admin."],
  ["Rosa", "Riconferme", "Un Under 21 e un Over, massimo due conferme consecutive."],
  ["Rosa", "Primavera", "Percorso dedicato agli Under 21 con storico e promozione in prima squadra."],
  ["Società", "Direttore Sportivo", "Secondo Under 21 riconfermabile nella stagione."],
  ["Società", "Stadio", "+0,5 nelle gare casalinghe, escluse le finali in campo neutro."],
  ["Società", "Centro medico", "Una sostituzione d'emergenza regolamentata per lungo infortunio."],
  ["Società", "Settore giovanile", "Riduzione dello stipendio per i calciatori Primavera."],
  ["Società", "Centro allenamento", "Agevolazione limitata sul costo di una riconferma Over."],
  ["Lega", "Fair play finanziario", "Controlli su cap, debiti e regolarità prima dell'asta."],
];

export default function Home() {
  const [teamIndex, setTeamIndex] = useState(0);
  const [sportingDirector, setSportingDirector] = useState(false);
  const [stadium, setStadium] = useState(false);
  const totalPlayers = teams.reduce((sum, team) => sum + team.players, 0);
  const totalSpent = teams.reduce((sum, team) => sum + team.spent, 0);
  const selectedTeam = teams[teamIndex];
  const projection = useMemo(() => {
    const carry = Math.min(selectedTeam.remaining, 50);
    const salary = Math.ceil(selectedTeam.spent * 0.08);
    const extras = (sportingDirector ? 25 : 0) + (stadium ? 30 : 0);
    return { carry, salary, extras, budget: 500 + carry - salary - extras };
  }, [selectedTeam, sportingDirector, stadium]);

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand-mark">BDC</div>
        <div className="brand-copy"><strong>Baia Domitia Championship</strong><span>Manager League · Mantra</span></div>
        <div className="live-pill"><i /> Stagione in corso</div>
      </header>
      <section className="hero">
        <div><p className="eyebrow">La tua lega. Una vera società.</p><h1>Il fantacalcio diventa manageriale.</h1><p className="hero-copy">Rose reali, bilanci, stipendi, riconferme, strutture e plusvalenze. Tutto in un unico campo di gioco.</p></div>
        <div className="hero-badge"><span>BDC</span><small>V EDIZIONE</small></div>
      </section>
      <section className="metric-grid" aria-label="Dati della lega">
        <article><span>Squadre</span><strong>{teams.length}</strong><small>modalità Mantra</small></article>
        <article><span>Calciatori</span><strong>{totalPlayers}</strong><small>acquistati</small></article>
        <article><span>Crediti investiti</span><strong>{totalSpent}</strong><small>su 6.000 disponibili</small></article>
        <article><span>Budget iniziale</span><strong>500</strong><small>per società</small></article>
      </section>

      <section className="content-section" id="societa">
        <div className="section-heading"><div><p className="eyebrow">Dati reali della stagione</p><h2>Le 12 società</h2></div><p>Spese e rose importate dalla lista ufficiale della Baia Domitia Championship.</p></div>
        <div className="teams-grid">
          {teams.map((team, index) => (
            <button className={`team-card ${teamIndex === index ? "selected" : ""}`} key={team.name} onClick={() => setTeamIndex(index)}>
              <div className="team-card-top"><span>{String(index + 1).padStart(2, "0")}</span><b>{team.remaining} cr</b></div>
              <h3>{team.name}</h3><p>{team.players} giocatori · {team.under21} Under 21</p>
              <div className="spend-bar"><i style={{ width: `${team.spent / 5}%` }} /></div>
              <div className="team-star"><span>Top acquisto</span><strong>{team.star} · {team.starCost}</strong></div>
            </button>
          ))}
        </div>
      </section>

      <section className="content-section simulator" id="simulatore">
        <div className="section-heading"><div><p className="eyebrow">Scenario manageriale</p><h2>Simula la prossima asta</h2></div><p>Applica stipendi e strutture alla situazione economica reale.</p></div>
        <div className="simulator-grid">
          <div className="sim-controls">
            <label>Società<select value={teamIndex} onChange={(event) => setTeamIndex(Number(event.target.value))}>{teams.map((team, index) => <option key={team.name} value={index}>{team.name}</option>)}</select></label>
            <label className="check-row"><span><b>Direttore Sportivo</b><small>Secondo Under 21 riconfermabile</small></span><input type="checkbox" checked={sportingDirector} onChange={(event) => setSportingDirector(event.target.checked)} /></label>
            <label className="check-row"><span><b>Stadio</b><small>Bonus casalingo +0,5</small></span><input type="checkbox" checked={stadium} onChange={(event) => setStadium(event.target.checked)} /></label>
          </div>
          <div className="budget-panel">
            <p>Budget previsto prima delle riconferme</p><strong>{projection.budget}</strong><span>crediti</span>
            <dl><div><dt>Base annuale</dt><dd>500</dd></div><div><dt>Riporto</dt><dd className="positive">+{projection.carry}</dd></div><div><dt>Stipendi 8%</dt><dd>−{projection.salary}</dd></div><div><dt>Strutture</dt><dd>−{projection.extras}</dd></div></dl>
          </div>
        </div>
      </section>

      <section className="content-section" id="idee">
        <div className="section-heading"><div><p className="eyebrow">Roadmap regolamento</p><h2>Idee da introdurre</h2></div><p>Una base completa, da votare e rifinire senza trasformare la lega in un ministero.</p></div>
        <div className="features-grid">{features.map(([group, title, copy]) => <article key={title}><span>{group}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <footer><div className="brand-mark">BDC</div><p><strong>Baia Domitia Championship</strong><br />Manager League · Versione iniziale</p><span>Mantra · 12 società · 500 crediti</span></footer>
    </main>
  );
}

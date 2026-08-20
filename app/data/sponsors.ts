export const sponsorSeason = "2027-2028";

export const sponsors = [
  { slug: "mimi", name: "Mimì", title: "Colpo di mercato", benefit: "Rimborso di 5 crediti su un acquisto da almeno 40." },
  { slug: "bar-germani", name: "Bar Germani", title: "Premio fedeltà", benefit: "Sconto di 4 crediti sulla seconda tranche degli stipendi." },
  { slug: "bar-del-cinema", name: "Bar del Cinema", title: "Uomo copertina", benefit: "5 crediti se un tuo calciatore realizza almeno 3 gol nella stessa partita." },
  { slug: "lido-domizia", name: "Lido Domizia", title: "Costruzione abusiva", benefit: "Terza scelta societaria acquistata con il 25% di sconto." },
  { slug: "lido-gabbiani", name: "Lido Gabbiani", title: "Giovani in volo", benefit: "25% aggiuntivo su una plusvalenza Under 21, massimo 6 crediti." },
  { slug: "domitilla", name: "Domitilla", title: "La bandiera", benefit: "Un riconfermato escluso dagli stipendi, massimo 5 crediti." },
  { slug: "k10", name: "K10", title: "Schedina protetta", benefit: "Nel pronostico 1X2 bastano 4 risultati corretti su 5 per vincere 3 crediti." },
  { slug: "wine-bar", name: "Wine Bar", title: "Brindisi alla vittoria", benefit: "2 crediti ogni 3 vittorie consecutive, massimo 6 crediti." },
] as const;

export function getSponsor(slug?: string | null) { return sponsors.find(sponsor => sponsor.slug === slug) ?? null; }

export type Player = { name: string; club: string; role: string; age: number; cost: number; quotation: number; fvm: number; fuoriLista: unknown };
export type Team = { slug: string; name: string; players: number; spent: number; remaining: number; under21: number; roster: Player[] };
export const teams: Team[] = [
  {
    "slug": "asd-real-grazzanise",
    "name": "ASD Real Grazzanise",
    "players": 30,
    "spent": 498,
    "remaining": 2,
    "under21": 2,
    "roster": [
      {
        "name": "Martinez L.",
        "club": "Inter",
        "role": "Pc",
        "age": 29,
        "cost": 212,
        "quotation": 35,
        "fvm": 185,
        "fuoriLista": null
      },
      {
        "name": "Maignan",
        "club": "Milan",
        "role": "Por",
        "age": 31,
        "cost": 80,
        "quotation": 15,
        "fvm": 25,
        "fuoriLista": null
      },
      {
        "name": "De Ketelaere",
        "club": "Atalanta",
        "role": "A",
        "age": 25,
        "cost": 46,
        "quotation": 18,
        "fvm": 54,
        "fuoriLista": null
      },
      {
        "name": "Rowe",
        "club": "Bologna",
        "role": "W/T",
        "age": 23,
        "cost": 30,
        "quotation": 11,
        "fvm": 20,
        "fuoriLista": null
      },
      {
        "name": "McKennie",
        "club": "Juventus",
        "role": "C",
        "age": 28,
        "cost": 26,
        "quotation": 17,
        "fvm": 34,
        "fuoriLista": null
      },
      {
        "name": "Leao",
        "club": "Milan",
        "role": "A",
        "age": 27,
        "cost": 13,
        "quotation": 19,
        "fvm": 62,
        "fuoriLista": null
      },
      {
        "name": "Gabbia",
        "club": "Milan",
        "role": "Dc",
        "age": 27,
        "cost": 12,
        "quotation": 7,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Valeri",
        "club": "Parma",
        "role": "Ds/E",
        "age": 28,
        "cost": 12,
        "quotation": 8,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Maldini",
        "club": "Cagliari",
        "role": "T/A",
        "age": 25,
        "cost": 12,
        "quotation": 6,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Falcone",
        "club": "Lecce",
        "role": "Por",
        "age": 31,
        "cost": 11,
        "quotation": 8,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Ndour",
        "club": "Fiorentina",
        "role": "C",
        "age": 22,
        "cost": 6,
        "quotation": 8,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Lobotka",
        "club": "Napoli",
        "role": "M/C",
        "age": 32,
        "cost": 6,
        "quotation": 8,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Joao Mario",
        "club": "Fiorentina",
        "role": "Dd/E",
        "age": 26,
        "cost": 6,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Rodriguez Ju.",
        "club": "Cagliari",
        "role": "Ds/Dc",
        "age": 21,
        "cost": 5,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Noslin",
        "club": "Lazio",
        "role": "A",
        "age": 27,
        "cost": 3,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Pobega",
        "club": "Bologna",
        "role": "M/C",
        "age": 27,
        "cost": 3,
        "quotation": 7,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Marin R.",
        "club": "Napoli",
        "role": "Dc",
        "age": 24,
        "cost": 2,
        "quotation": 2,
        "fvm": 3,
        "fuoriLista": null
      },
      {
        "name": "Zambo Anguissa",
        "club": "Napoli",
        "role": "C",
        "age": 31,
        "cost": 1,
        "quotation": 11,
        "fvm": 27,
        "fuoriLista": null
      },
      {
        "name": "Mandragora",
        "club": "Fiorentina",
        "role": "C",
        "age": 29,
        "cost": 1,
        "quotation": 9,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Koopmeiners",
        "club": "Juventus",
        "role": "C/T",
        "age": 28,
        "cost": 1,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Loftus-Cheek",
        "club": "Milan",
        "role": "C/T",
        "age": 30,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Carboni A.",
        "club": "Monza",
        "role": "Ds/Dc",
        "age": 25,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Gatti",
        "club": "Juventus",
        "role": "Dc",
        "age": 28,
        "cost": 1,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Valenti",
        "club": "Parma",
        "role": "Dc",
        "age": 27,
        "cost": 1,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Havel",
        "club": "Genoa",
        "role": "Pc",
        "age": 23,
        "cost": 1,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Akpoguma",
        "club": "Frosinone",
        "role": "Dc",
        "age": 31,
        "cost": 1,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Hainaut",
        "club": "Venezia",
        "role": "Dd/E",
        "age": 24,
        "cost": 1,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Missori",
        "club": "Sassuolo",
        "role": "Dd/E",
        "age": 22,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      },
      {
        "name": "Torriani",
        "club": "Milan",
        "role": "Por",
        "age": 21,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      },
      {
        "name": "Terracciano",
        "club": "Milan",
        "role": "Por",
        "age": 36,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "ajejax-brazorf",
    "name": "Ajejax Brazorf",
    "players": 27,
    "spent": 499,
    "remaining": 1,
    "under21": 3,
    "roster": [
      {
        "name": "Hojlund",
        "club": "Napoli",
        "role": "Pc",
        "age": 23,
        "cost": 160,
        "quotation": 28,
        "fvm": 136,
        "fuoriLista": null
      },
      {
        "name": "Davis K.",
        "club": "Udinese",
        "role": "Pc",
        "age": 28,
        "cost": 58,
        "quotation": 19,
        "fvm": 60,
        "fuoriLista": null
      },
      {
        "name": "Raspadori",
        "club": "Atalanta",
        "role": "A",
        "age": 26,
        "cost": 34,
        "quotation": 14,
        "fvm": 32,
        "fuoriLista": null
      },
      {
        "name": "Solet",
        "club": "Udinese",
        "role": "Dc",
        "age": 26,
        "cost": 32,
        "quotation": 13,
        "fvm": 23,
        "fuoriLista": null
      },
      {
        "name": "Jimenez A.",
        "club": "Fiorentina",
        "role": "Dd/Ds/E",
        "age": 21,
        "cost": 31,
        "quotation": 9,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "N'Dicka",
        "club": "Roma",
        "role": "Dc",
        "age": 27,
        "cost": 28,
        "quotation": 13,
        "fvm": 22,
        "fuoriLista": null
      },
      {
        "name": "Gudmundsson A.",
        "club": "Fiorentina",
        "role": "T/A",
        "age": 29,
        "cost": 25,
        "quotation": 12,
        "fvm": 29,
        "fuoriLista": null
      },
      {
        "name": "Skorupski",
        "club": "Bologna",
        "role": "Por",
        "age": 35,
        "cost": 23,
        "quotation": 10,
        "fvm": 19,
        "fuoriLista": null
      },
      {
        "name": "Saelemaekers",
        "club": "Milan",
        "role": "E/W",
        "age": 27,
        "cost": 20,
        "quotation": 11,
        "fvm": 23,
        "fuoriLista": null
      },
      {
        "name": "Perrone",
        "club": "Como",
        "role": "M/C",
        "age": 23,
        "cost": 14,
        "quotation": 11,
        "fvm": 21,
        "fuoriLista": null
      },
      {
        "name": "Viery",
        "club": "Fiorentina",
        "role": "Ds/Dc",
        "age": 21,
        "cost": 13,
        "quotation": 7,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Kevin Carlos",
        "club": "Cagliari",
        "role": "Pc",
        "age": 25,
        "cost": 11,
        "quotation": 12,
        "fvm": 22,
        "fuoriLista": null
      },
      {
        "name": "Carlos Augusto",
        "club": "Inter",
        "role": "B/Ds/E",
        "age": 27,
        "cost": 10,
        "quotation": 8,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Cristante",
        "club": "Roma",
        "role": "M/C",
        "age": 31,
        "cost": 6,
        "quotation": 9,
        "fvm": 16,
        "fuoriLista": null
      },
      {
        "name": "Thiam",
        "club": "Monza",
        "role": "Por",
        "age": 28,
        "cost": 5,
        "quotation": 5,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Lucca",
        "club": "Napoli",
        "role": "Pc",
        "age": 26,
        "cost": 5,
        "quotation": 3,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Nicolussi Caviglia",
        "club": "Parma",
        "role": "M/C",
        "age": 26,
        "cost": 4,
        "quotation": 7,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Pavard",
        "club": "Inter",
        "role": "Dd/Dc",
        "age": 30,
        "cost": 3,
        "quotation": 7,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Estupinan",
        "club": "Milan",
        "role": "Ds/E",
        "age": 28,
        "cost": 3,
        "quotation": 3,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Perin",
        "club": "Juventus",
        "role": "Por",
        "age": 34,
        "cost": 3,
        "quotation": 6,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Cutrone",
        "club": "Monza",
        "role": "Pc",
        "age": 28,
        "cost": 2,
        "quotation": 8,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Volpato",
        "club": "Sassuolo",
        "role": "W/T",
        "age": 23,
        "cost": 2,
        "quotation": 7,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Mkhitaryan",
        "club": "Inter",
        "role": "C",
        "age": 37,
        "cost": 2,
        "quotation": 5,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Kolasinac",
        "club": "Atalanta",
        "role": "Ds/Dc",
        "age": 33,
        "cost": 2,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Perez K.",
        "club": "Venezia",
        "role": "C/T",
        "age": 29,
        "cost": 1,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Addai",
        "club": "Como",
        "role": "W/A",
        "age": 21,
        "cost": 1,
        "quotation": 4,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Mazzocchi",
        "club": "Napoli",
        "role": "Dd/Ds/E",
        "age": 31,
        "cost": 1,
        "quotation": 1,
        "fvm": 2,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "aureliana-de-papponis",
    "name": "Aureliana De Papponis",
    "players": 27,
    "spent": 445,
    "remaining": 55,
    "under21": 4,
    "roster": [
      {
        "name": "Thuram",
        "club": "Inter",
        "role": "Pc",
        "age": 29,
        "cost": 100,
        "quotation": 29,
        "fvm": 140,
        "fuoriLista": null
      },
      {
        "name": "Orsolini",
        "club": "Bologna",
        "role": "W/A",
        "age": 29,
        "cost": 82,
        "quotation": 25,
        "fvm": 100,
        "fuoriLista": null
      },
      {
        "name": "Atta",
        "club": "Fiorentina",
        "role": "C/T",
        "age": 23,
        "cost": 40,
        "quotation": 17,
        "fvm": 44,
        "fuoriLista": null
      },
      {
        "name": "Bastoni",
        "club": "Inter",
        "role": "Dc",
        "age": 27,
        "cost": 35,
        "quotation": 14,
        "fvm": 22,
        "fuoriLista": null
      },
      {
        "name": "De Bruyne",
        "club": "Napoli",
        "role": "T",
        "age": 35,
        "cost": 30,
        "quotation": 14,
        "fvm": 48,
        "fuoriLista": null
      },
      {
        "name": "Bremer",
        "club": "Juventus",
        "role": "Dc",
        "age": 29,
        "cost": 27,
        "quotation": 15,
        "fvm": 25,
        "fuoriLista": null
      },
      {
        "name": "Di Lorenzo",
        "club": "Napoli",
        "role": "Dd/E",
        "age": 33,
        "cost": 25,
        "quotation": 12,
        "fvm": 20,
        "fuoriLista": null
      },
      {
        "name": "Diouf",
        "club": "Inter",
        "role": "E/C",
        "age": 23,
        "cost": 18,
        "quotation": 9,
        "fvm": 20,
        "fuoriLista": null
      },
      {
        "name": "Okoye",
        "club": "Udinese",
        "role": "Por",
        "age": 27,
        "cost": 17,
        "quotation": 9,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Valdepenas",
        "club": "Fiorentina",
        "role": "Ds/Dc",
        "age": 20,
        "cost": 16,
        "quotation": 7,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Bijlow",
        "club": "Genoa",
        "role": "Por",
        "age": 28,
        "cost": 15,
        "quotation": 8,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Cancellieri",
        "club": "Lazio",
        "role": "W/A",
        "age": 24,
        "cost": 7,
        "quotation": 8,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Rensch",
        "club": "Roma",
        "role": "B/Dd/E",
        "age": 23,
        "cost": 7,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Ahanor",
        "club": "Atalanta",
        "role": "B/Ds/E",
        "age": 18,
        "cost": 5,
        "quotation": 7,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Monterisi",
        "club": "Frosinone",
        "role": "Dc",
        "age": 25,
        "cost": 5,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Camarda",
        "club": "Milan",
        "role": "Pc",
        "age": 18,
        "cost": 3,
        "quotation": 4,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Sucic P.",
        "club": "Inter",
        "role": "C",
        "age": 23,
        "cost": 2,
        "quotation": 8,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Corvi",
        "club": "Parma",
        "role": "Por",
        "age": 25,
        "cost": 2,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      },
      {
        "name": "Romero D.",
        "club": "Parma",
        "role": "Pc",
        "age": 23,
        "cost": 1,
        "quotation": 10,
        "fvm": 19,
        "fuoriLista": null
      },
      {
        "name": "Adams C.",
        "club": "Torino",
        "role": "A",
        "age": 30,
        "cost": 1,
        "quotation": 10,
        "fvm": 17,
        "fuoriLista": null
      },
      {
        "name": "Caqueret",
        "club": "Como",
        "role": "C/T",
        "age": 26,
        "cost": 1,
        "quotation": 6,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Matic",
        "club": "Sassuolo",
        "role": "M/C",
        "age": 38,
        "cost": 1,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Milla",
        "club": "Como",
        "role": "M/C",
        "age": 32,
        "cost": 1,
        "quotation": 5,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Miller L.",
        "club": "Udinese",
        "role": "M/C",
        "age": 20,
        "cost": 1,
        "quotation": 3,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Comert",
        "club": "Torino",
        "role": "Dc",
        "age": 28,
        "cost": 1,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Felici",
        "club": "Cagliari",
        "role": "W",
        "age": 25,
        "cost": 1,
        "quotation": 4,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Deiola",
        "club": "Cagliari",
        "role": "M/C",
        "age": 31,
        "cost": 1,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "boni-a-perrdere",
    "name": "BONI A PERRDERE",
    "players": 30,
    "spent": 499,
    "remaining": 1,
    "under21": 5,
    "roster": [
      {
        "name": "Scamacca",
        "club": "Atalanta",
        "role": "Pc",
        "age": 27,
        "cost": 92,
        "quotation": 18,
        "fvm": 64,
        "fuoriLista": null
      },
      {
        "name": "Carnesecchi",
        "club": "Atalanta",
        "role": "Por",
        "age": 26,
        "cost": 70,
        "quotation": 16,
        "fvm": 26,
        "fuoriLista": null
      },
      {
        "name": "Mastantuono",
        "club": "Fiorentina",
        "role": "W/T",
        "age": 19,
        "cost": 53,
        "quotation": 12,
        "fvm": 29,
        "fuoriLista": null
      },
      {
        "name": "Krstovic",
        "club": "Atalanta",
        "role": "Pc",
        "age": 26,
        "cost": 50,
        "quotation": 17,
        "fvm": 46,
        "fuoriLista": null
      },
      {
        "name": "Chalobah T.",
        "club": "Como",
        "role": "Dd/Dc",
        "age": 27,
        "cost": 30,
        "quotation": 10,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Isaksen",
        "club": "Lazio",
        "role": "W/A",
        "age": 25,
        "cost": 26,
        "quotation": 8,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Taylor K.",
        "club": "Lazio",
        "role": "C/T",
        "age": 24,
        "cost": 25,
        "quotation": 13,
        "fvm": 32,
        "fuoriLista": null
      },
      {
        "name": "Norton-Cuffy",
        "club": "Genoa",
        "role": "Dd/E",
        "age": 22,
        "cost": 15,
        "quotation": 8,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Ekkelenkamp",
        "club": "Udinese",
        "role": "C/T",
        "age": 26,
        "cost": 14,
        "quotation": 10,
        "fvm": 21,
        "fuoriLista": null
      },
      {
        "name": "Colpani",
        "club": "Monza",
        "role": "T",
        "age": 27,
        "cost": 14,
        "quotation": 7,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Rodriguez Je.",
        "club": "Como",
        "role": "W/A",
        "age": 21,
        "cost": 13,
        "quotation": 11,
        "fvm": 16,
        "fuoriLista": null
      },
      {
        "name": "Zortea",
        "club": "Bologna",
        "role": "Dd/E",
        "age": 27,
        "cost": 12,
        "quotation": 6,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Troilo",
        "club": "Parma",
        "role": "Dc",
        "age": 23,
        "cost": 12,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Gaetano",
        "club": "Atalanta",
        "role": "M/C",
        "age": 26,
        "cost": 11,
        "quotation": 8,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Fagioli",
        "club": "Fiorentina",
        "role": "M/C",
        "age": 25,
        "cost": 11,
        "quotation": 9,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Romagnoli",
        "club": "Lazio",
        "role": "Dc",
        "age": 31,
        "cost": 10,
        "quotation": 7,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Ratkov",
        "club": "Lazio",
        "role": "Pc",
        "age": 23,
        "cost": 8,
        "quotation": 9,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Baldanzi",
        "club": "Genoa",
        "role": "T",
        "age": 23,
        "cost": 8,
        "quotation": 10,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Birindelli",
        "club": "Monza",
        "role": "Dd/Ds/E",
        "age": 27,
        "cost": 6,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Oristanio",
        "club": "Torino",
        "role": "W/T",
        "age": 24,
        "cost": 4,
        "quotation": 7,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Adzic",
        "club": "Sassuolo",
        "role": "C/T",
        "age": 20,
        "cost": 3,
        "quotation": 5,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Kabasele",
        "club": "Udinese",
        "role": "Dc",
        "age": 35,
        "cost": 3,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Gaspar K.",
        "club": "Lecce",
        "role": "Dc",
        "age": 29,
        "cost": 2,
        "quotation": 5,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Tavares N.",
        "club": "Lazio",
        "role": "Ds/E",
        "age": 26,
        "cost": 1,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Stankovic A.",
        "club": "Inter",
        "role": "M/C",
        "age": 21,
        "cost": 1,
        "quotation": 3,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Correia T.",
        "club": "Venezia",
        "role": "Dd/E",
        "age": 27,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Ekhator",
        "club": "Juventus",
        "role": "A",
        "age": 20,
        "cost": 1,
        "quotation": 3,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Ghilardi",
        "club": "Roma",
        "role": "Dc",
        "age": 23,
        "cost": 1,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Vismara",
        "club": "Atalanta",
        "role": "Por",
        "age": 23,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      },
      {
        "name": "Sportiello",
        "club": "Atalanta",
        "role": "Por",
        "age": 34,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "ffi-leonardus",
    "name": "FFI Leonardus",
    "players": 30,
    "spent": 426,
    "remaining": 74,
    "under21": 4,
    "roster": [
      {
        "name": "Yildiz",
        "club": "Juventus",
        "role": "A",
        "age": 21,
        "cost": 87,
        "quotation": 24,
        "fvm": 95,
        "fuoriLista": null
      },
      {
        "name": "Calhanoglu",
        "club": "Inter",
        "role": "M/C",
        "age": 32,
        "cost": 69,
        "quotation": 28,
        "fvm": 130,
        "fuoriLista": null
      },
      {
        "name": "Simeone",
        "club": "Torino",
        "role": "Pc",
        "age": 31,
        "cost": 45,
        "quotation": 15,
        "fvm": 40,
        "fuoriLista": null
      },
      {
        "name": "Alajbegovic",
        "club": "Juventus",
        "role": "W/T",
        "age": 19,
        "cost": 41,
        "quotation": 12,
        "fvm": 28,
        "fuoriLista": null
      },
      {
        "name": "Akanji",
        "club": "Inter",
        "role": "Dc",
        "age": 31,
        "cost": 36,
        "quotation": 16,
        "fvm": 28,
        "fuoriLista": null
      },
      {
        "name": "Laurientè",
        "club": "Sassuolo",
        "role": "A",
        "age": 28,
        "cost": 27,
        "quotation": 16,
        "fvm": 46,
        "fuoriLista": null
      },
      {
        "name": "Kristensen T.",
        "club": "Atalanta",
        "role": "Dd/Dc",
        "age": 24,
        "cost": 22,
        "quotation": 8,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Modric",
        "club": "Milan",
        "role": "M/C",
        "age": 41,
        "cost": 21,
        "quotation": 13,
        "fvm": 30,
        "fuoriLista": null
      },
      {
        "name": "Bartesaghi",
        "club": "Milan",
        "role": "Ds/E",
        "age": 21,
        "cost": 15,
        "quotation": 8,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Zappacosta",
        "club": "Atalanta",
        "role": "Dd/E",
        "age": 34,
        "cost": 10,
        "quotation": 8,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Busio",
        "club": "Venezia",
        "role": "M/C",
        "age": 24,
        "cost": 10,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Mangas",
        "club": "Monza",
        "role": "Ds/E",
        "age": 28,
        "cost": 8,
        "quotation": 6,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Frendrup",
        "club": "Genoa",
        "role": "M/C",
        "age": 25,
        "cost": 6,
        "quotation": 8,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Kempf",
        "club": "Como",
        "role": "Dc",
        "age": 31,
        "cost": 6,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Mendy P.",
        "club": "Cagliari",
        "role": "Pc",
        "age": 19,
        "cost": 4,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Sow",
        "club": "Genoa",
        "role": "M/C",
        "age": 29,
        "cost": 2,
        "quotation": 8,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Bellanova",
        "club": "Atalanta",
        "role": "Dd/E",
        "age": 26,
        "cost": 2,
        "quotation": 6,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Bracaglia",
        "club": "Frosinone",
        "role": "Ds/Dc",
        "age": 23,
        "cost": 2,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Bella-Kotchap",
        "club": "Venezia",
        "role": "Dc",
        "age": 25,
        "cost": 2,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Dia",
        "club": "Lazio",
        "role": "A",
        "age": 30,
        "cost": 1,
        "quotation": 11,
        "fvm": 17,
        "fuoriLista": null
      },
      {
        "name": "Schmid",
        "club": "Frosinone",
        "role": "W/T",
        "age": 26,
        "cost": 1,
        "quotation": 8,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Mota",
        "club": "Monza",
        "role": "A",
        "age": 28,
        "cost": 1,
        "quotation": 5,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Muric",
        "club": "Sassuolo",
        "role": "Por",
        "age": 28,
        "cost": 1,
        "quotation": 7,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Gandelman",
        "club": "Lecce",
        "role": "C/T",
        "age": 26,
        "cost": 1,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Stankovic F.",
        "club": "Venezia",
        "role": "Por",
        "age": 24,
        "cost": 1,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Oyono A.",
        "club": "Frosinone",
        "role": "Dd/E",
        "age": 25,
        "cost": 1,
        "quotation": 5,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Kamara H.",
        "club": "Udinese",
        "role": "Ds/E",
        "age": 32,
        "cost": 1,
        "quotation": 6,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Giovane",
        "club": "Napoli",
        "role": "A",
        "age": 23,
        "cost": 1,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Schingtienne",
        "club": "Venezia",
        "role": "Dc",
        "age": 24,
        "cost": 1,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Turati",
        "club": "Sassuolo",
        "role": "Por",
        "age": 25,
        "cost": 1,
        "quotation": 1,
        "fvm": 2,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "haverz-fc",
    "name": "HAVERZ FC",
    "players": 30,
    "spent": 472,
    "remaining": 28,
    "under21": 2,
    "roster": [
      {
        "name": "Kean",
        "club": "Fiorentina",
        "role": "Pc",
        "age": 26,
        "cost": 133,
        "quotation": 25,
        "fvm": 99,
        "fuoriLista": null
      },
      {
        "name": "Pulisic",
        "club": "Milan",
        "role": "T/A",
        "age": 28,
        "cost": 76,
        "quotation": 23,
        "fvm": 90,
        "fuoriLista": null
      },
      {
        "name": "Butez",
        "club": "Como",
        "role": "Por",
        "age": 31,
        "cost": 52,
        "quotation": 16,
        "fvm": 28,
        "fuoriLista": null
      },
      {
        "name": "Frattesi",
        "club": "Lazio",
        "role": "C/T",
        "age": 27,
        "cost": 33,
        "quotation": 7,
        "fvm": 28,
        "fuoriLista": null
      },
      {
        "name": "Vlasic",
        "club": "Torino",
        "role": "T",
        "age": 29,
        "cost": 31,
        "quotation": 13,
        "fvm": 39,
        "fuoriLista": null
      },
      {
        "name": "Diao",
        "club": "Como",
        "role": "W/A",
        "age": 21,
        "cost": 22,
        "quotation": 12,
        "fvm": 26,
        "fuoriLista": null
      },
      {
        "name": "Calò",
        "club": "Frosinone",
        "role": "M/C",
        "age": 29,
        "cost": 17,
        "quotation": 8,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Dragusin",
        "club": "Fiorentina",
        "role": "Dc",
        "age": 24,
        "cost": 15,
        "quotation": 8,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Hermoso",
        "club": "Roma",
        "role": "Dc",
        "age": 31,
        "cost": 15,
        "quotation": 10,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Koulierakis",
        "club": "Roma",
        "role": "Dc",
        "age": 23,
        "cost": 14,
        "quotation": 8,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Ghedjemis",
        "club": "Frosinone",
        "role": "W/A",
        "age": 24,
        "cost": 13,
        "quotation": 10,
        "fvm": 16,
        "fuoriLista": null
      },
      {
        "name": "Bisseck",
        "club": "Inter",
        "role": "Dc",
        "age": 26,
        "cost": 11,
        "quotation": 11,
        "fvm": 17,
        "fuoriLista": null
      },
      {
        "name": "Bonny",
        "club": "Inter",
        "role": "Pc",
        "age": 23,
        "cost": 10,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Coco",
        "club": "Torino",
        "role": "Dc",
        "age": 27,
        "cost": 6,
        "quotation": 7,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Sohm",
        "club": "Venezia",
        "role": "C",
        "age": 25,
        "cost": 5,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Paleari",
        "club": "Torino",
        "role": "Por",
        "age": 34,
        "cost": 3,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      },
      {
        "name": "Pellegrini Lo.",
        "club": "Roma",
        "role": "C/T",
        "age": 30,
        "cost": 2,
        "quotation": 10,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Zalewski",
        "club": "Atalanta",
        "role": "W",
        "age": 24,
        "cost": 2,
        "quotation": 5,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Geubbels",
        "club": "Lecce",
        "role": "Pc",
        "age": 25,
        "cost": 1,
        "quotation": 8,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Raimondo",
        "club": "Frosinone",
        "role": "Pc",
        "age": 22,
        "cost": 1,
        "quotation": 6,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Zhegrova",
        "club": "Juventus",
        "role": "W",
        "age": 27,
        "cost": 1,
        "quotation": 5,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Grillitsch",
        "club": "Frosinone",
        "role": "M/C",
        "age": 31,
        "cost": 1,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Amondarain",
        "club": "Bologna",
        "role": "M/C",
        "age": 21,
        "cost": 1,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Dominguez B.",
        "club": "Sassuolo",
        "role": "W/A",
        "age": 23,
        "cost": 1,
        "quotation": 2,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Siebert",
        "club": "Lecce",
        "role": "Dc",
        "age": 24,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Terzic",
        "club": "Frosinone",
        "role": "Ds/E",
        "age": 27,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Brescianini",
        "club": "Fiorentina",
        "role": "C/T",
        "age": 26,
        "cost": 1,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Kossounou",
        "club": "Atalanta",
        "role": "Dd/Dc",
        "age": 25,
        "cost": 1,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Cabal",
        "club": "Juventus",
        "role": "B/Ds/E",
        "age": 25,
        "cost": 1,
        "quotation": 1,
        "fvm": 2,
        "fuoriLista": null
      },
      {
        "name": "Tornqvist",
        "club": "Como",
        "role": "Por",
        "age": 24,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "i-salsicciari",
    "name": "I Salsicciari",
    "players": 26,
    "spent": 413,
    "remaining": 87,
    "under21": 3,
    "roster": [
      {
        "name": "McTominay",
        "club": "Napoli",
        "role": "C/T",
        "age": 30,
        "cost": 75,
        "quotation": 28,
        "fvm": 120,
        "fuoriLista": null
      },
      {
        "name": "Meret",
        "club": "Napoli",
        "role": "Por",
        "age": 29,
        "cost": 54,
        "quotation": 11,
        "fvm": 23,
        "fuoriLista": null
      },
      {
        "name": "Berardi",
        "club": "Sassuolo",
        "role": "A",
        "age": 32,
        "cost": 42,
        "quotation": 19,
        "fvm": 59,
        "fuoriLista": null
      },
      {
        "name": "Soulè",
        "club": "Roma",
        "role": "A",
        "age": 23,
        "cost": 34,
        "quotation": 13,
        "fvm": 27,
        "fuoriLista": null
      },
      {
        "name": "Rrahmani",
        "club": "Napoli",
        "role": "Dc",
        "age": 32,
        "cost": 34,
        "quotation": 14,
        "fvm": 24,
        "fuoriLista": null
      },
      {
        "name": "Pavlovic",
        "club": "Milan",
        "role": "Dc",
        "age": 25,
        "cost": 25,
        "quotation": 14,
        "fvm": 24,
        "fuoriLista": null
      },
      {
        "name": "Cambiaso",
        "club": "Juventus",
        "role": "Dd/Ds/E",
        "age": 26,
        "cost": 25,
        "quotation": 10,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Barella",
        "club": "Inter",
        "role": "C",
        "age": 29,
        "cost": 23,
        "quotation": 17,
        "fvm": 40,
        "fuoriLista": null
      },
      {
        "name": "Castro S.",
        "club": "Roma",
        "role": "Pc",
        "age": 22,
        "cost": 22,
        "quotation": 13,
        "fvm": 39,
        "fuoriLista": null
      },
      {
        "name": "Politano",
        "club": "Napoli",
        "role": "W",
        "age": 33,
        "cost": 13,
        "quotation": 9,
        "fvm": 22,
        "fuoriLista": null
      },
      {
        "name": "Mina",
        "club": "Cagliari",
        "role": "Dc",
        "age": 32,
        "cost": 12,
        "quotation": 8,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Tiago Gabriel",
        "club": "Lecce",
        "role": "Dc",
        "age": 22,
        "cost": 12,
        "quotation": 7,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Adams A.",
        "club": "Venezia",
        "role": "Pc",
        "age": 26,
        "cost": 10,
        "quotation": 11,
        "fvm": 24,
        "fuoriLista": null
      },
      {
        "name": "Milinkovic-Savic V.",
        "club": "Napoli",
        "role": "Por",
        "age": 29,
        "cost": 7,
        "quotation": 5,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Keita M.",
        "club": "Parma",
        "role": "M/C",
        "age": 24,
        "cost": 5,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Elphege",
        "club": "Parma",
        "role": "Pc",
        "age": 25,
        "cost": 5,
        "quotation": 3,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Kouadio",
        "club": "Monza",
        "role": "Dd/Dc",
        "age": 20,
        "cost": 4,
        "quotation": 3,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Marusic",
        "club": "Lazio",
        "role": "Dd/Ds/E",
        "age": 34,
        "cost": 3,
        "quotation": 6,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Bowie",
        "club": "Sassuolo",
        "role": "Pc",
        "age": 24,
        "cost": 1,
        "quotation": 9,
        "fvm": 18,
        "fuoriLista": null
      },
      {
        "name": "Karlstrom",
        "club": "Udinese",
        "role": "M/C",
        "age": 31,
        "cost": 1,
        "quotation": 7,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Konè I.",
        "club": "Sassuolo",
        "role": "C",
        "age": 24,
        "cost": 1,
        "quotation": 9,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Kvernadze",
        "club": "Frosinone",
        "role": "W/A",
        "age": 23,
        "cost": 1,
        "quotation": 5,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Amorim",
        "club": "Genoa",
        "role": "M/C",
        "age": 21,
        "cost": 1,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Britschgi",
        "club": "Parma",
        "role": "Dd/Ds/E",
        "age": 20,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Ciurria",
        "club": "Monza",
        "role": "E/W",
        "age": 31,
        "cost": 1,
        "quotation": 2,
        "fvm": 3,
        "fuoriLista": null
      },
      {
        "name": "Contini",
        "club": "Napoli",
        "role": "Por",
        "age": 30,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "los-gnomettos",
    "name": "Los gnomettos",
    "players": 28,
    "spent": 492,
    "remaining": 8,
    "under21": 1,
    "roster": [
      {
        "name": "Ramos G.",
        "club": "Milan",
        "role": "Pc",
        "age": 25,
        "cost": 121,
        "quotation": 27,
        "fvm": 116,
        "fuoriLista": null
      },
      {
        "name": "De Gea",
        "club": "Fiorentina",
        "role": "Por",
        "age": 36,
        "cost": 58,
        "quotation": 13,
        "fvm": 23,
        "fuoriLista": null
      },
      {
        "name": "Zaniolo",
        "club": "Udinese",
        "role": "T/A",
        "age": 27,
        "cost": 57,
        "quotation": 17,
        "fvm": 50,
        "fuoriLista": null
      },
      {
        "name": "Dovbyk",
        "club": "Bologna",
        "role": "Pc",
        "age": 29,
        "cost": 45,
        "quotation": 16,
        "fvm": 35,
        "fuoriLista": null
      },
      {
        "name": "Da Cunha",
        "club": "Como",
        "role": "C/T",
        "age": 25,
        "cost": 40,
        "quotation": 18,
        "fvm": 45,
        "fuoriLista": null
      },
      {
        "name": "Spence",
        "club": "Inter",
        "role": "E",
        "age": 26,
        "cost": 24,
        "quotation": 11,
        "fvm": 20,
        "fuoriLista": null
      },
      {
        "name": "Couto",
        "club": "Como",
        "role": "Dd/E",
        "age": 24,
        "cost": 23,
        "quotation": 8,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Stones",
        "club": "Inter",
        "role": "Dc",
        "age": 32,
        "cost": 21,
        "quotation": 12,
        "fvm": 19,
        "fuoriLista": null
      },
      {
        "name": "Rovella",
        "club": "Lazio",
        "role": "M/C",
        "age": 25,
        "cost": 18,
        "quotation": 7,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Oulai",
        "club": "Fiorentina",
        "role": "M/C",
        "age": 20,
        "cost": 15,
        "quotation": 7,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Scalvini",
        "club": "Atalanta",
        "role": "Dc",
        "age": 23,
        "cost": 9,
        "quotation": 10,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Idzes",
        "club": "Sassuolo",
        "role": "Dc",
        "age": 26,
        "cost": 9,
        "quotation": 7,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Piccoli",
        "club": "Bologna",
        "role": "Pc",
        "age": 25,
        "cost": 7,
        "quotation": 7,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Marcandalli",
        "club": "Genoa",
        "role": "Dc",
        "age": 24,
        "cost": 7,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Tomori",
        "club": "Milan",
        "role": "Dc",
        "age": 29,
        "cost": 7,
        "quotation": 7,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Esposito Se.",
        "club": "Cagliari",
        "role": "A",
        "age": 24,
        "cost": 5,
        "quotation": 14,
        "fvm": 20,
        "fuoriLista": null
      },
      {
        "name": "Celik",
        "club": "Juventus",
        "role": "B/Dd/E",
        "age": 29,
        "cost": 4,
        "quotation": 9,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Gallo",
        "club": "Lecce",
        "role": "Ds/E",
        "age": 26,
        "cost": 4,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Traorè Hj.",
        "club": "Genoa",
        "role": "W/T",
        "age": 26,
        "cost": 3,
        "quotation": 5,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Zanoli",
        "club": "Udinese",
        "role": "Dd/E",
        "age": 26,
        "cost": 3,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Dodò",
        "club": "Fiorentina",
        "role": "Dd/E",
        "age": 28,
        "cost": 2,
        "quotation": 10,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Cataldi",
        "club": "Lazio",
        "role": "M/C",
        "age": 32,
        "cost": 2,
        "quotation": 5,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Beukema",
        "club": "Napoli",
        "role": "Dc",
        "age": 28,
        "cost": 2,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Provstgaard",
        "club": "Lazio",
        "role": "Dc",
        "age": 23,
        "cost": 2,
        "quotation": 3,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Unai Gomez",
        "club": "Udinese",
        "role": "T",
        "age": 23,
        "cost": 1,
        "quotation": 6,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Akinsanmiro",
        "club": "Monza",
        "role": "C",
        "age": 22,
        "cost": 1,
        "quotation": 6,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "N'Dri",
        "club": "Lecce",
        "role": "W/A",
        "age": 26,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Christensen O.",
        "club": "Fiorentina",
        "role": "Por",
        "age": 27,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "patathinaikos-ao",
    "name": "Patathinaikos AO",
    "players": 29,
    "spent": 490,
    "remaining": 10,
    "under21": 2,
    "roster": [
      {
        "name": "Paz N.",
        "club": "Como",
        "role": "T/A",
        "age": 22,
        "cost": 100,
        "quotation": 28,
        "fvm": 125,
        "fuoriLista": null
      },
      {
        "name": "Douvikas",
        "club": "Como",
        "role": "Pc",
        "age": 27,
        "cost": 93,
        "quotation": 20,
        "fvm": 77,
        "fuoriLista": null
      },
      {
        "name": "Svilar",
        "club": "Roma",
        "role": "Por",
        "age": 27,
        "cost": 72,
        "quotation": 18,
        "fvm": 33,
        "fuoriLista": null
      },
      {
        "name": "Konè M.",
        "club": "Roma",
        "role": "M/C",
        "age": 25,
        "cost": 41,
        "quotation": 11,
        "fvm": 23,
        "fuoriLista": null
      },
      {
        "name": "Samardzic",
        "club": "Atalanta",
        "role": "C/T",
        "age": 24,
        "cost": 31,
        "quotation": 12,
        "fvm": 21,
        "fuoriLista": null
      },
      {
        "name": "Conceicao",
        "club": "Juventus",
        "role": "W/A",
        "age": 24,
        "cost": 30,
        "quotation": 11,
        "fvm": 30,
        "fuoriLista": null
      },
      {
        "name": "Vasquez",
        "club": "Genoa",
        "role": "Ds/Dc",
        "age": 28,
        "cost": 20,
        "quotation": 10,
        "fvm": 18,
        "fuoriLista": null
      },
      {
        "name": "Yeboah J.",
        "club": "Venezia",
        "role": "A",
        "age": 26,
        "cost": 20,
        "quotation": 8,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Doekhi",
        "club": "Lazio",
        "role": "Dc",
        "age": 28,
        "cost": 13,
        "quotation": 7,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Vojvoda",
        "club": "Udinese",
        "role": "Dd/E",
        "age": 31,
        "cost": 12,
        "quotation": 8,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Delprato",
        "club": "Parma",
        "role": "B/Dd/E",
        "age": 27,
        "cost": 9,
        "quotation": 8,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Fazzini",
        "club": "Cagliari",
        "role": "C/T",
        "age": 23,
        "cost": 8,
        "quotation": 8,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Pisilli",
        "club": "Roma",
        "role": "C",
        "age": 22,
        "cost": 8,
        "quotation": 5,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Obert",
        "club": "Cagliari",
        "role": "B/Ds/E",
        "age": 24,
        "cost": 6,
        "quotation": 7,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Haps",
        "club": "Venezia",
        "role": "Ds/E",
        "age": 33,
        "cost": 4,
        "quotation": 5,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Coulibaly L.",
        "club": "Lecce",
        "role": "M/C",
        "age": 30,
        "cost": 3,
        "quotation": 7,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Borrelli",
        "club": "Cagliari",
        "role": "Pc",
        "age": 26,
        "cost": 3,
        "quotation": 3,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Pasalic",
        "club": "Atalanta",
        "role": "C/T",
        "age": 31,
        "cost": 2,
        "quotation": 9,
        "fvm": 16,
        "fuoriLista": null
      },
      {
        "name": "Hien",
        "club": "Atalanta",
        "role": "Dc",
        "age": 27,
        "cost": 2,
        "quotation": 8,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Zerbin",
        "club": "Frosinone",
        "role": "W",
        "age": 27,
        "cost": 2,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Walukiewicz",
        "club": "Sassuolo",
        "role": "Dd/Dc",
        "age": 26,
        "cost": 2,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Przyborek",
        "club": "Lazio",
        "role": "W/T",
        "age": 19,
        "cost": 2,
        "quotation": 1,
        "fvm": 3,
        "fuoriLista": null
      },
      {
        "name": "Fofana Y.",
        "club": "Milan",
        "role": "M/C",
        "age": 27,
        "cost": 1,
        "quotation": 6,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Frigan",
        "club": "Parma",
        "role": "A",
        "age": 23,
        "cost": 1,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Adorante",
        "club": "Venezia",
        "role": "Pc",
        "age": 26,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Delli Carri",
        "club": "Monza",
        "role": "Dc",
        "age": 27,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Varela G.",
        "club": "Monza",
        "role": "Pc",
        "age": 21,
        "cost": 1,
        "quotation": 3,
        "fvm": 3,
        "fuoriLista": null
      },
      {
        "name": "Masini",
        "club": "Frosinone",
        "role": "M/C",
        "age": 25,
        "cost": 1,
        "quotation": 2,
        "fvm": 2,
        "fuoriLista": null
      },
      {
        "name": "Gollini",
        "club": "Roma",
        "role": "Por",
        "age": 31,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "pisellini-findus",
    "name": "Pisellini Findus",
    "players": 30,
    "spent": 462,
    "remaining": 38,
    "under21": 4,
    "roster": [
      {
        "name": "Malen",
        "club": "Roma",
        "role": "Pc",
        "age": 27,
        "cost": 149,
        "quotation": 34,
        "fvm": 183,
        "fuoriLista": null
      },
      {
        "name": "Zaccagni",
        "club": "Lazio",
        "role": "W/A",
        "age": 31,
        "cost": 39,
        "quotation": 15,
        "fvm": 44,
        "fuoriLista": null
      },
      {
        "name": "Kalulu",
        "club": "Juventus",
        "role": "Dd/Dc",
        "age": 26,
        "cost": 39,
        "quotation": 14,
        "fvm": 24,
        "fuoriLista": null
      },
      {
        "name": "Rabiot",
        "club": "Milan",
        "role": "C/T",
        "age": 31,
        "cost": 37,
        "quotation": 22,
        "fvm": 64,
        "fuoriLista": null
      },
      {
        "name": "Mancini",
        "club": "Roma",
        "role": "Dc",
        "age": 30,
        "cost": 30,
        "quotation": 15,
        "fvm": 25,
        "fuoriLista": null
      },
      {
        "name": "Dybala",
        "club": "Roma",
        "role": "A",
        "age": 33,
        "cost": 25,
        "quotation": 15,
        "fvm": 34,
        "fuoriLista": null
      },
      {
        "name": "Molina N.",
        "club": "Roma",
        "role": "E",
        "age": 28,
        "cost": 21,
        "quotation": 18,
        "fvm": 44,
        "fuoriLista": null
      },
      {
        "name": "Zielinski",
        "club": "Inter",
        "role": "C",
        "age": 32,
        "cost": 17,
        "quotation": 10,
        "fvm": 21,
        "fuoriLista": null
      },
      {
        "name": "Locatelli",
        "club": "Juventus",
        "role": "M/C",
        "age": 28,
        "cost": 16,
        "quotation": 9,
        "fvm": 18,
        "fuoriLista": null
      },
      {
        "name": "Bernasconi",
        "club": "Atalanta",
        "role": "Ds/E",
        "age": 23,
        "cost": 14,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Mandas",
        "club": "Lazio",
        "role": "Por",
        "age": 25,
        "cost": 13,
        "quotation": 9,
        "fvm": 15,
        "fuoriLista": null
      },
      {
        "name": "Tourè E.",
        "club": "Parma",
        "role": "Pc",
        "age": 25,
        "cost": 11,
        "quotation": 11,
        "fvm": 22,
        "fuoriLista": null
      },
      {
        "name": "Casadei",
        "club": "Torino",
        "role": "C/T",
        "age": 23,
        "cost": 10,
        "quotation": 10,
        "fvm": 19,
        "fuoriLista": null
      },
      {
        "name": "Thuram K.",
        "club": "Juventus",
        "role": "C",
        "age": 25,
        "cost": 7,
        "quotation": 10,
        "fvm": 21,
        "fuoriLista": null
      },
      {
        "name": "Bertola",
        "club": "Udinese",
        "role": "Dd/Ds/Dc",
        "age": 23,
        "cost": 5,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Lucumì",
        "club": "Juventus",
        "role": "Dc",
        "age": 28,
        "cost": 4,
        "quotation": 8,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Comuzzo",
        "club": "Torino",
        "role": "Dc",
        "age": 21,
        "cost": 4,
        "quotation": 6,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Motta",
        "club": "Lazio",
        "role": "Por",
        "age": 21,
        "cost": 3,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      },
      {
        "name": "Boga",
        "club": "Juventus",
        "role": "W/A",
        "age": 29,
        "cost": 2,
        "quotation": 7,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Pessina",
        "club": "Monza",
        "role": "M/C",
        "age": 29,
        "cost": 2,
        "quotation": 8,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Adopo",
        "club": "Cagliari",
        "role": "M/C",
        "age": 26,
        "cost": 2,
        "quotation": 7,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Veiga D.",
        "club": "Lecce",
        "role": "Dd/E",
        "age": 24,
        "cost": 2,
        "quotation": 5,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Chukwueze",
        "club": "Milan",
        "role": "W",
        "age": 27,
        "cost": 2,
        "quotation": 5,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Palmisani",
        "club": "Frosinone",
        "role": "Por",
        "age": 22,
        "cost": 2,
        "quotation": 4,
        "fvm": 4,
        "fuoriLista": null
      },
      {
        "name": "Pierotti",
        "club": "Lecce",
        "role": "W",
        "age": 25,
        "cost": 1,
        "quotation": 5,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Obrador",
        "club": "Sassuolo",
        "role": "Ds/E",
        "age": 22,
        "cost": 1,
        "quotation": 6,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Olivera",
        "club": "Napoli",
        "role": "B/Ds/E",
        "age": 29,
        "cost": 1,
        "quotation": 6,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Zappa",
        "club": "Cagliari",
        "role": "B/Dd/E",
        "age": 27,
        "cost": 1,
        "quotation": 4,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Diallo O.",
        "club": "Parma",
        "role": "W/A",
        "age": 19,
        "cost": 1,
        "quotation": 2,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Vaz",
        "club": "Roma",
        "role": "Pc",
        "age": 19,
        "cost": 1,
        "quotation": 1,
        "fvm": 2,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "salvezza-tranquilla",
    "name": "SALVEZZA TRANQUILLA",
    "players": 25,
    "spent": 499,
    "remaining": 1,
    "under21": 1,
    "roster": [
      {
        "name": "Kolo Muani",
        "club": "Juventus",
        "role": "Pc",
        "age": 28,
        "cost": 122,
        "quotation": 26,
        "fvm": 113,
        "fuoriLista": null
      },
      {
        "name": "Dimarco",
        "club": "Inter",
        "role": "E/W",
        "age": 29,
        "cost": 75,
        "quotation": 30,
        "fvm": 133,
        "fuoriLista": null
      },
      {
        "name": "Ederson D.S.",
        "club": "Atalanta",
        "role": "M/C",
        "age": 27,
        "cost": 50,
        "quotation": 13,
        "fvm": 24,
        "fuoriLista": null
      },
      {
        "name": "Colombo",
        "club": "Genoa",
        "role": "Pc",
        "age": 24,
        "cost": 35,
        "quotation": 10,
        "fvm": 30,
        "fuoriLista": null
      },
      {
        "name": "Ostigard",
        "club": "Genoa",
        "role": "Dc",
        "age": 27,
        "cost": 25,
        "quotation": 11,
        "fvm": 20,
        "fuoriLista": null
      },
      {
        "name": "Neres",
        "club": "Napoli",
        "role": "W/A",
        "age": 29,
        "cost": 25,
        "quotation": 7,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Caprile",
        "club": "Cagliari",
        "role": "Por",
        "age": 25,
        "cost": 22,
        "quotation": 9,
        "fvm": 14,
        "fuoriLista": null
      },
      {
        "name": "Thorstvedt",
        "club": "Sassuolo",
        "role": "C/T",
        "age": 27,
        "cost": 20,
        "quotation": 10,
        "fvm": 21,
        "fuoriLista": null
      },
      {
        "name": "Cambiaghi",
        "club": "Bologna",
        "role": "W/A",
        "age": 26,
        "cost": 19,
        "quotation": 7,
        "fvm": 13,
        "fuoriLista": null
      },
      {
        "name": "Heggem",
        "club": "Bologna",
        "role": "Ds/Dc",
        "age": 27,
        "cost": 14,
        "quotation": 7,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "David",
        "club": "Juventus",
        "role": "Pc",
        "age": 26,
        "cost": 10,
        "quotation": 8,
        "fvm": 19,
        "fuoriLista": null
      },
      {
        "name": "Cacciamani",
        "club": "Torino",
        "role": "E/W",
        "age": 19,
        "cost": 10,
        "quotation": 6,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Kaiki",
        "club": "Como",
        "role": "Ds/E",
        "age": 23,
        "cost": 8,
        "quotation": 7,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Basic",
        "club": "Venezia",
        "role": "M/C",
        "age": 30,
        "cost": 8,
        "quotation": 7,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Circati",
        "club": "Parma",
        "role": "Dc",
        "age": 23,
        "cost": 8,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Di Gregorio",
        "club": "Juventus",
        "role": "Por",
        "age": 29,
        "cost": 7,
        "quotation": 9,
        "fvm": 20,
        "fuoriLista": null
      },
      {
        "name": "Bernabè",
        "club": "Parma",
        "role": "C",
        "age": 25,
        "cost": 6,
        "quotation": 7,
        "fvm": 18,
        "fuoriLista": null
      },
      {
        "name": "Miranda J.",
        "club": "Bologna",
        "role": "Ds/E",
        "age": 26,
        "cost": 6,
        "quotation": 8,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Ismajli",
        "club": "Torino",
        "role": "Dc",
        "age": 30,
        "cost": 6,
        "quotation": 7,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Mitaj",
        "club": "Genoa",
        "role": "Ds/E",
        "age": 23,
        "cost": 6,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Zè Pedro",
        "club": "Cagliari",
        "role": "Dd/Dc",
        "age": 29,
        "cost": 5,
        "quotation": 6,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Pedersen",
        "club": "Torino",
        "role": "Dd/E",
        "age": 26,
        "cost": 5,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Buongiorno",
        "club": "Napoli",
        "role": "Dc",
        "age": 27,
        "cost": 4,
        "quotation": 7,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Winks",
        "club": "Cagliari",
        "role": "M/C",
        "age": 30,
        "cost": 2,
        "quotation": 7,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Piotrowski",
        "club": "Udinese",
        "role": "M/C",
        "age": 29,
        "cost": 1,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      }
    ]
  },
  {
    "slug": "totoriino-fc",
    "name": "TotoRiino FC",
    "players": 30,
    "spent": 469,
    "remaining": 31,
    "under21": 5,
    "roster": [
      {
        "name": "Baturina",
        "club": "Como",
        "role": "T",
        "age": 23,
        "cost": 66,
        "quotation": 18,
        "fvm": 50,
        "fuoriLista": null
      },
      {
        "name": "Martinez Jo.",
        "club": "Inter",
        "role": "Por",
        "age": 28,
        "cost": 65,
        "quotation": 17,
        "fvm": 32,
        "fuoriLista": null
      },
      {
        "name": "Santos A.",
        "club": "Napoli",
        "role": "W/A",
        "age": 24,
        "cost": 40,
        "quotation": 15,
        "fvm": 29,
        "fuoriLista": null
      },
      {
        "name": "Wesley",
        "club": "Roma",
        "role": "E",
        "age": 23,
        "cost": 38,
        "quotation": 16,
        "fvm": 40,
        "fuoriLista": null
      },
      {
        "name": "Esposito F.P.",
        "club": "Inter",
        "role": "Pc",
        "age": 21,
        "cost": 31,
        "quotation": 16,
        "fvm": 45,
        "fuoriLista": null
      },
      {
        "name": "Pinamonti",
        "club": "Sassuolo",
        "role": "Pc",
        "age": 27,
        "cost": 26,
        "quotation": 12,
        "fvm": 26,
        "fuoriLista": null
      },
      {
        "name": "Gila",
        "club": "Milan",
        "role": "Dc",
        "age": 26,
        "cost": 26,
        "quotation": 12,
        "fvm": 16,
        "fuoriLista": null
      },
      {
        "name": "Ramon",
        "club": "Como",
        "role": "Dc",
        "age": 21,
        "cost": 25,
        "quotation": 10,
        "fvm": 16,
        "fuoriLista": null
      },
      {
        "name": "Vergara",
        "club": "Napoli",
        "role": "W/T",
        "age": 23,
        "cost": 22,
        "quotation": 8,
        "fvm": 17,
        "fuoriLista": null
      },
      {
        "name": "Spinazzola",
        "club": "Napoli",
        "role": "Ds/E",
        "age": 33,
        "cost": 22,
        "quotation": 8,
        "fvm": 12,
        "fuoriLista": null
      },
      {
        "name": "Pellegrino M.",
        "club": "Fiorentina",
        "role": "Pc",
        "age": 25,
        "cost": 20,
        "quotation": 15,
        "fvm": 29,
        "fuoriLista": null
      },
      {
        "name": "Kelly L.",
        "club": "Juventus",
        "role": "Ds/Dc",
        "age": 28,
        "cost": 18,
        "quotation": 6,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Bernardeschi",
        "club": "Bologna",
        "role": "W/T",
        "age": 32,
        "cost": 12,
        "quotation": 9,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Vitik",
        "club": "Bologna",
        "role": "Dc",
        "age": 23,
        "cost": 10,
        "quotation": 5,
        "fvm": 6,
        "fuoriLista": null
      },
      {
        "name": "Ferguson",
        "club": "Bologna",
        "role": "M/C",
        "age": 27,
        "cost": 6,
        "quotation": 8,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Fitz-Jim",
        "club": "Torino",
        "role": "M/C",
        "age": 23,
        "cost": 6,
        "quotation": 5,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Pedraza",
        "club": "Lazio",
        "role": "Ds/E",
        "age": 30,
        "cost": 5,
        "quotation": 5,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Bakola",
        "club": "Sassuolo",
        "role": "C/T",
        "age": 19,
        "cost": 5,
        "quotation": 5,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Liberali",
        "club": "Como",
        "role": "T",
        "age": 19,
        "cost": 4,
        "quotation": 5,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Vitinha O.",
        "club": "Genoa",
        "role": "A",
        "age": 26,
        "cost": 3,
        "quotation": 8,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Ellertsson",
        "club": "Genoa",
        "role": "E/C",
        "age": 24,
        "cost": 3,
        "quotation": 7,
        "fvm": 11,
        "fuoriLista": null
      },
      {
        "name": "Odgaard",
        "club": "Bologna",
        "role": "T",
        "age": 27,
        "cost": 3,
        "quotation": 7,
        "fvm": 10,
        "fuoriLista": null
      },
      {
        "name": "Valle",
        "club": "Como",
        "role": "Ds/E",
        "age": 22,
        "cost": 3,
        "quotation": 6,
        "fvm": 9,
        "fuoriLista": null
      },
      {
        "name": "Provedel",
        "club": "Inter",
        "role": "Por",
        "age": 32,
        "cost": 3,
        "quotation": 2,
        "fvm": 3,
        "fuoriLista": null
      },
      {
        "name": "Lang",
        "club": "Napoli",
        "role": "A",
        "age": 27,
        "cost": 2,
        "quotation": 3,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Zapata D.",
        "club": "Torino",
        "role": "Pc",
        "age": 35,
        "cost": 1,
        "quotation": 6,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "Romano",
        "club": "Cagliari",
        "role": "M/C",
        "age": 20,
        "cost": 1,
        "quotation": 6,
        "fvm": 8,
        "fuoriLista": null
      },
      {
        "name": "De Winter",
        "club": "Milan",
        "role": "Dd/Dc",
        "age": 24,
        "cost": 1,
        "quotation": 4,
        "fvm": 7,
        "fuoriLista": null
      },
      {
        "name": "Smolcic I.",
        "club": "Como",
        "role": "Dd/E",
        "age": 26,
        "cost": 1,
        "quotation": 4,
        "fvm": 5,
        "fuoriLista": null
      },
      {
        "name": "Di Gennaro",
        "club": "Inter",
        "role": "Por",
        "age": 33,
        "cost": 1,
        "quotation": 1,
        "fvm": 1,
        "fuoriLista": null
      }
    ]
  }
];
export const formations = [
  { name: "3-4-1-2", slots: ["Por","Dc","Dc","Dc","E","M/C","M/C","E","T","A/Pc","A/Pc"] },
  { name: "3-4-2-1", slots: ["Por","Dc","Dc","Dc","E","M/C","M/C","E","T/A","T/A","Pc"] },
  { name: "3-4-3", slots: ["Por","Dc","Dc","Dc","E","M/C","M/C","E","A","Pc","A"] },
  { name: "3-5-1-1", slots: ["Por","Dc","Dc","Dc","E","M/C","M/C","M/C","E","T/A","Pc"] },
  { name: "3-5-2", slots: ["Por","Dc","Dc","Dc","E","M/C","M/C","M/C","E","A/Pc","A/Pc"] },
  { name: "4-1-4-1", slots: ["Por","Dd","Dc","Dc","Ds","M","W","C/T","C/T","W","Pc"] },
  { name: "4-2-3-1", slots: ["Por","Dd","Dc","Dc","Ds","M/C","M/C","W/A","T","W/A","Pc"] },
  { name: "4-3-1-2", slots: ["Por","Dd","Dc","Dc","Ds","M/C","C","M/C","T","A/Pc","A/Pc"] },
  { name: "4-3-3", slots: ["Por","Dd","Dc","Dc","Ds","M/C","C","M/C","A","Pc","A"] },
  { name: "4-4-1-1", slots: ["Por","Dd","Dc","Dc","Ds","E/W","M/C","M/C","E/W","T/A","Pc"] },
  { name: "4-4-2", slots: ["Por","Dd","Dc","Dc","Ds","E/W","M/C","M/C","E/W","A/Pc","A/Pc"] },
];
export function getTeam(slug: string){ return teams.find((team) => team.slug === slug); }

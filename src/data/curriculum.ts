export interface BouwContent {
  description: string;
  learningGoals: string[];
  activities: string[];
}

export interface Bouw {
  onderbouw?: BouwContent | string;
  middenbouw?: BouwContent | string;
  bovenbouw?: BouwContent | string;
}

export interface Resource {
  title: string;
  type: 'boek' | 'excursie';
  description?: string;
}

export interface Theme {
  id: string;
  name: string;
  description?: string;
  introduction?: string;
  bouw: Bouw;
  resources?: Resource[];
}

export interface CurriculumData {
  coreConcept: {
    strategy: string;
    framework: string;
    methodology: string;
  };
  themes: Theme[];
  didactics: string[];
}

export const themes: CurriculumData = {
  coreConcept: {
    strategy: "70/30 Rule (70% National SLO standards, 30% Regional West-Friesland context)",
    framework: "Biesta's Triple Qualification (Qualification, Socialization, Subjectification)",
    methodology: "5-Phase Structure (Goal -> Narrative -> Activation/Excursion -> Concretization/Research -> Closing)"
  },
  themes: [
    {
      id: "westfriese-omringdijk",
      name: "De West-Friese Omringdijk",
      introduction: "De West-Friese Omringdijk is een van de oudste dijken van Nederland en vertelt het verhaal van de eeuwige strijd tegen het water. Deze wereld verbindt lokale geschiedenis met actuele klimaatvraagstukken.",
      bouw: {
        onderbouw: {
          description: "Zintuiglijke ervaring, de mythe van de Waterwolf",
          learningGoals: [
            "Kinderen ervaren de dijk met al hun zintuigen",
            "Kennis maken met het verhaal van de Waterwolf",
            "Begrijpen dat water krachtig en gevaarlijk kan zijn"
          ],
          activities: [
            "Dijkwandeling met zintuiglijke opdrachten",
            "Verhaal van de Waterwolf vertellen en naspelen",
            "Waterproeven: wat drijft en wat zinkt?"
          ]
        },
        middenbouw: {
          description: "Landschapssporen (wielen), dijkbouw, paalwormcrisis",
          learningGoals: [
            "Herkenning van sporen in het landschap (wielen)",
            "Begrijpen hoe dijken worden gebouwd en onderhouden",
            "Kennis van historische crises zoals de paalworm"
          ],
          activities: [
            "Excursie naar wielen en dijkrestanten",
            "Bouwen van een minidijk in de zandbak",
            "Onderzoek naar de paalwormcrisis"
          ]
        },
        bovenbouw: {
          description: "Systeemdenken, waterbeheer, klimaatadaptatie",
          learningGoals: [
            "Systeemdenken toepassen op waterbeheer",
            "Begrijpen van klimaatadaptatie strategieën",
            "Kritisch nadenken over toekomstige wateruitdagingen"
          ],
          activities: [
            "Waterbeheersysteem in kaart brengen",
            "Debat over klimaatadaptatie maatregelen",
            "Onderzoek naar toekomstscenario's"
          ]
        }
      },
      resources: [
        { title: "Het verhaal van de Waterwolf", type: "boek", description: "Kinderboek over de legende" },
        { title: "Dijkwandeling West-Friese Omringdijk", type: "excursie", description: "Begeleide wandeling langs de dijk" },
        { title: "Waterbeheer in West-Friesland", type: "boek", description: "Informatief boek voor bovenbouw" }
      ]
    },
    {
      id: "grieken-romeinen",
      name: "Grieken en Romeinen",
      introduction: "Ontdek hoe de Romeinen en de vrije Friezen elkaar ontmoetten aan de grens van het Romeinse Rijk. Deze wereld verbindt lokale geschiedenis met klassieke beschavingen.",
      bouw: {
        onderbouw: {
          description: "Schatgraven, vroeger versus nu",
          learningGoals: [
            "Verschil begrijpen tussen vroeger en nu",
            "Kennis maken met archeologie",
            "Verwondering over oude voorwerpen"
          ],
          activities: [
            "Archeologische schatgraverij in de zandbak",
            "Vergelijken van oude en nieuwe voorwerpen",
            "Verhalen over het leven in de Romeinse tijd"
          ]
        },
        middenbouw: {
          description: "Ontmoeting aan de grens, handel, Romeinen versus vrije Friezen",
          learningGoals: [
            "Begrijpen van grenzen en ontmoetingen",
            "Kennis van handel en uitwisseling",
            "Inzicht in de relatie tussen Romeinen en Friezen"
          ],
          activities: [
            "Bezoek aan archeologische vindplaats",
            "Handelsspel: ruilen zoals in de Romeinse tijd",
            "Rollenspel: Romeinen vs Vrije Friezen"
          ]
        },
        bovenbouw: {
          description: "Macht, democratie, rechtsstaat, Friese opstand",
          learningGoals: [
            "Begrijpen van machtsstructuren",
            "Kennis van democratie en rechtspraak",
            "Inzicht in de Friese Opstand"
          ],
          activities: [
            "Onderzoek naar machtsstructuren",
            "Debat over democratie en vrijheid",
            "Historisch onderzoek naar de Friese Opstand"
          ]
        }
      },
      resources: [
        { title: "Archeologie voor kinderen", type: "boek" },
        { title: "Bezoek Huis van Hilde", type: "excursie", description: "Archeologisch museum" }
      ]
    },
    {
      id: "de-polder",
      name: "De Polder",
      introduction: "De polders van West-Friesland zijn meesterwerken van waterbeheer en ruimtelijke ordening. Van de Beemster tot moderne uitdagingen.",
      bouw: {
        onderbouw: {
          description: "Jan Leeghwater (tovenaar), vormen en lijnen",
          learningGoals: [
            "Kennis maken met Jan Leeghwater als 'tovenaar'",
            "Herkenning van vormen en lijnen in het landschap",
            "Begrijpen dat mensen het landschap kunnen veranderen"
          ],
          activities: [
            "Verhaal over Jan Leeghwater",
            "Vormen zoeken in het landschap",
            "Polder tekenen met rechte lijnen"
          ]
        },
        middenbouw: {
          description: "Meetkunde (Beemster), drainage technieken (wind naar stoom)",
          learningGoals: [
            "Meetkunde toepassen op de Beemster",
            "Begrijpen van drainage technieken",
            "Ontwikkeling van wind- naar stoomkracht"
          ],
          activities: [
            "Beemster opmeten en in kaart brengen",
            "Onderzoek naar molens en gemalen",
            "Excursie naar de Beemster"
          ]
        },
        bovenbouw: {
          description: "Ruimtelijke ordening, conflicterende belangen (datacenters versus landbouw)",
          learningGoals: [
            "Begrijpen van ruimtelijke ordening",
            "Kritisch nadenken over belangenconflicten",
            "Onderzoek naar duurzame ruimtelijke ontwikkeling"
          ],
          activities: [
            "Debat over datacenters vs landbouw",
            "Ruimtelijk plan maken voor de toekomst",
            "Onderzoek naar duurzame oplossingen"
          ]
        }
      },
      resources: [
        { title: "Jan Leeghwater: Tovenaar van de Polder", type: "boek" },
        { title: "Beemster excursie", type: "excursie" }
      ]
    },
    {
      id: "gouden-eeuw",
      name: "De Gouden Eeuw",
      bouw: {
        onderbouw: "Specerijen (geur), pakhuis als schatkist",
        middenbouw: "Havenleven, scheepsbouw (fluitschip), handel",
        bovenbouw: "Multiperspectiviteit, ethiek van kolonialisme, slavernij (WIC), J.P. Coen controverse"
      }
    },
    {
      id: "zuiderzee-ijsselmeer",
      name: "Van Zuiderzee naar IJsselmeer",
      bouw: {
        onderbouw: "Van zout naar zoet: proeven, voelen en ontdekken",
        middenbouw: "Overgang van zout naar zoet water",
        bovenbouw: "Ecologische systemen, sociale impact van de Zuiderzeewet op vissers"
      }
    },
    {
      id: "kasteel-radboud",
      name: "Kasteel Radboud",
      bouw: {
        onderbouw: "Kastelen ontdekken: torens, verhalen en ridderleven",
        middenbouw: "Rollen (page, kruidenier), middeleeuwse ambachten",
        bovenbouw: "Macht en recht, dwangburcht functie, ontwikkeling van de rechtsstaat"
      }
    },
    {
      id: "burgers-stoommachines",
      name: "Burgers en Stoommachines",
      bouw: {
        onderbouw: "Eerste machines: geluiden, beweging en eenvoudige werktuigen",
        middenbouw: "Stoomkracht, fabriekswerk",
        bovenbouw: "Sociale kwestie, kinderrechten (Van Houten), democratie"
      }
    },
    {
      id: "tuin-van-europa",
      name: "De Tuin van Europa",
      bouw: {
        onderbouw: "Groei en verzorging, school als proeftuin",
        middenbouw: "Nanne Groot, geschiedenis van de zaadhandel",
        bovenbouw: "Biotechnologie, genetica (Mendel/DNA), ethische voedselzekerheid (Seed Valley)"
      }
    }
  ],
  didactics: [
    "Rich Texts",
    "Excursion Guide",
    "Framework 2.0"
  ]
};

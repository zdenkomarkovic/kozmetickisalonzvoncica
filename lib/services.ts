export type ServiceItem = {
  name: string;
  duration: string;
  price: string;
  /** Kratak opis usluge – koristi se u sekciji "Upoznajte usluge" na početnoj strani */
  description: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  /** Kratak opis za pregled na početnoj strani */
  summary: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "manikir",
    label: "Manikir",
    summary: "Estetski manikir sa rubber bazom, bojom ili french dizajnom.",
    items: [
      {
        name: "Estetski manikir + rubber baza",
        duration: "1 sat, 30 minuta",
        price: "2.300 RSD",
        description:
          "Klasična nega noktiju uz nanošenje rubber baze koja štiti prirodni nokat i produžava trajanje manikira i do tri nedelje.",
      },
      {
        name: "Estetski manikir + rubber baza + boja",
        duration: "1 sat, 30 minuta",
        price: "2.600 RSD",
        description:
          "Isti postupak nadograđen gel lakom u boji po želji, za završen i uredan izgled ruku.",
      },
      {
        name: "Estetski manikir + rubber baza + french",
        duration: "1 sat, 30 minuta",
        price: "2.900 RSD",
        description:
          "Estetski manikir sa rubber bazom nadograđen preciznim french dizajnom, za klasičan i elegantan izgled noktiju.",
      },
    ],
  },
  {
    id: "pedikir",
    label: "Pedikir",
    summary: "Aparatni ruski i medicinski pedikir, gel lak i french dodaci.",
    items: [
      {
        name: "Aparatni ruski pedikir",
        duration: "1 sat",
        price: "2.500 RSD",
        description:
          "Aparatno uklanjanje zadebljale kože i oblikovanje noktiju, bez sečenja – bezbedan i precizan postupak.",
      },
      {
        name: "Ruski pedikir + gel lak",
        duration: "1 sat, 30 minuta",
        price: "3.500 RSD",
        description:
          "Ruski pedikir nadograđen gel lakom u boji, za negovana i vidljivo uređena stopala.",
      },
      {
        name: "Ruski pedikir + rubber baza + french",
        duration: "1 sat, 30 minuta",
        price: "3.900 RSD",
        description:
          "Kompletna nega stopala uz rubber bazu i french dizajn, za dugotrajan i doteran završni izgled.",
      },
      {
        name: "Medicinski pedikir – manje problematičan",
        duration: "1 sat",
        price: "2.700 RSD",
        description:
          "Aparatni tretman za blaža stanja poput suve kože i sitnih zadebljanja, uz pažljivu i bezbolnu obradu.",
      },
      {
        name: "Medicinski pedikir – više problematičan",
        duration: "1 sat",
        price: "3.200 RSD",
        description:
          "Detaljnija obrada za izraženije žuljeve, pukotine i zadebljanja, prilagođena stanju stopala svakog klijenta.",
      },
      {
        name: "Gel lak – dodatak uz medicinski pedikir",
        duration: "30 minuta",
        price: "1.500 RSD",
        description:
          "Gel lak u boji kao dopuna medicinskom pedikiru, za uredan izgled nakon tretmana.",
      },
      {
        name: "French – dodatak uz medicinski pedikir",
        duration: "30 minuta",
        price: "1.900 RSD",
        description:
          "French dizajn kao dopuna medicinskom pedikiru, za dodatno doteran završni izgled noktiju.",
      },
      {
        name: "Protetika jednog nokta",
        duration: "30 minuta",
        price: "1.500 RSD",
        description:
          "Nadogradnja ili popravka oštećenog nokta gelom, kako bi izgledao prirodno i ujednačeno sa ostalima.",
      },
    ],
  },
  {
    id: "depilacija",
    label: "Depilacija šećernom pastom",
    summary:
      "Depilacija nogu, ruku, prepona i brazilska depilacija šećernom pastom.",
    items: [
      {
        name: "Depilacija celih nogu šećernom pastom",
        duration: "45 minuta",
        price: "1.900 RSD",
        description:
          "Depilacija celih nogu prirodnom šećernom pastom koja uklanja dlačice u pravcu rasta i smanjuje urastanje.",
      },
      {
        name: "Depilacija celih nogu + dubokih prepona šećernom pastom",
        duration: "1 sat",
        price: "2.800 RSD",
        description:
          "Depilacija celih nogu i dubokih prepona u jednom terminu, za uštedu vremena i ujednačen rezultat.",
      },
      {
        name: "Depilacija celih nogu + brazilska depilacija šećernom pastom",
        duration: "1 sat, 10 minuta",
        price: "3.200 RSD",
        description:
          "Depilacija celih nogu i brazilska depilacija u istoj poseti, za potpunu glatkoću bez dodatnih dolazaka.",
      },
      {
        name: "Depilacija celih nogu + ruku + nausnica + brazilska šećernom pastom",
        duration: "1 sat, 30 minuta",
        price: "4.100 RSD",
        description:
          "Kompletan paket depilacije za noge, ruke, gornju usnu i intimnu zonu – najisplativiji izbor za redovne klijente.",
      },
      {
        name: "Depilacija pola nogu šećernom pastom",
        duration: "30 minuta",
        price: "1.300 RSD",
        description:
          "Depilacija nogu do kolena šećernom pastom, brz izbor kada nije potrebna depilacija celih nogu.",
      },
      {
        name: "Depilacija pola nogu + dubokih prepona šećernom pastom",
        duration: "40 minuta",
        price: "2.200 RSD",
        description:
          "Depilacija nogu do kolena uz duboke prepone, obavljeno u jednom terminu.",
      },
      {
        name: "Depilacija pola nogu + brazilska depilacija šećernom pastom",
        duration: "50 minuta",
        price: "2.500 RSD",
        description:
          "Depilacija nogu do kolena kombinovana sa brazilskom depilacijom u istoj poseti.",
      },
      {
        name: "Depilacija pola nogu + ruku + nausnica + brazilska šećernom pastom",
        duration: "1 sat, 10 minuta",
        price: "3.700 RSD",
        description:
          "Praktičan paket za pola nogu, ruke, gornju usnu i intimnu zonu u jednom terminu.",
      },
      {
        name: "Depilacija celih ruku šećernom pastom",
        duration: "30 minuta",
        price: "1.100 RSD",
        description:
          "Depilacija celih ruku šećernom pastom, nežna prema koži i sa dugotrajnim rezultatom.",
      },
      {
        name: "Depilacija dubokih prepona šećernom pastom",
        duration: "20 minuta",
        price: "1.400 RSD",
        description:
          "Depilacija dubokih prepona šećernom pastom, precizna i pažljiva obrada osetljive zone.",
      },
      {
        name: "Brazilska depilacija šećernom pastom",
        duration: "30 minuta",
        price: "1.600 RSD",
        description:
          "Potpuna intimna depilacija šećernom pastom, uz posebnu pažnju posvećenu osetljivoj koži.",
      },
      {
        name: "Depilacija nausnica šećernom pastom",
        duration: "15 minuta",
        price: "500 RSD",
        description:
          "Brza depilacija gornje usne šećernom pastom, idealna kao dopuna drugim tretmanima.",
      },
    ],
  },
  {
    id: "masaze",
    label: "Masaže",
    summary:
      "Relax, terapeutska, masaža svećom, pindama i tretman toplom čokoladom.",
    items: [
      {
        name: "Relax masaža",
        duration: "1 sat",
        price: "3.000 RSD",
        description:
          "Klasična masaža celog tela za opuštanje napetih mišića i smanjenje stresa.",
      },
      {
        name: "Terapeutska masaža + ultrazvuk",
        duration: "50 minuta",
        price: "3.500 RSD",
        description:
          "Dublja masaža uz ultrazvučnu terapiju, namenjena ublažavanju bolova i napetosti u mišićima i zglobovima.",
      },
      {
        name: "Piling tela + blaga masaža",
        duration: "1 sat",
        price: "4.000 RSD",
        description:
          "Piling tela uklanja odumrle ćelije kože, a blaga masaža koja sledi ostavlja kožu mekom i negovanom.",
      },
      {
        name: "Masaža svećom",
        duration: "1 sat",
        price: "4.000 RSD",
        description:
          "Masaža toplim uljem iz sveće hrani i hidrira kožu dok istovremeno opušta telo.",
      },
      {
        name: "Masaža pindama",
        duration: "1 sat",
        price: "5.000 RSD",
        description:
          "Masaža vrućim zavežljajima punjenim lekovitim biljem, za duboko opuštanje mišića i terapeutski efekat.",
      },
      {
        name: "Tretman tela toplom čokoladom",
        duration: "1 sat, 30 minuta",
        price: "5.000 RSD",
        description:
          "Piling i umotavanje u topli kakao maslac za hidrataciju, sjaj i osećaj potpunog uživanja.",
      },
      {
        name: "Aqwarela masaža",
        duration: "1 sat",
        price: "4.000 RSD",
        description:
          "Masaža koja kombinuje tehnike opuštanja i drenaže za osećaj lakoće i svežine u telu.",
      },
    ],
  },
  {
    id: "lice",
    label: "Tretmani lica",
    summary: "Hidratacija, ultrazvučna špatula, antiage i dermapen tretmani.",
    items: [
      {
        name: "Hidratacija lica",
        duration: "1 sat",
        price: "4.000 RSD",
        description:
          "Tretman koji vraća vlagu koži lica, idealan za suvu i dehidriranu kožu.",
      },
      {
        name: "Tretman osnovne nege lica",
        duration: "1 sat",
        price: "3.000 RSD",
        description:
          "Čišćenje i nega lica prilagođeni tipu kože, za svež i odmoran izgled.",
      },
      {
        name: "Osnovni higijenski tretman lica + ultrazvučna špatula",
        duration: "2 sata",
        price: "4.500 RSD",
        description:
          "Dubinsko čišćenje pora uz ultrazvučnu špatulu koja bezbolno uklanja nečistoće i mrtve ćelije kože.",
      },
      {
        name: "Osnovni higijenski tretman lica + ultrazvučna špatula – aknozna koža",
        duration: "2 sata",
        price: "6.000 RSD",
        description:
          "Isti tretman prilagođen akneznoj koži, uz dodatnu pažnju na upaljena i problematična mesta.",
      },
      {
        name: "Osnovni higijenski tretman lica + ultrazvučna špatula + hidratacija",
        duration: "2 sata",
        price: "5.000 RSD",
        description:
          "Higijensko čišćenje i obrada ultrazvučnom špatulom nadograđeni hidratacijom za dodatnu negu nakon čišćenja.",
      },
      {
        name: "Osnovni higijenski tretman lica + ultrazvučna špatula + antiage",
        duration: "2 sata",
        price: "7.000 RSD",
        description:
          "Higijensko čišćenje kože kombinovano sa antiage negom, za zategnutiji i mladalački izgled lica.",
      },
      {
        name: "Osnovni tretman lica ultrazvučnom špatulom",
        duration: "1 sat",
        price: "3.000 RSD",
        description:
          "Kraća verzija čišćenja lica ultrazvučnom špatulom, za brzo osveženje kože.",
      },
      {
        name: "Antiage tretman lica",
        duration: "1 sat",
        price: "6.000 RSD",
        description:
          "Tretman usmeren na sitne bore i gubitak elastičnosti, za zategnutiju i podmlađenu kožu.",
      },
      {
        name: "Maderoterapija lica + ručna masaža",
        duration: "30 minuta",
        price: "3.000 RSD",
        description:
          "Ručna tehnika masaže lica koja oblikuje konture, poboljšava cirkulaciju i daje efekat prirodnog liftinga.",
      },
      {
        name: "Dermapen + mezoterapija lica iglama + hidratacija + antiage tretman",
        duration: "1 sat",
        price: "10.000 RSD",
        description:
          "Kombinovani mikroiglični tretman sa mezoterapijom, hidratacijom i antiage negom, za sveobuhvatnu obnovu kože u jednoj poseti.",
      },
    ],
  },
  {
    id: "telo",
    label: "Tretmani tela",
    summary: "Maderoterapija, vacum fit, parafango blato i podizanje gluteusa.",
    items: [
      {
        name: "Maderoterapija – 30 minuta",
        duration: "30 minuta",
        price: "1.500 RSD",
        description:
          "Kraća seansa maderoterapije za oblikovanje tela i podsticanje limfne drenaže.",
      },
      {
        name: "Maderoterapija – 45 minuta",
        duration: "45 minuta",
        price: "1.800 RSD",
        description:
          "Duža seansa maderoterapije za temeljitiju obradu problematičnih zona i izraženiji efekat.",
      },
      {
        name: "Vacum fit pakovanje",
        duration: "1 sat",
        price: "2.500 RSD",
        description:
          "Vakuumski tretman koji podstiče cirkulaciju i pomaže u smanjenju izgleda celulita.",
      },
      {
        name: "Vacum fit tretman + masaža tela",
        duration: "1 sat, 30 minuta",
        price: "3.500 RSD",
        description:
          "Vacum fit tretman nadograđen masažom tela, za dodatno opuštanje i bolji rezultat.",
      },
      {
        name: "Tretman tela ice glinom",
        duration: "1 sat",
        price: "4.000 RSD",
        description:
          "Tretman hladnom glinom koji rashlađuje, zateže i detoksikuje kožu tela.",
      },
      {
        name: "Anesi parafango blato",
        duration: "1 sat",
        price: "2.500 RSD",
        description:
          "Blato bogato mineralima koje hrani kožu i podstiče detoksikaciju organizma.",
      },
      {
        name: "Tretman tela parafango blatom + masaža tela",
        duration: "1 sat",
        price: "3.500 RSD",
        description:
          "Tretman parafango blatom uz masažu tela, za pojačan opuštajući i negujući efekat.",
      },
      {
        name: "Ultrazvučna vacumska masaža + drenaža + crio terapija",
        duration: "1 sat",
        price: "2.500 RSD",
        description:
          "Kombinacija vakuumske masaže, limfne drenaže i krio terapije za osećaj lakoće i zategnutije telo.",
      },
      {
        name: "Aparatno vacumsko podizanje gluteusa",
        duration: "45 minuta",
        price: "2.000 RSD",
        description:
          "Vakuumski tretman koji radi na obliku i čvrstini gluteusa.",
      },
      {
        name: "Vacumsko podizanje gluteusa – paket 10 tretmana",
        duration: "45 minuta",
        price: "16.000 RSD",
        description:
          "Serija od 10 tretmana podizanja gluteusa za trajniji i izraženiji rezultat.",
      },
      {
        name: "Maderoterapija 30 min – paket 10 tretmana",
        duration: "30 minuta",
        price: "13.000 RSD",
        description:
          "Serija od 10 kraćih seansi maderoterapije, najbolji izbor za postepeno oblikovanje tela.",
      },
      {
        name: "Maderoterapija 45 min – paket 10 tretmana",
        duration: "45 minuta",
        price: "15.000 RSD",
        description:
          "Serija od 10 dužih seansi maderoterapije za temeljit rad na problematičnim zonama.",
      },
      {
        name: "10x maderoterapija + 5x vacum fit",
        duration: "45 minuta",
        price: "18.000 RSD",
        description:
          "Kombinovani paket maderoterapije i vacum fit tretmana za sveobuhvatan rad na obliku tela.",
      },
      {
        name: "10x maderoterapija + 5x ultrazvučna vakuumska masaža",
        duration: "45 minuta",
        price: "18.000 RSD",
        description:
          "Kombinovani paket maderoterapije i ultrazvučne vakuumske masaže, za dodatnu podršku cirkulaciji i drenaži.",
      },
    ],
  },
  {
    id: "obrve",
    label: "Obrve",
    summary: "Korekcija i farbanje obrva.",
    items: [
      {
        name: "Korekcija obrva voskom / pincetom",
        duration: "15 minuta",
        price: "500 RSD",
        description: "Oblikovanje obrva prema crtama lica, precizno i uredno.",
      },
      {
        name: "Farbanje obrva",
        duration: "20 minuta",
        price: "700 RSD",
        description: "Bojenje obrva za izraženiji pogled bez svakodnevnog šminkanja.",
      },
      {
        name: "Korekcija obrva + farbanje obrva + depilacija nausnica gratis",
        duration: "30 minuta",
        price: "950 RSD",
        description:
          "Kompletno oblikovanje i bojenje obrva, uz depilaciju nausnice na poklon.",
      },
    ],
  },
];

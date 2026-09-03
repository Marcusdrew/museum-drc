import masqueMukyeem from "@/assets/mnrdc/masque-mukyeem.jpg";
import masqueBwoom from "@/assets/mnrdc/masque-bwoom.jpg";
import masqueMbangu from "@/assets/mnrdc/masque-mbangu.jpg";
import masqueChokwe from "@/assets/mnrdc/masque-chokwe.jpg";
import masquePendeIvoire from "@/assets/mnrdc/masque-pende-ivoire.jpg";
import statueSongye from "@/assets/mnrdc/statue-songye.jpg";
import siegeLuba from "@/assets/mnrdc/siege-luba.jpg";
import tissuShoowa from "@/assets/mnrdc/tissu-shoowa.jpg";
import instrumentMusique from "@/assets/mnrdc/instrument-musique.jpg";
import costumeDanseur from "@/assets/mnrdc/costume-danseur.jpg";

export interface Oeuvre {
  id: string;
  nom: string;
  peuple: string;
  region: string;
  categorie: "masques" | "sculptures" | "textiles" | "instruments" | "regalia";
  epoque: string;
  matieres: string;
  salle: string;
  resume: string;
  recit: string;
  image: string;
  credit: string;
}

export const oeuvres: Oeuvre[] = [
  {
    id: "masque-mukyeem",
    nom: "Masque-casque Mukyeem",
    peuple: "Kuba",
    region: "Kasaï",
    categorie: "masques",
    epoque: "XIXe – XXe siècle",
    matieres: "Bois, raphia, cauris, perles de verre, plumes",
    salle: "Salle I — Royautés",
    resume:
      "Masque royal kuba au front bombé, entièrement recouvert de cauris et de perles : l'emblème du pouvoir sacré.",
    recit:
      "Le mukyeem incarne Woot, l'ancêtre mythique de la confédération kuba. Sa trompe recourbée, ses milliers de cauris cousus un à un et sa crête de plumes signalent la richesse et l'autorité du nyim, le roi. Porté lors des funérailles de dignitaires et des grandes cérémonies de cour, il transforme le danseur en présence ancestrale. Les losanges qui structurent ses surfaces sont les mêmes que ceux gravés sur la façade du Musée national à Kinshasa : un motif devenu signature architecturale du pays.",
    image: masqueMukyeem,
    credit: "Wikimedia Commons — CC BY-SA 4.0",
  },
  {
    id: "masque-bwoom",
    nom: "Masque-casque Bwoom",
    peuple: "Kuba",
    region: "Kasaï",
    categorie: "masques",
    epoque: "Milieu du XIXe siècle",
    matieres: "Bois, cuivre repoussé, cauris, perles, peau",
    salle: "Salle I — Royautés",
    resume:
      "Large front bombé, plaques de cuivre et regard mi-clos : le contrepoint populaire du pouvoir royal kuba.",
    recit:
      "Bwoom apparaît dans la trilogie des masques royaux kuba, aux côtés de Mwaash aMbooy et de Ngaady aMwaash. Selon les traditions de cour, il représente tour à tour le prince rival, l'homme du peuple ou l'esprit de la nature — une voix de contestation autorisée au cœur même du rituel. Le cuivre martelé qui recouvre le visage capte la lumière des feux nocturnes et fait littéralement vibrer le masque pendant la danse.",
    image: masqueBwoom,
    credit: "Cleveland Museum of Art — CC0",
  },
  {
    id: "masque-mbangu",
    nom: "Masque Mbangu",
    peuple: "Pende",
    region: "Kwilu",
    categorie: "masques",
    epoque: "XXe siècle",
    matieres: "Bois, pigments, fibres",
    salle: "Salle II — Rites et passages",
    resume:
      "Visage volontairement asymétrique, mi-noir mi-blanc : le masque de l'infortune et de la guérison.",
    recit:
      "Mbangu figure l'homme frappé par le sort — le visage déformé, la bouche tordue, la peau partagée entre le noir de la brûlure et le blanc du deuil. Chez les Pende, sa danse claudicante n'est pas une moquerie mais une thérapie collective : nommer le malheur pour le désarmer. Ce masque compte parmi les plus saisissants de l'art congolais, précisément parce qu'il refuse l'idéal de symétrie.",
    image: masqueMbangu,
    credit: "Royal Museum for Central Africa — CC0",
  },
  {
    id: "masque-pwo-chokwe",
    nom: "Masque de danse Pwo",
    peuple: "Chokwe",
    region: "Lunda / Kwango",
    categorie: "masques",
    epoque: "XIXe – XXe siècle",
    matieres: "Bois, fibres de raphia, pigments, résine",
    salle: "Salle II — Rites et passages",
    resume:
      "Le visage idéalisé de l'ancêtre féminine, scarifications en croix gravées sur les tempes.",
    recit:
      "Pwo — la femme mûre, la mère des lignages — est dansée par un homme dont le corps disparaît sous un filet de fibres. Les scarifications cingelyengelye et les paupières mi-closes composent un visage de sérénité absolue. Sa venue, lors des sorties de mukanda, promet la fertilité au village. Chef-d'œuvre de retenue, ce type de masque a profondément marqué les regards européens sur l'art africain au début du XXe siècle.",
    image: masqueChokwe,
    credit: "Royal Museum for Central Africa — CC0",
  },
  {
    id: "pendentif-ikhoko",
    nom: "Pendentif-masque Ikhoko",
    peuple: "Pende",
    region: "Kwilu",
    categorie: "sculptures",
    epoque: "XXe siècle",
    matieres: "Ivoire ou os, patine d'usage",
    salle: "Salle II — Rites et passages",
    resume:
      "Miniature portée au cou par les initiés : la mémoire du masque réduite à la taille d'un pouce.",
    recit:
      "À la sortie du mukanda, le jeune initié pende reçoit un ikhoko — réplique minuscule d'un masque, sculptée dans l'ivoire ou l'os, portée à même la peau. Amulette de protection et carte d'identité rituelle, elle prend avec les années une patine ambrée qui raconte une vie entière de contact. La finesse de sa taille, à cette échelle, relève de la virtuosité pure.",
    image: masquePendeIvoire,
    credit: "Wikimedia Commons — CC BY-SA 4.0",
  },
  {
    id: "statue-nkishi-songye",
    nom: "Statue de puissance Nkishi",
    peuple: "Songye",
    region: "Grand Kasaï / Lomami",
    categorie: "sculptures",
    epoque: "XIXe – XXe siècle",
    matieres: "Bois, cuivre, clous de fer, cornes, peau, fibres",
    salle: "Salle III — Forces et médecines",
    resume:
      "Figure hérissée de cuivre et de fer, chargée de bishimba : le gardien de la communauté.",
    recit:
      "Un nkishi songye n'est pas une statue à contempler mais une force à activer. Le sculpteur donne la forme ; le nganga y insère les bishimba — substances animales, minérales et végétales — dans la corne fixée au sommet du crâne et dans la cavité abdominale. Bandes de cuivre au visage, clous plantés, accumulation de charges : chaque ajout est une intervention, un pacte renouvelé pour protéger le village de la maladie, de la foudre et de la sorcellerie.",
    image: statueSongye,
    credit: "Wikimedia Commons — CC BY 2.0",
  },
  {
    id: "siege-caryatide-luba",
    nom: "Siège à caryatide",
    peuple: "Luba",
    region: "Katanga",
    categorie: "regalia",
    epoque: "Début du XXe siècle",
    matieres: "Bois dur, patine profonde",
    salle: "Salle I — Royautés",
    resume:
      "Une femme agenouillée porte à bout de bras le plateau du trône : la mémoire soutient le pouvoir.",
    recit:
      "Chez les Luba, le siège n'est pas un meuble mais un insigne : il matérialise la charge royale et n'apparaît qu'aux investitures. La caryatide féminine — coiffure en cascade, scarifications en relief, mains posées sur le buste — rappelle que la royauté est transmise, gardée et légitimée par les femmes et par les esprits. Les volumes pleins, polis par des générations de mains, font de cette sculpture l'un des sommets de l'art de cour d'Afrique centrale.",
    image: siegeLuba,
    credit: "Cleveland Museum of Art — CC0",
  },
  {
    id: "tissu-shoowa",
    nom: "Velours du Kasaï (tissu shoowa)",
    peuple: "Shoowa (Kuba)",
    region: "Kasaï",
    categorie: "textiles",
    epoque: "XXe siècle",
    matieres: "Fibres de raphia tissées, brodées et coupées",
    salle: "Salle IV — Motifs et mémoire",
    resume:
      "Géométrie brodée à main levée, jamais répétée deux fois : l'abstraction congolaise avant l'abstraction.",
    recit:
      "Le raphia est tissé par les hommes, brodé et coupé par les femmes. Point par point, la surface se couvre de losanges, de chevrons et d'interruptions volontaires : le motif se décale, bifurque, refuse la symétrie mécanique. Ces velours ont servi de monnaie, de dot et de linceul. Klee et Matisse en collectionnaient ; les Shoowa les composaient depuis des siècles, à main levée, sans dessin préparatoire.",
    image: tissuShoowa,
    credit: "Linden-Museum Stuttgart — CC0",
  },
  {
    id: "tambour-a-fente",
    nom: "Tambour à fente (lokole)",
    peuple: "Peuples du bassin du fleuve",
    region: "Cuvette centrale",
    categorie: "instruments",
    epoque: "XIXe – XXe siècle",
    matieres: "Tronc évidé, pigments",
    salle: "Salle V — Voix du fleuve",
    resume:
      "Un tronc évidé, deux lèvres de bois, deux hauteurs de son : la parole portée d'un village à l'autre.",
    recit:
      "Le lokole ne bat pas seulement le rythme, il parle. Ses deux registres, grave et aigu, reproduisent les tons des langues du bassin congolais : le tambourinaire annonce une naissance, convoque l'assemblée, prévient d'un danger à des kilomètres. Avant le télégraphe, le fleuve avait déjà son réseau. Les frappes traditionnelles nourrissent encore aujourd'hui les rythmes de la rumba et du ndombolo.",
    image: instrumentMusique,
    credit: "Tropenmuseum — CC BY-SA 3.0",
  },
  {
    id: "costume-danseur-masque",
    nom: "Costume de danseur masqué",
    peuple: "Collections du MNRDC",
    region: "Kinshasa",
    categorie: "textiles",
    epoque: "Présentation permanente",
    matieres: "Fibres végétales, textiles, bois, parures",
    salle: "Salle II — Rites et passages",
    resume:
      "Le masque n'est jamais seul : présenté en costume intégral dans les salles du musée national.",
    recit:
      "Dans les vitrines du Musée national de la RDC, le masque est remonté sur son costume complet — filet de fibres, tunique, jambières, accessoires de danse. C'est un choix muséographique fort : rappeler qu'un masque africain n'est pas un objet de mur mais un corps en mouvement, une voix, un pas, une sortie publique. Le visiteur retrouve l'échelle réelle de la performance.",
    image: costumeDanseur,
    credit: "Wikimedia Commons — CC BY-SA 4.0",
  },
];

export const categories = [
  { id: "tout", label: "Toutes les salles" },
  { id: "masques", label: "Masques" },
  { id: "sculptures", label: "Sculptures" },
  { id: "regalia", label: "Insignes royaux" },
  { id: "textiles", label: "Textiles" },
  { id: "instruments", label: "Instruments" },
] as const;

export const chiffres = [
  { valeur: "12 000", label: "objets en capacité de conservation" },
  { valeur: "6 000 m²", label: "de salles d'exposition" },
  { valeur: "450+", label: "peuples et langues représentés" },
  { valeur: "2019", label: "inauguration du bâtiment" },
];

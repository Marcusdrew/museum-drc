import menuGnocchi from "@/assets/menu-gnocchi.jpg";
import menuBranzino from "@/assets/menu-branzino.jpg";
import menuPizza from "@/assets/menu-pizza.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";
import menuBurrata from "@/assets/menu-burrata.jpg";
import menuOssobuco from "@/assets/menu-ossobuco.jpg";

export interface MenuItem {
  id: string;
  name: string;
  category: "paintings" | "sculpture" | "photography" | "works-on-paper";
  price: number;
  description: string;
  longDescription: string;
  image: string;
  ingredients: string[];
  dietary: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: "midnight-convergence",
    name: "Midnight Convergence",
    category: "paintings",
    price: 12500,
    description: "Abstract oil on canvas exploring depth through deep blues and gold leaf accents.",
    longDescription:
      "A commanding large-scale abstract oil painting that draws the viewer into a vortex of midnight blues and shimmering gold. Artist Lena Voronova layers impasto brushstrokes with delicate gold leaf applications, creating a tension between chaos and luminosity. The work explores themes of cosmic emergence and the interplay between darkness and light. Measuring 72 × 60 inches, it commands any room it inhabits.",
    image: menuBurrata,
    ingredients: ["Oil on canvas", "Gold leaf", "72 × 60 in", "2024"],
    dietary: ["Available"],
  },
  {
    id: "eternal-form",
    name: "Eternal Form No. 7",
    category: "sculpture",
    price: 18000,
    description: "Hand-carved Carrara marble sculpture with organic, flowing silhouette.",
    longDescription:
      "Sculptor David Arakawa spent four months hand-carving this biomorphic form from a single block of Italian Carrara marble. The piece explores the tension between weight and weightlessness — its smooth, undulating curves seem to defy the density of the stone. Influenced by Brancusi and Hepworth, yet unmistakably contemporary, Eternal Form No. 7 invites touch and contemplation in equal measure. Displayed on a custom white oak pedestal.",
    image: menuGnocchi,
    ingredients: ["Carrara marble", "White oak pedestal", "34 × 14 × 12 in", "2024"],
    dietary: ["Available"],
  },
  {
    id: "structural-light",
    name: "Structural Light III",
    category: "photography",
    price: 4800,
    description: "Silver gelatin print capturing abstract architectural geometry in dramatic contrast.",
    longDescription:
      "Photographer Mira Chen's ongoing series examines the hidden geometry of Brutalist architecture. This silver gelatin print, hand-developed in her Portland darkroom, transforms concrete beams and angular shadows into a composition of pure form. The rich tonal range — from velvet blacks to luminous highlights — reveals textures invisible to the casual eye. Archival framed in museum-grade materials. Edition of 5.",
    image: menuBranzino,
    ingredients: ["Silver gelatin print", "Archival frame", "30 × 40 in", "Ed. 1/5, 2023"],
    dietary: ["Limited Edition"],
  },
  {
    id: "excavation-iv",
    name: "Excavation IV",
    category: "paintings",
    price: 8500,
    description: "Mixed media on panel with layered earth tones, silver leaf, and found materials.",
    longDescription:
      "Working at the intersection of painting and assemblage, artist James Okoro builds densely textured surfaces from raw pigments, aged paper, silver leaf, and reclaimed materials. Excavation IV evokes geological strata and the passage of time — each layer a record of gesture and intention. The earth tones and metallic accents create a meditative warmth that shifts dramatically under changing light. A centerpiece for collectors drawn to material richness.",
    image: menuOssobuco,
    ingredients: ["Mixed media on panel", "Silver leaf", "60 × 48 in", "2024"],
    dietary: ["Available"],
  },
  {
    id: "ember-field",
    name: "Ember Field",
    category: "paintings",
    price: 15000,
    description: "Monumental acrylic painting in vivid reds and oranges with gestural energy.",
    longDescription:
      "At nearly ten feet wide, Ember Field is a visceral experience. Artist Sofia Reyes works in large-scale acrylic, building layers of cadmium red, vermillion, and burnt orange into a seething, kinetic composition. The painting vibrates with movement — each brushstroke a record of the artist's physical engagement with the canvas. Reyes describes her process as 'painting with my whole body.' The result is a work that radiates heat and urgency.",
    image: menuPizza,
    ingredients: ["Acrylic on canvas", "120 × 60 in", "2024"],
    dietary: ["On Hold"],
  },
  {
    id: "spring-ephemera",
    name: "Spring Ephemera",
    category: "works-on-paper",
    price: 2200,
    description: "Delicate botanical watercolor on archival cotton paper, framed in white ash.",
    longDescription:
      "Watercolorist Anna Lindqvist captures the fleeting beauty of Pacific Northwest wildflowers in this luminous study. Working wet-on-wet, she achieves a gossamer translucency that feels almost breathed onto the paper. Soft greens, pale pinks, and cool blues dissolve into one another with the gentleness of morning mist. Framed in hand-finished white ash with museum glass. Part of her acclaimed 'Ephemera' series exhibited at the Portland Art Museum.",
    image: menuTiramisu,
    ingredients: ["Watercolor on cotton paper", "White ash frame", "18 × 18 in", "2023"],
    dietary: ["Available"],
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "paintings", label: "Paintings" },
  { id: "sculpture", label: "Sculpture" },
  { id: "photography", label: "Photography" },
  { id: "works-on-paper", label: "Works on Paper" },
] as const;

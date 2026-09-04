import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroMusee from "@/assets/mnrdc/hero-musee.jpg";
import fleuveCongo from "@/assets/mnrdc/fleuve-congo.jpg";
import tissuShoowa from "@/assets/mnrdc/tissu-shoowa.jpg";
import { chiffres, oeuvres } from "@/data/collection";
import { useReveal } from "@/hooks/use-reveal";

const phares = ["masque-mukyeem", "statue-nkishi-songye", "siege-caryatide-luba", "masque-mbangu"];

const Index = () => {
  useReveal();

  const selection = phares
    .map((id) => oeuvres.find((o) => o.id === id))
    .filter((o): o is (typeof oeuvres)[number] => Boolean(o));

  const bandeau = [
    "Kuba",
    "Luba",
    "Songye",
    "Pende",
    "Chokwe",
    "Mangbetu",
    "Yaka",
    "Lega",
    "Hemba",
    "Teke",
    "Kongo",
    "Salampasu",
  ];

  return (
    <main>
      {/* HÉRO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroMusee}
          alt="Façade du Musée national de la RDC à Kinshasa, ornée de motifs en losange d'inspiration kuba, illuminée au crépuscule"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 kuba-pattern opacity-25 mix-blend-soft-light" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pb-16 lg:pb-24">
          <p className="eyebrow animate-fade-up">Kinshasa · République démocratique du Congo</p>

          <h1
            className="mt-6 font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-8xl text-ivory animate-fade-up"
            style={{ animationDelay: "0.12s" }}
          >
            Musée National
            <span className="block text-primary">de la RDC</span>
          </h1>

          <p
            className="mt-7 max-w-2xl font-serif text-xl lg:text-2xl font-light text-ivory/85 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.24s" }}
          >
            Douze mille objets, quatre cent cinquante peuples, un fleuve.
            Le patrimoine congolais rassemblé, conservé et enfin raconté chez lui.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.36s" }}
          >
            <Link
              to="/collections"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explorer les collections
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/visite"
              className="inline-flex items-center justify-center border border-ivory/40 px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Horaires & tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU DES PEUPLES */}
      <section className="border-y border-border bg-secondary/60 py-5 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...bandeau, ...bandeau].map((nom, i) => (
            <span
              key={`${nom}-${i}`}
              className="flex items-center gap-10 text-xs uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap"
            >
              {nom}
              <span className="w-1.5 h-1.5 rotate-45 bg-primary/70" />
            </span>
          ))}
        </div>
      </section>

      {/* MANIFESTE */}
      <section className="py-24 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow">Le musée</p>
            <div className="kuba-rule w-16 mt-5" />
            <h2 className="mt-7 font-display text-3xl lg:text-5xl leading-tight text-foreground">
              Un patrimoine qui rentre à la maison
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 reveal" style={{ transitionDelay: "0.12s" }}>
            <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-foreground/90">
              Inauguré le 23 novembre 2019, le Musée national de la RDC est le plus grand
              investissement culturel jamais réalisé en Afrique centrale : 21 millions de dollars,
              trente-trois mois de chantier, six mille mètres carrés de salles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sa façade est couverte de losanges — le motif des palais royaux kuba, une confédération
              qui prospérait déjà au XVIIe siècle. Le bâtiment fonctionne à l'énergie solaire et à la
              ventilation naturelle, parce que conserver un masque en bois sous les tropiques est un
              travail de précision, pas de démonstration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ici, les objets ne sont pas des trophées d'ailleurs. Ils sont chez eux, à quelques
              kilomètres du fleuve qui les a portés. La question de la restitution des collections
              congolaises dispersées en Europe traverse chacune de nos salles.
            </p>
            <Link
              to="/histoire"
              className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-primary link-underline pt-2"
            >
              Lire l'histoire du musée
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="relative border-y border-border overflow-hidden">
        <img
          src={tissuShoowa}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {chiffres.map((c, i) => (
            <div key={c.label} className="reveal text-center lg:text-left" style={{ transitionDelay: `${i * 0.08}s` }}>
              <p className="font-display text-3xl lg:text-5xl text-primary">{c.valeur}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground leading-relaxed">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ŒUVRES PHARES */}
      <section className="py-24 lg:py-32 px-5 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
            <div>
              <p className="eyebrow">Chefs-d'œuvre</p>
              <h2 className="mt-5 font-display text-3xl lg:text-5xl text-foreground">
                Quatre objets, quatre mondes
              </h2>
            </div>
            <Link
              to="/collections"
              className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-primary link-underline shrink-0"
            >
              Voir les 10 œuvres
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {selection.map((o, i) => (
              <Link
                key={o.id}
                to={`/collections/${o.id}`}
                className="group relative block reveal"
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-plinth shadow-plinth">
                  <img
                    src={o.image}
                    alt={`${o.nom} — art ${o.peuple}, ${o.region}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-primary">{o.peuple}</p>
                    <h3 className="mt-2 font-display text-lg text-ivory leading-snug">{o.nom}</h3>
                  </div>
                  <span className="absolute top-0 left-0 w-full h-px bg-gradient-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{o.resume}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FLEUVE */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src={fleuveCongo}
          alt="Le fleuve Congo vu depuis Kinshasa"
          loading="lazy"
          width={1920}
          height={1440}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center reveal">
          <p className="eyebrow">Salle V — Voix du fleuve</p>
          <blockquote className="mt-8 font-serif text-2xl sm:text-3xl lg:text-4xl font-light italic leading-snug text-ivory">
            « Avant le télégraphe, le fleuve avait déjà son réseau :
            deux notes de bois frappé suffisaient à traverser la forêt. »
          </blockquote>
          <div className="kuba-rule w-20 mx-auto my-8" />
          <p className="text-sm text-muted-foreground">
            Parcours sonore autour du tambour à fente lokole
          </p>
        </div>
      </section>

      {/* VISITE */}
      <section className="py-24 lg:py-32 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-px bg-border reveal">
          {[
            { titre: "Horaires", lignes: ["Mardi – Dimanche", "09h00 – 17h00", "Fermé le lundi"] },
            { titre: "Tarifs", lignes: ["Congolais : 5 000 FC", "Étudiants : 2 000 FC", "Visiteurs internationaux : 10 $"] },
            { titre: "Accès", lignes: ["Boulevard Triomphal", "Commune de Lingwala", "Kinshasa"] },
          ].map((bloc) => (
            <div key={bloc.titre} className="bg-card p-10">
              <p className="eyebrow">{bloc.titre}</p>
              <ul className="mt-6 space-y-2 font-serif text-lg text-foreground/90">
                {bloc.lignes.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-10 text-center reveal">
          <Link
            to="/visite"
            className="group inline-flex items-center gap-3 bg-gradient-gold px-9 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
          >
            Préparer votre visite
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;

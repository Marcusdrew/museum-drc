import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, oeuvres } from "@/data/collection";
import { useReveal } from "@/hooks/use-reveal";

const Collections = () => {
  const [active, setActive] = useState<string>("tout");
  useReveal();

  const filtrees = active === "tout" ? oeuvres : oeuvres.filter((o) => o.categorie === active);

  return (
    <main className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <header className="max-w-3xl">
          <p className="eyebrow">Collections permanentes</p>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl leading-tight text-foreground">
            Les salles du musée
          </h1>
          <div className="kuba-rule w-20 my-7" />
          <p className="font-serif text-xl font-light text-muted-foreground leading-relaxed">
            Masques royaux, statues de puissance, insignes de cour, velours du Kasaï, tambours du
            fleuve. Une sélection issue des collections nationales congolaises et des grands fonds
            documentant l'art de la RDC.
          </p>
        </header>

        {/* Filtres */}
        <div className="mt-14 flex flex-wrap gap-3 border-b border-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] border transition-all duration-300 ${
                active === cat.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtrees.map((o, i) => (
            <Link
              key={o.id}
              to={`/collections/${o.id}`}
              className="group block reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-plinth shadow-plinth">
                <img
                  src={o.image}
                  alt={`${o.nom} — art ${o.peuple}, ${o.region}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 border border-primary/60 bg-background/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                  {o.salle}
                </span>
              </div>

              <div className="pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {o.nom}
                  </h2>
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground shrink-0">
                    {o.peuple}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.resume}</p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.18em] text-primary/80">
                  {o.epoque} · {o.region}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Collections;

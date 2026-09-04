import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { oeuvres } from "@/data/collection";
import { useReveal } from "@/hooks/use-reveal";

const OeuvreDetail = () => {
  const { id } = useParams();
  useReveal();

  const index = oeuvres.findIndex((o) => o.id === id);
  const oeuvre = index >= 0 ? oeuvres[index] : undefined;

  if (!oeuvre) {
    return (
      <main className="pt-40 pb-32 px-5 text-center">
        <h1 className="font-display text-3xl text-foreground">Œuvre introuvable</h1>
        <p className="mt-4 text-muted-foreground">Cette notice n'existe pas ou a été déplacée.</p>
        <Link
          to="/collections"
          className="mt-8 inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-primary link-underline"
        >
          <ArrowLeft className="w-4 h-4" /> Retour aux collections
        </Link>
      </main>
    );
  }

  const suivante = oeuvres[(index + 1) % oeuvres.length];

  const fiche = [
    { label: "Peuple", valeur: oeuvre.peuple },
    { label: "Région", valeur: oeuvre.region },
    { label: "Époque", valeur: oeuvre.epoque },
    { label: "Matières", valeur: oeuvre.matieres },
    { label: "Salle", valeur: oeuvre.salle },
  ];

  return (
    <main className="pt-28 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <Link
          to="/collections"
          className="inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Collections
        </Link>

        <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image sur socle */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-plinth shadow-plinth p-4 sm:p-8">
              <div className="absolute inset-0 kuba-pattern opacity-30 pointer-events-none" />
              <img
                src={oeuvre.image}
                alt={`${oeuvre.nom} — art ${oeuvre.peuple}, ${oeuvre.region}, ${oeuvre.epoque}`}
                className="relative w-full max-h-[76vh] object-contain mx-auto animate-fade-up"
              />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Image : {oeuvre.credit}
            </p>
          </div>

          {/* Notice */}
          <div className="lg:col-span-5">
            <p className="eyebrow">{oeuvre.categorie}</p>
            <h1 className="mt-5 font-display text-3xl lg:text-5xl leading-tight text-foreground">
              {oeuvre.nom}
            </h1>
            <div className="kuba-rule w-16 my-7" />

            <p className="font-serif text-xl font-light leading-relaxed text-foreground/90">
              {oeuvre.resume}
            </p>

            <p className="mt-6 text-muted-foreground leading-relaxed">{oeuvre.recit}</p>

            <dl className="mt-10 border-t border-border">
              {fiche.map((f) => (
                <div key={f.label} className="flex gap-6 py-4 border-b border-border">
                  <dt className="w-28 shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-primary/80 pt-1">
                    {f.label}
                  </dt>
                  <dd className="text-sm text-foreground/90 leading-relaxed">{f.valeur}</dd>
                </div>
              ))}
            </dl>

            <Link
              to={`/collections/${suivante.id}`}
              className="group mt-10 flex items-center justify-between gap-6 border border-border p-5 transition-colors duration-300 hover:border-primary/60"
            >
              <span>
                <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Œuvre suivante
                </span>
                <span className="mt-2 block font-display text-lg text-foreground group-hover:text-primary transition-colors">
                  {suivante.nom}
                </span>
              </span>
              <ArrowRight className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OeuvreDetail;

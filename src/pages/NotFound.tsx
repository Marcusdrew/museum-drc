import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-5 py-32">
      <div className="text-center max-w-lg">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="mt-6 font-display text-4xl lg:text-5xl text-foreground">
          Cette salle n'existe pas
        </h1>
        <div className="kuba-rule w-16 mx-auto my-7" />
        <p className="text-muted-foreground leading-relaxed">
          La page demandée est introuvable. Les collections du musée, elles, sont bien là.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex items-center gap-3 border border-primary/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

import { Link } from "react-router-dom";
import { ArrowRight, Bus, Camera, Clock, Ticket, Users } from "lucide-react";
import costumeDanseur from "@/assets/mnrdc/costume-danseur.jpg";
import { useReveal } from "@/hooks/use-reveal";

const Visite = () => {
  useReveal();

  const horaires = [
    { jour: "Lundi", heures: "Fermé" },
    { jour: "Mardi – Vendredi", heures: "09h00 – 17h00" },
    { jour: "Samedi", heures: "10h00 – 18h00" },
    { jour: "Dimanche", heures: "10h00 – 16h00" },
  ];

  const tarifs = [
    { categorie: "Adultes (RDC)", prix: "5 000 FC" },
    { categorie: "Étudiants & élèves", prix: "2 000 FC" },
    { categorie: "Enfants (- 6 ans)", prix: "Gratuit" },
    { categorie: "Visiteurs internationaux", prix: "10 USD" },
    { categorie: "Groupes scolaires (dès 15)", prix: "1 000 FC / élève" },
  ];

  const services = [
    { icon: Users, titre: "Visites guidées", texte: "En français, lingala, swahili et anglais — sur réservation, 60 à 90 minutes." },
    { icon: Camera, titre: "Photographie", texte: "Autorisée sans flash ni trépied dans les salles permanentes." },
    { icon: Bus, titre: "Accès", texte: "Boulevard Triomphal, Lingwala. Bus et taxis desservent l'esplanade du Palais du Peuple." },
    { icon: Ticket, titre: "Billetterie", texte: "Sur place à l'accueil. Paiement en francs congolais ou en dollars américains." },
  ];

  return (
    <main className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <header className="max-w-3xl">
          <p className="eyebrow">Informations pratiques</p>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl leading-tight text-foreground">
            Préparer sa visite
          </h1>
          <div className="kuba-rule w-20 my-7" />
          <p className="font-serif text-xl font-light text-muted-foreground leading-relaxed">
            Comptez deux heures pour traverser les cinq salles. Le bâtiment est climatisé
            partiellement et ventilé naturellement : les matinées sont les plus calmes.
          </p>
        </header>

        <div className="mt-16 grid lg:grid-cols-2 gap-px bg-border reveal">
          <div className="bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl text-foreground">Horaires</h2>
            </div>
            <ul className="mt-8">
              {horaires.map((h) => (
                <li key={h.jour} className="flex justify-between gap-6 py-4 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground uppercase tracking-[0.12em]">{h.jour}</span>
                  <span className="font-serif text-lg text-foreground">{h.heures}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4">
              <Ticket className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl text-foreground">Tarifs</h2>
            </div>
            <ul className="mt-8">
              {tarifs.map((t) => (
                <li key={t.categorie} className="flex justify-between gap-6 py-4 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground uppercase tracking-[0.12em]">{t.categorie}</span>
                  <span className="font-serif text-lg text-primary">{t.prix}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={s.titre} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <s.icon className="w-5 h-5 text-primary" />
              <h3 className="mt-5 font-display text-lg text-foreground">{s.titre}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.texte}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bande visuelle */}
      <section className="relative mt-24 min-h-[60vh] flex items-center overflow-hidden">
        <img
          src={costumeDanseur}
          alt="Costume complet de danseur masqué présenté dans les salles du musée national"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center reveal">
          <p className="eyebrow">Scolaires & groupes</p>
          <h2 className="mt-6 font-display text-3xl lg:text-4xl text-ivory leading-tight">
            Une salle d'atelier pour les écoles de Kinshasa
          </h2>
          <p className="mt-6 font-serif text-lg text-ivory/85 leading-relaxed">
            Ateliers de dessin de motifs kuba, initiation à la conservation, rencontres avec les
            médiateurs. Réservation par courriel, deux semaines à l'avance.
          </p>
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-3 bg-gradient-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
          >
            Réserver un créneau
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Visite;

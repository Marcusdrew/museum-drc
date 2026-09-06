import museeBatiment from "@/assets/mnrdc/musee-batiment.jpg";
import costumeDanseur from "@/assets/mnrdc/costume-danseur.jpg";
import tissuShoowa from "@/assets/mnrdc/tissu-shoowa.jpg";
import { useReveal } from "@/hooks/use-reveal";

const Histoire = () => {
  useReveal();

  const jalons = [
    {
      annee: "1968 – 1970",
      titre: "Une idée née d'une visite",
      texte:
        "Léopold Sédar Senghor demande à voir l'art congolais lors d'une visite officielle. Faute de musée national, le projet est lancé : un accord de collaboration avec le Musée royal de l'Afrique centrale donne naissance à l'Institut des musées nationaux du Congo (IMNC).",
    },
    {
      annee: "1970 – 1990",
      titre: "Les expéditions de collecte",
      texte:
        "Des dizaines de missions parcourent le pays et rassemblent masques, statues, textiles et instruments. Les collections s'installent provisoirement au mont Ngaliema, puis dans l'ancienne Académie des Beaux-Arts. Les moyens manquent, des pièces sont perdues.",
    },
    {
      annee: "2016",
      titre: "Première pierre",
      texte:
        "Le chantier du Musée national de la RDC est lancé le 27 juillet, financé par l'Agence coréenne de coopération internationale (KOICA) : 21 millions de dollars, le plus important investissement culturel coréen en Afrique centrale.",
    },
    {
      annee: "14 juin 2019",
      titre: "Remise des clés",
      texte:
        "Après trente-trois mois de travaux menés par des experts congolais et coréens, les clés du bâtiment sont officiellement remises au gouvernement congolais.",
    },
    {
      annee: "23 novembre 2019",
      titre: "Inauguration",
      texte:
        "Le musée ouvre ses portes. La question de la restitution du patrimoine congolais conservé en Europe est posée publiquement : « Un jour, il faudra bien que ce patrimoine revienne, mais il faut le faire de manière organisée. »",
    },
    {
      annee: "Mars 2025",
      titre: "Réouverture après rénovation",
      texte:
        "Après cinq mois de fermeture consacrés à la modernisation des installations, le musée accueille de nouveau visites, expositions et activités culturelles.",
    },
  ];

  return (
    <main className="pt-32 lg:pt-40 pb-24">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <header className="max-w-3xl">
          <p className="eyebrow">Le musée</p>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl leading-tight text-foreground">
            Cinquante ans pour bâtir une mémoire
          </h1>
          <div className="kuba-rule w-20 my-7" />
          <p className="font-serif text-xl font-light text-muted-foreground leading-relaxed">
            Du refus d'un vide en 1970 à l'ouverture d'un bâtiment solaire en 2019 : l'histoire du
            Musée national de la RDC est celle d'une patience politique et scientifique.
          </p>
        </header>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 reveal">
          <img
            src={museeBatiment}
            alt="Vue d'ensemble du bâtiment du Musée national de la RDC à Kinshasa"
            loading="lazy"
            className="w-full h-72 lg:h-96 object-cover shadow-plinth"
          />
          <img
            src={costumeDanseur}
            alt="Costume complet de danseur masqué présenté dans les salles du musée national"
            loading="lazy"
            className="w-full h-72 lg:h-96 object-cover object-top shadow-plinth"
          />
        </div>
      </div>

      {/* Chronologie */}
      <section className="mt-24 px-5 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-foreground reveal">Chronologie</h2>
          <ol className="mt-14 relative border-l border-border pl-8 lg:pl-12 space-y-14">
            {jalons.map((j) => (
              <li key={j.annee} className="relative reveal">
                <span className="absolute -left-[38px] lg:-left-[54px] top-2 w-3 h-3 rotate-45 bg-gradient-gold" />
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-primary">{j.annee}</p>
                <h3 className="mt-3 font-display text-2xl text-foreground">{j.titre}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{j.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative mt-28 border-y border-border overflow-hidden">
        <img
          src={tissuShoowa}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.1]"
        />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <p className="eyebrow">Architecture</p>
            <h2 className="mt-5 font-display text-3xl lg:text-4xl text-foreground leading-tight">
              Le losange kuba, à l'échelle d'un bâtiment
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-10 reveal" style={{ transitionDelay: "0.1s" }}>
            {[
              { titre: "6 000 m² d'exposition", texte: "Trois grandes salles d'exposition, deux réserves, une bibliothèque, une salle de conférence et un espace polyvalent." },
              { titre: "33 mois de chantier", texte: "Construit avec des matériaux disponibles localement, par des équipes congolaises et coréennes." },
              { titre: "Énergie solaire", texte: "Alimentation partiellement solaire et circulation naturelle de l'air, la climatisation n'étant qu'un appui." },
              { titre: "Façade ornée", texte: "Des motifs en losange en référence aux palais royaux kuba, confédération florissante au XVIIe siècle." },
            ].map((c) => (
              <div key={c.titre}>
                <h3 className="font-display text-xl text-primary">{c.titre}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 lg:px-10 py-24">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="eyebrow">Mission</p>
          <blockquote className="mt-8 font-serif text-2xl lg:text-3xl font-light italic leading-snug text-foreground">
            « Conserver, transmettre et mettre en valeur le patrimoine culturel congolais —
            matériel et immatériel — pour ceux qui en sont les héritiers. »
          </blockquote>
          <div className="kuba-rule w-20 mx-auto my-8" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Institut des musées nationaux du Congo (IMNC) — Musée national de la RDC, Kinshasa
          </p>
        </div>
      </section>
    </main>
  );
};

export default Histoire;

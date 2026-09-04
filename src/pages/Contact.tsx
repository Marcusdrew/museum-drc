import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/use-reveal";

const Contact = () => {
  useReveal();
  const [form, setForm] = useState({ nom: "", email: "", objet: "visite", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message enregistré",
      description: `Merci ${form.nom || "à vous"}. L'équipe du MNRDC vous répondra sous 48 heures ouvrées.`,
    });
    setForm({ nom: "", email: "", objet: "visite", message: "" });
  };

  const champClass =
    "w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <main className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <header className="max-w-3xl">
          <p className="eyebrow">Nous écrire</p>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl leading-tight text-foreground">
            Contact
          </h1>
          <div className="kuba-rule w-20 my-7" />
          <p className="font-serif text-xl font-light text-muted-foreground leading-relaxed">
            Réservations de groupe, demandes presse, recherche scientifique, dons et dépôts
            d'objets : écrivez-nous, chaque demande est lue.
          </p>
        </header>

        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6 reveal">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-[0.65rem] uppercase tracking-[0.2em] text-primary/80 mb-3">
                  Nom complet
                </label>
                <input
                  id="nom"
                  required
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className={champClass}
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[0.65rem] uppercase tracking-[0.2em] text-primary/80 mb-3">
                  Courriel
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={champClass}
                  placeholder="vous@exemple.cd"
                />
              </div>
            </div>

            <div>
              <label htmlFor="objet" className="block text-[0.65rem] uppercase tracking-[0.2em] text-primary/80 mb-3">
                Objet
              </label>
              <select
                id="objet"
                value={form.objet}
                onChange={(e) => setForm({ ...form, objet: e.target.value })}
                className={champClass}
              >
                <option value="visite">Visite guidée ou groupe scolaire</option>
                <option value="presse">Demande presse</option>
                <option value="recherche">Recherche & documentation</option>
                <option value="don">Don ou dépôt d'objet</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-[0.2em] text-primary/80 mb-3">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={7}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${champClass} resize-none`}
                placeholder="Votre message…"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-gold px-9 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-primary-foreground shadow-gold transition-transform duration-300 hover:-translate-y-0.5"
            >
              Envoyer le message
            </button>
          </form>

          {/* Coordonnées */}
          <aside className="lg:col-span-5 reveal" style={{ transitionDelay: "0.12s" }}>
            <div className="relative bg-card border border-border p-8 lg:p-10">
              <div className="absolute inset-0 kuba-pattern opacity-30 pointer-events-none" />
              <div className="relative space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-foreground">Musée National de la RDC</h2>
                  <div className="kuba-rule w-14 mt-4" />
                </div>

                <ul className="space-y-5 text-sm text-muted-foreground">
                  <li className="flex gap-4">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>
                      Boulevard Triomphal, commune de Lingwala
                      <br />
                      Kinshasa, République démocratique du Congo
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <a href="tel:+243000000000" className="link-underline">+243 (0) 000 000 000</a>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <a href="mailto:contact@mnrdc.cd" className="link-underline">contact@mnrdc.cd</a>
                  </li>
                </ul>

                <div className="border-t border-border pt-6">
                  <p className="eyebrow">Ouverture</p>
                  <p className="mt-4 font-serif text-lg text-foreground/90">
                    Mardi – Dimanche, 09h00 – 17h00
                    <br />
                    <span className="text-muted-foreground text-base">Fermé le lundi</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden border border-border">
              <iframe
                title="Emplacement du Musée national de la RDC sur la carte"
                src="https://www.openstreetmap.org/export/embed.html?bbox=15.28%2C-4.35%2C15.32%2C-4.32&layer=mapnik&marker=-4.3351%2C15.2994"
                className="w-full h-64 grayscale-[0.3] contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-secondary">
      <div className="absolute inset-0 kuba-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl tracking-[0.1em] text-foreground">
            Musée National de la RDC
          </p>
          <div className="kuba-rule w-24 my-5" />
          <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-md">
            Gardien du patrimoine matériel et immatériel de la République démocratique du Congo.
            Un pays de 450 peuples, un seul récit : le nôtre.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Visiter</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>Boulevard Triomphal, Lingwala<br />Kinshasa, RDC</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <a href="tel:+243000000000" className="link-underline">+243 (0) 000 000 000</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:contact@mnrdc.cd" className="link-underline">contact@mnrdc.cd</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Explorer</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/collections" className="link-underline hover:text-foreground transition-colors">Collections</Link></li>
            <li><Link to="/visite" className="link-underline hover:text-foreground transition-colors">Horaires & tarifs</Link></li>
            <li><Link to="/histoire" className="link-underline hover:text-foreground transition-colors">Histoire du musée</Link></li>
            <li><Link to="/contact" className="link-underline hover:text-foreground transition-colors">Nous écrire</Link></li>
          </ul>

          <div className="flex gap-3 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook du MNRDC"
              className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram du MNRDC"
              className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border/70">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Musée National de la République démocratique du Congo</p>
          <p>Images d'œuvres : Wikimedia Commons (CC0 / CC BY / CC BY-SA)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

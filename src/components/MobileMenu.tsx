import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { navItems } from "./Header";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-card border-l border-border shadow-plinth transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 kuba-pattern opacity-40 pointer-events-none" />

        <div className="relative flex items-center justify-between h-20 px-6 border-b border-border">
          <span className="font-display tracking-[0.18em] text-sm text-primary">MNRDC</span>
          <button
            onClick={onClose}
            className="p-2 text-foreground/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="relative flex flex-col p-6 gap-1">
          <Link
            to="/"
            onClick={onClose}
            className="font-display text-2xl py-3 border-b border-border/60 text-foreground hover:text-primary transition-colors"
          >
            Accueil
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="font-display text-2xl py-3 border-b border-border/60 text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default MobileMenu;

import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = "text-sm uppercase tracking-wide text-foreground/70 hover:text-foreground transition-colors";

  return (
    <>
      <div
        className={`fixed inset-0 bg-foreground/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 h-full w-64 bg-background z-50 transform transition-transform duration-300 shadow-lg ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring/30"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        <nav className="flex flex-col space-y-6 p-8 pt-16">
          <Link to="/" onClick={onClose} className={linkClass}>Home</Link>
          <Link to="/menu" onClick={onClose} className={linkClass}>Collection</Link>
          <Link to="/about" onClick={onClose} className={linkClass}>About</Link>
          <Link to="/contact" onClick={onClose} className={linkClass}>Contact</Link>
          <Link to="/cart" onClick={onClose} className={linkClass}>Cart</Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;

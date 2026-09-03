import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export const navItems = [
  { to: "/collections", label: "Collections" },
  { to: "/visite", label: "Visiter" },
  { to: "/histoire", label: "Le musée" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          solid
            ? "bg-background/92 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 h-20 px-5 lg:px-10">
          <Link to="/" className="group flex items-center gap-3" aria-label="Accueil MNRDC">
            <span className="relative grid place-items-center w-9 h-9 shrink-0">
              <span className="absolute inset-0 rotate-45 border border-primary/70 transition-transform duration-500 group-hover:rotate-[135deg]" />
              <span className="absolute inset-[7px] rotate-45 bg-gradient-gold" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-base lg:text-lg tracking-[0.16em] text-foreground">
                MNRDC
              </span>
              <span className="block text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground mt-1">
                Musée national · Kinshasa
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.22em] transition-colors duration-300 link-underline ${
                    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/visite"
              className="hidden sm:inline-flex items-center border border-primary/60 px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Préparer sa visite
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;

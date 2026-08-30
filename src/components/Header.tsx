import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Twitter, Menu, ShoppingBag } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCart = location.pathname === "/cart";
  const isMinimal = isHome || isCart;

  const textClass = isHome
    ? "text-white/80 hover:text-white"
    : "text-foreground/70 hover:text-foreground";

  const logoClass = isHome
    ? "text-white hover:text-white/80"
    : "text-foreground hover:opacity-80";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isHome ? "bg-transparent" : "bg-background/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-4 lg:px-12 max-w-7xl mx-auto">
          {/* Left: nav links on inner pages, Contact Us on minimal pages */}
          {isMinimal ? (
            <Link
              to="/contact"
              className={`hidden lg:block text-sm tracking-wide transition-colors duration-200 ${textClass}`}
            >
              Contact Us
            </Link>
          ) : (
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                to="/menu"
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${textClass}`}
              >
                Collection
              </Link>
              <Link
                to="/about"
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${textClass}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${textClass}`}
              >
                Contact
              </Link>
            </nav>
          )}

          {/* Center: Logo */}
          <Link
            to="/"
            className={`font-serif text-xl lg:text-2xl font-medium tracking-tight transition-opacity ${logoClass}`}
          >
            Bellanova Gallery
          </Link>

          {/* Right: icons */}
          <div className="flex items-center gap-1">
            {!isMinimal && (
              <Link
                to="/cart"
                aria-label="Cart"
                className={`p-2 transition-colors duration-200 ${textClass}`}
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
            )}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className={`p-2 transition-colors duration-200 hidden sm:block ${textClass}`}
            >
              <Twitter className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 ${
                isHome ? "text-white/80 hover:text-white" : "hover:bg-accent"
              }`}
              aria-label="Open menu"
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

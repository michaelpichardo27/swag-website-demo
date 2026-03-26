import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Training", to: "/training" },
  { label: "Academics", to: "/academics" },
  { label: "Recruiting", to: "/recruiting" },
  { label: "Success Stories", to: "/success-stories" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-wider text-surface-dark-foreground font-bold">
          SWAG
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                location.pathname === link.to
                  ? "text-green-glow"
                  : "text-surface-dark-foreground/80 hover:text-green-glow"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link to="/join">Join SWAG</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-surface-dark-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-dark/98 backdrop-blur-md border-t border-border/20 px-5 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-3 transition-colors uppercase tracking-wide text-sm font-medium ${
                location.pathname === link.to
                  ? "text-green-glow"
                  : "text-surface-dark-foreground/80 hover:text-green-glow"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <Link to="/join">Join SWAG</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

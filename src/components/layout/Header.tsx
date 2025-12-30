import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto">
        <nav
          className={`flex items-center justify-between px-2 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/10 border border-border/50"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group pl-2">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none">
                Ignisync<span className="text-primary">Labs</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Digital Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-border/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-primary-foreground bg-primary shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block pr-2">
            <Link to="/contact">
              <Button 
                variant="ghost" 
                className="group rounded-full px-6 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span>Start Project</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation - Fullscreen Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-xl z-40 transition-all duration-500 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: "80px" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-2 pb-20">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-light tracking-wide transition-all duration-300 py-3 ${
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-light tracking-wide transition-all duration-300 py-3 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-8">
              <Button variant="hero" size="lg" className="rounded-full px-10">
                Start Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

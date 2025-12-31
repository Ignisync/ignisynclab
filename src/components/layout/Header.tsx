import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flame, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold tracking-tight leading-none">
                Ignisync<span className="text-primary">Labs</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Digital Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-5 py-2 group"
              >
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {link.name}
                </span>
                {/* Active indicator */}
                {location.pathname === link.path && (
                  <motion.div 
                    className="absolute bottom-0 left-5 right-5 h-px bg-primary"
                    layoutId="activeNav"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {/* Hover indicator */}
                <span className="absolute bottom-0 left-5 right-5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button 
                variant="hero" 
                size="default"
                className="group"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation - Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[100] overflow-hidden bg-background"
            style={{ backgroundColor: 'hsl(222 47% 6%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button at top */}
            <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-4 border-b border-border/50 bg-background">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary flex items-center justify-center">
                  <Flame className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-display font-bold tracking-tight">
                  Ignisync<span className="text-primary">Labs</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="container mx-auto px-4 py-12 mt-20">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="group"
                >
                  <motion.div 
                    className={`flex items-center justify-between py-6 border-b border-border ${
                      location.pathname === "/" ? "text-primary" : "text-foreground"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                  >
                    <span className="text-3xl font-display font-light">Home</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </Link>
                
                {navLinks.map((link, i) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group"
                  >
                    <motion.div 
                      className={`flex items-center justify-between py-6 border-b border-border ${
                        location.pathname === link.path ? "text-primary" : "text-foreground"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (i + 1) * 0.05 }}
                    >
                      <span className="text-3xl font-display font-light">{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </Link>
                ))}
              </div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="xl" className="w-full">
                    Start Your Project
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
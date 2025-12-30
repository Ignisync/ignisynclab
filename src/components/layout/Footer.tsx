import { Link } from "react-router-dom";
import { Flame, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Web Development", path: "/services" },
      { name: "Branding", path: "/services" },
      { name: "Graphics Design", path: "/services" },
      { name: "UI/UX Design", path: "/services" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border relative">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Flame className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold tracking-tight">
                  Ignisync<span className="text-primary">Labs</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Digital Studio
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
              We build websites, brands & digital experiences that help businesses grow and stand out.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:hello@ignisynclabs.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                hello@ignisynclabs.com
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                United Kingdom
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-foreground">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-foreground">Start a Project</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Let's build something great together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © {currentYear} IgnisyncLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
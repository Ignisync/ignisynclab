import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Layout as LayoutIcon, Sparkles, Zap, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom, fast, and responsive websites built with modern technology.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Memorable logos and brand systems that tell your story.",
  },
  {
    icon: Sparkles,
    title: "Graphics Design",
    description: "Eye-catching visuals for digital and print media.",
  },
  {
    icon: LayoutIcon,
    title: "UI/UX Design",
    description: "User-centered designs that convert visitors into customers.",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We move quickly without sacrificing quality.",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Pixel-perfect designs and clean, maintainable code.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our priority. We listen and deliver.",
  },
  {
    icon: Globe,
    title: "UK Based",
    description: "Local expertise with global reach.",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Restaurant Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
  },
  {
    title: "Finance App Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

const Index = () => {
  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center stagger-children">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8 animate-fade-up opacity-0">
              <Sparkles className="w-4 h-4" />
              Creative Technology Studio
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0">
              We Build Websites,{" "}
              <span className="text-gradient">Brands</span> &{" "}
              <span className="text-gradient">Digital Experiences</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0">
              IgnisyncLabs helps startups, SMEs, and organisations ignite their digital presence 
              with modern design and technology that converts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="heroOutline" size="xl">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              End-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover-lift hover-glow cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">IgnisyncLabs</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're not just another agency. We're a dedicated partner committed to 
                helping you succeed in the digital world.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-2">5+</div>
                  <p className="text-muted-foreground">Years of combined experience</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A glimpse into our recent projects and the results we've delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                to="/portfolio"
                className="group relative rounded-2xl overflow-hidden hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-primary font-medium">{project.category}</span>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to transform your digital presence? Get in touch for a free consultation 
              and let's discuss your project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Index;

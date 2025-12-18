import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Layout as LayoutIcon, Sparkles, Zap, Shield, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations/FadeIn";
// Hero image moved to public folder for LCP optimization
const heroImage = "/images/hero-web-dev.jpg";

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
    slug: "techstart-ecommerce",
    title: "TechStart E-Commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80",
  },
  {
    slug: "flame-kitchen-brand",
    title: "Flame Kitchen Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80",
  },
  {
    slug: "finflow-dashboard",
    title: "FinFlow Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
  },
];

const Index = () => {
  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                Creative Technology Studio
              </motion.div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                We Build Websites,{" "}
                <span className="text-gradient">Brands</span> &{" "}
                <span className="text-gradient">Digital Experiences</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                IgnisyncLabs helps startups, SMEs, and organisations ignite their digital presence 
                with modern design and technology that converts.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" size="xl">
                      Get a Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/portfolio">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="heroOutline" size="xl">
                      View Our Work
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                End-to-end digital solutions tailored to your business needs.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group p-6 rounded-2xl bg-card border border-border h-full cursor-pointer"
                  whileHover={{ y: -8, boxShadow: "0 0 40px hsl(24 100% 50% / 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="text-center mt-10">
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="outline" size="lg">
                    Explore All Services
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="text-gradient">IgnisyncLabs</span>?
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-muted-foreground mb-8">
                  We're not just another agency. We're a dedicated partner committed to 
                  helping you succeed in the digital world.
                </p>
              </FadeIn>
              
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUs.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="flex gap-4"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <ScaleIn delay={0.2}>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      className="text-6xl md:text-7xl font-bold text-gradient mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      5+
                    </motion.div>
                    <p className="text-muted-foreground">Years of combined experience</p>
                  </div>
                </div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A glimpse into our recent projects and the results we've delivered.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <Link to={`/case-study/${project.slug}`}>
                  <motion.article
                    className="group relative rounded-2xl overflow-hidden"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs text-primary font-medium">{project.category}</span>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="text-center mt-10">
              <Link to="/portfolio">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="outline" size="lg">
                    View All Projects
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let's Build Something <span className="text-gradient">Great</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Ready to transform your digital presence? Get in touch for a free consultation 
                and let's discuss your project.
              </p>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="hero" size="xl">
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Index;

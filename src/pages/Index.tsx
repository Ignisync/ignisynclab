import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Code, Palette, Layout as LayoutIcon, Sparkles, Zap, Shield, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations/FadeIn";

const heroImage = "/images/hero-web-dev.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Bespoke websites that capture your brand essence and convert visitors into customers.",
    number: "01",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Strategic branding that differentiates your business and resonates with your audience.",
    number: "02",
  },
  {
    icon: Sparkles,
    title: "Graphics Design",
    description: "Compelling visuals crafted to amplify your message across digital and print.",
    number: "03",
  },
  {
    icon: LayoutIcon,
    title: "UI/UX Design",
    description: "Intuitive interfaces designed to delight users and drive measurable conversions.",
    number: "04",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Agile workflows that deliver results without compromising excellence.",
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "Pixel-perfect designs backed by clean, scalable code.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We invest in your success as if it were our own.",
  },
  {
    icon: Globe,
    title: "UK-Based Studio",
    description: "Local expertise with international perspective.",
  },
];

const projects = [
  {
    slug: "techstart-ecommerce",
    title: "TechStart E-Commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    year: "2024",
  },
  {
    slug: "flame-kitchen-brand",
    title: "Flame Kitchen Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80",
    year: "2024",
  },
  {
    slug: "finflow-dashboard",
    title: "FinFlow Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    year: "2023",
  },
];

const Index = () => {
  return (
    <LayoutComponent>
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-mesh opacity-60" />
        
        {/* Geometric accents */}
        <motion.div 
          className="absolute top-20 right-[10%] w-px h-40 bg-gradient-to-b from-primary/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-40 left-[15%] w-20 h-px bg-gradient-to-r from-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <FadeIn delay={0}>
                <motion.p 
                  className="text-primary font-display font-medium tracking-wide mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="w-8 h-px bg-primary" />
                  UK-Based Creative Studio
                </motion.p>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tight">
                  We craft
                  <br />
                  <span className="text-gradient">digital</span>
                  <br />
                  experiences
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                  Strategy-led design and development for ambitious businesses 
                  ready to make an impact in the digital world.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link to="/contact">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero" size="xl">
                        Get a Free Quote
                        <ArrowRight className="w-4 h-4" />
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

            {/* Hero image with editorial frame */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <FadeIn delay={0.4}>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 border border-primary/20" />
                  <div className="absolute -inset-8 border border-border/30" />
                  
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={heroImage} 
                      alt="Digital creative workspace" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      loading="eager"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  {/* Floating label */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <p className="text-xs uppercase tracking-widest font-semibold">Est. 2024</p>
                  </motion.div>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Services Section - Editorial Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-primary font-medium tracking-wide mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  What We Do
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  Services built for
                  <br />
                  <span className="text-gradient">growth</span>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <FadeIn delay={0.1}>
                <p className="text-muted-foreground text-lg">
                  End-to-end digital services designed to help your business thrive online and stand out from the competition.
                </p>
              </FadeIn>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group p-8 md:p-12 bg-background relative overflow-hidden cursor-pointer"
                  whileHover={{ backgroundColor: "hsl(0 0% 7%)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Number */}
                  <span className="absolute top-8 right-8 text-6xl font-display font-bold text-border/50 group-hover:text-primary/20 transition-colors duration-500">
                    {service.number}
                  </span>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <service.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Learn more
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Hover accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="heroOutline" size="lg">
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
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <FadeIn>
                <p className="text-primary font-medium tracking-wide mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  Why Choose Us
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  Your strategic
                  <br />
                  <span className="text-gradient">partner</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-muted-foreground text-lg mb-12 max-w-md">
                  We're more than an agency — we're invested in building digital solutions that drive real results.
                </p>
              </FadeIn>
              
              <StaggerContainer className="space-y-8">
                {whyUs.map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="flex gap-5 group cursor-pointer"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 shrink-0 bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-1">{item.title}</h4>
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
                <div className="aspect-square relative">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 border border-border" />
                  <div className="absolute inset-8 border border-primary/20" />
                  
                  <div className="absolute inset-16 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                    <div className="text-center">
                      <motion.div 
                        className="text-7xl md:text-8xl font-display font-bold text-gradient mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        5+
                      </motion.div>
                      <p className="text-muted-foreground text-sm uppercase tracking-widest">Years Experience</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Featured Work Section - Editorial Layout */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <FadeIn>
                <p className="text-primary font-medium tracking-wide mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  Selected Work
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Featured <span className="text-gradient">projects</span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <Link to="/portfolio">
                <motion.div whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 text-primary font-medium">
                  View All Work
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <Link to={`/case-study/${project.slug}`}>
                  <motion.article
                    className="group relative"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    </div>
                    
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-primary uppercase tracking-widest mb-2">{project.category}</p>
                        <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section - Bold Statement */}
      <section className="py-32 relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                Ready to <span className="text-gradient">elevate</span>
                <br />
                your brand?
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
                Let's discuss how we can transform your vision into a digital experience 
                that captivates your audience and drives growth.
              </p>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="hero" size="xl">
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
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
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, MessageSquare, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations/FadeIn";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to solve problems.",
  },
  {
    icon: Target,
    title: "Quality",
    description: "Every pixel, every line of code is crafted with precision and care.",
  },
  {
    icon: MessageSquare,
    title: "Integrity",
    description: "Honest communication and transparent processes build lasting relationships.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to understand your unique needs.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Together, we develop a clear roadmap and define the scope, timeline, and deliverables.",
  },
  {
    step: "03",
    title: "Design",
    description: "Our designers create concepts and iterate based on your feedback until it's perfect.",
  },
  {
    step: "04",
    title: "Development",
    description: "We build your project using modern technologies, ensuring quality at every step.",
  },
  {
    step: "05",
    title: "Launch",
    description: "After thorough testing, we launch your project and provide ongoing support.",
  },
];

const About = () => {
  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-gradient">IgnisyncLabs</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're a creative technology studio helping businesses ignite their digital 
                presence through innovative design and modern technology.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    IgnisyncLabs is a UK-based creative technology studio founded with a 
                    simple mission: to help businesses succeed in the digital world through 
                    exceptional design and technology.
                  </p>
                  <p>
                    We believe that great digital experiences shouldn't be exclusive to big 
                    corporations. Startups, SMEs, churches, and creators deserve the same 
                    level of quality and attention to detail.
                  </p>
                  <p>
                    Our name combines "Ignis" (Latin for fire) and "Sync" – representing our 
                    passion for igniting brands and synchronising digital growth. We're here 
                    to spark your success.
                  </p>
                </div>
              </FadeIn>
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
                      className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <Rocket className="w-10 h-10 text-primary" />
                    </motion.div>
                    <p className="text-xl font-semibold">Founder-Led Studio</p>
                    <p className="text-muted-foreground mt-2">Personal attention on every project</p>
                  </div>
                </div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <motion.div 
                className="p-8 md:p-10 rounded-3xl bg-card border border-border h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <Target className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To create powerful digital experiences that help businesses grow through 
                  innovative design, smart technology, and strategic branding. We're committed 
                  to making exceptional digital solutions accessible to businesses of all sizes.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className="p-8 md:p-10 rounded-3xl bg-card border border-border h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <Eye className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a leading creative technology studio in the UK and beyond, 
                  shaping the future of digital brands and products. We envision a world 
                  where every business can compete with a stunning digital presence.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center p-8 rounded-3xl bg-card border border-border h-full"
                  whileHover={{ y: -8, boxShadow: "0 0 40px hsl(24 100% 50% / 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A clear, collaborative process that delivers results.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div 
                    className="flex gap-6"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="shrink-0">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-sm font-bold text-primary">{item.step}</span>
                      </motion.div>
                      {index < process.length - 1 && (
                        <motion.div 
                          className="w-px h-8 bg-border mx-auto mt-2"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to work together?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                We'd love to hear about your project. Let's discuss how we can help 
                bring your vision to life.
              </p>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="hero" size="xl">
                    Get In Touch
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

export default About;

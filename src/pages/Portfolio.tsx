import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const projects = [
  {
    slug: "techstart-ecommerce",
    title: "TechStart E-Commerce",
    category: "Web Development",
    description: "A modern e-commerce platform built for a UK tech accessories brand, featuring seamless checkout and inventory management.",
    outcome: "40% increase in conversion rate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "React", "Stripe"],
  },
  {
    slug: "flame-kitchen-brand",
    title: "Flame Kitchen Brand",
    category: "Branding",
    description: "Complete brand identity for a modern British restaurant, from logo to menu design and environmental graphics.",
    outcome: "Strong brand recognition achieved",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    tags: ["Logo Design", "Brand Guidelines", "Print"],
  },
  {
    slug: "finflow-dashboard",
    title: "FinFlow Dashboard",
    category: "UI/UX Design",
    description: "A comprehensive financial dashboard design for a fintech startup, focusing on clarity and ease of use.",
    outcome: "50% reduction in onboarding time",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Dashboard", "Fintech", "Figma"],
  },
  {
    slug: "greengrowth-website",
    title: "GreenGrowth Website",
    category: "Web Development",
    description: "Corporate website for an environmental consulting firm with a focus on sustainability messaging.",
    outcome: "65% increase in enquiries",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    tags: ["Corporate", "Animation", "SEO"],
  },
  {
    slug: "studio-social-campaign",
    title: "Studio Social Campaign",
    category: "Graphics Design",
    description: "Social media campaign design for a fitness studio launch, including templates and promotional materials.",
    outcome: "200+ sign-ups in first month",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    tags: ["Social Media", "Marketing", "Fitness"],
  },
  {
    slug: "mindspace-app",
    title: "MindSpace App Design",
    category: "UI/UX Design",
    description: "Mobile app design for a meditation and wellness platform targeting busy professionals.",
    outcome: "4.8 star rating on app store",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    tags: ["Mobile App", "Wellness", "Prototype"],
  },
];

const Portfolio = () => {
  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Work</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Explore our portfolio of successful projects. Each piece represents 
                our commitment to quality, creativity, and client success.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link to={`/case-study/${project.slug}`}>
                  <motion.article
                    className="group rounded-3xl overflow-hidden bg-card border border-border"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-primary"
                        >
                          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-primary font-medium">{project.outcome}</p>
                        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                          View Case Study →
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Like what you see?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Let's discuss how we can create something amazing for your business too.
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

export default Portfolio;

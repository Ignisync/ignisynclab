import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";

const projects = [
  {
    id: 1,
    title: "TechStart E-Commerce",
    category: "Web Development",
    description: "A modern e-commerce platform built for a UK tech accessories brand, featuring seamless checkout and inventory management.",
    challenge: "The client needed a fast, scalable e-commerce solution that could handle high traffic during promotional periods.",
    solution: "Built a custom platform with optimized performance, integrated payment processing, and real-time inventory sync.",
    outcome: "40% increase in conversion rate and 60% improvement in page load times.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "React", "Stripe"],
  },
  {
    id: 2,
    title: "Flame Kitchen Brand",
    category: "Branding",
    description: "Complete brand identity for a modern British restaurant, from logo to menu design and environmental graphics.",
    challenge: "Create a distinctive brand that stands out in a competitive market while appealing to a diverse audience.",
    solution: "Developed a bold, memorable visual identity with warm colours and modern typography that reflects the culinary experience.",
    outcome: "Successfully launched with strong brand recognition and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    tags: ["Logo Design", "Brand Guidelines", "Print"],
  },
  {
    id: 3,
    title: "FinFlow Dashboard",
    category: "UI/UX Design",
    description: "A comprehensive financial dashboard design for a fintech startup, focusing on clarity and ease of use.",
    challenge: "Simplify complex financial data into an intuitive interface for non-technical users.",
    solution: "Created a clean, data-focused design with clear visual hierarchy and helpful data visualisations.",
    outcome: "Reduced user onboarding time by 50% and increased daily active users by 35%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Dashboard", "Fintech", "Figma"],
  },
  {
    id: 4,
    title: "GreenGrowth Website",
    category: "Web Development",
    description: "Corporate website for an environmental consulting firm with a focus on sustainability messaging.",
    challenge: "Communicate complex environmental services in an engaging, accessible way.",
    solution: "Built an interactive website with animated infographics and clear service pathways.",
    outcome: "Increased enquiries by 65% and improved time on site by 40%.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    tags: ["Corporate", "Animation", "SEO"],
  },
  {
    id: 5,
    title: "Studio Social Campaign",
    category: "Graphics Design",
    description: "Social media campaign design for a fitness studio launch, including templates and promotional materials.",
    challenge: "Create eye-catching visuals that drive engagement and gym memberships.",
    solution: "Designed a cohesive visual system with bold typography, energetic imagery, and clear calls-to-action.",
    outcome: "Generated 200+ sign-ups in the first month with 4x average engagement rate.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    tags: ["Social Media", "Marketing", "Fitness"],
  },
  {
    id: 6,
    title: "MindSpace App Design",
    category: "UI/UX Design",
    description: "Mobile app design for a meditation and wellness platform targeting busy professionals.",
    challenge: "Create a calming yet engaging experience that encourages daily usage.",
    solution: "Designed a minimalist interface with soothing colours, smooth animations, and personalised content flows.",
    outcome: "4.8 star rating on app store with 85% user retention rate.",
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our portfolio of successful projects. Each piece represents 
              our commitment to quality, creativity, and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-3xl overflow-hidden bg-card border border-border hover-lift"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-1">Challenge</h4>
                      <p className="text-xs text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-1">Outcome</h4>
                      <p className="text-xs text-primary font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Like what you see?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss how we can create something amazing for your business too.
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

export default Portfolio;

import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const caseStudies = {
  "techstart-ecommerce": {
    title: "TechStart E-Commerce",
    category: "Web Development",
    client: "TechStart Ltd",
    duration: "8 weeks",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    overview: "TechStart needed a modern e-commerce platform that could handle high traffic during promotional periods while providing an exceptional shopping experience for their tech-savvy customers.",
    challenge: "The existing platform was slow, couldn't scale during sales events, and had a checkout abandonment rate of 68%. Mobile experience was particularly poor, with customers struggling to complete purchases on smaller screens.",
    solution: "We built a completely new e-commerce platform using modern technologies, focusing on performance optimization, mobile-first design, and a streamlined checkout process. Key features included real-time inventory sync, one-click checkout for returning customers, and dynamic pricing for promotions.",
    results: [
      { metric: "40%", label: "Increase in conversion rate" },
      { metric: "60%", label: "Faster page load times" },
      { metric: "52%", label: "Reduction in cart abandonment" },
      { metric: "3x", label: "Traffic handling capacity" },
    ],
    testimonial: {
      quote: "IgnisyncLabs transformed our online store. The new platform handles our biggest sales with ease, and our customers love the experience.",
      author: "James Wilson",
      role: "CEO, TechStart Ltd",
    },
    tags: ["E-Commerce", "React", "Stripe", "Performance"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    ],
    nextProject: "flame-kitchen-brand",
  },
  "flame-kitchen-brand": {
    title: "Flame Kitchen Brand",
    category: "Branding",
    client: "Flame Kitchen",
    duration: "6 weeks",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop",
    overview: "Flame Kitchen, a new British restaurant concept, needed a complete brand identity that would stand out in a competitive market while conveying warmth, quality, and modern culinary excellence.",
    challenge: "The restaurant market in the UK is highly competitive. Flame Kitchen needed to differentiate itself from both traditional British pubs and modern chain restaurants, while appealing to a diverse demographic of food enthusiasts.",
    solution: "We developed a bold, memorable visual identity centred around the concept of 'fire' – representing both the cooking method and passion for food. The design system included a dynamic logo that works across all applications, a warm colour palette, custom typography, and comprehensive brand guidelines.",
    results: [
      { metric: "100%", label: "Brand recognition in target area" },
      { metric: "45%", label: "Above-average social engagement" },
      { metric: "4.8★", label: "Average customer rating" },
      { metric: "Featured", label: "In local food publications" },
    ],
    testimonial: {
      quote: "The brand IgnisyncLabs created perfectly captures what we're about. Customers often comment on how memorable our branding is.",
      author: "Sarah Chen",
      role: "Owner, Flame Kitchen",
    },
    tags: ["Logo Design", "Brand Guidelines", "Print Design", "Signage"],
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    ],
    nextProject: "finflow-dashboard",
  },
  "finflow-dashboard": {
    title: "FinFlow Dashboard",
    category: "UI/UX Design",
    client: "FinFlow Technologies",
    duration: "10 weeks",
    year: "2024",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    overview: "FinFlow needed a comprehensive financial dashboard that could present complex data in an intuitive, accessible way for users ranging from finance professionals to everyday investors.",
    challenge: "The existing dashboard was cluttered and overwhelming. Users struggled to find key information, leading to low engagement and high support ticket volume. The mobile experience was essentially unusable.",
    solution: "We conducted extensive user research to understand information priorities, then designed a clean, modular dashboard with customisable widgets. Clear data visualisations replaced dense tables, and a progressive disclosure pattern ensured users could dive deeper when needed.",
    results: [
      { metric: "50%", label: "Reduction in onboarding time" },
      { metric: "35%", label: "Increase in daily active users" },
      { metric: "72%", label: "Decrease in support tickets" },
      { metric: "4.9★", label: "App store rating" },
    ],
    testimonial: {
      quote: "The new dashboard transformed how our users interact with their finances. It's beautiful, intuitive, and our users absolutely love it.",
      author: "David Park",
      role: "Product Lead, FinFlow",
    },
    tags: ["Dashboard", "Fintech", "Figma", "User Research"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop",
    ],
    nextProject: "greengrowth-website",
  },
  "greengrowth-website": {
    title: "GreenGrowth Website",
    category: "Web Development",
    client: "GreenGrowth Consulting",
    duration: "6 weeks",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop",
    overview: "GreenGrowth, an environmental consulting firm, needed a website that would effectively communicate their complex services while establishing them as industry thought leaders.",
    challenge: "Environmental consulting can be complex and intimidating for potential clients. GreenGrowth needed to explain their services clearly, build trust through demonstrating expertise, and make it easy for prospects to take the next step.",
    solution: "We created an interactive website with animated infographics that explain complex environmental concepts simply. Clear service pathways guide visitors to the right solutions, while integrated case studies and thought leadership content establish credibility.",
    results: [
      { metric: "65%", label: "Increase in enquiries" },
      { metric: "40%", label: "Improvement in time on site" },
      { metric: "Page 1", label: "Google ranking for key terms" },
      { metric: "28%", label: "Lead-to-client conversion" },
    ],
    testimonial: {
      quote: "Our new website does the heavy lifting of explaining what we do. Prospects now arrive to calls already understanding our value.",
      author: "Emma Thompson",
      role: "Director, GreenGrowth",
    },
    tags: ["Corporate", "Animation", "SEO", "Content Strategy"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    ],
    nextProject: "studio-social-campaign",
  },
  "studio-social-campaign": {
    title: "Studio Social Campaign",
    category: "Graphics Design",
    client: "Studio Fitness",
    duration: "4 weeks",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&h=900&fit=crop",
    overview: "Studio Fitness was launching a new location and needed a social media campaign that would generate buzz, drive sign-ups, and establish their brand presence in a new market.",
    challenge: "Launching in a market with established competitors meant Studio Fitness needed to make a strong first impression. They had a limited marketing budget and needed high-impact visuals that would cut through social media noise.",
    solution: "We designed a cohesive social media campaign with bold, energetic visuals that captured the studio's personality. The campaign included templates for stories, posts, and ads, plus animated content for maximum engagement. A clear visual hierarchy ensured the key message and call-to-action were always prominent.",
    results: [
      { metric: "200+", label: "Sign-ups in first month" },
      { metric: "4x", label: "Average engagement rate" },
      { metric: "15K", label: "New followers gained" },
      { metric: "£2.40", label: "Cost per acquisition" },
    ],
    testimonial: {
      quote: "The campaign exceeded all our expectations. We hit our 6-month member target in just 8 weeks.",
      author: "Marcus Johnson",
      role: "Marketing Manager, Studio Fitness",
    },
    tags: ["Social Media", "Marketing", "Fitness", "Campaign"],
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    ],
    nextProject: "mindspace-app",
  },
  "mindspace-app": {
    title: "MindSpace App Design",
    category: "UI/UX Design",
    client: "MindSpace Wellness",
    duration: "12 weeks",
    year: "2023",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop",
    overview: "MindSpace wanted to create a meditation and wellness app that would help busy professionals find calm in their hectic lives, with a focus on short, effective sessions.",
    challenge: "The wellness app market is saturated, and many users download apps but never form a habit. MindSpace needed a design that would encourage daily usage while creating a genuinely calming experience.",
    solution: "We designed a minimalist interface with a soothing colour palette and gentle animations that reinforce the calming experience. Personalised content flows adapt to user preferences and available time. Gamification elements encourage streak-building without adding stress.",
    results: [
      { metric: "4.8★", label: "App store rating" },
      { metric: "85%", label: "User retention rate" },
      { metric: "12min", label: "Average daily session" },
      { metric: "50K+", label: "Downloads in 3 months" },
    ],
    testimonial: {
      quote: "IgnisyncLabs understood that the design itself needed to be therapeutic. Using the app feels like a breath of fresh air.",
      author: "Dr. Lisa Kumar",
      role: "Founder, MindSpace",
    },
    tags: ["Mobile App", "Wellness", "Prototype", "Animation"],
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    ],
    nextProject: "techstart-ecommerce",
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  if (!study) {
    return (
      <LayoutComponent>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
            <Link to="/portfolio">
              <Button variant="outline">Back to Portfolio</Button>
            </Link>
          </div>
        </div>
      </LayoutComponent>
    );
  }

  const nextStudy = caseStudies[study.nextProject as keyof typeof caseStudies];

  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 h-[60vh] overflow-hidden">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-16">
          <FadeIn>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              {study.category}
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {study.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {study.overview}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {study.client}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {study.duration}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {study.year}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              The Results
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((result, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {result.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">{result.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Project Gallery
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {study.images.map((image, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${study.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "{study.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{study.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextStudy && (
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground mb-2">Next Project</p>
                <h3 className="text-2xl md:text-3xl font-bold">{nextStudy.title}</h3>
              </div>
              <div className="flex justify-center">
                <Link to={`/case-study/${study.nextProject}`}>
                  <Button variant="hero" size="lg">
                    View Case Study
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want similar results?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Let's discuss how we can help transform your business with exceptional design and technology.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default CaseStudy;

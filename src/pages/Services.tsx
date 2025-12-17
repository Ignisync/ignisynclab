import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Sparkles, Layout as LayoutIcon, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/layout/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

import serviceBranding from "@/assets/service-branding.jpg";
import serviceUiux from "@/assets/service-uiux.jpg";
import serviceGraphics from "@/assets/service-graphics.jpg";
import heroWebDev from "@/assets/hero-web-dev.jpg";

const services = [
  {
    icon: Code,
    title: "Website Design & Development",
    description: "Custom, fast, and responsive websites built with modern technology that help your business stand out online.",
    features: [
      "Business & corporate websites",
      "E-commerce platforms",
      "Landing pages",
      "Portfolio websites",
      "Mobile-responsive design",
      "SEO optimization",
    ],
    idealFor: "Businesses needing a professional online presence that converts visitors into customers.",
    image: heroWebDev,
  },
  {
    icon: Palette,
    title: "Branding & Logo Design",
    description: "Create a memorable brand identity that resonates with your audience and builds lasting trust.",
    features: [
      "Logo design & variations",
      "Brand guidelines",
      "Colour palette & typography",
      "Visual identity system",
      "Stationery design",
      "Brand strategy",
    ],
    idealFor: "Startups and businesses looking to establish or refresh their brand identity.",
    image: serviceBranding,
  },
  {
    icon: Sparkles,
    title: "Graphics Design",
    description: "Eye-catching visual designs for all your marketing needs, from social media to print.",
    features: [
      "Social media graphics",
      "Marketing banners",
      "Business cards & flyers",
      "Presentation design",
      "Print materials",
      "Digital advertising assets",
    ],
    idealFor: "Businesses needing consistent, professional visuals across all marketing channels.",
    image: serviceGraphics,
  },
  {
    icon: LayoutIcon,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, enjoyable experiences and drives conversions.",
    features: [
      "Web app UI/UX",
      "Mobile app design",
      "Wireframes & prototypes",
      "User research",
      "Usability testing",
      "Design systems",
    ],
    idealFor: "Product teams and startups building digital products that need exceptional user experiences.",
    image: serviceUiux,
  },
];

const Services = () => {
  return (
    <LayoutComponent>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Comprehensive digital solutions to help your business thrive online. 
                From stunning websites to memorable brands, we've got you covered.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's included:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Check className="w-4 h-4 text-primary shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-sm">
                        <span className="font-medium text-primary">Ideal for: </span>
                        <span className="text-muted-foreground">{service.idealFor}</span>
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction={index % 2 === 0 ? "left" : "right"} delay={0.2}>
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.div 
                      className="aspect-[4/3] rounded-3xl overflow-hidden border border-border"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>
                </FadeIn>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not sure what you need?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Book a free consultation call and let's discuss your project. 
                We'll help you find the right solution for your business.
              </p>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Button variant="hero" size="xl">
                    Get a Free Consultation
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

export default Services;

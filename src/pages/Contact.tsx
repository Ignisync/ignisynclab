import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import LayoutComponent from "@/components/layout/Layout";

const projectTypes = [
  "Website Development",
  "Branding & Logo",
  "Graphics Design",
  "UI/UX Design",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

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
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear about it. 
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to start your project? Send us a message and let's make 
                  something great together.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email us</h4>
                      <a
                        href="mailto:hello@ignisynclabs.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@ignisynclabs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">United Kingdom</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-card border border-border">
                  <h4 className="font-semibold mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">1.</span>
                      We'll review your enquiry within 24 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">2.</span>
                      Schedule a free discovery call
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">3.</span>
                      Receive a tailored proposal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent. We'll be in touch soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", projectType: "", message: "" });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-card border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email address <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 bg-card border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium">
                      Project type <span className="text-primary">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell us about your project <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-card border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Contact;

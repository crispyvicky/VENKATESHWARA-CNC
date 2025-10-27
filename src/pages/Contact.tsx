import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden mt-[90px]">
        <div className="absolute inset-0 bg-gradient-to-br from-walnut via-mahogany to-aged-oak" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
        
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-sandalwood font-accent italic">
            Let's Create Something Beautiful Together
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 md:p-12 shadow-premium border-none">
                <h2 className="text-3xl font-display font-bold text-walnut mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-walnut mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="h-14 border-aged-oak/30 focus:border-golden-teak"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-walnut mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-14 border-aged-oak/30 focus:border-golden-teak"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-walnut mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-14 border-aged-oak/30 focus:border-golden-teak"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-walnut mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-14 px-5 rounded-xl border-2 border-aged-oak/30 bg-background focus:border-golden-teak focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="cnc-cutting">CNC Cutting & Carving</option>
                        <option value="custom-design">Custom Design</option>
                        <option value="doors-panels">Doors & Panels</option>
                        <option value="wall-art">Wall Art</option>
                        <option value="furniture">Furniture</option>
                        <option value="architectural">Architectural Elements</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-walnut mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      className="min-h-[160px] border-aged-oak/30 focus:border-golden-teak resize-none"
                    />
                  </div>

                  <Button type="submit" variant="golden" size="lg" className="w-full md:w-auto">
                    Submit Request
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8 shadow-premium border-none">
                <h3 className="text-2xl font-display font-bold text-walnut mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-golden flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-walnut" />
                    </div>
                    <div>
                      <p className="font-semibold text-walnut mb-1">Visit Us</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        123 Craftsman Street<br />
                        Woodwork District<br />
                        Mumbai, MH 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-golden flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-walnut" />
                    </div>
                    <div>
                      <p className="font-semibold text-walnut mb-1">Call Us</p>
                      <a
                        href="tel:+919876543210"
                        className="text-sm text-muted-foreground hover:text-golden-teak transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-golden flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-walnut" />
                    </div>
                    <div>
                      <p className="font-semibold text-walnut mb-1">Email Us</p>
                      <a
                        href="mailto:info@venkateshwaracnc.com"
                        className="text-sm text-muted-foreground hover:text-golden-teak transition-colors"
                      >
                        info@venkateshwaracnc.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-golden flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-walnut" />
                    </div>
                    <div>
                      <p className="font-semibold text-walnut mb-1">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday<br />
                        9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-walnut text-ivory shadow-premium border-none">
                <h3 className="text-xl font-display font-bold mb-3">
                  Free Consultation
                </h3>
                <p className="text-sm text-sandalwood leading-relaxed">
                  Schedule a visit to our showroom or request a site visit for custom measurements and design consultation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-muted">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-golden-teak" />
            <p className="text-lg font-medium">Interactive Map</p>
            <p className="text-sm">Google Maps integration would go here</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

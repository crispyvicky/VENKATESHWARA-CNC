
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Settings, Palette, Hammer, Sparkles, Layers, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "CNC Cutting & Carving",
      description: "Precision CNC machining for intricate patterns, designs, and detailed woodwork. Our state-of-the-art equipment ensures accuracy down to the micron.",
      features: ["3D Carving", "Precision Cutting", "Pattern Replication", "Complex Geometries"],
    },
    {
      icon: Settings,
      title: "CNC Engraving",
      description: "High-detail engraving for portraits, signage, nameplates, and decorative inlays across hardwoods and veneers.",
      features: ["Portrait Engraving", "Nameboards", "Logos & Emblems", "Inlay Work"],
    },
    {
      icon: Palette,
      title: "Custom Wood Design",
      description: "Collaborate with our expert designers to bring your vision to life. From traditional to contemporary, we create bespoke designs tailored to your space.",
      features: ["Consultation", "3D Rendering", "Material Selection", "Design Iterations"],
    },
    {
      icon: Layers,
      title: "Decorative Jali & Grills",
      description: "Intricate jali patterns and grills for partitions, facades, wardrobes, and vents with artisanal quality.",
      features: ["Islamic Patterns", "Geometric Motifs", "Vent Panels", "Room Dividers"],
    },
    {
      icon: Home,
      title: "Wooden Doors & Panels",
      description: "Handcrafted doors and wall panels that serve as stunning focal points. Each piece is meticulously crafted to enhance your interior aesthetics.",
      features: ["Entry Doors", "Interior Doors", "Wall Panels", "Room Dividers"],
    },
    {
      icon: Sparkles,
      title: "Decorative Wall Art",
      description: "Transform blank walls into artistic statements with our custom wooden art pieces. Perfect for homes, offices, and commercial spaces.",
      features: ["Abstract Art", "Geometric Patterns", "Nature-Inspired", "Cultural Motifs"],
    },
    {
      icon: Layers,
      title: "Furniture Crafting",
      description: "From elegant tables to intricate cabinets, we craft furniture pieces that combine functionality with artistry, built to last generations.",
      features: ["Custom Tables", "Cabinets", "Shelving Units", "Statement Pieces"],
    },
    {
      icon: Hammer,
      title: "Architectural Elements",
      description: "Ceiling panels, columns, and architectural details that add character and luxury to your spaces. Perfect for high-end residential and commercial projects.",
      features: ["Ceiling Panels", "Decorative Columns", "Railings", "Trim Work"],
    },
    {
      icon: Hammer,
      title: "Temple Doors & Traditional Art",
      description: "Sacred doors, pillars, and motifs crafted with reverence, blending cultural heritage with precision craftsmanship.",
      features: ["Temple Doors", "Pillars", "Panels", "Mandapam Elements"],
    },
    {
      icon: Sparkles,
      title: "Portraits & Nameboards",
      description: "Lifelike portraits and premium nameboards for homes and businesses, finished to perfection.",
      features: ["Portrait Panels", "Nameplates", "Business Signage", "House Names"],
    },
    {
      icon: Layers,
      title: "Ceiling Installations",
      description: "Stunning CNC ceiling installations and layered designs that elevate interior spaces.",
      features: ["Layered Designs", "Backlit Panels", "Cove Patterns", "Acoustic Panels"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-[90px]">
        <div className="absolute inset-0 bg-gradient-to-br from-mahogany via-walnut to-aged-oak" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
        
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-4">
            Our Services
          </h1>
          <p className="text-xl text-sandalwood font-accent italic">
            Comprehensive CNC & Woodwork Solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group p-8 shadow-premium hover:shadow-premium-lg transition-smooth hover:-translate-y-3 border-none"
                >
                  <div className="w-20 h-20 rounded-full gradient-golden flex items-center justify-center mb-6 group-hover:rotate-[360deg] transition-smooth duration-700">
                    <Icon className="w-10 h-10 text-walnut" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold text-walnut mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-golden-teak" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group-hover:border-accent group-hover:text-accent">
                    Learn More
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-sandalwood/30">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-walnut mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we ensure excellence at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your vision and requirements" },
              { step: "02", title: "Design", desc: "Create detailed plans and 3D renders" },
              { step: "03", title: "Crafting", desc: "Precision CNC work and handcrafting" },
              { step: "04", title: "Delivery", desc: "Installation and final touches" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl font-display font-bold text-golden-teak/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-walnut mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-golden-teak to-transparent -ml-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-walnut relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-mahogany to-aged-oak" />
        <div className="relative max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ivory mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-sandalwood mb-8 leading-relaxed">
            Get a free consultation and quote for your custom woodwork project
          </p>
          <Link href="/contact">
            <Button variant="golden" size="xl">
              Get Free Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

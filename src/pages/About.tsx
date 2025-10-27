import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Layers, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "Every piece we create is infused with dedication, artistry, and a deep respect for the timeless tradition of woodworking.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We never compromise on quality. From material selection to final finishing, excellence is our standard.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your vision drives our work. We collaborate closely to ensure every detail matches your expectations.",
    },
    {
      icon: Layers,
      title: "Innovation",
      description: "Blending traditional craftsmanship with modern CNC technology to push the boundaries of what's possible.",
    },
  ];

  const stats = [
    { number: "1995", label: "Established" },
    { number: "2500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Artisans" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-[90px]">
        <div className="absolute inset-0 bg-gradient-to-br from-aged-oak via-mahogany to-walnut" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
        
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-4">
            About Us
          </h1>
          <p className="text-xl text-sandalwood font-accent italic">
            Decades of Heritage, Commitment to Excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-walnut mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 1995, <span className="font-semibold text-walnut">Venkateshwara CNC</span> began as a small woodworking shop with a simple mission: to preserve the ancient art of wooden craftsmanship while embracing modern innovation. Over the past three decades, we've grown into one of India's most trusted names in premium wooden art and CNC services.
            </p>
            
            <p>
              Our journey has been one of constant evolution. What started with traditional hand tools has transformed into a state-of-the-art facility equipped with cutting-edge CNC machinery. Yet, at our core, we remain committed to the timeless principles that guided our founders—uncompromising quality, meticulous attention to detail, and deep respect for the natural beauty of wood.
            </p>
            
            <p>
              Today, we serve architects, interior designers, builders, and discerning homeowners who demand nothing but the finest. From ornate temple carvings to contemporary wall art, from grand entrance doors to elegant furniture pieces, each project is a testament to our dedication to the craft.
            </p>
            
            <p className="font-accent italic text-xl text-golden-teak text-center py-8">
              "Where tradition meets precision, and every grain tells a story."
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-walnut relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-mahogany to-aged-oak" />
        <div className="relative max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-gold-leaf mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-sandalwood">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-walnut mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 shadow-premium hover:shadow-premium-lg transition-smooth hover:-translate-y-3 border-none text-center"
                >
                  <div className="w-16 h-16 rounded-full gradient-golden flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-walnut" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-walnut mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-sandalwood/30">
        <div className="max-w-[960px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-walnut mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            To create wooden masterpieces that transcend time—pieces that not only enhance spaces but become cherished heirlooms, passed down through generations. We believe that in an age of mass production, handcrafted artistry matters more than ever.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every cut, carve, and finish is executed with the understanding that we're not just working with wood—we're crafting legacy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

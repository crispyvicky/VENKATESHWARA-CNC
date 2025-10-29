import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Settings, Palette, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const heroBg = "/hero-bg.jpg";
const gallery1 = "/gallery-1.jpg";
const gallery2 = "/gallery-2.jpg";
const gallery3 = "/gallery-3.jpg";
const gallery4 = "/gallery-4.jpg";
const cncPrecision = "/cnc-precision.jpg";
const customDesign = "/custom-design.jpg";
const premiumMaterials = "/premium-materials.jpg";

const Index = () => {
  const features = [
    {
      icon: Settings,
      title: "Precision CNC Work",
      description: "State-of-the-art CNC technology ensures every cut, carve, and detail is executed with micron-level precision, bringing your vision to life with unmatched accuracy.",
      image: cncPrecision,
    },
    {
      icon: Palette,
      title: "Custom Designs",
      description: "Our expert designers collaborate with you to create bespoke wooden masterpieces that reflect your unique style, from traditional patterns to contemporary art.",
      image: customDesign,
    },
    {
      icon: Sparkles,
      title: "Premium Materials",
      description: "We source only the finest teak, mahogany, oak, and walnut, ensuring each piece showcases the natural beauty and durability of premium hardwoods.",
      image: premiumMaterials,
    },
  ];

  const testimonials = [
    {
      quote: "The craftsmanship is absolutely stunning. They transformed our home with their exquisite wooden doors and panels.",
      author: "Rajesh Kumar",
      role: "Architect",
    },
    {
      quote: "Venkateshwara CNC exceeded all expectations. The attention to detail and quality is unparalleled in the industry.",
      author: "Priya Sharma",
      role: "Interior Designer",
    },
    {
      quote: "Their custom wooden art pieces have become the centerpiece of our luxury resort. Truly masterful work.",
      author: "Amit Patel",
      role: "Resort Owner",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: "scale(1.1)",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-walnut/80 via-mahogany/60 to-walnut/70" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-ivory mb-6 animate-fade-in drop-shadow-2xl leading-tight">
            CRAFTING WOODEN <span className="text-gold-leaf">MASTERPIECES</span>
          </h1>
          <p className="text-xl md:text-3xl font-accent italic text-sandalwood mb-12 animate-fade-in delay-200">
            Timeless Artistry Meets Precision CNC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-400">
            <Link href="/gallery">
              <Button variant="golden" size="xl">
                Explore Our Gallery <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="xl">
                Request Custom Design
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-gold-leaf" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-walnut mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Decades of experience, cutting-edge technology, and an unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group p-8 shadow-premium hover:shadow-premium-lg transition-smooth hover:-translate-y-3 border-none overflow-hidden"
                >
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <div className="w-20 h-20 rounded-full gradient-golden flex items-center justify-center mb-6 group-hover:rotate-[360deg] transition-smooth duration-700">
                    <Icon className="w-10 h-10 text-walnut" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-walnut mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-secondary group-hover:text-accent transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-sandalwood/30">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-walnut mb-4">
              Featured Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our portfolio of handcrafted wooden masterpieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[gallery1, gallery2, gallery3, gallery4].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-premium hover:shadow-premium-lg transition-smooth cursor-pointer h-80"
              >
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button variant="golden" size="lg">
                View Full Gallery <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-walnut relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-mahogany to-aged-oak" />
        <div className="relative max-w-[960px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ivory mb-4">
              What Our Clients Say
            </h2>
            <div className="flex justify-center gap-1 text-gold-leaf">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-mahogany/40 border-aged-oak/20 backdrop-blur-sm"
              >
                <div className="text-6xl text-golden-teak/40 font-display mb-4">"</div>
                <p className="text-lg font-accent italic text-sandalwood leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="border-t border-aged-oak/30 pt-4">
                  <p className="text-base font-semibold text-golden-teak">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-sandalwood/70">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-walnut/90 via-mahogany/80 to-aged-oak/90" />
        
        <div className="relative z-10 max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-ivory mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-sandalwood mb-12 leading-relaxed">
            Let's create something extraordinary together. From concept to completion, we bring your vision to life with masterful craftsmanship.
          </p>
          <Link href="/contact">
            <Button variant="golden" size="xl" className="shadow-golden-lg animate-float">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

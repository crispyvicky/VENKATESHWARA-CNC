"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const gallery1 = "/gallery-1.jpg";
const gallery2 = "/gallery-2.jpg";
const gallery3 = "/gallery-3.jpg";
const gallery4 = "/gallery-4.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["all", "doors", "wall-art", "furniture", "custom"];

  const galleryItems = [
    { id: 1, image: gallery1, category: "doors", title: "Ornate Teak Door", price: "₹45,000" },
    { id: 2, image: gallery2, category: "wall-art", title: "Geometric Panel", price: "₹32,000" },
    { id: 3, image: gallery3, category: "furniture", title: "Custom Table", price: "₹58,000" },
    { id: 4, image: gallery4, category: "custom", title: "Ceiling Mandala", price: "₹75,000" },
    { id: 5, image: gallery1, category: "doors", title: "Classic Entry Door", price: "₹52,000" },
    { id: 6, image: gallery2, category: "wall-art", title: "Abstract Wood Art", price: "₹28,000" },
    { id: 7, image: gallery3, category: "furniture", title: "Carved Cabinet", price: "₹65,000" },
    { id: 8, image: gallery4, category: "custom", title: "Temple Design", price: "₹95,000" },
  ];

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/media/list");
        if (!r.ok) throw new Error("non-200");
        const text = await r.text();
        if (!text) {
          setItems([]);
          return;
        }
        let data: any[] = [];
        try {
          data = JSON.parse(text);
        } catch {
          data = [];
        }
        const mapped = data.map((m: any, idx: number) => ({
          id: m._id || idx,
          image: m.url,
          category: (m.category || "custom").toLowerCase(),
          title: m.title || "Recent Work",
          price: "",
        }));
        setItems(mapped);
      } catch (_) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const sourceItems = items.length > 0 ? items : galleryItems;

  const filteredItems = activeFilter === "all" ? sourceItems : sourceItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-[90px]">
        <div className="absolute inset-0 bg-gradient-to-br from-walnut via-mahogany to-aged-oak" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />

        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-sandalwood font-accent italic">
            Handcrafted Masterpieces That Tell Stories
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[90px] z-40 bg-background/95 backdrop-blur-md border-b border-aged-oak/20 py-6">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "golden" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="capitalize"
              >
                {category === "wall-art" ? "Wall Art" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-premium hover:shadow-premium-lg transition-smooth cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/95 via-walnut/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                  <h3 className="text-xl font-display font-semibold text-ivory mb-2 transform translate-y-4 group-hover:translate-y-0 transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-gold-leaf mb-3 transform translate-y-4 group-hover:translate-y-0 transition-smooth delay-75">
                    {item.price}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full transform translate-y-4 group-hover:translate-y-0 transition-smooth delay-100"
                  >
                    View Details
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-golden-teak/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-walnut capitalize">
                    {item.category.replace("-", " ")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sandalwood/30">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-walnut mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us create a custom design tailored to your vision
          </p>
          <Button variant="golden" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

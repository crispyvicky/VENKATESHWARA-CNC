import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
const gallery1 = "/gallery-1.jpg";
const gallery2 = "/gallery-2.jpg";
const gallery3 = "/gallery-3.jpg";
const gallery4 = "/gallery-4.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Juhu",
      category: "Residential",
      year: "2024",
      image: gallery1,
      description: "Complete interior wooden work including doors, panels, and custom furniture for a 5000 sq ft luxury villa.",
      scope: "Doors, Wall Panels, Furniture, Ceiling Work",
    },
    {
      id: 2,
      title: "Corporate Office - BKC",
      category: "Commercial",
      year: "2023",
      image: gallery2,
      description: "Contemporary wooden wall art and conference room panels for a multinational tech company's Mumbai office.",
      scope: "Wall Art, Conference Panels, Reception Desk",
    },
    {
      id: 3,
      title: "Heritage Temple Restoration",
      category: "Religious",
      year: "2023",
      image: gallery3,
      description: "Intricate temple door restoration and new ceiling panels with traditional Indian motifs.",
      scope: "Door Restoration, Ceiling Panels, Decorative Elements",
    },
    {
      id: 4,
      title: "Boutique Hotel - Goa",
      category: "Hospitality",
      year: "2024",
      image: gallery4,
      description: "Custom wooden elements throughout a 20-room boutique resort, blending modern design with coastal aesthetics.",
      scope: "Room Dividers, Headboards, Lobby Feature Wall",
    },
    {
      id: 5,
      title: "Private Residence - Pune",
      category: "Residential",
      year: "2023",
      image: gallery1,
      description: "Bespoke pooja room with intricate carvings and custom storage solutions for a modern home.",
      scope: "Pooja Room, Storage Units, Entry Door",
    },
    {
      id: 6,
      title: "Restaurant Interior - Delhi",
      category: "Commercial",
      year: "2024",
      image: gallery2,
      description: "Rustic wooden elements combined with contemporary design for a farm-to-table restaurant concept.",
      scope: "Wall Cladding, Furniture, Bar Counter",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="relative h-[150px] flex items-center justify-center overflow-hidden mt-[90px]">
        <div className="absolute inset-0 bg-gradient-to-br from-mahogany via-walnut to-aged-oak" />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
        
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-ivory mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-sandalwood font-accent italic">
            Showcasing Excellence Across India
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden shadow-premium hover:shadow-premium-lg transition-smooth border-none"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-golden-teak/90 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-walnut">{project.year}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut/95 via-walnut/50 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-sandalwood text-xs font-semibold text-walnut">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-walnut mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="border-t border-aged-oak/20 pt-4">
                    <p className="text-sm font-semibold text-walnut mb-1">Scope of Work:</p>
                    <p className="text-sm text-muted-foreground">{project.scope}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-walnut relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-mahogany to-aged-oak" />
        <div className="relative max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ivory mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-sandalwood">
              Creating masterpieces across residential, commercial, and institutional spaces
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2500+", label: "Projects" },
              { number: "15+", label: "Cities" },
              { number: "98%", label: "Satisfaction" },
              { number: "50+", label: "Artisans" },
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-sandalwood/30">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-walnut mb-4">
            Let's Build Your Dream Project
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether residential, commercial, or institutional, we bring your vision to life
          </p>
          <a href="/contact" className="inline-block">
            <button className="h-14 px-12 py-4 text-base font-semibold rounded-full gradient-golden text-primary shadow-golden hover:shadow-golden-lg hover:-translate-y-1 hover:scale-105 transition-smooth">
              Start Your Project
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

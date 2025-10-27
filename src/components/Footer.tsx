import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-sandalwood relative overflow-hidden">
      {/* Subtle wood grain texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-walnut to-mahogany" />
      
      <div className="relative max-w-[1440px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-ivory mb-2">
                Venkateshwara <span className="text-golden-teak">CNC</span>
              </h3>
              <p className="text-sm font-accent italic text-aged-oak">
                Crafting Wooden Masterpieces Since 1995
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              Where ancient wooden craftsmanship meets modern precision CNC technology, creating timeless artistry for your spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold text-ivory mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Gallery", path: "/gallery" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-golden-teak transition-colors inline-block hover:translate-x-1 transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-display font-semibold text-ivory mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                "CNC Cutting & Carving",
                "Custom Wood Design",
                "Wooden Doors & Panels",
                "Wall Art & Decor",
                "Furniture Crafting",
                "Architectural Elements",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-semibold text-ivory mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golden-teak flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Craftsman Street, Woodwork District, Mumbai, MH 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golden-teak" />
                <a href="tel:+919876543210" className="text-sm hover:text-golden-teak transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-golden-teak" />
                <a
                  href="mailto:info@venkateshwaracnc.com"
                  className="text-sm hover:text-golden-teak transition-colors"
                >
                  info@venkateshwaracnc.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-aged-oak/30 flex items-center justify-center text-aged-oak hover:text-gold-leaf hover:border-golden-teak hover:bg-golden-teak/10 transition-smooth hover:scale-110 hover:rotate-12"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-aged-oak/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-aged-oak text-center md:text-left">
              © {currentYear} Venkateshwara CNC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-aged-oak hover:text-golden-teak transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-aged-oak hover:text-golden-teak transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

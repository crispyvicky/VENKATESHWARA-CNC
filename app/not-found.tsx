"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* 404 Content */}
      <section className="flex items-center justify-center min-h-[calc(100vh-180px)] mt-[90px]">
        <div className="max-w-[600px] mx-auto px-8 text-center">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-display font-bold text-walnut mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-walnut mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="golden" size="lg" className="w-full sm:w-auto">
                <Home className="mr-2" size={20} />
                Back to Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-aged-oak/20">
            <p className="text-sm text-muted-foreground mb-4">
              Popular pages you might be looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gallery" className="text-golden-teak hover:text-walnut transition-colors">
                Gallery
              </Link>
              <Link href="/services" className="text-golden-teak hover:text-walnut transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-golden-teak hover:text-walnut transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-golden-teak hover:text-walnut transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

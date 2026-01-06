"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/luxury-real-estate-interior-modern.jpg"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          </div>

          {/* Content */}
          <div
            className={`relative z-10 px-8 sm:px-12 md:px-16 py-20 sm:py-24 md:py-32 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
              Let our expert team guide you through every step of your real
              estate journey. Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 group">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Browse All Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

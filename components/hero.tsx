"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-modern-home-exterior-architectural.jpg" alt="Luxury Home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance mb-6 leading-tight">
            Find Your Dream Home
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            Discover exceptional properties in the world's most sought-after locations
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col sm:flex-row gap-3 bg-card p-3 rounded-xl shadow-2xl">
              <input
                type="text"
                placeholder="Enter location, property type..."
                className="flex-1 px-4 py-3 bg-background border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm hover:bg-background">
              Explore Properties
            </Button>
            <Button size="lg" variant="ghost">
              Watch Video Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}

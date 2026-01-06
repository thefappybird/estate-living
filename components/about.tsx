"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/luxury-real-estate-office-professional.jpg" alt="About Estate Living" className="w-full h-full object-cover" />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              Your Journey to Exceptional Living
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Estate Living has been the trusted partner for discerning clients seeking exceptional
              properties. Our commitment to excellence and personalized service has made us a leader in luxury real
              estate.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just sell properties—we create experiences. From the initial consultation to closing day and
              beyond, our team of experts is dedicated to making your real estate journey seamless and rewarding.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Market Knowledge</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Deep understanding of local markets and property values
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Personalized Service</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Tailored solutions that match your unique needs and lifestyle
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">End-to-End Support</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive assistance from search to closing and beyond
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

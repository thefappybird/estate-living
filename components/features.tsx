"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Key, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "Premium Properties",
    description: "Curated selection of luxury homes in exclusive neighborhoods",
  },
  {
    icon: Key,
    title: "Easy Access",
    description: "Virtual tours and seamless booking for property viewings",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Protected deals with comprehensive legal support",
  },
  {
    icon: TrendingUp,
    title: "Investment Insights",
    description: "Expert market analysis and investment opportunities",
  },
]

export function Features() {
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
    <section ref={ref} className="py-24 sm:py-32">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 transition-transform hover:scale-110">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

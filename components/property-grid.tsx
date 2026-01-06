"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Maximize } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Modern Villa with Ocean View",
    location: "Malibu, California",
    price: "$4,500,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image: "/modern-luxury-villa-ocean-view.jpg",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Contemporary Penthouse",
    location: "Manhattan, New York",
    price: "$8,200,000",
    beds: 4,
    baths: 3,
    sqft: "3,800",
    image: "/luxury-penthouse-city-view.jpg",
    badge: "New",
  },
  {
    id: 3,
    title: "Elegant Estate",
    location: "Beverly Hills, CA",
    price: "$12,900,000",
    beds: 7,
    baths: 6,
    sqft: "8,500",
    image: "/luxury-estate-mansion.jpg",
    badge: "Exclusive",
  },
  {
    id: 4,
    title: "Waterfront Residence",
    location: "Miami Beach, Florida",
    price: "$6,300,000",
    beds: 4,
    baths: 5,
    sqft: "5,100",
    image: "/waterfront-modern-home.jpg",
  },
  {
    id: 5,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    price: "$7,800,000",
    beds: 6,
    baths: 5,
    sqft: "6,200",
    image: "/luxury-mountain-cabin-modern.jpg",
  },
  {
    id: 6,
    title: "Urban Loft",
    location: "San Francisco, CA",
    price: "$3,400,000",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    image: "/modern-industrial-loft.jpg",
    badge: "Hot",
  },
]

export function PropertyGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, cardIndex])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = ref.current?.querySelectorAll(".property-card")
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="properties" ref={ref} className="py-24 sm:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">
            Featured Properties
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Explore our handpicked selection of extraordinary homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              data-index={index}
              className={`property-card group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {property.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{property.badge}</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{property.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

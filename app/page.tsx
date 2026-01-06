import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PropertyGrid } from "@/components/property-grid"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <PropertyGrid />
      <Stats />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}

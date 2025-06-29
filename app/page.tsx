import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import CTA from "./components/CTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectGrid from "@/components/project-grid"
import AboutSection from "@/components/about-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <ProjectGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import CoursesSection from "@/components/CoursesSection"
import WhyUsSection from "@/components/WhyUsSection"
import AdmissionForm from "@/components/AdmissionForm"
import GallerySection from "@/components/GallerySection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import { MessageCircle } from "lucide-react"
import ToppersBanner from "@/components/ToppersBanner"

const Index = () => {
  return (
    <>
      {/* SEO Meta handled via index.html */}
      <Navbar />

      <main>
        <HeroSection />
        <ToppersBanner />
        <AboutSection />
        <CoursesSection />
        <WhyUsSection />
        <AdmissionForm />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/917518788205?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions%20at%20Genius%20Point%20Coaching%20Institute"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 bg-green-500"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </>
  )
}

export default Index
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import EventTypes from './components/EventTypes'
import Approach from './components/Approach'
import WhyPro from './components/WhyPro'
import CinematicSection from './components/CinematicSection'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import InquiryForm from './components/InquiryForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-warm-dark focus:font-sans focus:text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <EventTypes />
        <Approach />
        <WhyPro />
        <CinematicSection />
        <Gallery />
        <Testimonials />
        <InquiryForm />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFAB />
    </>
  )
}

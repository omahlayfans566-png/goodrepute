import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { BUSINESS } from '../config/business'

const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=85',
    alt: 'Elegant wedding ceremony — [DEMO IMAGE, not an actual Good Repute Events event]',
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1800&q=85',
    alt: 'Luxury reception setting — [DEMO IMAGE]',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1800&q=85',
    alt: 'Premium event décor — [DEMO IMAGE]',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Entrance animation
  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 100)
    const t2 = setTimeout(() => setVisible(true), 300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  // Auto-advance slides
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
      aria-label="Hero — Good Repute Events"
    >
      {/* Background slides */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.url}
          className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden="true"
        >
          <img
            src={img.url}
            alt={img.alt}
            className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
              i === current ? 'scale-105' : 'scale-100'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/60 via-warm-dark/30 to-warm-dark/80" />
        </div>
      ))}

      {/* Subtle gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container-site text-center flex flex-col items-center">
        {/* Label */}
        <div
          className="label-gold mb-6 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '200ms',
          }}
        >
          Lagos, Nigeria
        </div>

        {/* Main headline */}
        <h1
          className="heading-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-ivory max-w-5xl mx-auto transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '450ms',
          }}
        >
          Moments,
          <br />
          <em className="text-gold not-italic">Meticulously</em>
          <br />
          Crafted.
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-8 font-sans font-light text-ivory/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '700ms',
          }}
        >
          Thoughtful planning. Seamless coordination.<br className="hidden md:block" /> Unforgettable celebrations.
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '900ms',
          }}
        >
          <a
            href={BUSINESS.whatsappUrl('Hello, I would like to plan an event with Good Repute Events.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Plan Your Event
          </a>
          <a
            href="#services"
            onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-outline"
          >
            Explore Our Services
          </a>
        </div>

        {/* Slide indicators */}
        <div
          className="flex gap-2 mt-14 transition-all duration-1000"
          style={{ opacity: visible ? 0.6 : 0, transitionDelay: '1100ms' }}
          aria-label="Image carousel indicators"
        >
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? 'w-8 h-1.5 bg-gold'
                  : 'w-1.5 h-1.5 bg-ivory/40 hover:bg-ivory/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ivory/40 hover:text-gold transition-colors duration-300 animate-bounce"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.5s' }}
      >
        <ChevronDown size={28} />
      </button>

      {/* Demo watermark — small, subtle */}
      <div className="absolute bottom-4 right-6 z-10 label-caps text-[9px] text-ivory/20 pointer-events-none select-none">
        DEMO CONCEPT
      </div>
    </section>
  )
}

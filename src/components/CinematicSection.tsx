import { useEffect, useRef } from 'react'
import { BUSINESS } from '../config/business'

export default function CinematicSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal')
    if (!els) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { rootMargin: '-60px', threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="From Vision to Celebration"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax-like scale */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1800&q=85"
          alt="Elegant event atmosphere — [DEMO IMAGE]"
          className="w-full h-full object-cover scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/70 via-warm-dark/50 to-warm-dark/80" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-warm-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site text-center max-w-3xl mx-auto">
        <p className="reveal label-gold mb-6">The Experience</p>
        <h2
          className="reveal heading-display text-4xl md:text-6xl lg:text-7xl text-ivory mb-8 leading-tight"
          style={{ transitionDelay: '150ms' }}
        >
          From Vision
          <br />
          <em className="text-gold not-italic">to Celebration.</em>
        </h2>
        <div className="divider-gold mx-auto reveal mb-8" style={{ transitionDelay: '250ms' }} />
        <p
          className="reveal font-sans font-light text-ivory/75 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
          style={{ transitionDelay: '320ms' }}
        >
          Every memorable event begins with an idea. Our role is to help transform that idea into a thoughtfully planned experience.
        </p>
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transitionDelay: '420ms' }}>
          <a
            href={BUSINESS.whatsappUrl('Hello, I would like to start planning my event with Good Repute Events.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Start Planning
          </a>
          <a
            href="#services"
            onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-outline"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

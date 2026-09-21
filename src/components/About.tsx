import { useEffect, useRef } from 'react'
import { BUSINESS } from '../config/business'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')
    if (!els) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { rootMargin: '-80px', threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-warm-dark relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c9a96e 0, #c9a96e 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image stack */}
          <div className="relative reveal-left" style={{ transitionDelay: '100ms' }}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=85"
                alt="Elegant event moment — [DEMO IMAGE, not an actual Good Repute Events event]"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/50 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-warm-mid border border-gold/20 p-6 w-48 md:w-56">
              <p className="font-display text-3xl md:text-4xl text-gold font-light">Lagos</p>
              <p className="label-caps text-[10px] text-ivory/50 mt-1 tracking-widest">Nigeria</p>
              <div className="w-8 h-px bg-gold/40 mt-3" />
              <p className="font-sans text-xs text-ivory/50 mt-2 leading-relaxed">
                Event planning &amp; management
              </p>
            </div>

            {/* Gold corner accent */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/40" aria-hidden="true" />
          </div>

          {/* Right — text */}
          <div className="lg:pl-4">
            <p className="reveal label-gold mb-4" style={{ transitionDelay: '100ms' }}>
              About Good Repute Events
            </p>

            <h2
              className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6"
              style={{ transitionDelay: '200ms' }}
            >
              Where Every Detail<br />
              <em className="text-gold not-italic">Has a Purpose.</em>
            </h2>

            <div className="divider-gold-left reveal mb-8" style={{ transitionDelay: '300ms' }} />

            <p
              className="reveal body-elegant text-base md:text-lg mb-6"
              style={{ transitionDelay: '350ms' }}
            >
              Good Repute Events is a professional event planning and management company based in Lagos, Nigeria. We help clients turn their event visions into well-organised, memorable experiences through structured planning, clear coordination and professional on-the-day management.
            </p>

            <p
              className="reveal body-elegant mb-10"
              style={{ transitionDelay: '420ms' }}
            >
              From concept to execution, our team provides the framework, the attention to detail and the calm expertise that every important event deserves.
            </p>

            {/* Services tags */}
            <div className="reveal flex flex-wrap gap-3 mb-10" style={{ transitionDelay: '480ms' }}>
              {[
                'Event Planning',
                'Project Management',
                'Consultation',
                'On-the-Day Coordination',
                'Event Support',
              ].map(tag => (
                <span
                  key={tag}
                  className="label-caps text-[10px] text-ivory/60 border border-ivory/15 px-4 py-2 hover:border-gold/40 hover:text-gold transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Creative Lead credit */}
            <div className="reveal flex items-center gap-4 pt-8 border-t border-ivory/10" style={{ transitionDelay: '540ms' }}>
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-gold text-lg font-light">B</span>
              </div>
              <div>
                <p className="font-sans text-sm text-ivory font-medium">{BUSINESS.creativeLeadName}</p>
                <p className="label-caps text-[10px] text-gold/70 mt-0.5">{BUSINESS.creativeLeadTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

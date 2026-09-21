import { useEffect, useRef } from 'react'
import { WHY_REASONS, BUSINESS } from '../config/business'
import { Check } from 'lucide-react'

export default function WhyPro() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')
    if (!els) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { rootMargin: '-60px', threshold: 0.08 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why" ref={sectionRef} className="section-padding bg-warm-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" aria-hidden="true" />

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            <p className="reveal label-gold mb-4">Why It Matters</p>
            <h2 className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
              Your Celebration Deserves<br />
              <em className="text-gold not-italic">More Than Guesswork.</em>
            </h2>
            <div className="divider-gold-left reveal mb-8" style={{ transitionDelay: '180ms' }} />
            <p className="reveal body-elegant mb-10" style={{ transitionDelay: '240ms' }}>
              A professional event management team brings structure, calm and expertise to every detail — so the people who matter most can focus on enjoying the experience.
            </p>

            <a
              href={BUSINESS.whatsappUrl("Hello, I'd like to find out more about Good Repute Events.")}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal btn-outline inline-flex"
              style={{ transitionDelay: '300ms' }}
            >
              Discuss Your Event
            </a>
          </div>

          {/* Right — reasons grid */}
          <div className="grid sm:grid-cols-2 gap-px bg-ivory/5">
            {WHY_REASONS.map((reason, i) => (
              <div
                key={reason.title}
                className="reveal bg-warm-dark p-6 group hover:bg-warm-mid transition-colors duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Check size={12} className="text-gold" />
                  </div>
                  <h3 className="font-sans text-sm font-medium text-ivory group-hover:text-gold transition-colors duration-300">
                    {reason.title}
                  </h3>
                </div>
                <p className="font-sans text-xs text-ivory/50 leading-relaxed pl-9">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

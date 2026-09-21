import { useEffect, useRef } from 'react'
import { PROCESS_STEPS } from '../config/business'

export default function Approach() {
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
    <section id="approach" ref={sectionRef} className="section-padding bg-warm-mid relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      {/* Large background number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20rem] font-light text-ivory/[0.015] select-none pointer-events-none leading-none" aria-hidden="true">
        GRE
      </div>

      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="reveal label-gold mb-4">How We Work</p>
          <h2 className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
            The Good Repute<br />
            <em className="text-gold not-italic">Approach.</em>
          </h2>
          <div className="divider-gold-left reveal mb-8" style={{ transitionDelay: '180ms' }} />
          <p className="reveal body-elegant" style={{ transitionDelay: '240ms' }}>
            A structured, four-step process that takes your event from initial concept through to professional delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" aria-hidden="true" />

          <div className="space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className="reveal grid md:grid-cols-[56px_1fr] gap-6 md:gap-10 group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number bubble */}
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center bg-warm-mid group-hover:bg-gold/10 group-hover:border-gold/60 transition-all duration-400 z-10 relative">
                    <span className="font-display text-gold text-lg font-light">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`pb-14 ${i < PROCESS_STEPS.length - 1 ? 'border-b border-ivory/5' : ''}`}>
                  {/* Mobile number */}
                  <span className="md:hidden label-gold text-xs mb-2 block">{step.number}</span>

                  <h3 className="font-display text-2xl md:text-3xl text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="body-elegant text-base mb-3">
                    {step.description}
                  </p>
                  <p className="font-sans text-sm text-ivory/40 leading-relaxed max-w-xl">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

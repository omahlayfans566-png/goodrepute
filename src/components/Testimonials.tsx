import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../config/business'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const items = [...TESTIMONIALS]

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

  const prev = () => setCurrent(c => (c - 1 + items.length) % items.length)
  const next = () => setCurrent(c => (c + 1) % items.length)

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-warm-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" aria-hidden="true" />

      {/* Large background quote mark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30rem] font-light text-ivory/[0.018] select-none pointer-events-none leading-none" aria-hidden="true">
        "
      </div>

      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="reveal label-gold mb-4">What Clients Say</p>
          <h2 className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
            Testimonials
          </h2>
          <div className="divider-gold mx-auto reveal mb-8" style={{ transitionDelay: '180ms' }} />
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto text-center">
          {/* IMPORTANT disclaimer */}
          <div className="reveal mb-12 p-6 border border-gold/20 bg-warm-mid/40">
            <p className="label-gold text-[11px] mb-2">⚠ DEMO NOTICE</p>
            <p className="font-sans text-xs text-ivory/50 leading-relaxed">
              No client testimonials have been fabricated. The placeholders below represent the data structure where real, verified client reviews should be inserted once provided by Good Repute Events.
            </p>
          </div>

          <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
            {items.map((item, i) => (
              <div
                key={item.id}
                className={`transition-all duration-600 ${
                  i === current
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none absolute inset-0'
                }`}
                aria-hidden={i !== current}
              >
                <Quote size={36} className="text-gold/30 mx-auto mb-8" aria-hidden="true" />

                <blockquote>
                  <p className="font-display text-xl md:text-2xl text-ivory/60 italic leading-relaxed mb-8 font-light">
                    "{item.quote}"
                  </p>
                  <footer className="flex flex-col items-center gap-1">
                    <div className="w-8 h-px bg-gold/40 mb-4" />
                    <cite className="font-sans text-sm text-ivory not-italic font-medium">
                      {item.name}
                    </cite>
                    <span className="label-gold text-[11px]">{item.event}</span>
                    {item.isPlaceholder && (
                      <span className="label-caps text-[9px] text-ivory/45 mt-2 border border-ivory/15 px-2 py-1">
                        PLACEHOLDER — REPLACE WITH REAL REVIEW
                      </span>
                    )}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12 reveal" style={{ transitionDelay: '300ms' }}>
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-ivory/25 hover:bg-ivory/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

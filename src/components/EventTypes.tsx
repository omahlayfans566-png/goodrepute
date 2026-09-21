import { useEffect, useRef } from 'react'
import { EVENT_TYPES } from '../config/business'

const EVENT_IMAGES: Record<string, string> = {
  wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  celebration: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  private: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
  corporate: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  special: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800&q=80',
}

export default function EventTypes() {
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
    <section id="event-types" ref={sectionRef} className="section-padding bg-warm-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" aria-hidden="true" />

      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="reveal label-gold mb-4">Event Experiences</p>
          <h2 className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
            Every Occasion,<br />
            <em className="text-gold not-italic">Thoughtfully Handled.</em>
          </h2>
          <div className="divider-gold mx-auto reveal mb-8" style={{ transitionDelay: '180ms' }} />
          <p className="reveal body-elegant" style={{ transitionDelay: '240ms' }}>
            Good Repute Events provides planning and coordination support across a range of event types. Below are the event categories this website is structured to represent — content is fully editable once approved by the business.
          </p>
        </div>

        {/* Events grid — 2 large + 3 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EVENT_TYPES.map((evt, i) => (
            <div
              key={evt.id}
              className={`reveal relative overflow-hidden group cursor-default ${
                i < 2 ? 'lg:row-span-2 aspect-[4/5]' : 'aspect-[4/3]'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={EVENT_IMAGES[evt.imageSeed] || EVENT_IMAGES.celebration}
                alt={`${evt.label} — [DEMO IMAGE, not an actual Good Repute Events event]`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/90 via-warm-dark/30 to-transparent transition-all duration-500 group-hover:via-warm-dark/40" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="w-6 h-px bg-gold mb-4 transition-all duration-300 group-hover:w-10" />
                <h3 className="font-display text-xl md:text-2xl text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                  {evt.label}
                </h3>
                <p className="font-sans text-sm text-ivory/60 leading-relaxed max-w-xs transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  {evt.description}
                </p>
              </div>

              {/* Top-left number */}
              <span className="absolute top-5 left-5 label-gold text-[11px] opacity-60">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <p className="text-center label-caps text-[9px] text-ivory/25 mt-12 reveal" style={{ transitionDelay: '500ms' }}>
          These categories represent the types of events this website is structured to support. They are editable and should be confirmed with Good Repute Events.
        </p>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { ClipboardList, LayoutDashboard, MessageCircle, CalendarCheck, Users, ArrowRight } from 'lucide-react'
import { SERVICES, BUSINESS } from '../config/business'

const ICONS: Record<string, React.ReactNode> = {
  'clipboard-list': <ClipboardList size={22} />,
  'layout-dashboard': <LayoutDashboard size={22} />,
  'message-circle': <MessageCircle size={22} />,
  'calendar-check': <CalendarCheck size={22} />,
  'users': <Users size={22} />,
}

export default function Services() {
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
    <section id="services" ref={sectionRef} className="section-padding bg-warm-mid relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="reveal label-gold mb-4">What We Offer</p>
          <h2 className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
            Our Services
          </h2>
          <div className="divider-gold mx-auto reveal mb-8" style={{ transitionDelay: '180ms' }} />
          <p className="reveal body-elegant" style={{ transitionDelay: '240ms' }}>
            Every engagement is built around your specific event, priorities and expectations. Our services are designed to give you professional support at every stage of the planning process.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/5">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="reveal card-service bg-warm-mid"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number */}
              <span className="font-display text-5xl font-light text-ivory/8 absolute top-6 right-8 select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-500">
                {service.number}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center border border-gold/20 text-gold mb-6 group-hover:bg-gold/10 transition-all duration-300">
                {ICONS[service.icon]}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/30 mb-4 group-hover:w-12 transition-all duration-300" />

              {/* Description */}
              <p className="body-elegant text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 reveal" style={{ transitionDelay: '400ms' }}>
          <p className="font-display text-2xl md:text-3xl text-ivory/80 italic mb-8">
            "Let's plan something exceptional."
          </p>
          <a
            href={BUSINESS.whatsappUrl("Hello, I'd like to discuss planning an event with Good Repute Events.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

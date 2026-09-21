import { useEffect, useRef } from 'react'
import { Phone, MapPin, ExternalLink } from 'lucide-react'
import { BUSINESS } from '../config/business'

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="section-padding bg-warm-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      {/* Decorative large text */}
      <div className="absolute -bottom-16 -right-16 font-display text-[18rem] font-light text-ivory/[0.015] select-none pointer-events-none leading-none" aria-hidden="true">
        GRE
      </div>

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <p className="reveal label-gold mb-4">Get in Touch</p>
            <h2 className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
              Ready to Start<br />
              <em className="text-gold not-italic">Planning?</em>
            </h2>
            <div className="divider-gold-left reveal mb-8" style={{ transitionDelay: '180ms' }} />
            <p className="reveal body-elegant mb-12" style={{ transitionDelay: '240ms' }}>
              Reach out to the Good Repute Events team to discuss your event. We're here to guide you through the planning process from start to finish.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="reveal flex items-start gap-5" style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="label-gold text-[11px] mb-1">Phone</p>
                  <a
                    href={`tel:${BUSINESS.contact.phone.replace(/\s/g, '')}`}
                    className="font-sans text-ivory text-lg hover:text-gold transition-colors duration-300"
                  >
                    {BUSINESS.contact.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="reveal flex items-start gap-5" style={{ transitionDelay: '360ms' }}>
                <div className="w-12 h-12 border border-[#25D366]/25 flex items-center justify-center text-[#25D366] flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="label-caps text-[11px] text-[#25D366]/70 mb-1">WhatsApp</p>
                  <a
                    href={BUSINESS.whatsappUrl("Hello, I'd like to book a consultation with Good Repute Events.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-ivory text-lg hover:text-[#25D366] transition-colors duration-300"
                  >
                    {BUSINESS.contact.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="reveal flex items-start gap-5" style={{ transitionDelay: '420ms' }}>
                <div className="w-12 h-12 border border-gold/25 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="label-gold text-[11px] mb-1">Location</p>
                  <p className="font-sans text-ivory text-lg">{BUSINESS.location}</p>
                </div>
              </div>
            </div>

            {/* Linktree */}
            {BUSINESS.social.linktree && (
              <div className="reveal mt-10 pt-8 border-t border-ivory/10" style={{ transitionDelay: '480ms' }}>
                <p className="label-gold text-[11px] mb-3">Find Us Online</p>
                <a
                  href={BUSINESS.social.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                >
                  <ExternalLink size={14} />
                  linktr.ee/GREvents
                </a>
              </div>
            )}
          </div>

          {/* Right — CTA card */}
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <div className="border border-gold/20 p-8 md:p-12 bg-warm-mid/40 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40" aria-hidden="true" />

              <p className="label-gold mb-3">Book a Consultation</p>
              <h3 className="font-display text-3xl md:text-4xl text-ivory mb-4 font-light">
                Let's Discuss<br />Your Event
              </h3>
              <div className="divider-gold-left mb-6" />
              <p className="body-elegant text-sm mb-8 leading-relaxed">
                A consultation with the Good Repute Events team is the best way to explore what's possible for your event. Share your vision and we'll outline how we can help.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={BUSINESS.whatsappUrl("Hello, I'd like to book a consultation with Good Repute Events.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book via WhatsApp
                </a>
                <a
                  href="#inquiry"
                  onClick={e => { e.preventDefault(); document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-outline justify-center"
                >
                  Submit an Inquiry Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

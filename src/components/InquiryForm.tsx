import { useState, useEffect, useRef } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { BUSINESS } from '../config/business'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  fullName: string
  phone: string
  email: string
  eventType: string
  eventDate: string
  guestCount: string
  eventLocation: string
  serviceRequired: string
  budgetRange: string
  additionalInfo: string
}

const INITIAL: FormData = {
  fullName: '', phone: '', email: '', eventType: '', eventDate: '',
  guestCount: '', eventLocation: '', serviceRequired: '', budgetRange: '', additionalInfo: '',
}

const EVENT_TYPES = ['Wedding', 'Social Celebration', 'Birthday / Anniversary', 'Corporate Event', 'Private Event', 'Special Occasion', 'Other']
const SERVICES = ['Event Planning & Management', 'Event Project Management', 'Event Consultation', 'On-the-Day Coordination', 'Event Support', 'Not sure yet']
const BUDGET_RANGES = ['Prefer not to say', 'Under ₦500,000', '₦500,000 – ₦1,000,000', '₦1,000,000 – ₦2,500,000', '₦2,500,000 – ₦5,000,000', 'Above ₦5,000,000']
const GUEST_COUNTS = ['Under 50', '50 – 100', '100 – 200', '200 – 500', '500+', 'Not decided yet']

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [state, setState] = useState<FormState>('idle')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')
    if (!els) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { rootMargin: '-60px', threshold: 0.06 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Client-side validation
    const newErrors: Record<string, string> = {}
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.'
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.'
    }
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.eventType) {
      newErrors.eventType = 'Please select an event type.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setState('submitting')
    // DEMO: simulate a 1.5s network delay then show success
    // In production, connect this to an email service, WhatsApp API or backend endpoint
    setTimeout(() => setState('success'), 1500)
  }

  const reset = () => { setForm(INITIAL); setErrors({}); setState('idle') }

  const inputClass = "w-full bg-warm-dark border border-ivory/10 text-ivory font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-gold/50 transition-colors duration-300 placeholder:text-ivory/25"
  const selectClass = `${inputClass} appearance-none cursor-pointer`
  const labelClass = "block label-caps text-[11px] text-ivory/50 mb-2"

  return (
    <section id="inquiry" ref={sectionRef} className="section-padding bg-warm-mid relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">

          {/* Left — intro */}
          <div className="lg:sticky lg:top-32">
            <p className="reveal label-gold mb-4">Get in Touch</p>
            <h2 className="reveal heading-display text-4xl md:text-5xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
              Plan Your<br />
              <em className="text-gold not-italic">Next Event.</em>
            </h2>
            <div className="divider-gold-left reveal mb-8" style={{ transitionDelay: '180ms' }} />
            <p className="reveal body-elegant mb-8" style={{ transitionDelay: '240ms' }}>
              Share some details about your event and we'll follow up to discuss how Good Repute Events can support you.
            </p>

            {/* WhatsApp alternative */}
            <div className="reveal p-6 border border-gold/20 bg-warm-dark/40" style={{ transitionDelay: '300ms' }}>
              <p className="label-gold text-[11px] mb-3">Prefer to chat directly?</p>
              <p className="font-sans text-sm text-ivory/60 mb-4 leading-relaxed">
                Send a WhatsApp message to discuss your event right away.
              </p>
              <a
                href={BUSINESS.whatsappUrl("Hello, I'd like to discuss planning an event.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-[11px]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat With Us on WhatsApp
              </a>
            </div>

            {/* Demo notice */}
            <p className="reveal mt-6 font-sans text-xs text-ivory/25 leading-relaxed" style={{ transitionDelay: '360ms' }}>
              ⓘ This form is a frontend demo. In production, it will be connected to a real email or notification workflow.
            </p>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-20 border border-gold/20 bg-warm-dark/40">
                <CheckCircle size={48} className="text-gold mb-6" />
                <h3 className="font-display text-2xl text-ivory mb-3">Inquiry Received</h3>
                <div className="divider-gold mx-auto mb-6" />
                <p className="body-elegant text-sm max-w-sm mb-8">
                  Thank you. Your event inquiry has been received. Good Repute Events will be in touch with you shortly.
                </p>
                <p className="label-caps text-[9px] text-ivory/25 mb-6">DEMO — No data was actually sent.</p>
                <button onClick={reset} className="btn-outline text-xs py-3 px-6">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Event inquiry form">
                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={set('fullName')}
                        placeholder="Your full name"
                        className={`${inputClass} ${errors.fullName ? 'border-red-400/70 focus:border-red-400' : ''}`}
                        autoComplete="name"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-400/90 font-sans">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+234 000 000 0000"
                        className={`${inputClass} ${errors.phone ? 'border-red-400/70 focus:border-red-400' : ''}`}
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-400/90 font-sans">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set('email')}
                      placeholder="your@email.com"
                      className={`${inputClass} ${errors.email ? 'border-red-400/70 focus:border-red-400' : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400/90 font-sans">{errors.email}</p>
                    )}
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventType" className={labelClass}>Event Type *</label>
                      <div className="relative">
                        <select
                          id="eventType"
                          required
                          value={form.eventType}
                          onChange={set('eventType')}
                          className={`${selectClass} ${errors.eventType ? 'border-red-400/70 focus:border-red-400' : ''}`}
                        >
                          <option value="" disabled>Select event type</option>
                          {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ivory/40">▾</div>
                      </div>
                      {errors.eventType && (
                        <p className="mt-1.5 text-xs text-red-400/90 font-sans">{errors.eventType}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="eventDate" className={labelClass}>Preferred Event Date</label>
                      <input id="eventDate" type="date" value={form.eventDate} onChange={set('eventDate')} className={inputClass} />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guestCount" className={labelClass}>Expected Guest Count</label>
                      <div className="relative">
                        <select id="guestCount" value={form.guestCount} onChange={set('guestCount')} className={selectClass}>
                          <option value="" disabled>Select range</option>
                          {GUEST_COUNTS.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ivory/40">▾</div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="eventLocation" className={labelClass}>Event Location</label>
                      <input id="eventLocation" type="text" value={form.eventLocation} onChange={set('eventLocation')}
                        placeholder="e.g. Lagos, Victoria Island" className={inputClass} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="serviceRequired" className={labelClass}>Service Required</label>
                    <div className="relative">
                      <select id="serviceRequired" value={form.serviceRequired} onChange={set('serviceRequired')} className={selectClass}>
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ivory/40">▾</div>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budgetRange" className={labelClass}>Budget Range <span className="text-ivory/30 normal-case tracking-normal">(optional)</span></label>
                    <div className="relative">
                      <select id="budgetRange" value={form.budgetRange} onChange={set('budgetRange')} className={selectClass}>
                        <option value="">Prefer not to say</option>
                        {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ivory/40">▾</div>
                    </div>
                  </div>

                  {/* Additional info */}
                  <div>
                    <label htmlFor="additionalInfo" className={labelClass}>Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      rows={4}
                      value={form.additionalInfo}
                      onChange={set('additionalInfo')}
                      placeholder="Tell us more about your event vision, any specific requirements or questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="btn-primary w-full justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === 'submitting' ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-warm-dark/30 border-t-warm-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Submit Event Inquiry
                      </>
                    )}
                  </button>

                  {state === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or contact via WhatsApp.
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

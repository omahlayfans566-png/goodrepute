import { BUSINESS } from '../config/business'
import { ExternalLink } from 'lucide-react'

const NAV_COLS = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Our Approach', href: '#approach' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
      { label: 'Plan Your Event', href: '#inquiry' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer role="contentinfo" className="bg-warm-black border-t border-ivory/5">
      {/* Top section */}
      <div className="container-site py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={e => { e.preventDefault(); scrollTo('#home') }}
              className="flex flex-col leading-none group inline-block mb-6"
              aria-label="Good Repute Events — home"
            >
              <span className="font-display text-2xl font-light tracking-[0.18em] text-ivory group-hover:text-gold transition-colors duration-300">
                GOOD REPUTE
              </span>
              <span className="label-gold text-[10px] tracking-[0.35em] mt-0.5">
                EVENTS
              </span>
            </a>

            <p className="body-elegant text-sm max-w-sm mb-8 leading-relaxed">
              {BUSINESS.tagline}
            </p>

            {/* WhatsApp CTA */}
            <a
              href={BUSINESS.whatsappUrl("Hello, I'd like to discuss planning an event.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-[11px] py-3 px-6 mb-8 inline-flex"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat With Good Repute Events
            </a>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 label-caps text-[10px] text-ivory/40 hover:text-gold transition-colors duration-300"
              >
                <ExternalLink size={12} />
                Linktree
              </a>
              {/* Placeholders for social when verified */}
              {BUSINESS.social.instagram && (
                <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" className="label-caps text-[10px] text-ivory/40 hover:text-gold transition-colors duration-300">
                  Instagram
                </a>
              )}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map(col => (
            <div key={col.title}>
              <h3 className="label-gold text-[11px] mb-6">{col.title}</h3>
              <ul className="space-y-3" role="list">
                {col.links.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                      className="font-sans text-sm text-ivory/50 hover:text-ivory transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/5">
        <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30">
            © {year} Good Repute Events. {BUSINESS.location}.
          </p>
          <p className="font-sans text-xs text-ivory/20 text-center">
            ⓘ This is a speculative website concept created by a freelance developer. Not commissioned or approved by Good Repute Events.
          </p>
          <p className="font-sans text-xs text-ivory/30">
            Phone: {BUSINESS.contact.phone}
          </p>
        </div>
      </div>
    </footer>
  )
}

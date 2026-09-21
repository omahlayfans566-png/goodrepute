import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { BUSINESS } from '../config/business'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section for nav highlight
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = useCallback((href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    }
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-dark/95 backdrop-blur-md border-b border-ivory/5 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container-site flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home') }}
            className="flex flex-col leading-none group"
            aria-label="Good Repute Events — home"
          >
            <span className="font-display text-xl md:text-2xl font-light tracking-[0.18em] text-ivory group-hover:text-gold transition-colors duration-300">
              GOOD REPUTE
            </span>
            <span className="label-gold text-[10px] tracking-[0.35em] mt-0.5">
              EVENTS
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href) }}
                  className={`label-caps text-[11px] transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-gold'
                      : 'text-ivory/60 hover:text-ivory'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS.whatsappUrl('Hello, I would like to plan an event with Good Repute Events.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] py-3 px-6"
            >
              Plan Your Event
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-ivory hover:text-gold transition-colors p-2 -mr-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 bg-warm-dark flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <ul className="flex flex-col items-center gap-6 w-full px-8" role="list">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className="w-full text-center"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <a
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
                className="font-display text-3xl font-light text-ivory/80 hover:text-gold transition-colors duration-300 py-2 inline-block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="mt-10"
          style={{
            transitionDelay: menuOpen ? '450ms' : '0ms',
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          <a
            href={BUSINESS.whatsappUrl('Hello, I would like to plan an event with Good Repute Events.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Plan Your Event
          </a>
        </div>

        <p className="absolute bottom-8 label-gold text-[10px] tracking-widest">
          {BUSINESS.location}
        </p>
      </div>
    </>
  )
}

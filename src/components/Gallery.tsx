import { useState, useEffect, useRef, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryCategory } from '../config/business'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')
    if (!els) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { rootMargin: '-40px', threshold: 0.06 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Re-observe when filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = sectionRef.current?.querySelectorAll<HTMLElement>('.reveal:not(.visible)')
      els?.forEach(el => el.classList.add('visible'))
    }, 50)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const prevImage = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  const nextImage = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i + 1) % filtered.length)
  }, [filtered.length])

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, prevImage, nextImage])

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-warm-mid relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal label-gold mb-4">Portfolio</p>
          <h2 className="reveal heading-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6" style={{ transitionDelay: '100ms' }}>
            Gallery
          </h2>
          <div className="divider-gold mx-auto reveal mb-8" style={{ transitionDelay: '180ms' }} />
          <p className="reveal body-elegant" style={{ transitionDelay: '240ms' }}>
            A curated selection of event imagery. All images below are demo/placeholder visuals — this section is designed to be replaced with official Good Repute Events photography.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12" style={{ transitionDelay: '300ms' }} role="group" aria-label="Gallery filter">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`label-caps text-[11px] px-5 py-2.5 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-ivory/15 text-ivory/50 hover:border-ivory/30 hover:text-ivory/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="reveal break-inside-avoid relative overflow-hidden group cursor-pointer"
              style={{ transitionDelay: `${(i % 8) * 60}ms` }}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.caption} — ${item.alt}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(i) }}
            >
              <img
                src={item.url}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  item.featured ? 'aspect-[3/4]' : 'aspect-square'
                }`}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/50 transition-colors duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 flex flex-col items-center gap-2">
                  <ZoomIn size={20} className="text-gold" />
                  <span className="label-caps text-[10px] text-ivory">{item.caption}</span>
                </div>
              </div>
              {/* Demo badge */}
              <span className="absolute top-2 left-2 label-caps text-[8px] text-ivory/30 bg-warm-dark/40 px-1.5 py-0.5 pointer-events-none">
                DEMO
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal" style={{ transitionDelay: '400ms' }}>
          <p className="body-elegant text-sm mb-6">
            Official Good Repute Events photography will replace these demo images once approved.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-warm-dark/95 lightbox-backdrop flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={e => { if (e.target === e.currentTarget) closeLightbox() }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 text-ivory/60 hover:text-ivory transition-colors z-10 p-2"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 text-ivory/60 hover:text-gold transition-colors z-10 p-2"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] mx-16">
            <img
              src={filtered[lightboxIndex].url.replace('w=700', 'w=1200').replace('w=800', 'w=1200')}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[70vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <p className="font-sans text-sm text-ivory/60">{filtered[lightboxIndex].caption}</p>
              <p className="label-caps text-[9px] text-ivory/25 mt-1">DEMO IMAGE — NOT AN ACTUAL GOOD REPUTE EVENTS EVENT</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 md:right-8 text-ivory/60 hover:text-gold transition-colors z-10 p-2"
          >
            <ChevronRight size={36} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 label-gold text-[11px]">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  )
}

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container element and adds
 * the `visible` class to any child with `.reveal`, `.reveal-left`, or `.reveal-right`.
 * Stagger is applied via inline transition-delay.
 */
export function useScrollReveal(rootMargin = '-80px') {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { rootMargin, threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [rootMargin])

  return containerRef
}

/** Simple hook that returns true once the element enters the viewport */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}

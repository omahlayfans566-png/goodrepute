/**
 * GOOD REPUTE EVENTS — Business Configuration
 * ─────────────────────────────────────────────
 * All editable business data lives here.
 * Update this file to reflect real, approved information.
 *
 * DEMO NOTICE:
 * This is a speculative website concept created by a freelance developer.
 * It has NOT been commissioned or approved by Good Repute Events.
 */

export const BUSINESS = {
  name: 'Good Repute Events',
  tagline: 'Thoughtful planning. Seamless coordination. Unforgettable celebrations.',
  shortName: 'GRE',
  creativeLeadName: 'Boluwatife Dosunmu',
  creativeLeadTitle: 'Creative Lead',
  location: 'Lagos, Nigeria',

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    phone: '+234 706 852 9099',
    whatsapp: '+2347068529099',   // international format, no + prefix for wa.me
    whatsappDisplay: '+234 706 852 9099',
    // email: '',                 // not publicly verified — leave blank
    // address: '',               // physical address not independently verified
  },

  // ── Social / Links ───────────────────────────────────────────────────────
  social: {
    linktree: 'https://linktr.ee/GREvents',
    instagram: '',   // fill in when verified
    facebook: '',    // fill in when verified
    twitter: '',     // fill in when verified
  },

  whatsappUrl: (message?: string) => {
    const base = `https://wa.me/2347068529099`
    return message ? `${base}?text=${encodeURIComponent(message)}` : base
  },
} as const

// ── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'event-planning',
    number: '01',
    title: 'Event Planning & Management',
    description:
      'From the first concept to the final guest departure, a structured planning experience designed around the details that matter.',
    icon: 'clipboard-list',
  },
  {
    id: 'project-management',
    number: '02',
    title: 'Event Project Management',
    description:
      'Professional coordination of event requirements, timelines, vendors and moving parts — kept organised from start to finish.',
    icon: 'layout-dashboard',
  },
  {
    id: 'consultation',
    number: '03',
    title: 'Event Consultation',
    description:
      'Strategic guidance for clients who need expert direction while planning their celebration.',
    icon: 'message-circle',
  },
  {
    id: 'day-coordination',
    number: '04',
    title: 'On-the-Day Coordination',
    description:
      'Enjoy your event while the coordination and execution are professionally managed so you can be fully present.',
    icon: 'calendar-check',
  },
  {
    id: 'event-support',
    number: '05',
    title: 'Event Support',
    description:
      'Additional event support through coordinators, project managers and other planning resources tailored to your needs.',
    icon: 'users',
  },
] as const

// ── Event Types (editable showcase categories) ───────────────────────────────
export const EVENT_TYPES = [
  {
    id: 'weddings',
    label: 'Weddings',
    description: 'Beautifully coordinated ceremonies and receptions planned to reflect every couple\'s story.',
    imageSeed: 'wedding',
  },
  {
    id: 'social',
    label: 'Social Celebrations',
    description: 'Birthdays, anniversaries, naming ceremonies and milestones planned with purpose and style.',
    imageSeed: 'celebration',
  },
  {
    id: 'private',
    label: 'Private Events',
    description: 'Intimate gatherings executed with the same care and structure as larger productions.',
    imageSeed: 'private',
  },
  {
    id: 'corporate',
    label: 'Corporate Events',
    description: 'Professional event planning and coordination for business functions, launches and galas.',
    imageSeed: 'corporate',
  },
  {
    id: 'special',
    label: 'Special Occasions',
    description: 'One-of-a-kind occasions that deserve one-of-a-kind planning.',
    imageSeed: 'special',
  },
] as const

// ── Process Steps ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We begin by understanding your vision, priorities and what truly matters for your event.',
    detail: 'A thorough discovery conversation allows us to align on expectations and establish a clear brief.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Your vision is translated into a structured, detailed event plan with clear milestones.',
    detail: 'From timelines to vendor coordination, every element is documented and managed.',
  },
  {
    number: '03',
    title: 'Coordinate',
    description:
      'We manage the moving parts — vendors, timelines, logistics — so nothing is left to chance.',
    detail: 'Our coordination process keeps every stakeholder aligned as the event day approaches.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'On the day, we bring the plan to life so you can be fully present in the moment.',
    detail: 'Professional on-site management ensures the experience unfolds exactly as envisioned.',
  },
] as const

// ── Why Professional Team reasons ─────────────────────────────────────────────
export const WHY_REASONS = [
  { title: 'Structured Planning', description: 'A clear plan reduces uncertainty and keeps your event on track.' },
  { title: 'Clear Coordination', description: 'Every vendor, timeline and detail stays aligned under one professional eye.' },
  { title: 'Timeline Management', description: 'Events run to schedule when someone is dedicated to managing the clock.' },
  { title: 'Vendor Coordination', description: 'Managing multiple vendors simultaneously requires experience and organisation.' },
  { title: 'On-the-Day Support', description: 'Professional presence on the day means problems are resolved before guests notice.' },
  { title: 'Reduced Stress', description: 'You deserve to enjoy your celebration, not manage it.' },
] as const

// ── Gallery ───────────────────────────────────────────────────────────────────
/**
 * DEMO NOTICE: These are placeholder image entries.
 * Replace `url` values with official Good Repute Events photography
 * once approved by the business.
 */
export type GalleryCategory = 'All' | 'Weddings' | 'Celebrations' | 'Decor' | 'Details' | 'Atmosphere'

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Weddings',
  'Celebrations',
  'Decor',
  'Details',
  'Atmosphere',
]

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Weddings' as GalleryCategory,
    alt: 'Elegant wedding ceremony setup — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    featured: true,
    caption: 'Wedding Ceremony',
  },
  {
    id: 'g2',
    category: 'Weddings' as GalleryCategory,
    alt: 'Wedding reception table arrangement — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80',
    featured: false,
    caption: 'Reception Setting',
  },
  {
    id: 'g3',
    category: 'Decor' as GalleryCategory,
    alt: 'Floral centrepiece arrangement — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80',
    featured: false,
    caption: 'Floral Design',
  },
  {
    id: 'g4',
    category: 'Celebrations' as GalleryCategory,
    alt: 'Celebration event with elegant decor — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80',
    featured: false,
    caption: 'Social Celebration',
  },
  {
    id: 'g5',
    category: 'Atmosphere' as GalleryCategory,
    alt: 'Event atmosphere with warm ambient lighting — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=700&q=80',
    featured: false,
    caption: 'Event Atmosphere',
  },
  {
    id: 'g6',
    category: 'Details' as GalleryCategory,
    alt: 'Elegant table detail setting — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=700&q=80',
    featured: false,
    caption: 'Table Details',
  },
  {
    id: 'g7',
    category: 'Weddings' as GalleryCategory,
    alt: 'Couple at wedding celebration — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80',
    featured: false,
    caption: 'Wedding Moments',
  },
  {
    id: 'g8',
    category: 'Decor' as GalleryCategory,
    alt: 'Elegant venue decoration — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
    featured: false,
    caption: 'Venue Styling',
  },
  {
    id: 'g9',
    category: 'Atmosphere' as GalleryCategory,
    alt: 'Guests enjoying an event — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=700&q=80',
    featured: false,
    caption: 'Guest Experience',
  },
  {
    id: 'g10',
    category: 'Details' as GalleryCategory,
    alt: 'Candle and floral detail — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    featured: false,
    caption: 'Elegant Details',
  },
  {
    id: 'g11',
    category: 'Celebrations' as GalleryCategory,
    alt: 'Birthday celebration setup — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=700&q=80',
    featured: false,
    caption: 'Birthday Celebration',
  },
  {
    id: 'g12',
    category: 'Weddings' as GalleryCategory,
    alt: 'Wedding aisle with floral arrangement — [DEMO IMAGE]',
    url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=700&q=80',
    featured: false,
    caption: 'Ceremony Aisle',
  },
] as const

// ── Testimonials (placeholder structure) ─────────────────────────────────────
/**
 * IMPORTANT: No testimonials have been fabricated.
 * Insert verified, real client reviews here once provided by the business.
 * Each entry has an isPlaceholder flag — remove it when real content is added.
 */
export const TESTIMONIALS = [
  {
    id: 't1',
    isPlaceholder: true,
    quote: 'Client review placeholder — to be replaced with a verified, real client testimonial provided by Good Repute Events.',
    name: '— Client Name',
    event: 'Event Type, Year',
  },
  {
    id: 't2',
    isPlaceholder: true,
    quote: 'Client review placeholder — to be replaced with a verified, real client testimonial provided by Good Repute Events.',
    name: '— Client Name',
    event: 'Event Type, Year',
  },
  {
    id: 't3',
    isPlaceholder: true,
    quote: 'Client review placeholder — to be replaced with a verified, real client testimonial provided by Good Repute Events.',
    name: '— Client Name',
    event: 'Event Type, Year',
  },
] as const

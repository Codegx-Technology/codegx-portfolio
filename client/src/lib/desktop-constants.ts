/**
 * Desktop-specific constants and configurations
 * Enterprise-grade progressive enhancement
 */

/**
 * Breakpoints (matching Tailwind)
 */
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,  // Desktop starts here
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;

/**
 * Desktop hover effects
 * Applied only on devices with hover capability
 */
export const DESKTOP_HOVER_EFFECTS = {
  lift: 'lg:hover:-translate-y-2 lg:hover:shadow-2xl',
  scale: 'lg:hover:scale-105',
  glow: 'lg:hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]',
  border: 'lg:hover:border-primary',
  brightness: 'lg:hover:brightness-110',
} as const;

/**
 * Desktop-only animations
 * Disabled on mobile for performance
 */
export const DESKTOP_ANIMATIONS = {
  fadeIn: 'lg:animate-in lg:fade-in',
  slideIn: 'lg:animate-in lg:slide-in-from-bottom-4',
  zoomIn: 'lg:animate-in lg:zoom-in-95',
} as const;

/**
 * Desktop grid layouts
 * Progressive column counts
 */
export const DESKTOP_GRID_COLS = {
  cards: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  features: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  testimonials: 'grid-cols-1 lg:grid-cols-2',
  footer: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
} as const;

/**
 * Desktop spacing
 * Larger gaps on desktop
 */
export const DESKTOP_SPACING = {
  section: 'py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32',
  container: 'px-4 sm:px-6 lg:px-8',
  gap: 'gap-4 sm:gap-6 lg:gap-8 xl:gap-12',
} as const;

/**
 * Desktop typography
 * Larger text on desktop
 */
export const DESKTOP_TYPOGRAPHY = {
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
  body: 'text-base sm:text-lg lg:text-xl',
  small: 'text-sm sm:text-base lg:text-lg',
} as const;

/**
 * Keyboard shortcuts
 * Desktop-only feature
 */
export const KEYBOARD_SHORTCUTS = {
  search: { key: 'k', meta: true, label: '⌘K' },
  home: { key: 'h', meta: true, label: '⌘H' },
  contact: { key: 'c', meta: true, shift: true, label: '⌘⇧C' },
  theme: { key: 't', meta: true, label: '⌘T' },
} as const;

/**
 * Desktop-specific features
 */
export const DESKTOP_FEATURES = {
  showSidebar: true,
  showAdvancedFilters: true,
  enableKeyboardNav: true,
  showTooltips: true,
  enableParallax: true,
} as const;

/**
 * Performance thresholds
 */
export const PERFORMANCE_THRESHOLDS = {
  lazyLoadOffset: '100px',  // Desktop can preload more
  debounceDelay: 150,       // Faster on desktop
  animationDuration: 300,   // Standard duration
} as const;

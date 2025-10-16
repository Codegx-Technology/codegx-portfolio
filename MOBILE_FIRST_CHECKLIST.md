# 📋 Mobile-First Implementation Checklist

## 🎯 Quick Reference Guide

This checklist provides actionable steps to audit and improve mobile responsiveness for each component.

---

## 🔍 Component-by-Component Audit

### ✅ Navigation (`navbar.tsx`, `enterprise-navbar.tsx`)
- [ ] Hamburger menu visible on mobile (< 1024px)
- [ ] Menu items stack vertically on mobile
- [ ] Touch targets minimum 44x44px
- [ ] Smooth open/close animations
- [ ] Close menu when clicking outside
- [ ] Logo properly sized on mobile
- [ ] No horizontal overflow
- [ ] Sticky/fixed positioning works on mobile
- [ ] Z-index prevents content overlap

**Test Command:**
```bash
# Open in mobile view
# Check: http://localhost:5176 at 375px width
```

---

### ✅ Hero Section (`hero.tsx`, `enterprise-hero.tsx`)
- [ ] Heading readable on mobile (max 2-3 words per line)
- [ ] Font size scales: mobile (2xl) → desktop (5xl+)
- [ ] Images optimized for mobile (< 200KB)
- [ ] CTA buttons full-width on mobile
- [ ] Vertical layout on mobile, horizontal on desktop
- [ ] Background images don't obscure text
- [ ] Proper padding on all sides (min 16px)
- [ ] No text overflow

**Code Pattern:**
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Mobile First Heading
</h1>
```

---

### ✅ Cards (`project-card.tsx`, `CaseStudyCard.tsx`)
- [ ] Single column on mobile (< 640px)
- [ ] 2 columns on tablet (640px - 1024px)
- [ ] 3+ columns on desktop (> 1024px)
- [ ] Images scale properly
- [ ] Text doesn't overflow
- [ ] Adequate spacing between cards (min 16px)
- [ ] Touch-friendly click areas
- [ ] Hover effects work on touch devices

**Grid Pattern:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
  {/* Cards */}
</div>
```

---

### ✅ Forms (`contact.tsx`, `Forms/`)
- [ ] Input fields full-width on mobile
- [ ] Input height minimum 44px
- [ ] Labels above inputs (not beside)
- [ ] Error messages clearly visible
- [ ] Submit button full-width on mobile
- [ ] Proper input types (email, tel, number)
- [ ] Autocomplete attributes set
- [ ] Focus states clearly visible
- [ ] Validation messages don't break layout

**Form Pattern:**
```tsx
<input 
  type="email"
  className="w-full h-12 px-4 text-base"
  autoComplete="email"
/>
```

---

### ✅ Footer (`footer.tsx`)
- [ ] Stacked layout on mobile
- [ ] Multi-column on desktop (2-4 columns)
- [ ] Social icons properly sized (min 44x44px)
- [ ] Links have adequate spacing
- [ ] Copyright text readable
- [ ] No horizontal overflow
- [ ] Contact info formatted for mobile

**Layout Pattern:**
```tsx
<footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Footer sections */}
</footer>
```

---

### ✅ Modals & Dialogs (`dialog.tsx`, `alert-dialog.tsx`)
- [ ] Full-screen on mobile
- [ ] Centered with max-width on desktop
- [ ] Close button easily accessible
- [ ] Content scrollable if too long
- [ ] Backdrop prevents body scroll
- [ ] Escape key closes modal
- [ ] Focus trapped inside modal
- [ ] Smooth animations

**Modal Pattern:**
```tsx
<div className="fixed inset-0 z-50 lg:flex lg:items-center lg:justify-center">
  <div className="h-full w-full lg:h-auto lg:max-w-lg lg:rounded-lg">
    {/* Modal content */}
  </div>
</div>
```

---

### ✅ Images & Media
- [ ] Responsive images with srcset
- [ ] Lazy loading enabled
- [ ] WebP format with fallbacks
- [ ] Proper aspect ratios maintained
- [ ] Alt text for all images
- [ ] Loading placeholders
- [ ] No layout shift (CLS)
- [ ] Optimized file sizes

**Image Pattern:**
```tsx
<img 
  src="/images/hero.webp"
  srcSet="/images/hero-sm.webp 640w, /images/hero-md.webp 1024w"
  alt="Hero image"
  loading="lazy"
  className="w-full h-auto"
/>
```

---

### ✅ Typography
- [ ] Body text minimum 16px
- [ ] Line height 1.5-1.8
- [ ] Headings scale responsively
- [ ] Adequate contrast (4.5:1 minimum)
- [ ] Max line length 60-80 characters
- [ ] No text overflow
- [ ] Proper font weights
- [ ] Readable on all backgrounds

**Typography Scale:**
```tsx
// Mobile → Desktop
text-sm    → sm:text-base   (14px → 16px)
text-base  → lg:text-lg     (16px → 18px)
text-xl    → lg:text-2xl    (20px → 24px)
text-2xl   → lg:text-4xl    (24px → 36px)
text-4xl   → lg:text-6xl    (36px → 60px)
```

---

### ✅ Buttons & CTAs
- [ ] Minimum 44x44px touch target
- [ ] Full-width on mobile (optional)
- [ ] Clear hover/active states
- [ ] Loading states implemented
- [ ] Disabled states styled
- [ ] Icon + text properly aligned
- [ ] Adequate padding (12px vertical min)
- [ ] No text overflow

**Button Pattern:**
```tsx
<button className="w-full sm:w-auto min-h-[44px] px-6 py-3">
  Click Me
</button>
```

---

### ✅ Tables
- [ ] Horizontal scroll on mobile
- [ ] Card view alternative on mobile
- [ ] Sticky headers
- [ ] Adequate cell padding
- [ ] Readable text size
- [ ] No content cut off
- [ ] Sortable columns work on touch
- [ ] Responsive pagination

**Table Pattern:**
```tsx
<div className="overflow-x-auto">
  <table className="min-w-full">
    {/* Table content */}
  </table>
</div>
```

---

## 🎨 Layout Patterns

### Pattern 1: Stack to Row
```tsx
// Mobile: Vertical stack
// Desktop: Horizontal row
<div className="flex flex-col lg:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Pattern 2: Hide/Show
```tsx
// Show on mobile only
<div className="block lg:hidden">Mobile content</div>

// Show on desktop only
<div className="hidden lg:block">Desktop content</div>
```

### Pattern 3: Reorder
```tsx
<div className="flex flex-col">
  <div className="order-2 lg:order-1">First on desktop</div>
  <div className="order-1 lg:order-2">First on mobile</div>
</div>
```

### Pattern 4: Grid Responsive
```tsx
// 1 col mobile, 2 col tablet, 3 col desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items */}
</div>
```

---

## 🧪 Testing Checklist

### Manual Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad
- [ ] Test landscape orientation
- [ ] Test with slow 3G
- [ ] Test with touch only (no mouse)
- [ ] Test with screen reader
- [ ] Test with keyboard only

### Automated Testing
- [ ] Run Lighthouse mobile audit
- [ ] Check bundle size
- [ ] Test Core Web Vitals
- [ ] Run accessibility audit
- [ ] Check responsive breakpoints
- [ ] Validate HTML
- [ ] Check console for errors

### Browser Testing
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Firefox Mobile
- [ ] Samsung Internet
- [ ] Edge Mobile

---

## 🚀 Performance Checklist

### Images
- [ ] All images optimized (< 200KB)
- [ ] WebP format used
- [ ] Lazy loading enabled
- [ ] Proper dimensions set
- [ ] Responsive images (srcset)

### JavaScript
- [ ] Code splitting implemented
- [ ] Dynamic imports for routes
- [ ] Tree shaking enabled
- [ ] Unused code removed
- [ ] Bundle size < 300KB

### CSS
- [ ] Critical CSS inlined
- [ ] Unused CSS purged
- [ ] Tailwind JIT mode enabled
- [ ] CSS minified

### Fonts
- [ ] Font files optimized
- [ ] Font display: swap
- [ ] Only necessary weights loaded
- [ ] Preload critical fonts

---

## 📊 Metrics to Track

### Performance
- [ ] Lighthouse Mobile Score > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1

### Accessibility
- [ ] Lighthouse Accessibility > 95
- [ ] All images have alt text
- [ ] Proper heading hierarchy
- [ ] Color contrast > 4.5:1
- [ ] Keyboard navigation works

### SEO
- [ ] Mobile-friendly test passes
- [ ] Viewport meta tag present
- [ ] Readable font sizes
- [ ] Tap targets properly sized
- [ ] No horizontal scroll

---

## 🛠️ Tools & Commands

### Development
```bash
# Start dev server
npm run dev

# Build for production
npm run build:netlify

# Preview build
npm run preview
```

### Testing
```bash
# Run Lighthouse
npx lighthouse http://localhost:5176 --view --preset=mobile

# Check bundle size
npm run build:analyze

# Test responsive
# Use Chrome DevTools Device Mode (F12 → Toggle Device Toolbar)
```

### Debugging
```bash
# Check for accessibility issues
npm install -D @axe-core/playwright

# Check for performance issues
npm install -D lighthouse-ci
```

---

## 📝 Quick Fixes

### Fix 1: Horizontal Scroll
```css
/* Add to body or container */
.container {
  overflow-x: hidden;
  max-width: 100vw;
}
```

### Fix 2: Touch Target Too Small
```tsx
// Increase button size
<button className="min-h-[44px] min-w-[44px] p-3">
  Icon
</button>
```

### Fix 3: Text Too Small
```tsx
// Increase base font size
<p className="text-base lg:text-lg">
  Readable text
</p>
```

### Fix 4: Image Not Responsive
```tsx
// Make image responsive
<img 
  src="/image.jpg" 
  className="w-full h-auto max-w-full"
  alt="Description"
/>
```

---

## ✅ Final Checklist Before Launch

- [ ] All components audited
- [ ] Mobile navigation works
- [ ] Forms are usable on mobile
- [ ] Images optimized
- [ ] Performance metrics met
- [ ] Accessibility score > 95
- [ ] No console errors
- [ ] Tested on real devices
- [ ] Cross-browser tested
- [ ] SEO optimized for mobile

---

**Next Step**: Start with the Navigation component and work through each section systematically!

import { useEffect, useState } from 'react';

/**
 * Hook to detect if user is on desktop (≥1024px)
 * Used for progressive enhancement
 */
export function useDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Check on mount
    checkDesktop();

    // Listen for resize
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return isDesktop;
}

/**
 * Hook to detect if user prefers reduced motion
 * Respects accessibility preferences
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for keyboard shortcuts
 * Desktop-only feature
 */
export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: { ctrl?: boolean; meta?: boolean; shift?: boolean } = {}
) {
  const isDesktop = useDesktop();

  useEffect(() => {
    if (!isDesktop) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      const { ctrl = false, meta = false, shift = false } = options;

      const ctrlMatch = ctrl ? event.ctrlKey : true;
      const metaMatch = meta ? event.metaKey : true;
      const shiftMatch = shift ? event.shiftKey : true;

      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        ctrlMatch &&
        metaMatch &&
        shiftMatch
      ) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [key, callback, options, isDesktop]);
}

/**
 * Hook to detect hover capability
 * Returns false for touch-only devices
 */
export function useHoverCapability() {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setCanHover(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return canHover;
}

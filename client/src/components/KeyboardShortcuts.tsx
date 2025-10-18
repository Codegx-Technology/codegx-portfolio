import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useKeyboardShortcut, useDesktop } from '@/hooks/use-desktop';
import { KEYBOARD_SHORTCUTS } from '@/lib/desktop-constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Home, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

/**
 * Global keyboard shortcuts component
 * Desktop-only feature with visual feedback
 */
export function KeyboardShortcuts() {
  const [, setLocation] = useLocation();
  const { theme, setTheme } = useTheme();
  const isDesktop = useDesktop();
  const [showHint, setShowHint] = useState(false);
  const [activeShortcut, setActiveShortcut] = useState<string | null>(null);

  // Search shortcut (⌘K)
  useKeyboardShortcut('k', () => {
    setActiveShortcut('search');
    // TODO: Open search modal when implemented
    console.log('Search triggered');
    setTimeout(() => setActiveShortcut(null), 1000);
  }, { meta: true });

  // Home shortcut (⌘H)
  useKeyboardShortcut('h', () => {
    setActiveShortcut('home');
    setLocation('/');
    setTimeout(() => setActiveShortcut(null), 1000);
  }, { meta: true });

  // Contact shortcut (⌘⇧C)
  useKeyboardShortcut('c', () => {
    setActiveShortcut('contact');
    setLocation('/contact');
    setTimeout(() => setActiveShortcut(null), 1000);
  }, { meta: true, shift: true });

  // Theme toggle (⌘T)
  useKeyboardShortcut('t', () => {
    setActiveShortcut('theme');
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => setActiveShortcut(null), 1000);
  }, { meta: true });

  // Show hint on first visit (desktop only)
  useEffect(() => {
    if (!isDesktop) return;
    
    const hasSeenHint = localStorage.getItem('keyboard-shortcuts-hint');
    if (!hasSeenHint) {
      setTimeout(() => setShowHint(true), 2000);
      setTimeout(() => {
        setShowHint(false);
        localStorage.setItem('keyboard-shortcuts-hint', 'true');
      }, 8000);
    }
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Hint Toast */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50 bg-background border border-border rounded-lg shadow-2xl p-4 max-w-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Command className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-2">Keyboard Shortcuts Available</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Search</span>
                    <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Home</span>
                    <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘H</kbd>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Theme</span>
                    <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘T</kbd>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Shortcut Feedback */}
      <AnimatePresence>
        {activeShortcut && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-8 right-8 z-50 bg-background border border-border rounded-lg shadow-xl p-3 flex items-center gap-2"
          >
            {activeShortcut === 'search' && <Search className="w-4 h-4 text-primary" />}
            {activeShortcut === 'home' && <Home className="w-4 h-4 text-primary" />}
            {activeShortcut === 'contact' && <Mail className="w-4 h-4 text-primary" />}
            {activeShortcut === 'theme' && (
              theme === 'dark' ? <Moon className="w-4 h-4 text-primary" /> : <Sun className="w-4 h-4 text-primary" />
            )}
            <span className="text-sm font-medium capitalize">{activeShortcut}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

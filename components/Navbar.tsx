'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/founder', label: 'Founder' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-[0_1px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <Link
            href="/"
            className="font-black text-lg font-mono tracking-tight gradient-text-light hover:opacity-80 transition-opacity duration-200 select-none"
          >
            &lt;bbuilds/&gt;
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 group ${
                    active
                      ? 'text-[--text-accent] dark:text-[--text-accent]'
                      : 'text-[--text-secondary] dark:text-[--text-secondary] hover:text-[--text-primary] dark:hover:text-[--text-primary]'
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute inset-0 rounded-xl bg-[--bg-button-secondary] dark:bg-white/5" />
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-[--text-accent] group-hover:w-4 transition-all duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] hover:bg-[--bg-button-secondary] dark:hover:bg-white/5 transition-all duration-200 hover:scale-110 active:scale-95"
            >
              {dark ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* CTA — desktop */}
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Book a Call
            </a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] hover:bg-[--bg-button-secondary] dark:hover:bg-white/5 transition-all duration-200"
            >
              <span className="relative w-5 h-5 flex flex-col justify-center gap-1">
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-[--border-subtle] px-5 py-4 space-y-1">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-[--bg-button-secondary] text-[--text-accent] dark:bg-white/5 dark:text-[--text-accent]'
                    : 'text-[--text-secondary] hover:bg-[--bg-button-secondary] dark:hover:bg-white/5 hover:text-[--text-primary]'
                }`}
              >
                {label}
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[--text-accent]" />}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';

interface NavbarProps {
  scrolled?: boolean;
}

export default function Navbar({ scrolled: externalScrolled }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedMode ? savedMode === 'true' : prefersDark;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  useEffect(() => {
    if (externalScrolled !== undefined) {
      setScrolled(externalScrolled);
      return;
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [externalScrolled]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#case-studies', label: 'Portfolio' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0a0f1e]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(30,64,175,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-[#1e40af]/10 dark:border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
            className="group relative font-medium text-[#0e0e0e] dark:text-white text-xl sm:text-2xl md:text-3xl transition-all duration-300 z-50"
          >
            <span className="relative z-10 group-hover:text-[#1e40af] dark:group-hover:text-[#ededed] transition-colors duration-300">
              {'<bbuilds/>'}
            </span>
            <span className="absolute -inset-2 bg-[#1e40af]/5 dark:bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex gap-1 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-5 py-2 text-[#1e40af] dark:text-white/90 transition-colors duration-300"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="relative z-10 group-hover:text-[#0d1b49] dark:group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                
                {/* Hover background */}
                <span
                  className={`absolute inset-0 bg-[#1e40af]/5 dark:bg-white/10 rounded-full transition-all duration-300 ease-out ${
                    hoveredLink === link.href ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}
                />
                
                {/* Underline indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#1e40af] to-[#0d1b49] dark:from-white dark:to-white/60 rounded-full transition-all duration-300 ease-out ${
                    hoveredLink === link.href ? 'w-8' : 'w-0'
                  }`}
                />
                
                {/* Dot indicator */}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1e40af] dark:bg-white rounded-full transition-all duration-300 ${
                    hoveredLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Secondary Button */}
            <a
              href="#case-studies"
              className="group relative px-6 py-3 rounded-full text-sm md:text-base font-medium overflow-hidden transition-all duration-300"
            >
              {/* Background layers */}
              <span className="absolute inset-0 bg-[#f5f5f6] dark:bg-white/10 border border-[#1e40af]/30 dark:border-white/30 rounded-full transition-all duration-300 group-hover:border-[#1e40af]/60 dark:group-hover:border-white/60" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/0 via-[#1e40af]/5 to-[#1e40af]/0 dark:from-white/0 dark:via-white/5 dark:to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              <span
                className="relative z-10 transition-all duration-300 group-hover:tracking-wide gradient-text-light"
              >
                Client Portal
              </span>
            </a>

            {/* Primary Button */}
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 rounded-full text-sm md:text-base font-medium overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Glow effect */}
              <span className="absolute -inset-1 bg-gradient-to-r from-[#1e40af]/40 to-[#0d1b49]/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Background */}
              <span className="absolute inset-0 bg-[#1E40AF] rounded-full shadow-[0px_8px_24px_0px_rgba(30,64,175,0.3)] group-hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] transition-shadow duration-300" />
              
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              {/* Arrow icon */}
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 z-10">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              <span className="relative z-10 text-white transition-all duration-300 group-hover:pr-4">
                Book an appointment
              </span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="group relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#1e40af]/10 dark:hover:bg-white/10"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {/* Sun Icon */}
              <svg
                className={`absolute w-5 h-5 text-[#1e40af] transition-all duration-500 ${darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              
              {/* Moon Icon */}
              <svg
                className={`absolute w-5 h-5 text-[#1e40af] dark:text-white transition-all duration-500 ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              
              {/* Hover ring effect */}
              <span className="absolute inset-0 rounded-full border-2 border-[#1e40af]/0 group-hover:border-[#1e40af]/30 dark:group-hover:border-white/30 transition-all duration-300 scale-90 group-hover:scale-100" />
            </button>
          </div>

          {/* Dark Mode Toggle - Mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="group relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-[#1e40af]/10 dark:hover:bg-white/10 active:scale-90"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {/* Sun Icon */}
              <svg
                className={`absolute w-5 h-5 text-[#1e40af] dark:text-white transition-all duration-500 ${darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              
              {/* Moon Icon */}
              <svg
                className={`absolute w-5 h-5 text-[#1e40af] dark:text-white transition-all duration-500 ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden group relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 active:scale-90 ${
              mobileMenuOpen 
                ? 'bg-[#1e40af]/10 dark:bg-white/10' 
                : 'hover:bg-[#1e40af]/5 dark:hover:bg-white/5'
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#1e40af] dark:bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#1e40af] dark:bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#1e40af] dark:bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white/98 dark:bg-[#0a0f1e]/98 backdrop-blur-2xl shadow-[-20px_0_60px_rgba(0,0,0,0.3)] dark:shadow-[-20px_0_60px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out md:hidden ${
          mobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1e40af]/10 dark:border-white/10">
          <span className="font-medium text-[#0e0e0e] dark:text-white text-2xl">
            {'<bbuilds/>'}
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-[#1e40af]/5 dark:bg-white/5 hover:bg-[#1e40af]/10 dark:hover:bg-white/10 transition-all duration-300"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-[#1e40af] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          <div className="flex-1 px-6 py-8 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-medium text-[#1e40af] dark:text-white/90 hover:bg-[#1e40af]/10 dark:hover:bg-white/10 active:scale-95 transition-all duration-300 ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                }}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e40af]/10 dark:bg-white/10 group-hover:bg-[#1e40af]/20 dark:group-hover:bg-white/20 transition-all duration-300">
                  {index === 0 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </span>
                <span className="flex-1 group-hover:translate-x-1 transition-transform duration-300">
                  {link.label}
                </span>
                <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Menu Footer with CTAs */}
          <div
            className={`px-6 pb-8 pt-4 space-y-3 border-t border-[#1e40af]/10 dark:border-white/10 transition-all duration-500 ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? '250ms' : '0ms',
            }}
          >
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#f5f5f6] dark:bg-white/10 border-2 border-[#1e40af]/30 dark:border-white/30 rounded-2xl text-base font-semibold transition-all duration-300 hover:border-[#1e40af]/60 dark:hover:border-white/60 hover:shadow-lg active:scale-95 gradient-text-light"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Client Portal
            </a>
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#1E40AF] rounded-2xl text-base font-semibold text-white shadow-[0px_8px_24px_0px_rgba(30,64,175,0.3)] transition-all duration-300 hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an appointment
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

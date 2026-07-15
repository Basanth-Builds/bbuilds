'use client';

import { useState, useEffect, useRef } from 'react';

const ROLES = ['SaaS Products', 'AI Automation', 'Internal Tools', 'Web Platforms'];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouse, { passive: true });
    return () => el?.removeEventListener('mousemove', handleMouse);
  }, []);

  const parallaxX = (mousePos.x - 0.5) * 24;
  const parallaxY = (mousePos.y - 0.5) * 16;

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* ── Ambient Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef4fd] via-white to-[#f0f7ff] dark:from-[#080c18] dark:via-[#0a1020] dark:to-[#0d1528]" />
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-40 dark:opacity-20" />
        {/* Glow blobs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 animate-blob"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            top: '-10%', left: '-10%',
            transform: `translate(${parallaxX * 0.6}px, ${parallaxY * 0.6}px)`,
            transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-8 animate-blob animation-delay-2000"
          style={{
            background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)',
            bottom: '-5%', right: '-5%',
            transform: `translate(${-parallaxX * 0.4}px, ${-parallaxY * 0.4}px)`,
            transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-10 dark:opacity-8 animate-blob animation-delay-4000"
          style={{
            background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
            top: '40%', left: '55%',
            transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`,
            transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left Column ── */}
          <div className="space-y-8">

            {/* Badge */}
            <div
              className={`transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e40af] dark:bg-[#93b4f8] animate-pulse-glow" />
                Product Studio · Available for projects
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-1">
              <h1
                className={`font-bold text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-tight transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <span className="gradient-text-light block">From idea to impact.</span>
                <span className="gradient-text-light block">We build what matters.</span>
              </h1>

              {/* Animated role cycler */}
              <div
                className={`mt-4 transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <span className="text-xl sm:text-2xl font-semibold text-[--text-muted] dark:text-[--text-muted]">
                  Building{' '}
                </span>
                <span
                  className={`text-xl sm:text-2xl font-bold gradient-text-light inline-block transition-all duration-350 ${
                    roleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {ROLES[roleIndex]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg text-[--text-secondary] dark:text-[--text-secondary] leading-relaxed max-w-xl transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="font-bold text-[--text-accent] dark:text-[--text-accent] font-mono">&lt;bbuilds/&gt;</span>{' '}
              is a product-focused technology studio building SaaS, automation, and internal systems for teams that care about execution.
            </p>

            {/* CTA Row */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="https://cal.com/bbuilds/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
                <svg className="w-4 h-4 shrink-0 opacity-60 -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="/portfolio"
                className="btn-secondary group"
              >
                View Our Work
                <svg className="w-4 h-4 shrink-0 opacity-60 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div
              className={`flex items-center gap-5 pt-2 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex -space-x-2">
                {['B','V','S','K'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0d1528] flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: ['#1e40af','#2563eb','#3b82f6','#60a5fa'][i],
                      zIndex: 4 - i,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm text-[--text-muted]">
                <span className="font-semibold text-[--text-primary]">6+ products</span> shipped for real teams
              </div>
            </div>
          </div>

          {/* ── Right Column — Feature Cards ── */}
          <div
            className={`hidden lg:block transition-all duration-700 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div
              className="relative space-y-4"
              style={{
                transform: `translate(${-parallaxX * 0.2}px, ${-parallaxY * 0.2}px)`,
                transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {/* Card 1 */}
              <FeatureCard
                delay="0ms"
                mounted={mounted}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Product Thinking"
                desc="We obsess over user flows, not just code. Every build starts with why."
                tag="Strategy"
                color="#1e40af"
              />

              {/* Card 2 — offset right */}
              <div className="ml-8">
                <FeatureCard
                  delay="100ms"
                  mounted={mounted}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                  title="Execution Speed"
                  desc="MVP to production in weeks. We move fast without breaking things."
                  tag="Velocity"
                  color="#2563eb"
                />
              </div>

              {/* Card 3 */}
              <FeatureCard
                delay="200ms"
                mounted={mounted}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
                title="Engineering Depth"
                desc="Clean architecture, type-safe code, CI/CD from day one."
                tag="Quality"
                color="#3b82f6"
              />

              {/* Floating stat badge */}
              <div
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-lg animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-2xl font-black gradient-text-light">6+</div>
                <div className="text-xs text-[--text-muted] font-medium">Products Shipped</div>
              </div>

              {/* Floating stat badge 2 */}
              <div
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-lg animate-float"
                style={{ animationDelay: '2.5s' }}
              >
                <div className="text-2xl font-black gradient-text-light">3y+</div>
                <div className="text-xs text-[--text-muted] font-medium">Building Products</div>
              </div>
            </div>
          </div>

          {/* Mobile only: stat pills */}
          <div
            className={`lg:hidden flex gap-3 flex-wrap transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {[['6+','Products'], ['3y+','Experience'], ['100%','Committed']].map(([val, label]) => (
              <div key={label} className="glass rounded-xl px-4 py-2.5 flex items-center gap-2">
                <span className="text-lg font-black gradient-text-light">{val}</span>
                <span className="text-sm text-[--text-muted]">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Feature Card Sub-Component ── */
function FeatureCard({
  delay, mounted, icon, title, desc, tag, color
}: {
  delay: string;
  mounted: boolean;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  color: string;
}) {
  return (
    <div
      className={`card p-5 cursor-default group transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: `${color}18`, color }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-[--text-primary] text-sm">{title}</h3>
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: `${color}15`, color }}
            >
              {tag}
            </span>
          </div>
          <p className="text-xs text-[--text-muted] leading-relaxed">{desc}</p>
        </div>
      </div>
      {/* Bottom progress bar micro-interaction */}
      <div className="mt-3 h-0.5 rounded-full bg-[--border-subtle] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 group-hover:w-full"
          style={{ width: '40%', background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
      </div>
    </div>
  );
}

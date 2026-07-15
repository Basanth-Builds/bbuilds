'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-white dark:from-[#0a0f1e] dark:via-[#101830] dark:to-[#0a0f1e] relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none"></div>

      <Navbar />
      <HeroSection />

      {/* ── ABOUT BBUILDS ── */}
      <section id="about" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-[#f0f7fc] dark:from-[#0a0f1e] dark:to-[#101830] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">The Studio</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0e0e0e] dark:text-white mb-6 leading-tight">
              We build things that<br className="hidden md:block" /> <span className="text-[#1e40af] dark:text-[#93c5fd]">actually ship</span>
            </h2>
            <p className="text-xl text-[#4762b8] dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              {'<bbuilds/>'} is a product studio founded on one belief: great ideas deserve great execution. We partner with founders, startups, and businesses to turn concepts into production-ready products.
            </p>
          </div>

          {/* 3 pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: '🧠', title: 'Product Thinking', desc: 'We start with the problem, not the solution. Every feature we build ties back to a real user need.' },
              { icon: '⚡', title: 'Engineering Depth', desc: 'Full-stack. Mobile. AI. DevOps. We own the entire stack so nothing falls through the cracks.' },
              { icon: '🚀', title: 'Execution Speed', desc: 'We move fast without breaking things — structured sprints, clear ownership, zero hand-wavy timelines.' },
            ].map((p) => (
              <div key={p.title} className="p-8 rounded-3xl bg-white dark:bg-[#10225d]/40 border border-[#1e40af]/10 dark:border-white/10 shadow-lg dark:shadow-none hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#0e0e0e] dark:text-white mb-3">{p.title}</h3>
                <p className="text-[#4762b8] dark:text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Studio story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#0e0e0e] dark:text-white">Built by builders, for builders</h3>
              <p className="text-lg text-[#4762b8] dark:text-white/70 leading-relaxed">
                We don&apos;t believe in overpromising or building for vanity. Our work is grounded in real-world constraints — timelines, budgets, performance, and long-term maintainability.
              </p>
              <p className="text-lg text-[#4762b8] dark:text-white/70 leading-relaxed">
                From SaaS platforms and automation systems to internal tools and open-source initiatives, <span className="text-[#1e40af] dark:text-[#93c5fd] font-semibold">{'<bbuilds/>'}</span> exists to build things that actually ship and continue to work in the real world.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Next.js', 'React Native', 'Supabase', 'TypeScript', 'AI/ML', 'DevOps'].map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-[#c5defc]/50 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>
            {/* Venn */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute top-0 left-1/4 w-52 h-52 rounded-full border-2 border-[#1e40af]/30 dark:border-white/20 bg-[#1e40af]/5 dark:bg-white/5"></div>
                <div className="absolute top-0 right-1/4 w-52 h-52 rounded-full border-2 border-[#1e40af]/30 dark:border-white/20 bg-[#1e40af]/5 dark:bg-white/5"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full border-2 border-[#1e40af]/30 dark:border-white/20 bg-[#1e40af]/5 dark:bg-white/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1e40af] dark:text-white font-bold text-lg">{'<bbuilds/>'}</div>
                <span className="absolute top-6 left-2 text-sm font-semibold text-[#0e0e0e] dark:text-white/90">Product Thinking</span>
                <span className="absolute top-6 right-2 text-sm font-semibold text-[#0e0e0e] dark:text-white/90">Engineering</span>
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-[#0e0e0e] dark:text-white/90">Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section id="services" className="py-24 px-6 md:px-12 bg-[#f0f7fc] dark:bg-[#101830] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-4">What We Build</h2>
            <p className="text-xl text-[#4762b8] dark:text-white/70 max-w-3xl mx-auto">End-to-end development that turns ideas into production-ready products</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💻', title: 'Web Applications', desc: 'Next.js, React, and modern web apps with responsive design, auth, and real-time features.', tags: ['Next.js', 'React', 'TypeScript'] },
              { icon: '🎯', title: 'SaaS Platforms', desc: 'Complete SaaS solutions with subscriptions, payments, analytics, and multi-tenant architecture.', tags: ['SaaS', 'Stripe', 'Analytics'] },
              { icon: '📱', title: 'Mobile Apps', desc: 'Native iOS & Android apps with seamless UX and cross-platform compatibility via React Native & Expo.', tags: ['iOS', 'Android', 'Expo'] },
              { icon: '🤖', title: 'AI Integration', desc: 'LLM-powered features, intelligent automation, and AI-first product architecture.', tags: ['LLM', 'Claude', 'RAG'] },
              { icon: '⚙️', title: 'DevOps & Infra', desc: 'CI/CD pipelines, cloud deployments, and infrastructure that scales without drama.', tags: ['GitHub Actions', 'Railway', 'AWS'] },
              { icon: '🛠️', title: 'Internal Tools', desc: 'Automation tools, workflow systems, and custom integrations to eliminate repetitive work.', tags: ['Automation', 'APIs', 'Integration'] },
            ].map((s, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-[#10225d]/50 border border-[#1e40af]/10 dark:border-white/10 shadow-lg dark:shadow-none hover:shadow-xl hover:border-[#1e40af]/30 dark:hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-6">{s.icon}</div>
                <h3 className="text-2xl font-bold text-[#0e0e0e] dark:text-white mb-3">{s.title}</h3>
                <p className="text-[#4762b8] dark:text-white/70 mb-5 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => <span key={t} className="px-3 py-1 rounded-full bg-[#c5defc]/50 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-medium">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-4">Things We&apos;ve Built</h2>
            <p className="text-xl text-[#4762b8] dark:text-white/70 max-w-3xl mx-auto">From the first commit to the latest deploy — every product in order.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                status: 'Shipped',
                statusColor: 'green',
                category: 'Education & Community',
                title: 'Aero Astro Club Web App',
                url: 'https://gaac.site',
                desc: 'A centralized platform for GITAM&apos;s Aerospace & Astronomy club — member portal, event management, content hub, and real-time admin dashboard.',
                tech: ['Next.js', 'Supabase', 'Real-time', 'Auth'],
                highlight: '500+ members onboarded',
              },
              {
                num: '02',
                status: 'Shipped',
                statusColor: 'green',
                category: 'EdTech SaaS',
                title: 'ProParent',
                url: 'https://proparent.org',
                desc: 'AI-powered parenting platform that delivers personalised child-development guidance, expert-backed content, and a parent community — all in one place.',
                tech: ['AI/ML', 'Next.js', 'Auth', 'CMS'],
                highlight: '10K+ active users',
              },
              {
                num: '03',
                status: 'Shipped',
                statusColor: 'green',
                category: 'Sports & Recreation',
                title: 'GoPlaya',
                url: 'https://goplaya.in',
                desc: 'Sports venue booking platform with real-time slot availability, integrated payments, and a venue-owner management dashboard.',
                tech: ['Full-stack', 'Payments', 'Maps', 'Booking'],
                highlight: '50+ venues onboarded',
              },
              {
                num: '04',
                status: 'Shipped',
                statusColor: 'green',
                category: 'Fleet & Logistics SaaS',
                title: 'Searis Fleet Management',
                url: 'https://bsm.searis.software',
                desc: 'End-to-end fleet management system for Searis — vehicle tracking, driver management, trip logs, maintenance scheduling, and ops reporting.',
                tech: ['SaaS', 'TypeScript', 'Supabase', 'Maps'],
                highlight: 'Full BSM suite',
              },
              {
                num: '05',
                status: 'In Progress',
                statusColor: 'yellow',
                category: 'FinTech Mobile App',
                title: 'SquaredSplit',
                url: 'https://github.com/SquaredSplit-v1',
                desc: 'Expense splitting mobile app with smart group settlements, Supabase real-time sync, and an intuitive split-history feed.',
                tech: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
                highlight: 'Active development',
              },
              {
                num: '06',
                status: 'In Progress',
                statusColor: 'yellow',
                category: 'FinTech AI SaaS',
                title: 'TLDR Money',
                url: 'https://tldrmoney.in/',
                desc: 'AI-powered personal finance tool that parses bank emails and statements, auto-categorises transactions, and surfaces spending insights via LLMs.',
                tech: ['LLM', 'LSTM', 'Email Parsing', 'Next.js'],
                highlight: 'Active development',
              },
            ].map((p) => (
              <div key={p.num} className="group bg-white dark:bg-[#10225d]/40 rounded-3xl border border-[#1e40af]/10 dark:border-white/10 shadow-lg dark:shadow-none hover:shadow-xl hover:border-[#1e40af]/25 dark:hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Number column */}
                  <div className="flex items-center justify-center md:justify-start p-6 md:p-10 md:w-28 shrink-0">
                    <span className="text-6xl md:text-7xl font-black text-[#1e40af]/10 dark:text-white/10 group-hover:text-[#1e40af]/20 dark:group-hover:text-white/20 transition-colors duration-300 select-none">{p.num}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6 md:py-10 md:pr-10">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-[#4762b8] dark:text-white/50">{p.category}</span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        p.statusColor === 'green'
                          ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          p.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'
                        }`}></span>
                        {p.status}
                      </span>
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0e0e0e] dark:text-white group-hover/link:text-[#1e40af] dark:group-hover/link:text-[#93c5fd] transition-colors duration-200">{p.title}</h3>
                      <span className="text-[#1e40af] dark:text-[#93c5fd] opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 text-xl">↗</span>
                    </a>
                    <p className="text-[#4762b8] dark:text-white/60 leading-relaxed mb-5 max-w-2xl" dangerouslySetInnerHTML={{__html: p.desc}} />
                    <div className="flex flex-wrap items-center gap-3">
                      {p.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-[#c5defc]/50 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-medium">{t}</span>
                      ))}
                      <span className="ml-auto text-sm font-semibold text-[#1e40af] dark:text-[#93c5fd]">{p.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#1e40af]/30 dark:border-white/20 text-[#1e40af] dark:text-white font-semibold hover:border-[#1e40af] dark:hover:border-white hover:shadow-lg transition-all duration-300">
              View Full Portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOUNDER TEASER ── */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f0f7fc] to-white dark:from-[#101830] dark:to-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase">Founder</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white leading-tight">Meet Basanth</h2>
              <p className="text-xl text-[#4762b8] dark:text-white/70 leading-relaxed">
                Full-stack product engineer, startup founder, and the person behind every line of code at <span className="text-[#1e40af] dark:text-[#93c5fd] font-semibold">{'<bbuilds/>'}</span>. Based in Hyderabad, building for the world.
              </p>
              <p className="text-lg text-[#4762b8] dark:text-white/60 leading-relaxed">
                He started <span className="font-semibold text-[#0e0e0e] dark:text-white">{'<bbuilds/>'}</span> to solve a recurring problem he saw across startups: great ideas failing due to poor execution, unclear ownership, and fragile systems.
              </p>
              <a href="/founder" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E40AF] rounded-full text-white font-semibold shadow-[0px_8px_24px_0px_rgba(30,64,175,0.3)] hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] hover:scale-105 transition-all duration-300">
                Full Profile →
              </a>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-[#c5defc] to-[#e8f4fc] dark:from-[#10225d] dark:to-[#152d7c] border border-[#1e40af]/20 dark:border-white/10 flex items-center justify-center shadow-2xl">
                <div className="w-[90%] h-[90%] rounded-2xl bg-white/40 dark:bg-black/20 flex items-center justify-center">
                  <span className="text-9xl">👨‍💻</span>
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#10225d] border border-[#1e40af]/20 dark:border-white/10 rounded-2xl p-4 shadow-xl">
                <p className="text-sm font-bold text-[#0e0e0e] dark:text-white">VVS Basanth Pedapati</p>
                <p className="text-xs text-[#4762b8] dark:text-white/60">Founder & Product Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-4">How We Work</h2>
            <p className="text-xl text-[#4762b8] dark:text-white/70 max-w-3xl mx-auto">We treat every product — client or internal — as something we&apos;d be proud to maintain ourselves.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'Discovery', desc: 'Deep-dive into the problem, users, and constraints. No assumptions.' },
              { num: '02', title: 'Architecture & Plan', desc: 'We map the system before touching code. Clear ownership, no surprises.' },
              { num: '03', title: 'Build & Iterate', desc: 'Execution-first sprints with weekly demos. Feedback loops built-in.' },
              { num: '04', title: 'Ship & Support', desc: 'We launch, monitor, and stay accountable. Not just a hand-off.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 p-8 rounded-3xl bg-[#f0f7fc] dark:bg-[#10225d]/40 border border-[#1e40af]/10 dark:border-white/10 hover:-translate-y-1 transition-all duration-300">
                <span className="text-5xl font-black text-[#1e40af]/20 dark:text-white/10 select-none shrink-0">{step.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-[#0e0e0e] dark:text-white mb-2">{step.title}</h3>
                  <p className="text-[#4762b8] dark:text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#0d1b49] via-[#152d7c] to-[#1e40af] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Something?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">A focused strategy call to understand your product and growth goals. No commitment, just clarity.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://cal.com/bbuilds/discovery-call" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white rounded-full text-[#1e40af] font-bold text-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300">
              Schedule a Discovery Call
            </a>
            <a href="#portfolio"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300">
              See Our Work
            </a>
          </div>
          <p className="mt-8 text-white/50 text-sm">✓ Outcome-driven work &nbsp;•&nbsp; ✓ Real products shipped &nbsp;•&nbsp; ✓ Measurable impact</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#f0f7fc] dark:bg-[#101830] border-t border-[#1e40af]/10 dark:border-white/10 py-16 px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <p className="font-bold text-[#0e0e0e] dark:text-white text-3xl mb-4">{'<bbuilds/>'}</p>
              <p className="text-[#4762b8] dark:text-white/70 leading-relaxed">A product studio that builds things that actually ship.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#152d7c] dark:text-white text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-[#4762b8] dark:text-white/70">
                {['Web Applications', 'SaaS Platforms', 'Mobile Apps', 'AI Integration', 'DevOps'].map(s => (
                  <li key={s}><a href="#services" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#152d7c] dark:text-white text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-[#4762b8] dark:text-white/70">
                <li><a href="#about" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">About the Studio</a></li>
                <li><a href="/founder" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Meet the Founder</a></li>
                <li><a href="/portfolio" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/venture-studio" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Venture Studio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#152d7c] dark:text-white text-lg mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-[#4762b8] dark:text-white/70">
                <li><a href="mailto:sales@bbuilds.org" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">sales@bbuilds.org</a></li>
                <li><a href="mailto:contact@bbuilds.org" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">contact@bbuilds.org</a></li>
                <li><a href="https://cal.com/bbuilds/discovery-call" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Book a call →</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1e40af]/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#152d7c]/50 dark:text-white/50">© 2026 bbuilds. All rights reserved.</p>
            <div className="flex gap-8 text-[#152d7c]/50 dark:text-white/50">
              <a href="#" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

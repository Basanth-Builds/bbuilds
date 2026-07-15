'use client';

import Navbar from '@/components/Navbar';

const projects = [
  {
    num: '01',
    status: 'Shipped',
    statusColor: 'green' as const,
    category: 'Education & Community',
    title: 'Aero Astro Club Web App',
    url: 'https://gaac.site',
    desc: 'A centralized platform for GITAM\'s Aerospace & Astronomy club — member portal, event management, content hub, and real-time admin dashboard. The first major full-stack project that set the foundation for everything that followed.',
    challenge: 'Aerospace club needed a platform to manage 500+ members, events, and educational content without manual overhead.',
    solution: 'Built full-stack with Next.js + Supabase — member portal, event RSVP, admin dashboard, and real-time notifications.',
    outcomes: ['500+ members onboarded', 'Reduced admin workload by 70%', 'Increased event participation by 85%'],
    tech: ['Next.js', 'Supabase', 'Real-time', 'Auth', 'TypeScript'],
  },
  {
    num: '02',
    status: 'Shipped',
    statusColor: 'green' as const,
    category: 'EdTech SaaS',
    title: 'ProParent',
    url: 'https://proparent.org',
    desc: 'AI-powered parenting platform that delivers personalised child-development guidance, expert-backed content, and a parent community. First foray into AI-first SaaS architecture.',
    challenge: 'Parents lacked personalised, AI-powered guidance for child development — existing tools were generic and disengaging.',
    solution: 'Built an AI-powered SaaS with personalised recommendations, community features, and expert-backed content pipelines.',
    outcomes: ['10K+ active users', 'Engagement up 120%', '4.8/5 average rating'],
    tech: ['AI/ML', 'Next.js', 'Auth', 'CMS', 'TypeScript'],
  },
  {
    num: '03',
    status: 'Shipped',
    statusColor: 'green' as const,
    category: 'Sports & Recreation',
    title: 'GoPlaya',
    url: 'https://goplaya.in',
    desc: 'Sports venue booking platform with real-time slot availability, integrated payments, venue-owner management dashboard, and geo-based search.',
    challenge: 'Venue owners lacked efficient booking tools — double bookings and lost revenue were common pain points.',
    solution: 'Built a real-time booking platform with payment integration, calendar management, and a venue ops dashboard.',
    outcomes: ['50+ venues onboarded', 'Booking conflicts down 95%', '10K+ bookings processed'],
    tech: ['Full-stack', 'Payments', 'Maps', 'Booking Engine', 'TypeScript'],
  },
  {
    num: '04',
    status: 'Shipped',
    statusColor: 'green' as const,
    category: 'Fleet & Logistics SaaS',
    title: 'Searis Fleet Management',
    url: 'https://bsm.searis.software',
    desc: 'End-to-end fleet management system for Searis — vehicle tracking, driver management, trip logs, maintenance scheduling, and comprehensive ops reporting.',
    challenge: 'Searis needed a dedicated BSM suite that could handle fleet ops at scale without stitching together third-party tools.',
    solution: 'Built an enterprise-grade SaaS with multi-role access, vehicle tracking, driver ops, maintenance schedules, and reporting dashboards.',
    outcomes: ['Full BSM suite delivered', 'Ops visibility across fleet', 'Custom reporting engine'],
    tech: ['SaaS', 'TypeScript', 'Supabase', 'Maps', 'Multi-tenant'],
  },
  {
    num: '05',
    status: 'In Progress',
    statusColor: 'yellow' as const,
    category: 'FinTech Mobile App',
    title: 'SquaredSplit',
    url: 'https://github.com/SquaredSplit-v1',
    desc: 'Expense splitting mobile app with smart group settlements, Supabase real-time sync, and an intuitive split-history feed. Built mobile-first with React Native + Expo.',
    challenge: 'Existing expense splitters are either too complex or don\'t settle fairly. Groups need clarity, not more confusion.',
    solution: 'Mobile-first app with real-time sync, smart settlement suggestions, and a minimal UI that gets out of the way.',
    outcomes: ['Active development', 'Core split engine complete', 'Supabase real-time integrated'],
    tech: ['React Native', 'Expo', 'Supabase', 'TypeScript', 'Real-time'],
  },
  {
    num: '06',
    status: 'In Progress',
    statusColor: 'yellow' as const,
    category: 'FinTech AI SaaS',
    title: 'TLDR Money',
    url: 'https://tldrmoney.in/',
    desc: 'AI-powered personal finance tool that parses bank emails and statements, auto-categorises transactions using LSTM models, and surfaces spending insights via LLMs.',
    challenge: 'People drown in financial data but lack clear spending visibility. Manual categorisation is tedious and error-prone.',
    solution: 'Built an email-parsing pipeline with LSTM-based transaction categorisation and an LLM layer for natural language insights.',
    outcomes: ['Email parsing pipeline live', 'LSTM categorisation model trained', 'LLM insights in development'],
    tech: ['LLM', 'LSTM', 'Email Parsing', 'Next.js', 'Python', 'AI/ML'],
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-white dark:from-[#0a0f1e] dark:via-[#101830] dark:to-[#0a0f1e] relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.08),transparent_50%)] pointer-events-none"></div>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-black text-[#0e0e0e] dark:text-white mb-6 leading-tight">
            Things We&apos;ve Built
          </h1>
          <p className="text-xl text-[#4762b8] dark:text-white/70 max-w-2xl mx-auto">
            Six products. Real problems. From first commit to latest deploy — in chronological order.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((p) => (
            <div key={p.num} className="bg-white dark:bg-[#10225d]/40 rounded-3xl border border-[#1e40af]/10 dark:border-white/10 shadow-lg dark:shadow-none overflow-hidden">
              {/* Top row */}
              <div className="flex items-start gap-6 p-8 pb-0">
                <span className="text-7xl font-black text-[#1e40af]/10 dark:text-white/10 select-none shrink-0 leading-none">{p.num}</span>
                <div className="flex-1 pt-2">
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
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0e0e0e] dark:text-white group-hover:text-[#1e40af] dark:group-hover:text-[#93c5fd] transition-colors">{p.title}</h2>
                    <span className="text-[#1e40af] dark:text-[#93c5fd] opacity-0 group-hover:opacity-100 transition-opacity text-xl">↗</span>
                  </a>
                  <p className="text-[#4762b8] dark:text-white/60 leading-relaxed mb-6">{p.desc}</p>
                </div>
              </div>
              {/* Details */}
              <div className="grid md:grid-cols-3 gap-0 border-t border-[#1e40af]/10 dark:border-white/10">
                <div className="p-8 border-b md:border-b-0 md:border-r border-[#1e40af]/10 dark:border-white/10">
                  <p className="text-xs font-bold text-[#1e40af] dark:text-[#93c5fd] uppercase tracking-widest mb-3">Challenge</p>
                  <p className="text-sm text-[#4762b8] dark:text-white/60 leading-relaxed">{p.challenge}</p>
                </div>
                <div className="p-8 border-b md:border-b-0 md:border-r border-[#1e40af]/10 dark:border-white/10">
                  <p className="text-xs font-bold text-[#1e40af] dark:text-[#93c5fd] uppercase tracking-widest mb-3">Solution</p>
                  <p className="text-sm text-[#4762b8] dark:text-white/60 leading-relaxed">{p.solution}</p>
                </div>
                <div className="p-8">
                  <p className="text-xs font-bold text-[#1e40af] dark:text-[#93c5fd] uppercase tracking-widest mb-3">Outcomes</p>
                  <ul className="space-y-2">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-[#4762b8] dark:text-white/60">
                        <span className="text-green-500 shrink-0 mt-0.5">▸</span> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Tech */}
              <div className="px-8 py-5 border-t border-[#1e40af]/10 dark:border-white/10 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-[#c5defc]/50 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#0d1b49] via-[#152d7c] to-[#1e40af]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to Be Project #07?</h2>
          <p className="text-xl text-white/70 mb-10">We&apos;re always looking for the next interesting problem to solve.</p>
          <a href="https://cal.com/bbuilds/discovery-call" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white rounded-full text-[#1e40af] font-bold text-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300">
            Let&apos;s Talk →
          </a>
        </div>
      </section>

      <footer className="bg-[#f0f7fc] dark:bg-[#101830] border-t border-[#1e40af]/10 dark:border-white/10 py-10 px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/" className="font-bold text-[#0e0e0e] dark:text-white text-2xl hover:text-[#1e40af] dark:hover:text-[#93c5fd] transition-colors">{'<bbuilds/>'}</a>
          <p className="text-[#152d7c]/50 dark:text-white/50">© 2026 bbuilds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

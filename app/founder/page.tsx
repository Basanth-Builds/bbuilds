'use client';

import Navbar from '@/components/Navbar';

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-white dark:from-[#0a0f1e] dark:via-[#101830] dark:to-[#0a0f1e] relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.08),transparent_50%)] pointer-events-none"></div>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase">Founder</span>
              <h1 className="text-5xl md:text-6xl font-black text-[#0e0e0e] dark:text-white leading-tight">
                VVS Basanth<br />Pedapati
              </h1>
              <p className="text-2xl text-[#1e40af] dark:text-[#93c5fd] font-semibold">Founder & Product Engineer at {'<bbuilds/>'}</p>
              <p className="text-lg text-[#4762b8] dark:text-white/70 leading-relaxed">
                Full-stack product engineer, startup founder, and competitive pickleball player based in Hyderabad, India. I build products that solve real problems — from AI-powered fintech to sports management platforms.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://cal.com/bbuilds/discovery-call" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E40AF] rounded-full text-white font-semibold shadow-[0px_8px_24px_0px_rgba(30,64,175,0.3)] hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] hover:scale-105 transition-all duration-300">
                  Book a Call
                </a>
                <a href="mailto:contact@bbuilds.org"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1e40af]/30 dark:border-white/20 rounded-full text-[#1e40af] dark:text-white font-semibold hover:border-[#1e40af] dark:hover:border-white transition-all duration-300">
                  Say Hello
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-3xl bg-gradient-to-br from-[#c5defc] to-[#e8f4fc] dark:from-[#10225d] dark:to-[#152d7c] border border-[#1e40af]/20 dark:border-white/10 flex items-center justify-center shadow-2xl">
                <div className="w-[90%] h-[90%] rounded-2xl bg-white/40 dark:bg-black/20 flex items-center justify-center">
                  <span className="text-[120px]">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#10225d] border border-[#1e40af]/20 dark:border-white/10 rounded-2xl p-4 shadow-xl">
                <p className="text-sm font-bold text-[#0e0e0e] dark:text-white">📍 Hyderabad, India</p>
                <p className="text-xs text-[#4762b8] dark:text-white/60">Building for the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-16 px-6 md:px-12 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '6+', label: 'Products Shipped' },
              { value: '3+', label: 'Years Building' },
              { value: '5', label: 'Tech Stacks Mastered' },
              { value: '∞', label: 'Problems to Solve' },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-[#f0f7fc] dark:bg-[#10225d]/40 border border-[#1e40af]/10 dark:border-white/10">
                <p className="text-4xl font-black text-[#1e40af] dark:text-[#93c5fd] mb-2">{s.value}</p>
                <p className="text-sm text-[#4762b8] dark:text-white/60 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-12 bg-[#f0f7fc] dark:bg-[#101830] transition-colors duration-500">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">My Story</span>
            <h2 className="text-4xl font-bold text-[#0e0e0e] dark:text-white mb-6">Why I Started Building</h2>
            <div className="space-y-4 text-lg text-[#4762b8] dark:text-white/70 leading-relaxed">
              <p>I started coding because I was frustrated with how slow things moved. Great ideas would die in planning meetings, or get built wrong, or just never ship. I decided I&apos;d rather be the person who closes the loop — from idea to production.</p>
              <p>Over the years I&apos;ve built fintech tools, club platforms, fleet management systems, sports apps, and AI-powered products. Each one taught me something the last one didn&apos;t. The common thread: execution is everything.</p>
              <p>That&apos;s why I started <span className="text-[#1e40af] dark:text-[#93c5fd] font-semibold">{'<bbuilds/>'}</span> — a studio where ideas actually become products, products actually ship, and shipped products actually work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">Stack</span>
            <h2 className="text-4xl font-bold text-[#0e0e0e] dark:text-white mb-4">What I Build With</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Frontend & Mobile',
                items: ['React Native + Expo', 'Next.js 14+', 'TypeScript', 'TailwindCSS', 'Swift / Kotlin'],
              },
              {
                category: 'Backend & Data',
                items: ['Supabase (PostgreSQL)', 'Node.js', 'Python', 'SQL', 'REST & GraphQL APIs'],
              },
              {
                category: 'AI / ML & DevOps',
                items: ['LLMs (Claude, DeepSeek)', 'LSTM / GRU models', 'GitHub Actions', 'Railway / AWS / Vercel', 'Docker'],
              },
            ].map((stack) => (
              <div key={stack.category} className="p-8 rounded-3xl bg-[#f0f7fc] dark:bg-[#10225d]/40 border border-[#1e40af]/10 dark:border-white/10">
                <h3 className="text-lg font-bold text-[#0e0e0e] dark:text-white mb-5">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-[#4762b8] dark:text-white/70">
                      <span className="w-2 h-2 rounded-full bg-[#1e40af] dark:bg-[#93c5fd] shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects timeline */}
      <section className="py-24 px-6 md:px-12 bg-[#f0f7fc] dark:bg-[#101830] transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">Journey</span>
            <h2 className="text-4xl font-bold text-[#0e0e0e] dark:text-white mb-4">Build Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#1e40af]/20 dark:bg-white/10"></div>
            <div className="space-y-8">
              {[
                { year: '2023', title: 'Aero Astro Club Web App', desc: 'First major full-stack project. Built the platform for GITAM&apos;s aerospace club from scratch.', url: 'https://gaac.site' },
                { year: '2024', title: 'ProParent', desc: 'Scaled to AI-powered SaaS. Built full EdTech platform with auth, CMS, and personalisation engine.', url: 'https://proparent.org' },
                { year: '2024', title: 'GoPlaya', desc: 'Sports venue booking platform — real-time availability, payments, and venue management.', url: 'https://goplaya.in' },
                { year: '2024', title: 'Searis Fleet Management', desc: 'Enterprise-grade fleet ops system — tracking, driver management, maintenance scheduling.', url: 'https://bsm.searis.software' },
                { year: '2025', title: 'SquaredSplit', desc: 'Mobile-first expense splitting app. React Native + Expo + Supabase. Ongoing.', url: 'https://github.com/SquaredSplit-v1' },
                { year: '2025', title: 'TLDR Money', desc: 'AI fintech: email parsing, LSTM transaction categorisation, LLM-powered insights. Ongoing.', url: 'https://tldrmoney.in/' },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-8 pl-16 md:pl-20">
                  <div className="absolute left-3 md:left-5 w-5 h-5 rounded-full bg-[#1e40af] dark:bg-[#93c5fd] border-4 border-white dark:border-[#101830] shrink-0 mt-2"></div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-[#1e40af] dark:text-[#93c5fd]">{item.year}</span>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 mb-2">
                      <h3 className="text-xl font-bold text-[#0e0e0e] dark:text-white group-hover:text-[#1e40af] dark:group-hover:text-[#93c5fd] transition-colors">{item.title}</h3>
                      <span className="opacity-0 group-hover:opacity-100 text-[#1e40af] dark:text-[#93c5fd] transition-opacity">↗</span>
                    </a>
                    <p className="text-[#4762b8] dark:text-white/60" dangerouslySetInnerHTML={{__html: item.desc}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond code */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white/80 text-sm font-semibold tracking-widest uppercase mb-6">Life</span>
            <h2 className="text-4xl font-bold text-[#0e0e0e] dark:text-white mb-4">Beyond the Code</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏓', title: 'Competitive Pickleball', desc: 'DUPR-rated competitive player. Pickleball is where I learned about strategy, adaptability, and never flinching under pressure.' },
              { icon: '🏋️', title: 'Fitness First', desc: 'Daily gym sessions, biking, and a disciplined approach to health. A healthy body fuels a sharp mind.' },
              { icon: '🏏', title: 'Cricket & IPL', desc: 'Avid follower of cricket analytics and IPL. Sports data fascinates me as much as software data.' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-3xl bg-[#f0f7fc] dark:bg-[#10225d]/40 border border-[#1e40af]/10 dark:border-white/10 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0e0e0e] dark:text-white mb-3">{item.title}</h3>
                <p className="text-[#4762b8] dark:text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#0d1b49] via-[#152d7c] to-[#1e40af] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Build Together</h2>
          <p className="text-xl text-white/70 mb-10">Have an idea? A problem to solve? A product that needs shipping? I&apos;m all ears.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://cal.com/bbuilds/discovery-call" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white rounded-full text-[#1e40af] font-bold text-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300">
              Book a Call
            </a>
            <a href="mailto:contact@bbuilds.org"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300">
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0f7fc] dark:bg-[#101830] border-t border-[#1e40af]/10 dark:border-white/10 py-10 px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/" className="font-bold text-[#0e0e0e] dark:text-white text-2xl hover:text-[#1e40af] dark:hover:text-[#93c5fd] transition-colors">{'<bbuilds/>'}</a>
          <p className="text-[#152d7c]/50 dark:text-white/50">© 2026 bbuilds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

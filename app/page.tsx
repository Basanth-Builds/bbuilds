'use client';

import { useEffect } from 'react';
import Image from 'next/image';
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
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none"></div>
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About bbuilds Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#f0f7fc] dark:from-[#0a0f1e] dark:to-[#101830] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Philosophy Statement */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl text-[#0e0e0e] dark:text-white/90 max-w-4xl mx-auto leading-relaxed">
              We don&apos;t believe in overpromising or building for vanity. Our work is grounded in real-world constraints
            </p>
          </div>

          {/* Focus Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: 'Timelines', icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              )},
              { label: 'Budgets', icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              )},
              { label: 'Performance', icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              )},
              { label: 'Long-term maintainability', icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              )},
            ].map((item) => (
              <div 
                key={item.label} 
                className="group relative p-8 rounded-2xl text-center bg-white dark:bg-[#10225d]/30 border border-[#1e40af]/10 dark:border-white/10 hover:border-[#1e40af]/30 dark:hover:border-white/20 shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#1e40af]/5 dark:bg-white/5 flex items-center justify-center text-[#1e40af] dark:text-white/80 group-hover:bg-[#1e40af]/10 dark:group-hover:bg-white/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-[#0e0e0e] dark:text-white">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Venn Diagram Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Animated Venn Diagram */}
            <div className="relative flex items-center justify-center py-8">
              <svg viewBox="0 0 500 460" className="w-full max-w-md md:max-w-lg" xmlns="http://www.w3.org/2000/svg">
                {/* Definitions */}
                <defs>
                  {/* Intersection clip for center highlight */}
                  <clipPath id="clip-intersection">
                    <circle cx="250" cy="170" r="120" />
                  </clipPath>
                </defs>

                {/* Top-left circle - Product Thinking */}
                <circle cx="200" cy="185" r="120" className="fill-[#1e40af]/[0.06] dark:fill-white/[0.04] stroke-[#1e40af]/25 dark:stroke-white/15" strokeWidth="1.5">
                  <animate attributeName="r" values="120;123;120" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Top-right circle - Engineering */}
                <circle cx="300" cy="185" r="120" className="fill-[#1e40af]/[0.06] dark:fill-white/[0.04] stroke-[#1e40af]/25 dark:stroke-white/15" strokeWidth="1.5">
                  <animate attributeName="r" values="120;123;120" dur="4s" begin="1.3s" repeatCount="indefinite" />
                </circle>

                {/* Bottom circle - Execution */}
                <circle cx="250" cy="275" r="120" className="fill-[#1e40af]/[0.06] dark:fill-white/[0.04] stroke-[#1e40af]/25 dark:stroke-white/15" strokeWidth="1.5">
                  <animate attributeName="r" values="120;123;120" dur="4s" begin="2.6s" repeatCount="indefinite" />
                </circle>

                {/* Center glow */}
                <circle cx="250" cy="210" r="35" className="fill-[#1e40af]/10 dark:fill-white/10">
                  <animate attributeName="r" values="35;40;35" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Orbiting dot around center */}
                <circle r="3" className="fill-[#1e40af]/40 dark:fill-white/40">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M250,210 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" />
                </circle>

                {/* Center text - bbuilds */}
                <text x="250" y="215" textAnchor="middle" className="fill-[#1e40af] dark:fill-white text-base font-semibold" style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  {'<bbuilds/>'}
                </text>

                {/* Label - Product Thinking (top-left) */}
                <text x="160" y="135" textAnchor="middle" className="fill-[#0e0e0e] dark:fill-white/90" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Product Thinking
                </text>

                {/* Label - Engineering (top-right) */}
                <text x="340" y="135" textAnchor="middle" className="fill-[#0e0e0e] dark:fill-white/90" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Engineering
                </text>

                {/* Label - Execution (bottom) */}
                <text x="250" y="380" textAnchor="middle" className="fill-[#0e0e0e] dark:fill-white/90" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Execution
                </text>

                {/* Connecting pulse lines from circles toward center */}
                <line x1="185" y1="155" x2="235" y2="200" className="stroke-[#1e40af]/15 dark:stroke-white/10" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="8;0" dur="1.5s" repeatCount="indefinite" />
                </line>
                <line x1="315" y1="155" x2="265" y2="200" className="stroke-[#1e40af]/15 dark:stroke-white/10" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="8;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                </line>
                <line x1="250" y1="310" x2="250" y2="230" className="stroke-[#1e40af]/15 dark:stroke-white/10" strokeWidth="1" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="8;0" dur="1.5s" begin="1s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-[#0e0e0e] dark:text-white/90 leading-relaxed">
                From SaaS platforms and automation systems to internal tools and open-source initiatives, <span className="text-[#1e40af] dark:text-[#ededed] font-semibold">{'<bbuilds/>'}</span> exists to build things that actually ship and continue to work in the real world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 px-6 md:px-12 bg-[#f0f7fc] dark:bg-[#101830] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-16">Meet the Founder</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Founder Image */}
            <div className="relative">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#c5defc] to-[#e8f4fc] dark:from-[#10225d] dark:to-[#152d7c] border border-[#1e40af]/20 dark:border-white/10 flex items-center justify-center">
                <div className="w-[95%] h-[95%] rounded-2xl bg-white/50 dark:bg-black/20 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0e0e0e] dark:text-white">VVS Basanth Pedapati</h3>
              
              <p className="text-lg text-[#0e0e0e] dark:text-white/80 leading-relaxed">
                With a strong background in product development and engineering, Basanth started <span className="text-[#1e40af] dark:text-[#ededed] font-semibold">{'<bbuilds/>'}</span> to solve a recurring problem he saw across startups and businesses: great ideas failing due to poor execution, unclear ownership, or fragile systems.
              </p>
              
              <p className="text-lg text-[#0e0e0e] dark:text-white/80 leading-relaxed">
                At <span className="text-[#1e40af] dark:text-[#ededed] font-semibold">{'<bbuilds/>'}</span>, he leads product direction, architecture decisions, and execution standards ensuring every project is built with clarity, accountability, and scalability in mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f0f7fc] to-white dark:from-[#101830] dark:to-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0e0e] dark:text-white mb-4">
              <span className="text-[#1e40af] dark:text-[#ededed]">{'<bbuilds/>'}</span> is powered by a small, focused team
            </h2>
          </div>
          
          <p className="text-xl text-[#0e0e0e] dark:text-white/80 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Deep problem-solving, execution, and iteration. We&apos;re not a large outsourced workforce — and we don&apos;t aim to be.
          </p>

          {/* Team Members - Scrolling Carousel */}
          <div className="relative mb-12">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#f0f7fc] dark:from-[#101830] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#f0f7fc] dark:from-[#101830] to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-scroll-team">
                {[
                  { name: 'Team Member 1', role: 'Engineering', img: '/team/member1.jpg' },
                  { name: 'Team Member 2', role: 'Product', img: '/team/member2.jpg' },
                  { name: 'Team Member 3', role: 'Design', img: '/team/member3.jpg' },
                  { name: 'Team Member 4', role: 'Engineering', img: '/team/member4.jpg' },
                  { name: 'Team Member 5', role: 'Operations', img: '/team/member5.jpg' },
                  { name: 'Team Member 6', role: 'Engineering', img: '/team/member6.jpg' },
                  { name: 'Team Member 7', role: 'Product', img: '/team/member7.jpg' },
                ].flatMap((member, i) => [
                  { ...member, key: `a-${i}` },
                  { ...member, key: `b-${i}` },
                ]).map((member) => (
                  <div
                    key={member.key}
                    className="group flex-shrink-0 flex flex-col items-center gap-3"
                  >
                    <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-[#1e40af]/10 dark:border-white/10 group-hover:border-[#1e40af]/30 dark:group-hover:border-white/25 transition-all duration-300 group-hover:scale-105 bg-gradient-to-br from-[#c5defc] to-[#e8f4fc] dark:from-[#10225d] dark:to-[#152d7c]">
                      {/* Replace with <Image> when photos are available */}
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 md:w-16 md:h-16 text-[#1e40af]/30 dark:text-white/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-[#0e0e0e] dark:text-white">{member.name}</p>
                      <p className="text-xs text-[#1e40af]/70 dark:text-white/50">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xl text-[#0e0e0e]/60 dark:text-white/50 text-center max-w-4xl mx-auto leading-relaxed">
            As we grow, we aim to stay intentional—adding people who align with our values, curiosity, and commitment to building meaningful software.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#1e40af] dark:text-[#ededed]/60 mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-5">How we Work</h2>
            <p className="text-lg md:text-xl text-[#0e0e0e]/70 dark:text-white/60 max-w-2xl mx-auto">
              We treat every product — client or internal — as something we&apos;d be proud to maintain ourselves.
            </p>
          </div>

          {/* Work Principles - 4 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: 'Clear Ownership',
                desc: 'Every task has one owner. No ambiguity, no finger-pointing — just accountability.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
              },
              {
                title: 'Execution First',
                desc: 'We ship early, iterate fast, and let working software do the talking.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                ),
              },
              {
                title: 'No Buzzwords',
                desc: 'Practical solutions grounded in real constraints — not hype-driven decisions.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
              },
              {
                title: 'Long-term Thinking',
                desc: 'Even MVPs are built with tomorrow in mind — scalable, maintainable, real.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-[#f8fafc] dark:bg-white/[0.03] border border-[#1e40af]/[0.07] dark:border-white/[0.07] hover:border-[#1e40af]/20 dark:hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-none"
              >
                {/* Step number */}
                <span className="absolute top-5 right-6 text-xs font-bold text-[#1e40af]/15 dark:text-white/10">
                  0{index + 1}
                </span>

                <div className="w-11 h-11 rounded-lg bg-[#1e40af]/[0.06] dark:bg-white/[0.06] flex items-center justify-center text-[#1e40af] dark:text-white/70 mb-5 group-hover:bg-[#1e40af]/10 dark:group-hover:bg-white/10 transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-[#0e0e0e] dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#0e0e0e]/60 dark:text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-[#0e0e0e]/70 dark:text-white/60 text-center max-w-3xl mx-auto leading-relaxed">
            We&apos;re building <span className="text-[#1e40af] dark:text-[#ededed] font-semibold">{'<bbuilds/>'}</span> for the long run — one product, one system, one team at a time.
          </p>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="services" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#f0f7fc] dark:from-[#0a0f1e] dark:to-[#101830] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-4">What We Build</h2>
            <p className="text-xl text-[#0e0e0e] dark:text-white/80 max-w-3xl mx-auto">
              End-to-end development services that transform your ideas into production-ready products
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'Web Applications',
                description: 'Next.js, React, and modern web apps with responsive design, authentication, and real-time features.',
                tags: ['Next.js', 'React', 'TypeScript']
              },
              {
                icon: '🎯',
                title: 'SaaS Platforms',
                description: 'Complete SaaS solutions with subscriptions, payments, analytics, and multi-tenant architecture.',
                tags: ['SaaS', 'Stripe', 'Analytics']
              },
              {
                icon: '📱',
                title: 'Mobile Apps',
                description: 'Native iOS and Android applications with seamless UX and cross-platform compatibility.',
                tags: ['iOS', 'Android', 'React Native']
              },
              {
                icon: '🚀',
                title: 'MVP Development',
                description: 'Rapid MVP development to validate your idea and get to market fast with core features.',
                tags: ['MVP', 'Agile', 'Fast Launch']
              },
              {
                icon: '⚙️',
                title: 'IoT Development',
                description: 'Custom IoT solutions connecting hardware and software for smart automation systems.',
                tags: ['IoT', 'Embedded', 'Cloud']
              },
              {
                icon: '🛠️',
                title: 'Internal Tools',
                description: 'Automation tools, workflow systems, and custom integrations to boost productivity.',
                tags: ['Automation', 'APIs', 'Integration']
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-white dark:bg-[#10225d]/50 border border-[#1e40af]/10 dark:border-white/10 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none hover:border-[#1e40af]/30 dark:hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#0e0e0e] dark:text-white mb-4">{service.title}</h3>
                <p className="text-[#4762b8] dark:text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#c5defc]/50 dark:bg-white/10 text-[#1e40af] dark:text-white/90 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-6 md:px-12 bg-[#f0f7fc] dark:bg-[#101830] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-4">Case Studies</h2>
            <p className="text-xl text-[#0e0e0e] dark:text-white/80 max-w-3xl mx-auto">
              Real products. Real impact. Measurable results.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            {[
              {
                category: 'Education Platform',
                title: 'GITAM Aero Astro Club',
                url: 'https://gaac.site/',
                keyResult: '70% less admin work',
                impact: '500+ members',
                problem: 'Aerospace club needed a centralized platform to manage 500+ members, events, and educational content efficiently.',
                solution: 'Built a full-stack web platform with Next.js and Supabase featuring real-time event management, member portal, and content delivery system.',
                results: ['500+ active members onboarded', 'Reduced admin workload by 70%', 'Increased event participation by 85%'],
                tags: ['Next.js', 'Supabase', 'Real-time'],
                color: 'blue'
              },
              {
                category: 'EdTech SaaS',
                title: 'Pro Parent',
                url: 'https://test-dev.d1im2vjcb2eavr.amplifyapp.com/',
                keyResult: '40% conversion rate',
                impact: '10K+ users',
                problem: 'Parents struggled to find personalized, AI-powered guidance for child development and parenting challenges.',
                solution: 'Developed an AI-powered SaaS platform with personalized recommendations, community features, and expert-backed content.',
                results: ['10K+ active users in 6 months', 'Increased user engagement by 120%', '4.8/5 average user rating'],
                tags: ['AI/ML', 'Next.js', 'Auth'],
                color: 'purple'
              },
              {
                category: 'Sports & Recreation',
                title: 'Goplaya',
                url: 'https://www.goplaya.in/',
                keyResult: '45% revenue increase',
                impact: '50+ venues',
                problem: 'Sports venue owners lacked an efficient booking system, leading to double bookings and lost revenue opportunities.',
                solution: 'Created a comprehensive booking platform with real-time availability, payment integration, and venue management dashboard.',
                results: ['50+ venues onboarded', 'Reduced booking conflicts by 95%', 'Processed 10K+ bookings'],
                tags: ['Full-stack', 'Payments', 'Maps'],
                color: 'orange'
              }
            ].map((study, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-[#10225d]/50 rounded-3xl border border-[#1e40af]/10 dark:border-white/10 p-8 md:p-10 shadow-lg dark:shadow-none"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium
                      ${study.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300' : 
                        study.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300' : 
                        'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300'}
                    `}>
                      {study.category}
                    </span>
                    <a href={study.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-2xl font-bold text-[#0e0e0e] dark:text-white hover:text-[#1e40af] dark:hover:text-[#ededed] transition-colors flex items-center gap-2">
                        {study.title} <span className="text-lg">↗</span>
                      </h3>
                    </a>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-[#f0f7fc] dark:bg-white/5">
                        <p className="text-sm text-[#4762b8] dark:text-white/60">Key Result</p>
                        <p className="font-bold text-[#0e0e0e] dark:text-white">{study.keyResult}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#f0f7fc] dark:bg-white/5">
                        <p className="text-sm text-[#4762b8] dark:text-white/60">Impact</p>
                        <p className="font-bold text-[#0e0e0e] dark:text-white">{study.impact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[#1e40af] dark:text-[#ededed] mb-2">⚠️ Problem</p>
                      <p className="text-[#4762b8] dark:text-white/70">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1e40af] dark:text-[#ededed] mb-2">💡 Solution</p>
                      <p className="text-[#4762b8] dark:text-white/70">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1e40af] dark:text-[#ededed] mb-2">✅ Results</p>
                      <ul className="space-y-1 text-[#4762b8] dark:text-white/70">
                        {study.results.map((result, i) => (
                          <li key={i}>▸ {result}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#c5defc]/50 dark:bg-white/10 text-[#1e40af] dark:text-white/90 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e0e0e] mb-6">
            Want Results Like These for Your Product?
          </h2>
          <p className="text-xl text-[#0e0e0e] mb-12">
            A focused strategy call to understand your product and growth goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-10 py-5 bg-[#c5defc] border-2 border-[#1e40af] rounded-full text-xl font-medium shadow-[0px_8px_24px_0px_rgba(30,64,175,0.4)] transition-all duration-300 hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 32%, #0d1b49 53%, #152d7c 81%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Schedule a Call
            </a>
            <a
              href="#case-studies"
              className="flex items-center justify-center px-10 py-5 bg-[#f5f5f6] border border-[#10225d] rounded-full text-xl font-medium transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 32%, #0d1b49 53%, #152d7c 81%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              View Casestudies
            </a>
          </div>

          <p className="text-[#1e40af] font-medium">
            ✓ Outcome-driven work • ✓ Real products shipped • ✓ Measurable impact
          </p>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 px-6 md:px-12 bg-[#f0f7fc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] mb-4">Client Testimonials</h2>
            <p className="text-xl text-[#0e0e0e]">Hear what our clients say about working with us</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                quote: "Basanth and his team delivered our SaaS platform in record time. The quality of code and attention to detail was exceptional.",
                name: 'Rajesh Kumar',
                role: 'Founder',
                company: 'TechStart India'
              },
              {
                quote: "Working with bbuilds was a game-changer. They understood our vision and built a scalable platform that our users love.",
                name: 'Sarah Chen',
                role: 'CTO',
                company: 'EduLearn'
              },
              {
                quote: "From MVP to full launch, the team was with us every step. Their expertise in mobile development is top-notch.",
                name: 'Michael Rodriguez',
                role: 'Product Manager',
                company: 'SportHub'
              },
              {
                quote: "The AI integration they built for our platform exceeded expectations. Fast delivery and excellent communication.",
                name: 'Priya Sharma',
                role: 'CEO',
                company: 'HealthTech Solutions'
              },
              {
                quote: "Basanth's team transformed our idea into a production-ready app. Their technical expertise is outstanding.",
                name: 'David Thompson',
                role: 'Founder',
                company: 'FinanceApp'
              },
              {
                quote: "Professional, reliable, and incredibly skilled. They delivered exactly what we needed, on time and on budget.",
                name: 'Emily Watson',
                role: 'Director',
                company: 'RetailTech'
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl border border-[#1e40af]/10 p-8 shadow-lg"
              >
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-[#4762b8] mb-6 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c5defc] flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#0e0e0e]">{testimonial.name}</p>
                    <p className="text-sm text-[#4762b8]">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '5★', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p 
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 50%, #0d1b49 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-lg text-[#0e0e0e]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#0e0e0e] dark:text-white/80 mb-12 max-w-2xl mx-auto">
            Whether you&apos;re a startup building your MVP or an established business scaling your product, we&apos;re here to help you succeed.
          </p>
          <a
            href="https://cal.com/bbuilds/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#c5defc] dark:bg-white/10 border-2 border-[#1e40af] dark:border-white/30 rounded-full text-xl font-medium shadow-[0px_8px_24px_0px_rgba(30,64,175,0.4)] dark:shadow-none transition-all duration-300 hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] hover:scale-105 gradient-text-light"
          >
            Get Your Free Consultation →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0f7fc] dark:bg-[#101830] border-t border-[#1e40af]/10 dark:border-white/10 py-16 px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <p className="font-medium text-[#0e0e0e] dark:text-white text-3xl mb-4">{'<bbuilds/>'}</p>
              <p className="text-[#4762b8] dark:text-white/70 leading-relaxed">
                Expert developers building production-ready products for startups and businesses.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium text-[#152d7c] dark:text-white text-xl mb-4">Services</h4>
              <ul className="space-y-3 text-[#4762b8] dark:text-white/70">
                <li><a href="#services" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Web Applications</a></li>
                <li><a href="#services" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">SaaS Platforms</a></li>
                <li><a href="#services" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">MVP Development</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium text-[#152d7c] dark:text-white text-xl mb-4">Company</h4>
              <ul className="space-y-3 text-[#4762b8] dark:text-white/70">
                <li><a href="#about" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#case-studies" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#case-studies" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="mailto:contact@bbuilds.org" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Email Us */}
            <div>
              <h4 className="font-medium text-[#152d7c] dark:text-white text-xl mb-4">Email Us:</h4>
              <ul className="space-y-3 text-[#4762b8] dark:text-white/70">
                <li><a href="mailto:sales@bbuilds.org" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">sales@bbuilds.org</a></li>
                <li><a href="mailto:contact@bbuilds.org" className="hover:text-[#1e40af] dark:hover:text-white transition-colors">contact@bbuilds.org</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1e40af]/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#152d7c]/50 dark:text-white/50">
              © 2026 bbuilds. All rights reserved.
            </p>
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

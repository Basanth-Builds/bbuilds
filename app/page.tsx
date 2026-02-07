'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    document.documentElement.style.scrollBehavior = 'smooth';
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,64,175,0.08),transparent_50%)] pointer-events-none"></div>
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-[#1e40af]/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-medium text-[#0e0e0e] text-2xl md:text-3xl hover:opacity-80 transition-opacity">
            {'<bbuilds/>'}
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex gap-12 text-[#1e40af] text-lg font-medium">
            <a href="#services" className="hover:text-[#152d7c] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#152d7c] transition-colors">About</a>
            <a href="#case-studies" className="hover:text-[#152d7c] transition-colors">Portfolio</a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#case-studies"
              className="hidden sm:flex items-center justify-center px-6 py-3 bg-[#f5f5f6] border border-[#10225d] rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 32%, #0d1b49 53%, #152d7c 81%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              View Casestudies
            </a>
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-[#c5defc] border-2 border-[#1e40af] rounded-full text-sm md:text-base font-medium shadow-[0px_8px_24px_0px_rgba(30,64,175,0.4)] transition-all duration-300 hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 32%, #0d1b49 53%, #152d7c 81%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Book an appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{
                  background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 50%, #0d1b49 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                From idea to impact
              </h1>
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{
                  background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 50%, #0d1b49 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We build what matters.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#0e0e0e] font-medium leading-relaxed max-w-2xl">
              <span className="text-[#1e40af] font-semibold">{'<bbuilds/>'}</span> is a product-focused technology studio building SaaS, automation, and internal systems for teams that care about execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
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
          </div>

          {/* Right Content - Geosphere Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border-2 border-[#1e40af]/20 animate-pulse"></div>
              {/* Inner decorative circles */}
              <div className="absolute inset-8 rounded-full border border-[#1e40af]/30"></div>
              <div className="absolute inset-16 rounded-full border border-[#1e40af]/40"></div>
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="/logo-bgless.png"
                    alt="bbuilds logo"
                    width={120}
                    height={120}
                    className="mx-auto mb-4"
                  />
                </div>
              </div>
              {/* Floating dots */}
              <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-[#1e40af]"></div>
              <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-[#152d7c]"></div>
              <div className="absolute top-0 left-1/3 w-2 h-2 rounded-full bg-[#1e40af]/60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About bbuilds Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#f0f7fc]">
        <div className="max-w-7xl mx-auto">
          {/* Philosophy Statement */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl text-[#0e0e0e] max-w-4xl mx-auto leading-relaxed">
              We don&apos;t believe in overpromising or building for vanity. Our work is grounded in real-world constraints
            </p>
          </div>

          {/* Focus Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {['Timelines', 'Budgets', 'Performance', 'Long-term maintainability'].map((item, index) => (
              <div 
                key={item} 
                className={`p-8 rounded-2xl text-center ${
                  index < 2 
                    ? 'bg-white border border-[#1e40af]/20 shadow-lg' 
                    : 'bg-transparent'
                }`}
              >
                <span className="text-xl md:text-2xl font-medium text-[#0e0e0e]">{item}</span>
              </div>
            ))}
          </div>

          {/* Venn Diagram Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Venn Diagram */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Three overlapping circles */}
                <div className="absolute top-0 left-1/4 w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-[#1e40af]/30 bg-[#1e40af]/5"></div>
                <div className="absolute top-0 right-1/4 w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-[#1e40af]/30 bg-[#1e40af]/5"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-[#1e40af]/30 bg-[#1e40af]/5"></div>
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1e40af] font-medium text-lg">
                  {'<bbuilds/>'}
                </div>
                {/* Labels */}
                <span className="absolute top-4 left-0 text-sm font-medium text-[#0e0e0e]">Product Thinking</span>
                <span className="absolute top-4 right-0 text-sm font-medium text-[#0e0e0e]">Engineering</span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-[#0e0e0e]">Execution</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-[#0e0e0e] leading-relaxed">
                From SaaS platforms and automation systems to internal tools and open-source initiatives, <span className="text-[#1e40af] font-semibold">{'<bbuilds/>'}</span> exists to build things that actually ship and continue to work in the real world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 px-6 md:px-12 bg-[#f0f7fc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] mb-16">Meet the Founder</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Founder Image */}
            <div className="relative">
              <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#c5defc] to-[#e8f4fc] border border-[#1e40af]/20 flex items-center justify-center">
                <div className="w-[95%] h-[95%] rounded-2xl bg-white/50 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0e0e0e]">VVS Basanth Pedapati</h3>
              
              <p className="text-lg text-[#0e0e0e] leading-relaxed">
                With a strong background in product development and engineering, Basanth started <span className="text-[#1e40af] font-semibold">{'<bbuilds/>'}</span> to solve a recurring problem he saw across startups and businesses: great ideas failing due to poor execution, unclear ownership, or fragile systems.
              </p>
              
              <p className="text-lg text-[#0e0e0e] leading-relaxed">
                At <span className="text-[#1e40af] font-semibold">{'<bbuilds/>'}</span>, he leads product direction, architecture decisions, and execution standards ensuring every project is built with clarity, accountability, and scalability in mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f0f7fc] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0e0e] mb-4">
              <span className="text-[#1e40af]">{'<bbuilds/>'}</span> is powered by a small, focused team
            </h2>
          </div>
          
          <p className="text-xl text-[#0e0e0e] text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Deep problem-solving, execution, and iteration. We&apos;re not a large outsourced workforce — and we don&apos;t aim to be.
          </p>

          {/* Team Members Visual */}
          <div className="relative bg-white rounded-3xl border border-[#1e40af]/10 p-12 shadow-lg mb-12">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div 
                  key={i} 
                  className={`rounded-full bg-gradient-to-br from-[#c5defc] to-[#e8f4fc] border border-[#1e40af]/20 flex items-center justify-center
                    ${i === 4 ? 'w-32 h-32 z-10' : i === 3 || i === 5 ? 'w-24 h-24' : 'w-20 h-20'}
                  `}
                >
                  <span className={`${i === 4 ? 'text-4xl' : 'text-2xl'}`}>👤</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xl text-[#0e0e0e] text-center max-w-4xl mx-auto leading-relaxed">
            As we grow, we aim to stay intentional—adding people who align with our values, curiosity, and commitment to building meaningful software.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] mb-4">How we Work?</h2>
            <p className="text-xl text-[#0e0e0e] max-w-3xl mx-auto">
              We treat every product, client or internal as something we&apos;d be proud to maintain ourselves
            </p>
          </div>

          {/* Work Principles */}
          <div className="relative bg-gradient-to-br from-[#f0f7fc] to-white rounded-3xl border border-[#1e40af]/10 p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Clear ownership and communication',
                'Execution-first mindset',
                'Practical solutions over buzzwords',
                'Long-term thinking, even for MVPs'
              ].map((principle, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c5defc] border border-[#1e40af]/30 flex items-center justify-center shrink-0">
                    <span className="text-[#1e40af]">✓</span>
                  </div>
                  <p className="text-lg md:text-xl font-medium text-[#0e0e0e]">{principle}</p>
                </div>
              ))}
            </div>
            
            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1e40af] font-medium text-xl opacity-20">
              {'<bbuilds/>'}
            </div>
          </div>

          <p className="text-xl text-[#0e0e0e] text-center max-w-4xl mx-auto mt-12 leading-relaxed">
            We&apos;re building <span className="text-[#1e40af] font-semibold">{'<bbuilds/>'}</span> for the long run one product, one system, one team at a time.
          </p>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="services" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#f0f7fc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] mb-4">What We Build</h2>
            <p className="text-xl text-[#0e0e0e] max-w-3xl mx-auto">
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
                className="group p-8 rounded-3xl bg-white border border-[#1e40af]/10 shadow-lg hover:shadow-xl hover:border-[#1e40af]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#0e0e0e] mb-4">{service.title}</h3>
                <p className="text-[#4762b8] mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#c5defc]/50 text-[#1e40af] text-sm font-medium"
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
      <section id="case-studies" className="py-20 px-6 md:px-12 bg-[#f0f7fc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e0e0e] mb-4">Case Studies</h2>
            <p className="text-xl text-[#0e0e0e] max-w-3xl mx-auto">
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
                className="bg-white rounded-3xl border border-[#1e40af]/10 p-8 md:p-10 shadow-lg"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium
                      ${study.color === 'blue' ? 'bg-blue-100 text-blue-700' : 
                        study.color === 'purple' ? 'bg-purple-100 text-purple-700' : 
                        'bg-orange-100 text-orange-700'}
                    `}>
                      {study.category}
                    </span>
                    <a href={study.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-2xl font-bold text-[#0e0e0e] hover:text-[#1e40af] transition-colors flex items-center gap-2">
                        {study.title} <span className="text-lg">↗</span>
                      </h3>
                    </a>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-[#f0f7fc]">
                        <p className="text-sm text-[#4762b8]">Key Result</p>
                        <p className="font-bold text-[#0e0e0e]">{study.keyResult}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#f0f7fc]">
                        <p className="text-sm text-[#4762b8]">Impact</p>
                        <p className="font-bold text-[#0e0e0e]">{study.impact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[#1e40af] mb-2">⚠️ Problem</p>
                      <p className="text-[#4762b8]">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1e40af] mb-2">💡 Solution</p>
                      <p className="text-[#4762b8]">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1e40af] mb-2">✅ Results</p>
                      <ul className="space-y-1 text-[#4762b8]">
                        {study.results.map((result, i) => (
                          <li key={i}>▸ {result}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#c5defc]/50 text-[#1e40af] text-sm font-medium"
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
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0e0e0e] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#0e0e0e] mb-12 max-w-2xl mx-auto">
            Whether you&apos;re a startup building your MVP or an established business scaling your product, we&apos;re here to help you succeed.
          </p>
          <a
            href="https://cal.com/bbuilds/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#c5defc] border-2 border-[#1e40af] rounded-full text-xl font-medium shadow-[0px_8px_24px_0px_rgba(30,64,175,0.4)] transition-all duration-300 hover:shadow-[0px_12px_32px_0px_rgba(30,64,175,0.5)] hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #1e40af 0%, #152d7c 32%, #0d1b49 53%, #152d7c 81%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Get Your Free Consultation →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0f7fc] border-t border-[#1e40af]/10 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-1">
              <p className="font-medium text-[#0e0e0e] text-3xl mb-4">{'<bbuilds/>'}</p>
              <p className="text-[#4762b8] leading-relaxed">
                Expert developers building production-ready products for startups and businesses.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium text-[#152d7c] text-xl mb-4">Services</h4>
              <ul className="space-y-3 text-[#4762b8]">
                <li><a href="#services" className="hover:text-[#1e40af] transition-colors">Web Applications</a></li>
                <li><a href="#services" className="hover:text-[#1e40af] transition-colors">SaaS Platforms</a></li>
                <li><a href="#services" className="hover:text-[#1e40af] transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-[#1e40af] transition-colors">MVP Development</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium text-[#152d7c] text-xl mb-4">Company</h4>
              <ul className="space-y-3 text-[#4762b8]">
                <li><a href="#about" className="hover:text-[#1e40af] transition-colors">About</a></li>
                <li><a href="#case-studies" className="hover:text-[#1e40af] transition-colors">Case Studies</a></li>
                <li><a href="#case-studies" className="hover:text-[#1e40af] transition-colors">Portfolio</a></li>
                <li><a href="mailto:contact@bbuilds.org" className="hover:text-[#1e40af] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Email Us */}
            <div>
              <h4 className="font-medium text-[#152d7c] text-xl mb-4">Email Us:</h4>
              <ul className="space-y-3 text-[#4762b8]">
                <li><a href="mailto:sales@bbuilds.org" className="hover:text-[#1e40af] transition-colors">sales@bbuilds.org</a></li>
                <li><a href="mailto:contact@bbuilds.org" className="hover:text-[#1e40af] transition-colors">contact@bbuilds.org</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1e40af]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#152d7c]/50">
              © 2026 bbuilds. All rights reserved.
            </p>
            <div className="flex gap-8 text-[#152d7c]/50">
              <a href="#" className="hover:text-[#1e40af] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#1e40af] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

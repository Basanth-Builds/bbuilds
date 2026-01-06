'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-white to-white dark:from-black dark:to-black relative overflow-hidden scroll-smooth">
      {/* Premium gradient overlay with animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-[#27D6C7]/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(39,214,199,0.1),transparent_50%)] pointer-events-none animate-pulse"></div>
      
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 dark:bg-black/70 backdrop-blur-2xl shadow-2xl border-b border-white/30 dark:border-[#27D6C7]/30' 
          : 'bg-gradient-to-b from-white/10 to-transparent dark:from-black/10 backdrop-blur-lg'
      }`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#27D6C7] to-blue-400 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Image
                src="/logo-bgless.png"
                alt="bbuilds logo"
                width={48}
                height={48}
                className="relative transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <span className={`font-bold transition-all duration-300 ${
              scrolled 
                ? 'text-black dark:text-[#27D6C7] text-lg' 
                : 'text-white text-xl'
            }`}>
              bbuilds
            </span>
          </a>

          {/* Nav Links */}
          <div className={`hidden md:flex gap-8 transition-all duration-300 ${
            scrolled 
              ? 'text-black dark:text-white' 
              : 'text-white'
          }`}>
            <a href="#services" className="hover:text-gray-600 dark:hover:text-[#27D6C7] transition-colors font-medium">Services</a>
            <a href="#our-process" className="hover:text-gray-600 dark:hover:text-[#27D6C7] transition-colors font-medium">About</a>
            <a href="#case-studies" className="hover:text-gray-600 dark:hover:text-[#27D6C7] transition-colors font-medium">Portfolio</a>
          </div>

          {/* CTA Buttons in Navbar */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                scrolled
                  ? 'text-gray-600 dark:text-white/80 hover:text-black dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Client Login
            </Link>
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                scrolled
                  ? 'bg-black text-white dark:bg-[#27D6C7] dark:text-black hover:shadow-lg hover:scale-105'
                  : 'bg-white/20 text-white border border-white/40 backdrop-blur-sm hover:bg-white/30 hover:scale-105'
              }`}
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </nav>
      
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative z-10 pt-20">
        {/* Hero Section */}
        <div className="w-full max-w-4xl text-center space-y-6 md:space-y-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#27D6C7] via-blue-400 to-[#27D6C7] rounded-3xl blur-3xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Logo container with glass effect */}
              <div className="relative bg-white/10 dark:bg-[#27D6C7]/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 dark:border-[#27D6C7]/30 group-hover:border-white/40 dark:group-hover:border-[#27D6C7]/60 transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/logo-bgless.png"
                  alt="bbuilds logo"
                  width={120}
                  height={120}
                  className="relative drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Technology Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-5 py-2.5 rounded-full bg-white/15 dark:bg-[#27D6C7]/15 backdrop-blur-md border border-white/30 dark:border-[#27D6C7]/30 text-white text-sm font-bold hover:bg-white/25 dark:hover:bg-[#27D6C7]/25 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 cursor-pointer">⚡ Next.js</span>
            <span className="px-5 py-2.5 rounded-full bg-white/15 dark:bg-[#27D6C7]/15 backdrop-blur-md border border-white/30 dark:border-[#27D6C7]/30 text-white text-sm font-bold hover:bg-white/25 dark:hover:bg-[#27D6C7]/25 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 cursor-pointer">🤖 AI/ML</span>
            <span className="px-5 py-2.5 rounded-full bg-white/15 dark:bg-[#27D6C7]/15 backdrop-blur-md border border-white/30 dark:border-[#27D6C7]/30 text-white text-sm font-bold hover:bg-white/25 dark:hover:bg-[#27D6C7]/25 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 cursor-pointer">📱 Mobile Apps</span>
            <span className="px-5 py-2.5 rounded-full bg-white/15 dark:bg-[#27D6C7]/15 backdrop-blur-md border border-white/30 dark:border-[#27D6C7]/30 text-white text-sm font-bold hover:bg-white/25 dark:hover:bg-[#27D6C7]/25 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 cursor-pointer">☁️ Cloud</span>
            <span className="px-5 py-2.5 rounded-full bg-white/15 dark:bg-[#27D6C7]/15 backdrop-blur-md border border-white/30 dark:border-[#27D6C7]/30 text-white text-sm font-bold hover:bg-white/25 dark:hover:bg-[#27D6C7]/25 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 cursor-pointer">🎨 UI/UX</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight animate-fade-in" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #27D6C7 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 20px rgba(39, 214, 199, 0.3)',
            backgroundSize: '200% auto',
            animation: 'gradient 3s ease infinite',
          }}>
            Ship faster with<br />expert developers
          </h1>

          {/* Features */}
          <div className="space-y-3 mt-8">
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl">✨</span>
              <span className="text-base md:text-lg font-medium text-white">We turn your ideas into production-ready products</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl">🚀</span>
              <span className="text-base md:text-lg font-medium text-white">From MVP to scale — we handle design, development & deployment</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl">💡</span>
              <span className="text-base md:text-lg font-medium text-white">AI-powered solutions with enterprise-grade engineering</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block px-8 py-4 bg-gradient-to-r from-black to-gray-800 dark:from-[#27D6C7] dark:to-[#20b8aa] text-white dark:text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">Schedule a Call ✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#27D6C7] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#case-studies"
              className="group inline-block px-8 py-4 bg-white/15 dark:bg-[#27D6C7]/15 text-white border-2 border-white/40 dark:border-[#27D6C7]/40 hover:bg-white/25 dark:hover:bg-[#27D6C7]/25 backdrop-blur-md font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-white/60 dark:hover:border-[#27D6C7]/60"
            >
              View Case Studies 🚀
            </a>
          </div>

          {/* Secondary Text */}
          <p className="text-sm md:text-base text-white/80 pt-4 font-light tracking-wide">
            Let's discuss how we can help your agency succeed.
          </p>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gradient-to-br from-white to-white dark:from-black dark:to-black relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">What We Build</h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              End-to-end development services that transform your ideas into production-ready products
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Web Applications */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Web Applications</h3>
              <p className="text-gray-600 dark:text-white/70 mb-4">Next.js, React, and modern web apps with responsive design, authentication, and real-time features.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Next.js</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">React</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">TypeScript</span>
              </div>
            </div>

            {/* SaaS Platforms */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">SaaS Platforms</h3>
              <p className="text-gray-600 dark:text-white/70 mb-4">Complete SaaS solutions with subscriptions, payments, analytics, and multi-tenant architecture.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">SaaS</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Stripe</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Analytics</span>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Mobile Apps</h3>
              <p className="text-gray-600 dark:text-white/70 mb-4">Native iOS and Android applications with seamless UX and cross-platform compatibility.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">iOS</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Android</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">React Native</span>
              </div>
            </div>

            {/* MVP Development */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">MVP Development</h3>
              <p className="text-gray-600 dark:text-white/70 mb-4">Rapid MVP development to validate your idea and get to market fast with core features.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">MVP</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Agile</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Fast Launch</span>
              </div>
            </div>

            {/* Admin & CRM */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Admin & CRM</h3>
              <p className="text-gray-600 dark:text-white/70 mb-4">Custom admin panels, CRM systems, and internal tools to streamline your operations.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Admin</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">CRM</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Dashboard</span>
              </div>
            </div>

            {/* Internal Tools */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Internal Tools</h3>
              <p className="text-gray-600 dark:text-white/70 mb-4">Automation tools, workflow systems, and custom integrations to boost productivity.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Automation</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">APIs</span>
                <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="min-h-screen bg-gradient-to-br from-white to-white dark:from-black dark:to-black relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Case Studies</h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Real results from real projects — see how we've helped clients achieve their goals
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-8">
            {/* Education Platform - GITAM Aero Astro Club */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-medium">Education Platform</span>
                  <a href="https://gaac.site/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2 hover:text-[#27D6C7] dark:hover:text-[#27D6C7] transition-colors cursor-pointer">
                      GITAM Aero Astro Club <span className="text-lg">↗</span>
                    </h3>
                  </a>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Key Result</p>
                      <p className="font-bold text-black dark:text-white">70% less admin work</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Impact</p>
                      <p className="font-bold text-black dark:text-white">500+ members</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">⚠️ Problem</p>
                    <p className="text-gray-600 dark:text-white/70">Aerospace club needed a centralized platform to manage 500+ members, events, and educational content efficiently.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">💡 Solution</p>
                    <p className="text-gray-600 dark:text-white/70">Built a full-stack web platform with Next.js and Supabase featuring real-time event management, member portal, and content delivery system.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">✅ Results</p>
                    <ul className="space-y-1 text-gray-600 dark:text-white/70 text-sm">
                      <li>▸ 500+ active members onboarded</li>
                      <li>▸ Reduced admin workload by 70%</li>
                      <li>▸ Increased event participation by 85%</li>
                      <li>▸ Real-time updates improved engagement by 60%</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Next.js</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Supabase</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Real-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* EdTech SaaS - Pro Parent */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-medium">EdTech SaaS</span>
                  <a href="https://test-dev.d1im2vjcb2eavr.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2 hover:text-[#27D6C7] dark:hover:text-[#27D6C7] transition-colors cursor-pointer">
                      Pro Parent <span className="text-lg">↗</span>
                    </h3>
                  </a>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Key Result</p>
                      <p className="font-bold text-black dark:text-white">40% conversion rate</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Impact</p>
                      <p className="font-bold text-black dark:text-white">10K+ users</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">⚠️ Problem</p>
                    <p className="text-gray-600 dark:text-white/70">Parents struggled to find personalized, AI-powered guidance for child development and parenting challenges.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">💡 Solution</p>
                    <p className="text-gray-600 dark:text-white/70">Developed an AI-powered SaaS platform with personalized recommendations, community features, and expert-backed content using Next.js and ML models.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">✅ Results</p>
                    <ul className="space-y-1 text-gray-600 dark:text-white/70 text-sm">
                      <li>▸ 10K+ active users in 6 months</li>
                      <li>▸ Increased user engagement by 120%</li>
                      <li>▸ 40% conversion rate from free to paid</li>
                      <li>▸ 4.8/5 average user rating</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">AI/ML</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Next.js</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Auth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports & Recreation - Goplaya */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-700 dark:text-orange-400 text-xs font-medium">Sports & Recreation</span>
                  <a href="https://www.goplaya.in/" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2 hover:text-[#27D6C7] dark:hover:text-[#27D6C7] transition-colors cursor-pointer">
                      Goplaya <span className="text-lg">↗</span>
                    </h3>
                  </a>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Key Result</p>
                      <p className="font-bold text-black dark:text-white">45% revenue increase</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Impact</p>
                      <p className="font-bold text-black dark:text-white">50+ venues</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">⚠️ Problem</p>
                    <p className="text-gray-600 dark:text-white/70">Sports venue owners lacked an efficient booking system, leading to double bookings and lost revenue opportunities.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">💡 Solution</p>
                    <p className="text-gray-600 dark:text-white/70">Created a comprehensive booking platform with real-time availability, payment integration, and venue management dashboard.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">✅ Results</p>
                    <ul className="space-y-1 text-gray-600 dark:text-white/70 text-sm">
                      <li>▸ 50+ venues onboarded</li>
                      <li>▸ Reduced booking conflicts by 95%</li>
                      <li>▸ Increased venue revenue by 45%</li>
                      <li>▸ Processed 10K+ bookings in first year</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Full-stack</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Payments</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Maps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Tools - StellaX IDE */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-medium">Developer Tools</span>
                  <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2">
                    StellaX IDE <span className="text-lg">↗</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Key Result</p>
                      <p className="font-bold text-black dark:text-white">80% faster setup</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Impact</p>
                      <p className="font-bold text-black dark:text-white">Real-time collab</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">⚠️ Problem</p>
                    <p className="text-gray-600 dark:text-white/70">Developers needed a cloud-based IDE with real-time collaboration and AI assistance for remote team productivity.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">💡 Solution</p>
                    <p className="text-gray-600 dark:text-white/70">Built a cloud-based integrated development environment with collaborative coding features, AI code completion, and real-time sync.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">✅ Results</p>
                    <ul className="space-y-1 text-gray-600 dark:text-white/70 text-sm">
                      <li>▸ Reduced development setup time by 80%</li>
                      <li>▸ Improved team collaboration by 65%</li>
                      <li>▸ AI suggestions increased coding speed by 50%</li>
                      <li>▸ Zero local environment issues</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">WebIDE</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Collaboration</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Platform - func(kode) */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-700 dark:text-pink-400 text-xs font-medium">Learning Platform</span>
                  <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2">
                    func(kode) <span className="text-lg">↗</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Key Result</p>
                      <p className="font-bold text-black dark:text-white">75% completion rate</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Impact</p>
                      <p className="font-bold text-black dark:text-white">1K+ learners</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">⚠️ Problem</p>
                    <p className="text-gray-600 dark:text-white/70">Coding learners needed an interactive platform with hands-on exercises and real-time feedback to improve skills effectively.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">💡 Solution</p>
                    <p className="text-gray-600 dark:text-white/70">Developed an interactive coding education platform with live code execution, progress tracking, and personalized learning paths.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">✅ Results</p>
                    <ul className="space-y-1 text-gray-600 dark:text-white/70 text-sm">
                      <li>▸ 1K+ active learners</li>
                      <li>▸ Increased course completion by 75%</li>
                      <li>▸ Reduced learning time by 40%</li>
                      <li>▸ 90% student satisfaction rate</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">EdTech</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Interactive</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Development - Enterprise E-Commerce */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-medium">Custom Development</span>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Enterprise E-Commerce</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Key Result</p>
                      <p className="font-bold text-black dark:text-white">40% more conversions</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                      <p className="text-sm text-gray-600 dark:text-white/60">Impact</p>
                      <p className="font-bold text-black dark:text-white">60% faster loads</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">⚠️ Problem</p>
                    <p className="text-gray-600 dark:text-white/70">Enterprise client needed a scalable e-commerce platform to handle high traffic and complex product catalogs.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">💡 Solution</p>
                    <p className="text-gray-600 dark:text-white/70">Built a custom e-commerce solution with advanced search, inventory management, and multi-vendor support.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">✅ Results</p>
                    <ul className="space-y-1 text-gray-600 dark:text-white/70 text-sm">
                      <li>▸ Reduced page load time by 60%</li>
                      <li>▸ Increased conversions by 40%</li>
                      <li>▸ Handled 100K+ daily visitors</li>
                      <li>▸ Improved checkout speed by 55%</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Custom</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Scalable</span>
                    <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-[#27D6C7]/20 text-black dark:text-[#27D6C7] text-xs font-medium">Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Similar Results Section */}
      <section className="min-h-screen bg-gradient-to-br from-white to-white dark:from-black dark:to-black relative py-20 px-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Final CTA Section */}
        <section className="py-20 px-4 flex items-center justify-center bg-gradient-to-br from-white to-white dark:from-black dark:to-black">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              Ready to start your project with a proven process?
            </h2>
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-900 dark:bg-[#27D6C7] dark:text-black dark:hover:bg-[#20b8aa] font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Book a Strategy Call
            </a>
          </div>
        </section>
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
            Ready for Similar Results?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve measurable success with your project
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://cal.com/bbuilds/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-900 dark:bg-[#27D6C7] dark:text-black dark:hover:bg-[#20b8aa] font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Start Your Success Story
            </a>
            <a
              href="#case-studies"
              className="inline-block px-8 py-4 bg-white/15 dark:bg-[#27D6C7]/15 text-black dark:text-white border border-white/40 dark:border-[#27D6C7]/40 hover:bg-white/25 dark:hover:bg-[#27D6C7]/25 backdrop-blur-md font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              View Detailed Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="our-process" className="min-h-screen bg-gradient-to-br from-white to-white dark:from-black dark:to-black relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              A proven 3-step approach to deliver high-quality products on time
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12">
            {/* Step 1: Discovery */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step Number and Icon */}
                <div className="flex flex-col items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-bold text-black dark:text-[#27D6C7]">01</span>
                    <span className="text-4xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Discovery</h3>
                  <p className="text-gray-600 dark:text-white/70 font-medium">Understand & Plan</p>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <p className="text-gray-600 dark:text-white/70 mb-6">
                    We dive deep into your vision, goals, and requirements. Together, we define the roadmap, scope your MVP, and create a strategic plan that aligns with your business objectives.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Requirements analysis</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Technical roadmap</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>MVP scoping</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Timeline planning</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-2xl text-gray-400 dark:text-white/30 mt-6 text-right">→</div>
            </div>

            {/* Step 2: Build */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step Number and Icon */}
                <div className="flex flex-col items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-bold text-black dark:text-[#27D6C7]">02</span>
                    <span className="text-4xl">⚙️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Build</h3>
                  <p className="text-gray-600 dark:text-white/70 font-medium">Design & Develop</p>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <p className="text-gray-600 dark:text-white/70 mb-6">
                    Our expert team designs beautiful interfaces and builds scalable systems. We work in sprints, keeping you updated with regular demos and incorporating your feedback throughout.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>UI/UX design</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Agile development</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Quality assurance</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Regular updates</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-2xl text-gray-400 dark:text-white/30 mt-6 text-right">→</div>
            </div>

            {/* Step 3: Ship */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step Number and Icon */}
                <div className="flex flex-col items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-bold text-black dark:text-[#27D6C7]">03</span>
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Ship</h3>
                  <p className="text-gray-600 dark:text-white/70 font-medium">Launch & Scale</p>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <p className="text-gray-600 dark:text-white/70 mb-6">
                    We deploy your product with CI/CD pipelines, monitoring, and analytics. Post-launch, we provide ongoing support and iterate based on real user feedback to ensure success.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Production deployment</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Performance monitoring</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>User analytics</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600 dark:text-white/70">
                      <span className="text-lg">✓</span>
                      <span>Continuous support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="min-h-screen bg-gradient-to-br from-white to-white dark:from-black dark:to-black relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Client Testimonials</h2>
            <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Testimonial 1 */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="flex gap-1 mb-4 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 dark:text-white/70 mb-6 italic">
                "Basanth and his team delivered our SaaS platform in record time. The quality of code and attention to detail was exceptional. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">👨‍💼</span>
                <div>
                  <p className="font-bold text-black dark:text-white">Rajesh Kumar</p>
                  <p className="text-sm text-gray-600 dark:text-white/60">Founder, TechStart India</p>
                  <p className="text-xs text-gray-500 dark:text-white/50">TechStart</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="flex gap-1 mb-4 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 dark:text-white/70 mb-6 italic">
                "Working with Basanth.builds was a game-changer. They understood our vision and built a scalable platform that our users love. True professionals!"
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">👩‍💻</span>
                <div>
                  <p className="font-bold text-black dark:text-white">Sarah Chen</p>
                  <p className="text-sm text-gray-600 dark:text-white/60">CTO, EduLearn</p>
                  <p className="text-xs text-gray-500 dark:text-white/50">EduLearn</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="flex gap-1 mb-4 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 dark:text-white/70 mb-6 italic">
                "From MVP to full launch, the team was with us every step. Their expertise in mobile development and cloud infrastructure is top-notch."
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">👨‍💼</span>
                <div>
                  <p className="font-bold text-black dark:text-white">Michael Rodriguez</p>
                  <p className="text-sm text-gray-600 dark:text-white/60">Product Manager, SportHub</p>
                  <p className="text-xs text-gray-500 dark:text-white/50">SportHub</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="flex gap-1 mb-4 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 dark:text-white/70 mb-6 italic">
                "The AI integration they built for our platform exceeded expectations. Fast delivery, clean code, and excellent communication throughout."
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">👩‍⚕️</span>
                <div>
                  <p className="font-bold text-black dark:text-white">Priya Sharma</p>
                  <p className="text-sm text-gray-600 dark:text-white/60">CEO, HealthTech Solutions</p>
                  <p className="text-xs text-gray-500 dark:text-white/50">HealthTech</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl">
              <div className="flex gap-1 mb-4 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-gray-600 dark:text-white/70 mb-6 italic">
                "Basanth's team transformed our idea into a production-ready app. Their technical expertise and problem-solving skills are outstanding."
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">👨‍💼</span>
                <div>
                  <p className="font-bold text-black dark:text-white">David Thompson</p>
                  <p className="text-sm text-gray-600 dark:text-white/60">Founder, FinanceApp</p>
                  <p className="text-xs text-gray-500 dark:text-white/50">FinanceApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 text-center">
              <p className="text-4xl md:text-5xl font-bold text-black dark:text-[#27D6C7] mb-2">15+</p>
              <p className="text-gray-600 dark:text-white/70">Projects Delivered</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 text-center">
              <p className="text-4xl md:text-5xl font-bold text-black dark:text-[#27D6C7] mb-2">100%</p>
              <p className="text-gray-600 dark:text-white/70">Client Satisfaction</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 text-center">
              <p className="text-4xl md:text-5xl font-bold text-black dark:text-[#27D6C7] mb-2">5★</p>
              <p className="text-gray-600 dark:text-white/70">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Your Project Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-white dark:from-black dark:to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Whether you're a startup building your MVP or an established business scaling your product, we're here to help you succeed.
          </p>
          <a
            href="https://cal.com/bbuilds/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-900 dark:bg-[#27D6C7] dark:text-black dark:hover:bg-[#20b8aa] font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Get Your Free Consultation →
          </a>
        </div>
      </section>

      {/* Email Sales Team Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-white dark:from-black dark:to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">Email Sales Team</h3>
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-white/70">
                📧 <span className="font-semibold">Sales:</span> <a href="mailto:sales@bbuilds.org" className="hover:text-[#27D6C7] transition-colors">sales@bbuilds.org</a>
              </p>
              <p className="text-lg text-gray-600 dark:text-white/70">
                💬 <span className="font-semibold">General:</span> <a href="mailto:contact@bbuilds.org" className="hover:text-[#27D6C7] transition-colors">contact@bbuilds.org</a>
              </p>
            </div>
          </div>

          {/* Contact Options Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Custom Pricing */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl text-center">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Custom Pricing</h4>
              <p className="text-gray-600 dark:text-white/70 mb-6">
                Get a tailored quote for your project. A dedicated sales rep will contact you within 24 hours.
              </p>
              <a
                href="mailto:sales@bbuilds.org"
                className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-900 dark:bg-[#27D6C7] dark:text-black dark:hover:bg-[#20b8aa] font-semibold rounded-lg transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>

            {/* Strategy Call */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl text-center">
              <div className="text-5xl mb-4">📞</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Strategy Call</h4>
              <p className="text-gray-600 dark:text-white/70 mb-6">
                Book a free 30-minute call to discuss your project goals and technical requirements.
              </p>
              <a
                href="https://cal.com/bbuilds/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-900 dark:bg-[#27D6C7] dark:text-black dark:hover:bg-[#20b8aa] font-semibold rounded-lg transition-all duration-200"
              >
                Book Now
              </a>
            </div>

            {/* View Case Studies */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-[#27D6C7]/10 dark:to-black/30 backdrop-blur-xl border border-white/30 dark:border-[#27D6C7]/20 hover:border-white/50 dark:hover:border-[#27D6C7]/40 transition-all duration-300 hover:shadow-2xl text-center">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">View Case Studies</h4>
              <p className="text-gray-600 dark:text-white/70 mb-6">
                Explore our portfolio of successful projects and see how we've helped other clients.
              </p>
              <a
                href="#case-studies"
                className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-900 dark:bg-[#27D6C7] dark:text-black dark:hover:bg-[#20b8aa] font-semibold rounded-lg transition-all duration-200"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black dark:bg-black border-t border-white/10 dark:border-[#27D6C7]/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-bgless.png"
                  alt="bbuilds logo"
                  width={40}
                  height={40}
                />
                <span className="font-bold text-[#27D6C7] text-xl">bbuilds</span>
              </div>
              <p className="text-white/70 text-sm">
                Expert developers building production-ready products for startups and businesses.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-[#27D6C7] transition-colors">Web Applications</a></li>
                <li><a href="#services" className="hover:text-[#27D6C7] transition-colors">SaaS Platforms</a></li>
                <li><a href="#services" className="hover:text-[#27D6C7] transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-[#27D6C7] transition-colors">MVP Development</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-[#27D6C7] transition-colors">About</a></li>
                <li><a href="#case-studies" className="hover:text-[#27D6C7] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[#27D6C7] transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-[#27D6C7] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="mailto:sales@bbuilds.org" className="hover:text-[#27D6C7] transition-colors">
                    sales@bbuilds.org
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@bbuilds.org" className="hover:text-[#27D6C7] transition-colors">
                    contact@bbuilds.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} bbuilds. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-[#27D6C7] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#27D6C7] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

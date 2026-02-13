'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function VentureStudio() {
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

            <Navbar />

            {/* Hero Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="pt-32 pb-20 px-6 md:px-12 relative z-10"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#1e40af]/10 dark:bg-white/10 border border-[#1e40af]/20 dark:border-white/20"
                    >
                        <span className="text-sm font-semibold text-[#1e40af] dark:text-white tracking-wide uppercase">
                            The Founder Execution Engine
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0e0e0e] dark:text-white mb-8 leading-tight tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#60a5fa] dark:from-white dark:to-[#94a3b8]">Venture Studio</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#4762b8] dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                        We partner with commercially driven, execution-oriented founders at the idea-to-pre-seed stage who are ready to build, launch, and pursue funding — not just explore ideas.
                    </p>

                    <div className="mb-16">
                        <motion.a
                            href="https://forms.gle/FvYGCWwrsthSYjei9"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#1e40af] rounded-full text-lg font-bold text-white shadow-xl shadow-blue-900/20 overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300"></span>
                            <span className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></span>
                            <span className="relative flex items-center gap-3">
                                Apply for Partnership <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.a>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block p-8 rounded-3xl bg-white/80 dark:bg-[#1e293b]/50 border border-[#1e40af]/10 dark:border-white/10 shadow-xl backdrop-blur-md"
                    >
                        <p className="text-2xl md:text-3xl font-medium text-[#1e40af] dark:text-white italic">
                            &quot;We don&apos;t want dreamers. We want operators.&quot;
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Ideal Founder Profile */}
            <section className="py-24 px-6 md:px-12 bg-white/50 dark:bg-[#1e293b]/20 backdrop-blur-sm transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-6">
                            Ideal Founder Profile (ICP)
                        </h2>
                        <p className="text-xl text-[#4762b8] dark:text-gray-300 max-w-3xl mx-auto">
                            We look for specific traits in the founders we partner with.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                title: "Execution Bias",
                                icon: "⚡",
                                points: ["Ready to start immediately", "Comfortable making decisions with incomplete data", "Willing to iterate publicly"],
                                gradient: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20"
                            },
                            {
                                title: "Commercial Mindset",
                                icon: "📊",
                                points: ["Focused on revenue, GTM, and traction", "Understands customers and market dynamics", "Not purely product-obsessed without business thinking"],
                                gradient: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20"
                            },
                            {
                                title: "Fundraising Intent",
                                icon: "💰",
                                points: ["Plans to pursue seed funding", "Will pitch investors early", "Wants an investable product, not a side project"],
                                gradient: "from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20"
                            },
                            {
                                title: "Needs Technical Partner",
                                icon: "🤝",
                                points: ["Lacks strong in-house engineering leadership", "Wants a reliable build partner with ownership mentality", "Looking for Co-Founder level partnership"],
                                gradient: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20"
                            }
                        ].map((trait, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`rounded-3xl p-8 border border-white/50 dark:border-white/5 bg-gradient-to-br ${trait.gradient} backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                <div className="text-4xl mb-6 bg-white dark:bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                    {trait.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#0e0e0e] dark:text-white mb-6">{trait.title}</h3>
                                <ul className="space-y-4">
                                    {trait.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[#4762b8] dark:text-gray-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-[#1e40af] dark:text-blue-400 shrink-0 mt-0.5" />
                                            <span className="text-sm md:text-base">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Who BBuilds Is NOT For */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f0f7fc] to-white dark:from-[#0a0f1e] dark:to-[#1e293b] transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-red-50/50 dark:bg-red-900/10 rounded-[2.5rem] p-8 md:p-16 border border-red-200/50 dark:border-red-500/20 backdrop-blur-sm"
                    >
                        <h2 className="text-3xl font-bold text-[#0e0e0e] dark:text-white mb-12 text-center">
                            Who <span className="text-red-500">bbuilds</span> Is <span className="underline decoration-red-500 decoration-4 underline-offset-4">NOT</span> For
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                "Idea-stage explorers without commitment",
                                "Founders unwilling to engage in execution",
                                "People seeking short-scale development services",
                                "Projects without business model clarity"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(254, 242, 242, 1)" }}
                                    className="flex items-center gap-5 bg-white dark:bg-black/20 p-6 rounded-2xl border border-red-100 dark:border-red-500/10 shadow-sm transition-colors"
                                >
                                    <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                                    <p className="text-lg font-medium text-[#0e0e0e] dark:text-white/90">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-[#4762b8] dark:text-white/60 italic font-medium">
                            Selective positioning increases demand quality. We are serious about building businesses.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Model */}
            <section className="py-24 px-6 md:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-6">
                            Partnership Model
                        </h2>
                        <p className="text-xl text-[#4762b8] dark:text-gray-300 max-w-3xl mx-auto">
                            Our Venture Selection Process acts as a pipeline to identify and support the best founders.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[180px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1e40af]/20 dark:via-white/20 to-transparent z-0"></div>

                        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
                            {[
                                {
                                    phase: "Phase 1",
                                    title: "Screening & Validation",
                                    duration: "4 Weeks",
                                    desc: "Identify your journey and validate the idea for worthy long-term partnership.",
                                    items: ["Founder interviews", "Idea & market validation", "Execution observation", "Pitch refinement"],
                                    insight: "You as a founder will be screened as much as the idea."
                                },
                                {
                                    phase: "Phase 2",
                                    title: "Partnership Formation",
                                    duration: "Commitment",
                                    desc: "Formalizing the relationship and scope.",
                                    items: ["Equity agreement signed", "Clear product scope defined", "Roles established", "Mutual commitment"],
                                    insight: "There will be strategies and numbers talking here."
                                },
                                {
                                    phase: "Phase 3",
                                    title: "Build & Launch",
                                    duration: "Execution",
                                    desc: "Rapid development and iteration cycles.",
                                    items: ["Dedicated engineering team", "Product architecture", "MVP → Production scale", "Rapid iteration"],
                                    insight: "Faster and more reliable than assembling a team from scratch."
                                }
                            ].map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="group bg-white dark:bg-[#1e293b]/50 rounded-[2rem] p-8 border border-[#1e40af]/10 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-[#1e40af]/30 dark:hover:border-white/30 transition-all duration-300 flex flex-col h-full relative"
                                >
                                    <div className="mb-8 relative">
                                        <span className="absolute -top-12 left-0 text-9xl font-bold text-[#f1f5f9] dark:text-white/5 -z-10 select-none">
                                            0{index + 1}
                                        </span>
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e40af]/5 dark:bg-white/10 text-[#1e40af] dark:text-blue-300 text-sm font-bold tracking-wide uppercase mb-4">
                                            {phase.duration}
                                        </span>
                                        <h3 className="text-2xl font-bold text-[#0e0e0e] dark:text-white group-hover:text-[#1e40af] dark:group-hover:text-blue-400 transition-colors">
                                            {phase.title}
                                        </h3>
                                    </div>

                                    <p className="text-[#4762b8] dark:text-gray-300 mb-8 leading-relaxed font-medium">
                                        {phase.desc}
                                    </p>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {phase.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1e40af] dark:bg-white shrink-0 mt-2"></div>
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="p-5 bg-[#f0f7fc] dark:bg-black/20 rounded-2xl border-l-4 border-[#1e40af]">
                                        <p className="text-sm italic text-[#1e40af] dark:text-blue-300 font-medium leading-relaxed">
                                            &quot;{phase.insight}&quot;
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitive Advantage */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-24 px-6 md:px-12 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[#1e40af] dark:bg-[#0f172a] transform -skew-y-2 origin-top-left scale-110"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-white">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Why Founders Choose <br />
                                <span className="text-blue-200">bbuilds</span>
                            </h2>
                            <div className="text-xl md:text-2xl bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <p className="font-medium italic leading-relaxed text-blue-50">
                                    &quot;Faster and more reliable than hiring, firing, and maintaining payroll.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                { title: "Speed", desc: "No hiring delays. Immediate execution." },
                                { title: "Reliability", desc: "Proven engineering team vs unknown freelancers." },
                                { title: "Cost Efficiency", desc: "No long-term payroll risk." },
                                { title: "Alignment", desc: "Equity partnership = shared upside." },
                                { title: "Technical Leadership", desc: "Not just builders — decision-makers." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                    className={`p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300 ${index === 4 ? 'sm:col-span-2' : ''}`}
                                >
                                    <h3 className="text-xl font-bold mb-3 text-blue-200">{item.title}</h3>
                                    <p className="text-blue-50/80 leading-relaxed font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Scale Vision */}
            <section className="py-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-white to-[#f0f7fc] dark:from-[#1e293b] dark:to-[#0f172a] rounded-[3rem] p-8 md:p-20 border border-[#1e40af]/10 dark:border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#1e40af] via-blue-500 to-cyan-400"></div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#0e0e0e] dark:text-white mb-12">
                            The Founder Execution Engine
                        </h2>

                        <div className="space-y-8 text-xl md:text-2xl text-[#4762b8] dark:text-gray-300 leading-relaxed font-medium">
                            <p>
                                <span className="text-[#0e0e0e] dark:text-white font-bold">bbuilds</span> partners with commercially driven, execution-focused founders at the idea-to-pre-seed stage.
                            </p>
                            <p>
                                Through a rigorous screening process, we select founders ready to build real businesses — not just explore ideas.
                            </p>
                            <p>
                                By combining execution speed, deep technical expertise, and equity alignment, <span className="text-[#1e40af] dark:text-blue-400 font-bold">bbuilds</span> acts as a technical co-founder platform designed to launch startups efficiently and repeatedly.
                            </p>
                        </div>

                        <div className="mt-16 pt-16 border-t border-[#1e40af]/10 dark:border-white/10">
                            <h3 className="text-lg font-bold text-[#1e40af] dark:text-blue-400 uppercase tracking-widest mb-6">Our Vision</h3>
                            <p className="text-2xl md:text-3xl text-[#0e0e0e] dark:text-white font-serif italic max-w-4xl mx-auto">
                                &quot;Building a repeatable venture creation system that launches and scales multiple startups through deep technical partnership with execution-driven founders.&quot;
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#0f172a] relative">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-[#0e0e0e] dark:text-white mb-8 tracking-tight">
                        Think you&apos;re a fit?
                    </h2>
                    <p className="text-xl md:text-2xl text-[#4762b8] dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        If you&apos;re an operator ready to build, let&apos;s talk.
                    </p>

                    <motion.a
                        href="https://forms.gle/FvYGCWwrsthSYjei9"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#1e40af] rounded-full text-xl font-bold text-white shadow-xl shadow-blue-900/20 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300"></span>
                        <span className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></span>
                        <span className="relative flex items-center gap-3">
                            Apply for Partnership <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#f0f7fc] dark:bg-[#1e293b] border-t border-[#1e40af]/10 dark:border-white/10 py-16 px-6 md:px-12 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-1">
                            <p className="font-black text-[#0e0e0e] dark:text-white text-3xl mb-4 tracking-tight">{'<bbuilds/>'}</p>
                            <p className="text-[#4762b8] dark:text-gray-400 leading-relaxed font-medium">
                                The Founder Execution Engine.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-[#1e40af]/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#152d7c]/50 dark:text-gray-500 text-sm">
                            © 2026 bbuilds. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

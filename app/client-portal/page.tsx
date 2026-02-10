'use client';

import { useUser, SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ShieldCheck } from "lucide-react";

export default function ClientPortal() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      const userEmail = user.primaryEmailAddress?.emailAddress;
      const adminEmail = 'basanth@bbuilds.org';

      if (userEmail === adminEmail) {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isLoaded, user, router]);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col md:flex-row overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Left side: Content & Branding */}
      <div className="relative flex-1 p-8 md:p-16 flex flex-col justify-between z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to bbuilds</span>
          </a>

          <div className="max-w-md">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
              <span className="text-white font-black text-xl">B</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              Client <span className="text-blue-500">Workspace</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Experience the evolution of your project with real-time updates, direct communication, and premium delivery.
            </p>

            <div className="space-y-6">
              {[
                { icon: Sparkles, title: "Live Progress Tracking", desc: "Watch your dream take shape frame by frame." },
                { icon: ShieldCheck, title: "Secure Environment", desc: "Enterprise-grade protection for your data and IP." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-200">{feature.title}</h3>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="pt-12 border-t border-slate-800/50 mt-12 flex items-center justify-between text-slate-500 text-xs font-medium uppercase tracking-widest">
          <span>&copy; 2026 bbuilds studio</span>
          <span>Next Gen Build Systems</span>
        </div>
      </div>

      {/* Right side: Authentication */}
      <div className="relative flex-1 bg-slate-900/40 backdrop-blur-sm border-l border-white/5 flex items-center justify-center p-8 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 p-1 rounded-[2.5rem] shadow-2xl">
            <div className="bg-[#020617] rounded-[2.2rem] p-4">
              <SignIn
                routing="hash"
                forceRedirectUrl="/dashboard"
                signUpForceRedirectUrl="/dashboard"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none border-none p-4",
                    headerTitle: "text-white text-2xl font-bold",
                    headerSubtitle: "text-slate-400",
                    socialButtonsBlockButton: "bg-slate-800 border-slate-700 text-white hover:bg-slate-700 transition-all",
                    socialButtonsBlockButtonText: "text-white font-medium",
                    dividerLine: "bg-slate-800",
                    dividerText: "text-slate-500",
                    formFieldLabel: "text-slate-400 font-bold uppercase tracking-widest text-[10px]",
                    formFieldInput: "bg-slate-900 border-slate-800 text-white rounded-xl focus:ring-blue-500",
                    formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-bold transition-all shadow-lg shadow-blue-500/25",
                    footerActionLink: "text-blue-400 hover:text-blue-300",
                    identityPreviewText: "text-white",
                    userButtonPopoverCard: "bg-slate-900 border-slate-800 text-white"
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Gradient Beam */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 blur-[2px]" />
    </div>
  );
}
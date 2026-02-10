'use client';

import { useUser, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Clock,
  CheckCircle2,
  Layout,
  ChevronRight,
  MessageSquare,
  ExternalLink,
  Github,
  LayoutDashboard,
  Layers
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  description: string;
  updated_at: string;
  progress: number;
  github_url?: string;
  demo_url?: string;
}

const statusConfig = {
  'planning': {
    label: 'Planning',
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
    dot: 'bg-amber-500',
    icon: Clock
  },
  'in-progress': {
    label: 'In Progress',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    dot: 'bg-blue-500',
    icon: Rocket
  },
  'review': {
    label: 'In Review',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    dot: 'bg-purple-500',
    icon: Layers
  },
  'completed': {
    label: 'Completed',
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
    dot: 'bg-emerald-500',
    icon: CheckCircle2
  },
};

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      if (isLoaded && user) {
        // Sync user
        await fetch('/api/user/sync', { method: 'POST' });
        // Fetch projects
        try {
          const res = await fetch('/api/projects');
          if (res.ok) {
            const data = await res.json();
            setProjects(data.projects || []);
          }
        } catch (err) {
          console.error('Failed to fetch projects:', err);
        } finally {
          setLoading(false);
        }
      }
    }
    init();
  }, [isLoaded, user]);

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-[#1e40af]/20 border-t-[#1e40af] rounded-full animate-spin"></div>
          <div className="mt-4 text-[#1e40af] dark:text-blue-400 font-medium animate-pulse">Designing your space...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 transition-colors duration-500">
      {/* Premium Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-[#020617]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">BB</span>
            </div>
            <a href="/" className="font-bold text-xl tracking-tight hidden sm:block">
              bbuilds
            </a>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 mr-4">
              <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400">Overview</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Messages</a>
              <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Documents</a>
            </nav>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
            <UserButton afterSignOutUrl="/client-portal" />
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                Welcome back, {user?.firstName || 'Client'}
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Here's what's happening with your projects today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold shadow-sm hover:border-blue-500 transition-all group">
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                <span>Contact Support</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Active Projects
            </h2>

            <AnimatePresence mode="popLayout">
              {projects.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                    <Layout className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Initialize your first project</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8">
                    Your portal is ready! Once we start your first project, it will appear here with live progress tracking.
                  </p>
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                    Schedule Kick-off
                  </button>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-6">
                  {projects.map((project, index) => {
                    const status = statusConfig[project.status];
                    const StatusIcon = status.icon;
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${status.color}`}>
                                <StatusIcon className="w-3.5 h-3.5" />
                                {status.label}
                              </span>
                              <span className="text-slate-300 dark:text-slate-700 font-light">|</span>
                              <span className="text-xs text-slate-400 font-medium">Updated {new Date(project.updated_at).toLocaleDateString()}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                              {project.github_url && (
                                <a href={project.github_url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                  <Github className="w-4 h-4" />
                                  <span>Source Code</span>
                                </a>
                              )}
                              {project.demo_url && (
                                <a href={project.demo_url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                                  <ExternalLink className="w-4 h-4" />
                                  <span>Live Demo</span>
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="w-full md:w-64">
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50">
                              <div className="flex justify-between items-end mb-3">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-tight">Progress</span>
                                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{project.progress}%</span>
                              </div>
                              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${project.progress}%` }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                                />
                              </div>
                            </div>
                            <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">
                              View milestones
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Communication
            </h2>

            <div className="bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 h-[500px] flex flex-col">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold">Team Chat</h3>
                <p className="text-xs text-slate-500">Ask anything or request updates</p>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl rounded-tl-none p-4 max-w-[90%]">
                  <p className="text-sm text-slate-600 dark:text-slate-300">Welcome to your portal! Let us know if you have any questions.</p>
                  <span className="text-[10px] text-slate-400 mt-2 block">System • 9:00 AM</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <button className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Account Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20">
              <div className="flex items-center gap-4 mb-6">
                <img src={user?.imageUrl} className="w-14 h-14 rounded-2xl border-2 border-white/20 shadow-lg" alt="" />
                <div>
                  <h4 className="font-bold text-lg">{user?.fullName}</h4>
                  <p className="text-blue-100 text-xs opacity-80">{user?.primaryEmailAddress?.emailAddress}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm py-2 border-b border-white/10">
                  <span className="text-blue-100">Plan</span>
                  <span className="font-bold">Enterprise</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2">
                  <span className="text-blue-100">Next billing</span>
                  <span className="font-bold">March 1, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
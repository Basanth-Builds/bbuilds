'use client';

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Plus,
  Trash2,
  Save,
  Layout,
  Github,
  ExternalLink,
  Settings2,
  AlertCircle,
  CheckCircle2,
  Clock,
  Rocket,
  Layers
} from "lucide-react";

interface Project {
  id?: string;
  name: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  description: string;
  progress: number;
  github_url?: string;
  demo_url?: string;
  updated_at?: string;
}

interface ClientDetail {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  imageUrl: string;
  projects: Project[];
  createdAt: string;
}

const statusOptions = [
  { value: 'planning', label: 'Planning', icon: Clock, color: 'text-amber-500' },
  { value: 'in-progress', label: 'In Progress', icon: Rocket, color: 'text-blue-500' },
  { value: 'review', label: 'In Review', icon: Layers, color: 'text-purple-500' },
  { value: 'completed', label: 'Completed', icon: CheckCircle2, color: 'text-emerald-500' },
] as const;

export default function AdminClientDetail() {
  const { user, isLoaded } = useUser();
  const params = useParams();
  const router = useRouter();
  const clientId = params.id as string;

  const [client, setClient] = useState<ClientDetail | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    async function fetchClient() {
      try {
        const res = await fetch(`/api/admin/clients/${clientId}`);
        if (res.ok) {
          const data = await res.json();
          setClient(data.client);
          setProjects(data.client.projects || []);
        } else {
          setNotification({ type: 'error', message: 'Client not found' });
        }
      } catch {
        setNotification({ type: 'error', message: 'Failed to load client' });
      } finally {
        setLoading(false);
      }
    }
    if (isLoaded && user && clientId) {
      fetchClient();
    }
  }, [isLoaded, user, clientId]);

  const addProject = () => {
    const newProject: Project = {
      name: '',
      status: 'planning',
      description: '',
      progress: 0,
    };
    setProjects([newProject, ...projects]);
  };

  const removeProject = async (index: number) => {
    const project = projects[index];
    if (project.id) {
      if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) return;

      try {
        const res = await fetch(`/api/admin/projects?id=${project.id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete');
      } catch (err) {
        setNotification({ type: 'error', message: 'Failed to delete project from database' });
        return;
      }
    }
    setProjects(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, updates: Partial<Project>) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], ...updates };
    setProjects(updated);
  };

  const handleSave = async () => {
    setSaving(true);
    setNotification(null);
    try {
      for (const project of projects) {
        const method = project.id ? 'PATCH' : 'POST';
        const res = await fetch('/api/admin/projects', {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...project, client_id: clientId }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || 'Failed to save a project');
        }
      }

      setNotification({ type: 'success', message: 'All projects saved successfully' });
      // Refresh data
      const res = await fetch(`/api/admin/clients/${clientId}`);
      const data = await res.json();
      setProjects(data.client.projects || []);

    } catch (err: any) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setSaving(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/clients" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
            <h1 className="font-bold text-lg tracking-tight">Manage Client</h1>
          </div>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/client-portal" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-8 p-4 rounded-2xl border flex items-center gap-3 ${notification.type === 'success'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400'
                  : 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-900/20 dark:border-rose-800 dark:text-rose-400'
                }`}
            >
              {notification.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <p className="text-sm font-semibold">{notification.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Client Identity */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={client?.imageUrl} alt="" className="w-24 h-24 rounded-3xl border-4 border-slate-50 dark:border-slate-800 shadow-xl" />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight mb-2">
                {client?.firstName} {client?.lastName}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center md:justify-start gap-2">
                {client?.email}
                <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
                Joined {new Date(client?.createdAt || '').toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={addProject}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25"
              >
                <Plus className="w-5 h-5" />
                New Project
              </button>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Layout className="w-5 h-5 text-blue-500" />
              Projects
            </h3>
            <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">
              {projects.length} Total
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {projects.length === 0 ? (
              <motion.div
                layout
                className="bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center"
              >
                <Plus className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">No projects yet</h4>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Click the button above to start tracking a new project for this client.</p>
              </motion.div>
            ) : (
              <div className="grid gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id || `new-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Name</label>
                              <input
                                type="text"
                                value={project.name}
                                onChange={(e) => updateProject(index, { name: e.target.value })}
                                placeholder="e.g., Cloud Infrastructure Audit"
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-semibold"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Status</label>
                              <div className="relative">
                                <select
                                  value={project.status}
                                  onChange={(e) => updateProject(index, { status: e.target.value as any })}
                                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all font-semibold"
                                >
                                  {statusOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                  ))}
                                </select>
                                <Settings2 className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Description</label>
                            <textarea
                              value={project.description}
                              onChange={(e) => updateProject(index, { description: e.target.value })}
                              rows={3}
                              placeholder="What are we building?"
                              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-sm leading-relaxed"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <Github className="w-3.5 h-3.5" />
                                GitHub URL
                              </label>
                              <input
                                type="url"
                                value={project.github_url || ''}
                                onChange={(e) => updateProject(index, { github_url: e.target.value })}
                                placeholder="https://github.com/..."
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <ExternalLink className="w-3.5 h-3.5" />
                                Demo URL
                              </label>
                              <input
                                type="url"
                                value={project.demo_url || ''}
                                onChange={(e) => updateProject(index, { demo_url: e.target.value })}
                                placeholder="https://..."
                                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-72 bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 flex flex-col justify-between border border-slate-100 dark:border-slate-900">
                          <div className="space-y-6">
                            <div className="flex justify-between items-end">
                              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Progress</label>
                              <span className="text-3xl font-black text-blue-600 dark:text-blue-400">{project.progress}%</span>
                            </div>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              step="5"
                              value={project.progress}
                              onChange={(e) => updateProject(index, { progress: parseInt(e.target.value) })}
                              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="grid grid-cols-5 gap-1">
                              {[0, 25, 50, 75, 100].map(val => (
                                <button
                                  key={val}
                                  onClick={() => updateProject(index, { progress: val })}
                                  className={`text-[10px] font-bold py-1 rounded-md transition-all ${project.progress === val
                                      ? 'bg-blue-600 text-white shadow-lg'
                                      : 'bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                  {val}%
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="pt-8 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 mt-8">
                            <button
                              onClick={() => removeProject(index)}
                              className="flex items-center gap-2 text-rose-500 hover:text-rose-600 text-xs font-bold transition-colors group"
                            >
                              <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              Delete
                            </button>
                            {project.id && (
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                ID: {project.id.split('-')[0]}...
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Actions */}
        <div className="fixed bottom-8 right-8 left-8 md:left-auto md:w-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            disabled={saving}
            className="w-full flex items-center justify-center gap-3 px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-lg shadow-2xl disabled:opacity-50 transition-all border border-slate-800 dark:border-slate-200"
          >
            {saving ? (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Save className="w-6 h-6" />
                Commit Updates
              </>
            )}
          </motion.button>
        </div>
      </main>
    </div>
  );
}

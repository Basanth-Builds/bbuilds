'use client';

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface Project {
  name: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  description: string;
  updatedAt: string;
  progress: number;
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
  { value: 'planning', label: 'Planning' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'review', label: 'In Review' },
  { value: 'completed', label: 'Completed' },
];

const emptyProject: Project = {
  name: '',
  status: 'planning',
  description: '',
  updatedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
  progress: 0,
};

export default function AdminClientDetail() {
  const { user, isLoaded } = useUser();
  const params = useParams();
  const router = useRouter();
  const clientId = params.id as string;

  const [client, setClient] = useState<ClientDetail | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchClient() {
      try {
        const res = await fetch(`/api/admin/clients/${clientId}`);
        if (res.ok) {
          const data = await res.json();
          setClient(data.client);
          setProjects(data.client.projects || []);
        } else {
          setError('Client not found');
        }
      } catch {
        setError('Failed to load client');
      } finally {
        setLoading(false);
      }
    }
    if (isLoaded && user && clientId) {
      fetchClient();
    }
  }, [isLoaded, user, clientId]);

  const addProject = () => {
    setProjects([...projects, { ...emptyProject, updatedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof Project, value: string | number) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    setProjects(updated);
  };

  const saveProjects = async () => {
    setSaving(true);
    setSaved(false);
    setError('');
    try {
      // Update timestamps on modified projects
      const projectsWithTimestamp = projects.map((p) => ({
        ...p,
        updatedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      }));

      const res = await fetch(`/api/admin/clients/${clientId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projects: projectsWithTimestamp }),
      });

      if (res.ok) {
        setProjects(projectsWithTimestamp);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to save');
      }
    } catch {
      setError('Failed to save projects');
    } finally {
      setSaving(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] to-white dark:from-[#0a0f1e] dark:to-[#101830] flex items-center justify-center">
        <div className="animate-pulse text-[#1e40af] dark:text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-white dark:from-[#0a0f1e] dark:via-[#101830] dark:to-[#0a0f1e] transition-colors duration-500">
      {/* Header */}
      <header className="border-b border-[#1e40af]/10 dark:border-white/10 bg-white/80 dark:bg-[#0a0f1e]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="font-medium text-[#0e0e0e] dark:text-white text-xl">
              {'<bbuilds/>'}
            </a>
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#1e40af] text-white">
              ADMIN
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/admin" className="text-[#0e0e0e]/60 dark:text-white/60 hover:text-[#1e40af] dark:hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/clients" className="text-[#1e40af] dark:text-white border-b-2 border-[#1e40af] dark:border-white pb-0.5">
              Clients
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/client-portal" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-10">
        {/* Back link */}
        <Link href="/admin/clients" className="inline-flex items-center gap-2 text-sm text-[#1e40af] dark:text-white/70 hover:text-[#0d1b49] dark:hover:text-white mb-6 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Clients
        </Link>

        {loading ? (
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-12 text-center">
            <div className="animate-pulse text-[#0e0e0e]/50 dark:text-white/50">Loading client...</div>
          </div>
        ) : error && !client ? (
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-red-200 dark:border-red-800/30 p-12 text-center">
            <p className="text-red-600 dark:text-red-400">{error}</p>
            <button onClick={() => router.push('/admin/clients')} className="mt-4 text-sm text-[#1e40af] dark:text-white/70 hover:underline">
              Go back
            </button>
          </div>
        ) : client ? (
          <>
            {/* Client Info */}
            <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-6 mb-8">
              <div className="flex items-center gap-4">
                <img src={client.imageUrl} alt="" className="w-14 h-14 rounded-full border-2 border-[#1e40af]/20 dark:border-white/20" />
                <div>
                  <h1 className="text-2xl font-bold text-[#0e0e0e] dark:text-white">
                    {client.firstName || ''} {client.lastName || ''}
                    {!client.firstName && !client.lastName && <span className="text-[#0e0e0e]/40 dark:text-white/40 italic">No name set</span>}
                  </h1>
                  <p className="text-sm text-[#0e0e0e]/60 dark:text-white/60">{client.email}</p>
                </div>
              </div>
            </div>

            {/* Projects Editor */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#0e0e0e] dark:text-white">
                Projects ({projects.length})
              </h2>
              <button
                onClick={addProject}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e40af] text-white text-sm font-medium rounded-lg hover:bg-[#1e40af]/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Project
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800/30 text-red-700 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            {saved && (
              <div className="mb-4 p-3 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/30 text-green-700 dark:text-green-400 text-sm">
                Projects saved successfully! The client will see the updates on their dashboard.
              </div>
            )}

            {projects.length === 0 ? (
              <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-dashed border-[#1e40af]/20 dark:border-white/10 p-12 text-center">
                <p className="text-[#0e0e0e]/50 dark:text-white/50 mb-4">No projects assigned to this client yet.</p>
                <button
                  onClick={addProject}
                  className="text-sm text-[#1e40af] dark:text-white/70 hover:underline"
                >
                  + Add their first project
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-medium text-[#0e0e0e]/40 dark:text-white/40 uppercase tracking-wider">
                        Project {index + 1}
                      </span>
                      <button
                        onClick={() => removeProject(index)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-xs font-medium transition-colors"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium text-[#0e0e0e]/60 dark:text-white/60 mb-1">Project Name</label>
                        <input
                          type="text"
                          value={project.name}
                          onChange={(e) => updateProject(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#f5f5f6] dark:bg-[#0a0f1e]/50 border border-[#1e40af]/10 dark:border-white/10 text-sm text-[#0e0e0e] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1e40af]/30"
                          placeholder="e.g. E-commerce Platform"
                        />
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-xs font-medium text-[#0e0e0e]/60 dark:text-white/60 mb-1">Status</label>
                        <select
                          value={project.status}
                          onChange={(e) => updateProject(index, 'status', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-[#f5f5f6] dark:bg-[#0a0f1e]/50 border border-[#1e40af]/10 dark:border-white/10 text-sm text-[#0e0e0e] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1e40af]/30"
                        >
                          {statusOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-[#0e0e0e]/60 dark:text-white/60 mb-1">Description</label>
                        <textarea
                          value={project.description}
                          onChange={(e) => updateProject(index, 'description', e.target.value)}
                          rows={2}
                          className="w-full px-3 py-2 rounded-lg bg-[#f5f5f6] dark:bg-[#0a0f1e]/50 border border-[#1e40af]/10 dark:border-white/10 text-sm text-[#0e0e0e] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1e40af]/30 resize-none"
                          placeholder="Brief description of the project..."
                        />
                      </div>

                      {/* Progress */}
                      <div className="md:col-span-2">
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-medium text-[#0e0e0e]/60 dark:text-white/60">Progress</label>
                          <span className="text-xs font-semibold text-[#1e40af] dark:text-white">{project.progress}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="5"
                          value={project.progress}
                          onChange={(e) => updateProject(index, 'progress', parseInt(e.target.value))}
                          className="w-full h-2 bg-[#1e40af]/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#1e40af]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex items-center justify-end gap-4">
              <Link href="/admin/clients" className="px-6 py-3 text-sm font-medium text-[#0e0e0e]/60 dark:text-white/60 hover:text-[#0e0e0e] dark:hover:text-white transition-colors">
                Cancel
              </Link>
              <button
                onClick={saveProjects}
                disabled={saving}
                className="px-8 py-3 bg-[#1e40af] text-white text-sm font-semibold rounded-xl hover:bg-[#1e40af]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#1e40af]/20"
              >
                {saving ? 'Saving...' : 'Save Projects'}
              </button>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}

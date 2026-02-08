'use client';

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ClientSummary {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  projectCount: number;
}

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      try {
        const res = await fetch('/api/admin/clients');
        if (res.ok) {
          const data = await res.json();
          setClients(data.clients || []);
        }
      } catch (err) {
        console.error('Failed to fetch clients:', err);
      } finally {
        setLoading(false);
      }
    }
    if (isLoaded && user) {
      fetchClients();
    }
  }, [isLoaded, user]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] to-white dark:from-[#0a0f1e] dark:to-[#101830] flex items-center justify-center">
        <div className="animate-pulse text-[#1e40af] dark:text-white text-lg">Loading...</div>
      </div>
    );
  }

  const totalProjects = clients.reduce((sum, c) => sum + c.projectCount, 0);

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
            <Link href="/admin" className="text-[#1e40af] dark:text-white border-b-2 border-[#1e40af] dark:border-white pb-0.5">
              Dashboard
            </Link>
            <Link href="/admin/clients" className="text-[#0e0e0e]/60 dark:text-white/60 hover:text-[#1e40af] dark:hover:text-white transition-colors">
              Clients
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#0e0e0e]/70 dark:text-white/70 hidden sm:block">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
            <UserButton afterSignOutUrl="/client-portal" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#0e0e0e] dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-[#0e0e0e]/60 dark:text-white/60">Manage your clients and their projects.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-6">
            <p className="text-sm text-[#0e0e0e]/50 dark:text-white/50 mb-1">Total Clients</p>
            <p className="text-3xl font-bold text-[#1e40af] dark:text-white">
              {loading ? '...' : clients.length}
            </p>
          </div>
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-6">
            <p className="text-sm text-[#0e0e0e]/50 dark:text-white/50 mb-1">Total Projects</p>
            <p className="text-3xl font-bold text-[#1e40af] dark:text-white">
              {loading ? '...' : totalProjects}
            </p>
          </div>
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-6">
            <p className="text-sm text-[#0e0e0e]/50 dark:text-white/50 mb-1">Quick Action</p>
            <Link
              href="/admin/clients"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#1e40af] text-white text-sm font-medium rounded-lg hover:bg-[#1e40af]/90 transition-colors"
            >
              Manage Clients
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Recent Clients */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0e0e0e] dark:text-white">Recent Clients</h2>
            <Link href="/admin/clients" className="text-sm text-[#1e40af] dark:text-white/70 hover:underline">
              View all →
            </Link>
          </div>

          {loading ? (
            <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-8 text-center">
              <div className="animate-pulse text-[#0e0e0e]/50 dark:text-white/50">Loading clients...</div>
            </div>
          ) : clients.length === 0 ? (
            <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-12 text-center">
              <p className="text-[#0e0e0e]/50 dark:text-white/50">No clients have signed up yet.</p>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 overflow-hidden">
              <div className="divide-y divide-[#1e40af]/5 dark:divide-white/5">
                {clients.slice(0, 5).map((client) => (
                  <Link
                    key={client.id}
                    href={`/admin/clients/${client.id}`}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#1e40af]/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-[#0e0e0e] dark:text-white">
                        {client.firstName} {client.lastName}
                      </p>
                      <p className="text-sm text-[#0e0e0e]/50 dark:text-white/50">{client.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-[#0e0e0e]/40 dark:text-white/40">
                        {client.projectCount} project{client.projectCount !== 1 ? 's' : ''}
                      </span>
                      <svg className="w-4 h-4 text-[#0e0e0e]/30 dark:text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

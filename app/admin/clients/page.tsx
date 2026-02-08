'use client';

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ClientSummary {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  imageUrl: string;
  projectCount: number;
  createdAt: string;
}

export default function AdminClients() {
  const { user, isLoaded } = useUser();
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

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

  const filteredClients = clients.filter((c) => {
    const q = search.toLowerCase();
    return (
      (c.firstName?.toLowerCase() || '').includes(q) ||
      (c.lastName?.toLowerCase() || '').includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  });

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
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0e0e0e] dark:text-white mb-1">All Clients</h1>
            <p className="text-[#0e0e0e]/60 dark:text-white/60 text-sm">
              {clients.length} client{clients.length !== 1 ? 's' : ''} registered
            </p>
          </div>
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0e0e0e]/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#10225d]/30 border border-[#1e40af]/10 dark:border-white/10 text-sm text-[#0e0e0e] dark:text-white placeholder-[#0e0e0e]/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/30 dark:focus:ring-white/20 w-full sm:w-64"
            />
          </div>
        </div>

        {loading ? (
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-12 text-center">
            <div className="animate-pulse text-[#0e0e0e]/50 dark:text-white/50">Loading clients...</div>
          </div>
        ) : filteredClients.length === 0 ? (
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-12 text-center">
            <p className="text-[#0e0e0e]/50 dark:text-white/50">
              {search ? 'No clients match your search.' : 'No clients have signed up yet.'}
            </p>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 overflow-hidden">
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-[#1e40af]/5 dark:bg-white/5 text-xs font-semibold text-[#0e0e0e]/50 dark:text-white/50 uppercase tracking-wider">
              <div className="col-span-4">Client</div>
              <div className="col-span-4">Email</div>
              <div className="col-span-2">Projects</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            <div className="divide-y divide-[#1e40af]/5 dark:divide-white/5">
              {filteredClients.map((client) => (
                <Link
                  key={client.id}
                  href={`/admin/clients/${client.id}`}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-4 hover:bg-[#1e40af]/5 dark:hover:bg-white/5 transition-colors items-center"
                >
                  <div className="col-span-4 flex items-center gap-3">
                    <img src={client.imageUrl} alt="" className="w-9 h-9 rounded-full border border-[#1e40af]/10 dark:border-white/10" />
                    <span className="font-medium text-[#0e0e0e] dark:text-white text-sm">
                      {client.firstName || ''} {client.lastName || ''}
                      {!client.firstName && !client.lastName && <span className="text-[#0e0e0e]/40 dark:text-white/40 italic">No name</span>}
                    </span>
                  </div>
                  <div className="col-span-4 text-sm text-[#0e0e0e]/60 dark:text-white/60 truncate">
                    {client.email}
                  </div>
                  <div className="col-span-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1e40af]/10 dark:bg-white/10 text-[#1e40af] dark:text-white">
                      {client.projectCount} project{client.projectCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="text-xs text-[#1e40af] dark:text-white/70 font-medium hover:underline">
                      Manage →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

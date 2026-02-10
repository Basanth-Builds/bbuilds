'use client';

import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  ArrowUpRight,
  Search,
  LayoutDashboard,
  TrendingUp,
  Activity,
  Plus
} from "lucide-react";

interface ClientSummary {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  imageUrl: string;
  projectCount: number;
}

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredClients = clients.filter(c =>
    `${c.firstName} ${c.lastName} ${c.email}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalProjects = clients.reduce((sum, c) => sum + c.projectCount, 0);

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-bold text-xs">BB</span>
            </div>
            <h1 className="font-bold text-xl tracking-tight hidden sm:block">Admin Console</h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/admin" className="text-sm font-bold text-blue-600 dark:text-blue-400">Dashboard</Link>
              <Link href="/admin/clients" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Clients</Link>
            </nav>
            <UserButton afterSignOutUrl="/client-portal" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-black tracking-tight mb-2">Systems Overview</h2>
          <p className="text-slate-500 dark:text-slate-400">Real-time status of all client engagements.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Clients', value: clients.length, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/10' },
            { label: 'Active Projects', value: totalProjects, icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/10' },
            { label: 'Avg. Progress', value: '68%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/10' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-6`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-4xl font-black">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Clients Table Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Activity className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold tracking-tight">Client Directory</h3>
            </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-100 dark:border-slate-800">
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Client</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Projects</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <img src={client.imageUrl} className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-slate-800" alt="" />
                        <div>
                          <p className="font-bold text-lg leading-tight">{client.firstName} {client.lastName}</p>
                          <p className="text-sm text-slate-500">{client.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-sm">
                          {client.projectCount}
                        </span>
                        <span className="text-sm text-slate-500">Live</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                        <div className="w-1 h-1 bg-current rounded-full animate-pulse" />
                        Active
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <Link
                        href={`/admin/clients/${client.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-lg"
                      >
                        Manage
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredClients.length === 0 && (
            <div className="p-20 text-center">
              <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h4 className="font-bold text-lg">No clients found</h4>
              <p className="text-slate-500">Try adjusting your search query.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

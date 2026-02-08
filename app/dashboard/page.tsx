'use client';

import { useUser, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] to-white dark:from-[#0a0f1e] dark:to-[#101830] flex items-center justify-center">
        <div className="animate-pulse text-[#1e40af] dark:text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-white dark:from-[#0a0f1e] dark:via-[#101830] dark:to-[#0a0f1e] transition-colors duration-500">
      {/* Dashboard Header */}
      <header className="border-b border-[#1e40af]/10 dark:border-white/10 bg-white/80 dark:bg-[#0a0f1e]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="/" className="font-medium text-[#0e0e0e] dark:text-white text-xl">
            {'<bbuilds/>'}
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#0e0e0e]/70 dark:text-white/70 hidden sm:block">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
            <UserButton afterSignOutUrl="/client-portal" />
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <h1 className="text-3xl font-bold text-[#0e0e0e] dark:text-white mb-8">
          Welcome, {user?.firstName || "Client"}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#10225d]/30 p-6 rounded-2xl shadow-sm border border-[#1e40af]/10 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-2 text-[#0e0e0e] dark:text-white">Profile</h2>
            <p className="text-[#0e0e0e]/60 dark:text-white/60">
              Email: {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>

          <div className="bg-white dark:bg-[#10225d]/30 p-6 rounded-2xl shadow-sm border border-[#1e40af]/10 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-2 text-[#0e0e0e] dark:text-white">Projects</h2>
            <p className="text-[#0e0e0e]/60 dark:text-white/60">Your projects will appear here</p>
          </div>

          <div className="bg-white dark:bg-[#10225d]/30 p-6 rounded-2xl shadow-sm border border-[#1e40af]/10 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-2 text-[#0e0e0e] dark:text-white">Activity</h2>
            <p className="text-[#0e0e0e]/60 dark:text-white/60">Recent activity will appear here</p>
          </div>
        </div>
      </main>
    </div>
  );
}
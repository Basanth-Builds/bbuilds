'use client';

import { useUser, UserButton } from "@clerk/nextjs";

interface Project {
  name: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  description: string;
  updatedAt: string;
  progress: number;
}

const statusConfig = {
  'planning': { label: 'Planning', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400', dot: 'bg-yellow-500' },
  'in-progress': { label: 'In Progress', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400', dot: 'bg-blue-500' },
  'review': { label: 'In Review', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400', dot: 'bg-purple-500' },
  'completed': { label: 'Completed', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400', dot: 'bg-green-500' },
};

export default function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] to-white dark:from-[#0a0f1e] dark:to-[#101830] flex items-center justify-center">
        <div className="animate-pulse text-[#1e40af] dark:text-white text-lg">Loading...</div>
      </div>
    );
  }

  const projects: Project[] = (user?.publicMetadata?.projects as Project[]) || [];

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
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#0e0e0e] dark:text-white mb-2">
            Welcome back, {user?.firstName || "Client"}!
          </h1>
          <p className="text-[#0e0e0e]/60 dark:text-white/60">
            Track your projects and stay up to date on progress.
          </p>
        </div>

        {/* Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-[#0e0e0e] dark:text-white mb-6">Your Projects</h2>

          {projects.length === 0 ? (
            <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#1e40af]/10 dark:bg-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1e40af] dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0e0e0e] dark:text-white mb-2">No projects yet</h3>
              <p className="text-[#0e0e0e]/50 dark:text-white/50 max-w-sm mx-auto">
                Once your project kicks off, you&apos;ll see live updates and progress here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => {
                const status = statusConfig[project.status] || statusConfig['planning'];
                return (
                  <div key={index} className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[#0e0e0e] dark:text-white">{project.name}</h3>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                        {status.label}
                      </span>
                    </div>
                    <p className="text-sm text-[#0e0e0e]/60 dark:text-white/60 mb-4">{project.description}</p>

                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#0e0e0e]/50 dark:text-white/50">Progress</span>
                        <span className="font-medium text-[#1e40af] dark:text-white">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#1e40af]/10 dark:bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#1e40af] dark:bg-[#4f7be8] rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-xs text-[#0e0e0e]/40 dark:text-white/40">
                      Last updated: {project.updatedAt}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Profile Card */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#0e0e0e] dark:text-white mb-6">Profile</h2>
          <div className="bg-white dark:bg-[#10225d]/30 rounded-2xl border border-[#1e40af]/10 dark:border-white/10 p-6">
            <div className="flex items-center gap-4">
              {user?.imageUrl && (
                <img src={user.imageUrl} alt="" className="w-14 h-14 rounded-full border-2 border-[#1e40af]/20 dark:border-white/20" />
              )}
              <div>
                <p className="font-semibold text-[#0e0e0e] dark:text-white">
                  {user?.fullName || 'Client'}
                </p>
                <p className="text-sm text-[#0e0e0e]/60 dark:text-white/60">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
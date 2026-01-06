'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication - replace with your actual auth logic
    setTimeout(() => {
      if (email && password) {
        // Successful login logic here
        console.log('Login successful');
        // Redirect to client portal or dashboard
        window.location.href = '/client-portal'; // Update with your actual dashboard route
      } else {
        setError('Please enter valid credentials');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-[#27D6C7]/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(39,214,199,0.1),transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Back to Home Link */}
      <Link 
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-[#27D6C7] dark:hover:text-[#27D6C7] transition-colors font-medium group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Home
      </Link>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 dark:border-[#27D6C7]/20 p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#27D6C7] via-blue-400 to-[#27D6C7] rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/10 dark:bg-[#27D6C7]/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 dark:border-[#27D6C7]/30">
                <Image
                  src="/logo-bgless.png"
                  alt="bbuilds logo"
                  width={60}
                  height={60}
                  className="relative drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
              Client Login
            </h1>
            <p className="text-gray-600 dark:text-white/70">
              Access your project dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-[#27D6C7]/30 text-black dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#27D6C7] focus:border-transparent transition-all"
                placeholder="client@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-white/80 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-[#27D6C7]/30 text-black dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#27D6C7] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 dark:border-[#27D6C7]/30 text-[#27D6C7] focus:ring-[#27D6C7]"
                />
                <span className="text-sm text-gray-600 dark:text-white/70">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#27D6C7] hover:text-[#20b8aa] font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-4 bg-gradient-to-r from-black to-gray-800 dark:from-[#27D6C7] dark:to-[#20b8aa] text-white dark:text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <>
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#27D6C7] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 dark:bg-black/80 text-gray-500 dark:text-white/60">
                New client?
              </span>
            </div>
          </div>

          {/* Contact Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
              Don't have access yet?
            </p>
            <a
              href="mailto:contact@bbuilds.org"
              className="inline-block px-6 py-3 bg-white/20 dark:bg-[#27D6C7]/10 text-black dark:text-white border border-gray-300 dark:border-[#27D6C7]/30 rounded-lg hover:bg-white/30 dark:hover:bg-[#27D6C7]/20 font-medium transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 dark:text-white/50 mt-6">
          Protected by enterprise-grade security
        </p>
      </div>
    </div>
  );
}

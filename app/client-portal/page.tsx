'use client';

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

export default function ClientPortal() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      // Check if user is admin
      const adminId = process.env.NEXT_PUBLIC_ADMIN_USER_ID;
      if (adminId && user.id === adminId) {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isLoaded, user, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-white dark:from-[#0a0f1e] dark:via-[#101830] dark:to-[#0a0f1e] flex flex-col items-center justify-center relative">
      {/* Back to home link */}
      <a
        href="/"
        className="absolute top-6 left-6 text-[#1e40af] dark:text-white/80 hover:text-[#0d1b49] dark:hover:text-white font-medium text-sm flex items-center gap-2 transition-colors duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </a>

      <div className="mb-6">
        <span className="font-medium text-[#0e0e0e] dark:text-white text-2xl">{'<bbuilds/>'}</span>
      </div>

      <SignIn
        routing="hash"
        forceRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/dashboard"
      />
    </div>
  );
}
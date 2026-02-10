import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId, sessionClaims } = await auth();

    if (!userId) {
      return NextResponse.redirect(new URL('/client-portal', req.url));
    }

    // Check for admin email in session claims for /admin routes
    // NOTE: You must add "email" to your Clerk Session Token for this to work
    if (req.nextUrl.pathname.startsWith('/admin')) {
      const userEmail = sessionClaims?.email as string;
      const adminEmail = 'basanth@bbuilds.org';

      if (userEmail !== adminEmail) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }
  }
});

export const config = {
  matcher: ['/client-portal(.*)', '/dashboard(.*)', '/admin(.*)'],
};
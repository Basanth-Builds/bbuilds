import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.redirect(new URL('/client-portal', req.url));
    }

    // Block non-admin users from /admin routes
    const adminId = process.env.ADMIN_USER_ID;
    if (req.nextUrl.pathname.startsWith('/admin') && userId !== adminId) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  }
});

export const config = {
  matcher: ['/client-portal(.*)', '/dashboard(.*)', '/admin(.*)'],
};
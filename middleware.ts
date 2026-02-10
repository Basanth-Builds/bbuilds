import { clerkMiddleware, createRouteMatcher, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId, sessionClaims } = await auth();

    if (!userId) {
      return NextResponse.redirect(new URL('/client-portal', req.url));
    }

    // Protection for /admin routes
    if (req.nextUrl.pathname.startsWith('/admin')) {
      // 1. Try session claims (fastest)
      let userEmail = sessionClaims?.email as string;
      const adminEmail = 'basanth@bbuilds.org';

      // 2. Fallback to Clerk API if claim is missing (production safety)
      if (!userEmail) {
        try {
          const client = await clerkClient();
          const user = await client.users.getUser(userId);
          userEmail = user.emailAddresses[0]?.emailAddress;
        } catch (e) {
          console.error("Clerk API Error in Middleware:", e);
        }
      }

      if (userEmail !== adminEmail) {
        console.log(`Unauthorized admin access attempt by ${userEmail}. Redirecting to dashboard.`);
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
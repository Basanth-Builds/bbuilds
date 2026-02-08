import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect({
      unauthenticatedUrl: new URL('/client-portal', req.url).toString(),
    });
  }
});

export const config = {
  matcher: ['/client-portal(.*)', '/dashboard(.*)'],
};
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  // If the user is authenticated, allow access to the dashboard
  if (pathname.startsWith('/admin/dashboard') && !token) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Redirect to dashboard if already authenticated and trying to access login
  if (pathname.startsWith('/admin/login') && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // Handle the /admin route to redirect appropriately
  if (pathname === '/admin') {
    // Redirect to dashboard if authenticated
    if (token) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard:path*', '/admin/login', '/admin'],
};

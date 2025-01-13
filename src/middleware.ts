import { CLIENT_ROUTES } from '@/config/routes';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === CLIENT_ROUTES.ROOT) {
    return NextResponse.redirect(
      new URL(CLIENT_ROUTES.ALL_PROJECTS, request.url)
    );
  }
}

export const config = {
  matcher: '/',
};

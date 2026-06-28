import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Omitir rutas de API, Next.js estáticos, imágenes, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // 2. Si empieza por /es, hacer un redireccionamiento limpio (301) para quitarlo de la URL del navegador
  if (pathname.startsWith('/es/') || pathname === '/es') {
    const cleanPath = pathname === '/es' ? '/' : pathname.replace(/^\/es/, '');
    const url = new URL(cleanPath, request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};

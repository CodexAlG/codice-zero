import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const supportedLangs = ['/es', '/en'];
  const hasLangPrefix = supportedLangs.some(lang => pathname.startsWith(`${lang}/`) || pathname === lang);

  // 1. Omitir rutas de API, Next.js estáticos, imágenes, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // 2. Si NO tiene prefijo de idioma, redirigir a /es + pathname
  if (!hasLangPrefix) {
    const targetLang = 'es'; // Por defecto Español
    const redirectUrl = pathname === '/' ? `/${targetLang}` : `/${targetLang}${pathname}`;
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Ajustar el matcher para no interceptar todas las peticiones
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};

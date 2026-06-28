import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // 1. Omitir rutas de API, Next.js estáticos, imágenes, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // 2. Detectar si estamos en el subdominio de la wiki (zzz.codicezero.cc) o enlaces (links.codicezero.cc)
  const isWikiSubdomain = hostname.startsWith('zzz.') || hostname.includes('zzz.localhost');
  const isLinksSubdomain = hostname.startsWith('links.') || hostname.includes('links.localhost');

  if (isWikiSubdomain) {
    // Si estamos en la raíz del subdominio de la wiki, reescribir internamente a /wiki
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/wiki', request.url));
    }
  } else if (isLinksSubdomain) {
    // Si estamos en la raíz del subdominio de enlaces, reescribir internamente a /links
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/links', request.url));
    }
  } else {
    // Si estamos en el dominio principal (codicezero.cc) y NO es la raíz ni /acerca ni /links, redirigir al subdominio de la wiki
    if (pathname !== '/' && pathname !== '/acerca' && pathname !== '/links') {
      const targetUrl = new URL(pathname, `https://zzz.codicezero.cc`);
      targetUrl.search = request.nextUrl.search;
      return NextResponse.redirect(targetUrl);
    }
  }

  // 3. Si empieza por /es o /en en la URL del navegador, hacer un redireccionamiento limpio (301) para quitarlo
  if (pathname.startsWith('/es/') || pathname === '/es' || pathname.startsWith('/en/') || pathname === '/en') {
    const cleanPath = (pathname === '/es' || pathname === '/en') 
      ? '/' 
      : pathname.replace(/^\/(es|en)/, '');
    const url = new URL(cleanPath, request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};

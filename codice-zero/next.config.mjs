/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  
  images: {
    // Desactivar la optimización de imágenes en producción.
    // Esto asegura que todas tus imágenes (especialmente las assets del juego) carguen directo.
    unoptimized: true,
    // Opcional: Desactivar el formato AVIF/WEBP si Next.js está fallando al crearlos.
    formats: ['image/webp'], 
  },

  async rewrites() {
    return [
      {
        source: '/es',
        destination: '/?lang=es',
      },
      {
        source: '/en',
        destination: '/?lang=en',
      },
      {
        source: '/es/:path*',
        destination: '/:path*?lang=es',
      },
      {
        source: '/en/:path*',
        destination: '/:path*?lang=en',
      },
    ];
  },
};

export default nextConfig;

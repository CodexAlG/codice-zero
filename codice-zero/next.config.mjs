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
};

export default nextConfig;

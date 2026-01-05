export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen bg-[#09090b]/90 backdrop-blur-sm fixed inset-0 z-[100]">
      <div className="flex flex-col items-center">
        {/* Spinner (Círculo Giratorio) */}
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4" />

        {/* Mensaje */}
        <p className="text-white font-mono text-sm tracking-widest uppercase animate-pulse">
          Cargando Base de Datos...
        </p>
      </div>
    </div>
  );
}
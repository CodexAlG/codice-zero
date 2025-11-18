export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-900 hero-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-extrabold text-center">
          <span className="text-4xl font-thin text-gray-400">Bienvenido a</span><br />
          <span className="text-6xl font-bold text-yellow-400">CodiceZero</span>
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mt-4">
          La base de datos y guía definitiva de Zenless Zone Zero, 100% en español.
        </p>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl text-center mx-auto">
          A diferencia de otras wikis, nuestro enfoque es el <strong>análisis estratégico</strong>, ofreciendo guías de builds, composiciones de equipo y estrategias detalladas contra jefes.
        </p>
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
}
import CategoryCard from '@/components/home/CategoryCard';
import { Zap } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="px-8 pt-8 pb-4 bg-gradient-to-t from-black/20 to-transparent">
        <h2 className="text-3xl font-bold font-display text-yellow-400 mb-4 border-b border-gray-700 pb-2 drop-shadow-lg shadow-yellow-500/50">
          CodiceZero | La Referencia Estratégica Hispana
        </h2>
        <p className="text-lg text-gray-300 max-w-4xl mb-6 font-mono">
          El objetivo de CodiceZero es ser la fuente de información principal y la referencia de guías más completa para la comunidad de habla hispana de Zenless Zone Zero.
        </p>
        <p className="text-lg text-gray-300 max-w-4xl mb-4 font-mono">
          A diferencia de las wikis tradicionales que solo listan datos, CodiceZero se enfoca en el análisis estratégico profundo, ofreciéndote:
        </p>
        <ul className="list-disc list-inside ml-4 text-yellow-400 max-w-4xl space-y-1 font-mono">
          <li><span className="text-white">Kits de habilidades completos en español.</span></li>
          <li><span className="text-white">Sinergias y composiciones de equipo detalladas.</span></li>
          <li><span className="text-white">Estrategias contra jefes y contenido avanzado.</span></li>
          <li><span className="text-white">Actualizaciones constantes con el meta del juego.</span></li>
        </ul>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CategoryCard
        title="Personajes"
        description="Ver análisis de builds y equipos Meta."
        icon={<Zap size={48} />}
      />
      <CategoryCard
        title="Armas"
        description="Guías de resonancia y tier list."
        icon={<Zap size={48} />}
      />
      <CategoryCard
        title="Composiciones de Equipo"
        description="Sinopsis de sinergias."
        icon={<Zap size={48} />}
      />
      <CategoryCard
        title="Base de Datos de Discos"
        description="Calculadora de conjuntos y mejores opciones."
        icon={<Zap size={48} />}
      />
    </div>
    </>
  );
}

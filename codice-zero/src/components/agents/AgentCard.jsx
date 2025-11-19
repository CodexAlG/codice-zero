import Image from 'next/image';

export default function AgentCard({ agent }) {
  const isS = agent.rank === 'S';

  const getElementColor = (el) => {
    if (!el) return "bg-gray-500";
    const text = el.toLowerCase();

    // FUEGO -> Rojo
    if (text.includes("fuego") || text.includes("fire")) {
      return "bg-red-600";
    }

    // HIELO -> Blanco (Muy visible para probar)
    if (text.includes("hiel") || text.includes("ice") || text.includes("frost")) {
      return "bg-sky-400";
    }

    // ELÉCTRICO ->  (Clásico de electricidad)
    if (text.includes("elec") || text.includes("shock")) {
      return "bg-sky-700";
    }

    // FÍSICO -> 
    if (text.includes("fisic") || text.includes("phys")) {
      return "bg-yellow-500";
    }

    // ETÉREO -> Morado/Rosa Fuerte
    if (text.includes("eter") || text.includes("ether")) {
      return "bg-purple-600";
    }

    // Default
    return "bg-gray-500";
  };

  return (
    <div
      className={`group relative w-full aspect-[3/4] ${isS ? 'bg-gradient-to-b from-yellow-900/80 to-black border-b-4 border-yellow-500' : 'bg-gradient-to-b from-purple-900/80 to-black border-b-4 border-purple-500'} transition-all hover:shadow-lg hover:shadow-yellow-500/20`}
      style={{ clipPath: 'polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)' }}
    >
      <Image
        src={agent.image}
        alt={agent.name}
        fill
        className={`object-cover object-[center_top] transition-transform group-hover:scale-110 ${agent.customStyle || ''}`}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-black from-40% via-black/80 to-transparent z-10"></div>

      {/* Element icon top right */}
      <div className={`absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-900/80 border border-gray-600 z-20 flex items-center justify-center ${getElementColor(agent.element)}`}></div>

      {/* Name bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-1 z-20">
        <h3 className="text-center text-white text-sm font-bold pb-4">{agent.name}</h3>
      </div>
    </div>
  );
}
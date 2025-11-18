'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      className={`h-screen bg-gray-800 text-white p-4 flex flex-col transition-all duration-300 ease-in-out border-r border-gray-700 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-700 mb-4">
        <Image src="/file.svg" alt="CodiceZero Logo" width={28} height={28} className="text-white" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center h-12 py-3 px-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition-colors">
              <Image src="/CodiceZero/Agentes/Icon_Agents.webp" alt="Icono Personajes" width={36} height={36} className="opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200" />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Personajes
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center h-12 py-3 px-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition-colors">
              <Image src="/CodiceZero/Armas/Icon_Storage_W-Engine.webp" alt="Icono Armas" width={36} height={36} className="opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200" />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Armas
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center h-12 py-3 px-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition-colors">
              <BookOpen size={36} />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Guías
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center h-12 py-3 px-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition-colors">
              <Image src="/CodiceZero/Bangboo/INTER-KNOT_Bangboo.webp" alt="Icono Bangboo" width={36} height={36} className="opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200" />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Bangboo
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center h-12 py-3 px-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition-colors">
              <Image src="/CodiceZero/Discos/Icon_Storage_Drive_Disc.webp" alt="Icono Discos" width={36} height={36} className="opacity-75 hover:opacity-100 transition-opacity saturate-200 contrast-200" />
              <span className={`ml-4 ${!isExpanded && 'hidden'} transition-opacity`}>
                Discos
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
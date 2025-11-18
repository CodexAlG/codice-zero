import { Menu } from 'lucide-react';

export default function Header({ toggleSidebar }) {
  return (
    <header className="h-16 w-full flex items-center px-6 bg-gray-900 border-b border-gray-700">
      <button onClick={toggleSidebar} className="text-gray-400 hover:text-yellow-400">
        <Menu />
      </button>
      <div className="ml-4 text-xl font-bold text-white">CodiceZero</div>
    </header>
  );
}
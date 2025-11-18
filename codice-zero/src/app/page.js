import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
          Explorar la Base de Datos
        </h2>
        <div className="flex flex-col space-y-3">
          <a
            className="block p-4 border border-zinc-700 rounded-lg hover:bg-zinc-800 hover:border-zinc-600 transition-colors duration-200"
            href="#"
          >
            Link 1
          </a>
          <a
            className="block p-4 border border-zinc-700 rounded-lg hover:bg-zinc-800 hover:border-zinc-600 transition-colors duration-200"
            href="#"
          >
            Link 2
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

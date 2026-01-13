import WeaponsPageClient from './WeaponsPageClient';

export const metadata = {
  title: 'W-Engines (Armas) | Zenless Zone Zero - CodiceZero',
  description: 'Catálogo de W-Engines (Armas) de Zenless Zone Zero. Filtra por rango, rol y estadísticas.',
};

export default function WeaponsPage() {
  return <WeaponsPageClient />;
}
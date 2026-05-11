import { weapons } from '@/data/weapons';
import WeaponsPageClient from './WeaponsPageClient';

export const metadata = {
  title: 'W-Engines (Armas) | Zenless Zone Zero - CodiceZero',
  description: 'Catálogo de W-Engines (Armas) de Zenless Zone Zero. Filtra por rango, rol y estadísticas.',
};

export const dynamic = 'force-dynamic';

export default function WeaponsPage() {
  return <WeaponsPageClient weapons={weapons} />;
}
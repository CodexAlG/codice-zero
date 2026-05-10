import BetaPageClient from './BetaPageClient';

export const metadata = {
  title: 'Novedades Beta - CodiceZero',
  description: 'Explora los últimos cambios de las versiones beta para agentes, armas y discos en Zenless Zone Zero.',
};

export default function BetaPage() {
  return <BetaPageClient />;
}

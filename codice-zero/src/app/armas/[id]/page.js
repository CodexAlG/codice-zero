import dynamic from 'next/dynamic';
import { weapons } from '@/data/weapons';

const WeaponDetailClient = dynamic(() => import('./WeaponDetailClient'), {
  loading: () => <div className="text-center py-12 text-gray-300">Cargando detalles del arma...</div>,
});

export async function generateMetadata({ params }) {
  const unwrappedParams = await params;
  const weaponId = parseInt(unwrappedParams.id);
  const weapon = weapons.find(w => w.id === weaponId);

  if (!weapon) {
    return {
      title: 'Arma no encontrada | CodiceZero',
    };
  }

  return {
    title: `${weapon.name} Stats & Efectos | CodiceZero`,
    description: `Detalles completos del W-Engine ${weapon.name}: estadísticas base, efecto pasivo, materiales de ascensión y más.`,
  };
}

export default async function WeaponPage({ params }) {
  const unwrappedParams = await params;
  return <WeaponDetailClient params={unwrappedParams} />;
}
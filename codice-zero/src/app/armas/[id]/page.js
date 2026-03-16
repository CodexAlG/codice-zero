import { weapons } from '@/data/weapons';
import WeaponDetailClient from './WeaponDetailClient';

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
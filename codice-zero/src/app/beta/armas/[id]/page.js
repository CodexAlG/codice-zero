import BetaWeaponDetailClient from './BetaWeaponDetailClient';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    // Para las armas, params.id suele ser el nombre del arma en la URL
    return {
        title: `Cambios Beta: Arma ${decodeURIComponent(resolvedParams.id)} - CodiceZero`,
        description: `Detalles de los cambios beta para el arma ${decodeURIComponent(resolvedParams.id)}.`,
    };
}

export default function BetaWeaponPage() {
    return <BetaWeaponDetailClient />;
}

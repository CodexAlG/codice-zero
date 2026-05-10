import BetaDiscDetailClient from './BetaDiscDetailClient';
import { driveDiscs } from '@/data/discs';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const disc = driveDiscs.find(d => d.id.toString() === resolvedParams.id);
    return {
        title: disc ? `${disc.name} - Beta | Codice-Zero` : 'Disco No Encontrado - Beta | Codice-Zero',
    };
}

export default function BetaDiscPage() {
    return <BetaDiscDetailClient />;
}

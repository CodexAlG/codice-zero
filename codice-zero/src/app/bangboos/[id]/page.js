import { bangboos } from '@/data/bangboos';
import BangbooDetailClient from './BangbooDetailClient';

export async function generateMetadata({ params }) {
    const bangbooId = parseInt(params.id);
    const bangboo = bangboos.find(b => b.id === bangbooId);

    if (!bangboo) {
        return {
            title: 'Bangboo no encontrado | CodiceZero',
        };
    }

    return {
        title: `${bangboo.name} Info & Stats | CodiceZero`,
        description: `Descubre todo sobre el Bangboo ${bangboo.name}: facción, rareza y habilidades en CodiceZero.`,
    };
}

export default function BangbooPage({ params }) {
    return <BangbooDetailClient params={params} />;
}

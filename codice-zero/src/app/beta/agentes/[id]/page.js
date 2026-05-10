import BetaAgentDetailClient from './BetaAgentDetailClient';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    return {
        title: `Cambios Beta: Agente ${resolvedParams.id} - CodiceZero`,
        description: `Detalles de los cambios beta para el agente ${resolvedParams.id}.`,
    };
}

export default function BetaAgentPage() {
    return <BetaAgentDetailClient />;
}

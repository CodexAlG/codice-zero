import GuideDetailClient from './GuideDetailClient';

export const metadata = {
    title: 'Guía de Estrategia | CodiceZero',
    description: 'Guía de estrategia, builds y equipos para agentes de Zenless Zone Zero.',
};

export default function GuideDetailPage({ params }) {
    // En el futuro aquí validaremos params.id y cargaremos datos reales
    return <GuideDetailClient params={params} />;
}

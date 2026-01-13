import { agents } from '@/data/agents';
import AgentDetailClient from './AgentDetailClient';

export async function generateMetadata({ params }) {
  const agentId = parseInt(params.id);
  const agent = agents.find(a => a.id === agentId);

  if (!agent) {
    return {
      title: 'Agente no encontrado | CodiceZero',
    };
  }

  return {
    title: `${agent.name} Build & Guía | CodiceZero`,
    description: `Descubre la mejor build, habilidades, materiales y guía para ${agent.name} en CodiceZero. Estadísticas base, escalados y más.`,
  };
}

export default function AgentPage() {
  return <AgentDetailClient />;
}

'use client';

import { useState, useEffect } from 'react';
import { useAgents } from './useAgents';

const SHEET_ID = '15N6tbx_akqXJCtJ3SQJNtfnVJ4xi91GxCEdFVx_lbNs';

// Cache in memory for agent details
const cache = {};

function parseAgentSheetResponse(rawText, agentElement) {
  const jsonStart = rawText.indexOf('{');
  const jsonEnd = rawText.lastIndexOf('}') + 1;
  if (jsonStart === -1 || jsonEnd <= jsonStart) {
    throw new Error('No se pudo encontrar el formato JSON en la respuesta de Google Sheets. Asegúrate de que el documento es público ("Cualquier persona con el enlace puede ver").');
  }

  let json;
  try {
    json = JSON.parse(rawText.substring(jsonStart, jsonEnd));
  } catch (e) {
    throw new Error('Error al parsear los datos de la hoja. Asegúrate de que la hoja de cálculo tiene el formato correcto.');
  }

  const rows = json.table.rows;
  
  // Helpers to get formatted cell data correctly
  const getCellString = (r, c) => {
    const cell = rows[r]?.c[c];
    if (!cell) return '';
    return cell.f ?? String(cell.v ?? '');
  };

  const getCellNumber = (r, c) => {
    const cell = rows[r]?.c[c];
    if (!cell) return 0;
    const v = Number(cell.v ?? 0);
    const f = String(cell.f ?? '');
    if (f.endsWith('%')) {
      return v * 100;
    }
    return v;
  };

  // Find row indices dynamically by searching for headers
  let statsRowIndex = -1;
  let coreStatRowIndex = -1;
  let coreScalingRowIndex = -1;
  let materialsRowIndex = -1;
  let skillsHeaderRowIndex = -1;

  for (let r = 0; r < rows.length; r++) {
    const col0 = String(rows[r]?.c[0]?.v ?? '').trim();
    if (col0 === 'hp_min') {
      statsRowIndex = r + 1;
    } else if (col0 === 'coreStatName') {
      coreStatRowIndex = r + 1;
    } else if (col0 === 'coreSkillScaling') {
      coreScalingRowIndex = r;
    } else if (col0 === 'weeklyBoss') {
      materialsRowIndex = r + 1;
    } else if (col0 === 'type') {
      const col1 = String(rows[r]?.c[1]?.v ?? '').trim();
      if (col1 === 'name') {
        skillsHeaderRowIndex = r;
      }
    }
  }

  // 1. Base Stats
  const hpMin = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 0) : 0;
  const hpMax = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 1) : 0;
  const atkMin = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 2) : 0;
  const atkMax = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 3) : 0;
  const defMin = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 4) : 0;
  const defMax = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 5) : 0;
  const impact = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 6) : 0;
  const crit = statsRowIndex !== -1 ? getCellString(statsRowIndex, 7) : '0%';
  const critDmg = statsRowIndex !== -1 ? getCellString(statsRowIndex, 8) : '0%';
  const anomalyRate = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 9) : 0;
  const anomalyMastery = statsRowIndex !== -1 ? getCellNumber(statsRowIndex, 10) : 0;
  const penRatio = statsRowIndex !== -1 ? getCellString(statsRowIndex, 11) : '0%';
  const energyRegen = statsRowIndex !== -1 ? getCellString(statsRowIndex, 12) : '0';

  // 2. Core Stats
  const coreStatName = coreStatRowIndex !== -1 ? getCellString(coreStatRowIndex, 0) : '';
  const coreValuePerNode = coreStatRowIndex !== -1 ? getCellNumber(coreStatRowIndex, 1) : 0;

  // 3. Core Skill Scaling
  let coreSkillScaling = [];
  if (coreScalingRowIndex !== -1) {
    try {
      const rawScaling = getCellString(coreScalingRowIndex, 1);
      if (rawScaling) {
        coreSkillScaling = JSON.parse(rawScaling);
      }
    } catch (e) {
      console.error('Error parsing coreSkillScaling:', e);
    }
  }

  // 4. Materials
  const weeklyBossName = materialsRowIndex !== -1 ? getCellString(materialsRowIndex, 0) : '';
  const eliteBossName = materialsRowIndex !== -1 ? getCellString(materialsRowIndex, 1) : '';

  // 5. Skills & Mindscapes (starting after skills header)
  const skills = [];
  if (skillsHeaderRowIndex !== -1) {
    for (let r = skillsHeaderRowIndex + 1; r < rows.length; r++) {
      const type = getCellString(r, 0);
      const name = getCellString(r, 1);
      const description = getCellString(r, 2);
      const tagsRaw = getCellString(r, 3);

      if (!name) continue;

      const tags = tagsRaw ? String(tagsRaw).split(',').map(t => t.trim()) : [agentElement];

      skills.push({
        type: String(type).trim(),
        name: String(name).trim(),
        description: String(description).trim(),
        tags
      });
    }
  }

  return {
    baseStats: {
      hp: { min: hpMin, max: hpMax },
      atk: { min: atkMin, max: atkMax },
      def: { min: defMin, max: defMax },
      impact,
      crit,
      critDmg,
      anomalyRate: Number(anomalyRate),
      anomalyMastery: Number(anomalyMastery),
      penRatio,
      energyRegen,
    },
    coreStats: {
      statName: String(coreStatName),
      valuePerNode: Number(coreValuePerNode)
    },
    materials: {
      weeklyBoss: { name: String(weeklyBossName), icon: "" },
      eliteBoss: { name: String(eliteBossName), icon: "" }
    },
    coreSkillScaling,
    skills
  };
}

export function useAgentDetails(agentId) {
  const { agents, loading: agentsLoading } = useAgents();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (agentsLoading || !agentId) return;

    const agent = agents.find(a => a.id === agentId);
    if (!agent) {
      setError(new Error(`Agent with id ${agentId} not found`));
      setLoading(false);
      return;
    }

    // Check cache
    if (cache[agentId]) {
      setDetails(cache[agentId]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const sheetName = agent.name;
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;

    fetch(url, { credentials: 'omit' })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then(rawText => {
        if (cancelled) return;
        const parsed = parseAgentSheetResponse(rawText, agent.element);
        cache[agentId] = parsed;
        setDetails(parsed);
        setLoading(false);
      })
      .catch(err => {
        if (cancelled) return;
        console.error(`Error loading details for agent ${agent.name}:`, err);
        setError(err);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [agentId, agents, agentsLoading]);

  return { details, loading, error };
}

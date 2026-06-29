'use client';

import { useState, useEffect } from 'react';

const SHEET_ID = '15N6tbx_akqXJCtJ3SQJNtfnVJ4xi91GxCEdFVx_lbNs';

// Cache en memoria por tabName
const cache = {};

/**
 * Fetcha una pestaña del Sheet por nombre y devuelve las filas como arrays
 */
async function fetchSheetTab(tabName) {
  if (cache[tabName]) return cache[tabName];

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error fetching sheet tab "${tabName}": ${response.status}`);

  const rawText = await response.text();
  const jsonStart = rawText.indexOf('{');
  const jsonEnd = rawText.lastIndexOf('}') + 1;
  const json = JSON.parse(rawText.substring(jsonStart, jsonEnd));

  const rows = (json.table?.rows || []).map(row =>
    (row.c || []).map(cell => {
      if (!cell) return '';
      // Si la celda está formateada como porcentaje, preferimos el valor formateado 'f' para conservar el '%'
      if (cell.f && String(cell.f).endsWith('%')) {
        return cell.f;
      }
      return cell.v ?? '';
    })
  );

  cache[tabName] = rows;
  return rows;
}

/**
 * Busca el índice de una sección por su label en columna A
 */
function findSectionIndex(rows, sectionLabel) {
  return rows.findIndex(row =>
    String(row[0] || '').trim().toUpperCase() === sectionLabel.toUpperCase()
  );
}

/**
 * Extrae la fila de datos justo debajo del header de columnas de una sección
 * sectionLabel → fila de etiqueta
 * +1 → header de columnas
 * +2 → primera fila de datos
 */
function getSectionDataRow(rows, sectionLabel) {
  const idx = findSectionIndex(rows, sectionLabel);
  if (idx === -1) return null;
  return rows[idx + 2] || null;
}

/**
 * Extrae todas las filas de datos de una sección hasta la siguiente
 */
function getSectionRows(rows, sectionLabel, nextSectionLabel) {
  const startIdx = findSectionIndex(rows, sectionLabel);
  if (startIdx === -1) return [];

  let endIdx = rows.length;
  if (nextSectionLabel) {
    const next = findSectionIndex(rows.slice(startIdx + 1), nextSectionLabel);
    if (next !== -1) endIdx = startIdx + 1 + next;
  }

  // +2 para saltar label y header de columnas
  return rows.slice(startIdx + 2, endIdx).filter(row =>
    row.some(cell => cell !== '' && cell !== null && cell !== undefined)
  );
}

/**
 * Parsea las filas del Sheet al formato esperado por AgentDetailClient
 */
function parseAgentDetails(rows) {
  // ── STATS BASE ──
  const statsRow = getSectionDataRow(rows, 'STATS BASE');
  const baseStats = statsRow ? {
    hp:             { min: Number(statsRow[0]) || 0, max: Number(statsRow[1]) || 0 },
    atk:            { min: Number(statsRow[2]) || 0, max: Number(statsRow[3]) || 0 },
    def:            { min: Number(statsRow[4]) || 0, max: Number(statsRow[5]) || 0 },
    impact:         Number(statsRow[6]) || 0,
    crit:           String(statsRow[7] || '5%'),
    critDmg:        String(statsRow[8] || '50%'),
    anomalyRate:    String(statsRow[9] || '0'),
    anomalyMastery: String(statsRow[10] || '0'),
    penRatio:       String(statsRow[11] || '0%'),
    energyRegen:    String(statsRow[12] || '1.2'),
  } : null;

  // ── CORE STAT ──
  const coreIdx = findSectionIndex(rows, 'CORE STAT');
  const coreDataRow = coreIdx !== -1 ? rows[coreIdx + 2] : null;
  const coreScalingRow = coreIdx !== -1 ? rows[coreIdx + 3] : null;

  const coreStats = coreDataRow ? {
    statName:     String(coreDataRow[0] || ''),
    valuePerNode: Number(coreDataRow[1]) || 0,
  } : null;

  let coreSkillScaling = [];
  if (coreScalingRow && coreScalingRow[1]) {
    try {
      coreSkillScaling = JSON.parse(String(coreScalingRow[1]));
    } catch {
      coreSkillScaling = [];
    }
  }

  // ── MATERIALES ──
  const matRow = getSectionDataRow(rows, 'MATERIALES');
  const materials = matRow ? {
    weeklyBoss: { name: String(matRow[0] || ''), icon: '' },
    eliteBoss:  { name: String(matRow[1] || ''), icon: '' },
  } : null;

  // ── POTENCIAL (solo algunos agentes lo tienen) ──
  const potentialIdx = findSectionIndex(rows, 'POTENCIAL');
  let potential = null;
  let potentialSkillScaling = [];

  if (potentialIdx !== -1) {
    const potentialDataRow = rows[potentialIdx + 2];
    if (potentialDataRow && potentialDataRow[0]) {
      potential = {
        name:        String(potentialDataRow[0] || ''),
        description: String(potentialDataRow[1] || ''),
      };
    }

    // POTENTIAL SCALING — cada fila es un nivel, columnas son los valores
    const scalingIdx = findSectionIndex(rows, 'POTENTIAL SCALING');
    if (scalingIdx !== -1) {
      // Filas de datos empiezan en scalingIdx + 2 (saltar label y header)
      const scalingRows = rows.slice(scalingIdx + 2).filter(row =>
        row.some(cell => cell !== '' && cell !== null && cell !== undefined)
      );
      potentialSkillScaling = scalingRows.map(row =>
        row.filter(cell => cell !== '' && cell !== null && cell !== undefined)
           .map(cell => String(cell))
      );
    }
  }

  // ── SKILLS ──
  const skillRows = getSectionRows(rows, 'SKILLS', 'MINDSCAPES');
  const skills = skillRows
    .map(row => ({
      type:        String(row[0] || ''),
      name:        String(row[1] || ''),
      description: String(row[2] || ''),
      tags:        row[3] ? String(row[3]).split(',').map(t => t.trim()) : [],
    }))
    .filter(s => s.type && s.name);

  // ── MINDSCAPES ──
  const mindscapeRows = getSectionRows(rows, 'MINDSCAPES', null);
  const mindscapes = mindscapeRows
    .map(row => ({
      type:        String(row[0] || ''),
      name:        String(row[1] || ''),
      description: String(row[2] || ''),
      tags:        row[3] ? String(row[3]).split(',').map(t => t.trim()) : [],
    }))
    .filter(m => m.type && m.name);

  return {
    baseStats,
    coreStats,
    coreSkillScaling,
    materials,
    potential,
    potentialSkillScaling,
    skills: [...skills, ...mindscapes],
  };
}

/**
 * Obtiene el nombre de la pestaña del agente consultando la pestaña Agentes
 */
async function getAgentTabName(agentId) {
  const rows = await fetchSheetTab('Agentes');
  const agentRow = rows.find(row => Number(row[0]) === agentId);
  return agentRow ? String(agentRow[1]) : null;
}

/**
 * Fetcha los detalles completos de un agente desde su pestaña en Sheets
 */
export async function fetchAgentDetails(agentId) {
  const tabName = await getAgentTabName(agentId);
  if (!tabName) throw new Error(`No se encontró agente con id ${agentId}`);
  const rows = await fetchSheetTab(tabName);
  return parseAgentDetails(rows);
}

/**
 * Hook React para usar en AgentDetailClient
 */
export function useAgentDetails(agentId) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!agentId) return;
    let cancelled = false;

    setLoading(true);
    setDetails(null);
    setError(null);

    fetchAgentDetails(agentId)
      .then(data => {
        if (!cancelled) {
          setDetails(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          console.error('Error cargando detalles del agente:', err);
          setError(err);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [agentId]);

  return { details, loading, error };
}

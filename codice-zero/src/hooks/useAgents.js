'use client';

import { useState, useEffect } from 'react';

const SHEET_ID = '15N6tbx_akqXJCtJ3SQJNtfnVJ4xi91GxCEdFVx_lbNs';
const SHEET_NAME = 'Agentes';

// Cache en memoria para la sesión
let cachedAgents = null;
let cacheTimestamp = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

/**
 * Parsea la respuesta de Google Sheets gviz/tq al formato esperado por la app
 */
function parseSheetResponse(rawText) {
  // La respuesta de gviz viene como: google.visualization.Query.setResponse({...})
  // Necesitamos extraer el JSON del interior
  const jsonStart = rawText.indexOf('{');
  const jsonEnd = rawText.lastIndexOf('}') + 1;
  const json = JSON.parse(rawText.substring(jsonStart, jsonEnd));

  const rows = json.table.rows;

  return rows
    .filter(row => row.c && row.c[0]?.v) // Filtrar filas vacías
    .map(row => {
      const get = (i) => row.c[i]?.v ?? '';
      return {
        id: Number(get(0)),
        name: String(get(1)),
        rank: String(get(2)),
        element: String(get(3)),
        elementColor: String(get(4)),
        rol: String(get(5)),
        faction: String(get(6)),
        leak: String(get(7)),
        version: String(get(8)),
        image: String(get(9)),
        customStyle: String(get(10)),
      };
    });
}

/**
 * Fetcha los agentes desde Google Sheets con cache en memoria
 */
export async function fetchAgents() {
  // Revisar cache
  const now = Date.now();
  if (cachedAgents && cacheTimestamp && (now - cacheTimestamp) < CACHE_TTL) {
    return cachedAgents;
  }

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error fetching agents: ${response.status}`);

  const rawText = await response.text();
  const agents = parseSheetResponse(rawText);

  // Guardar en cache
  cachedAgents = agents;
  cacheTimestamp = now;

  return agents;
}

/**
 * Hook React para usar en componentes cliente
 */
export function useAgents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchAgents()
      .then(data => {
        if (!cancelled) {
          setAgents(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          console.error('Error cargando agentes desde Sheets:', err);
          setError(err);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, []);

  return { agents, loading, error };
}
'use client';

import { useState, useEffect } from 'react';

const SHEET_ID = '15N6tbx_akqXJCtJ3SQJNtfnVJ4xi91GxCEdFVx_lbNs';
const SHEET_NAME = 'Armas';

// In-session cache
let cachedWeapons = null;
let cacheTimestamp = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function parseWeaponsResponse(rawText) {
  const jsonStart = rawText.indexOf('{');
  const jsonEnd = rawText.lastIndexOf('}') + 1;
  if (jsonStart === -1 || jsonEnd <= jsonStart) {
    throw new Error('No se pudo encontrar el formato JSON en la respuesta de Google Sheets.');
  }

  const json = JSON.parse(rawText.substring(jsonStart, jsonEnd));
  const rows = json.table.rows;

  return rows
    .filter(row => row.c && row.c[0]?.v) // Skip empty rows
    .map(row => {
      const getCellString = (c) => {
        const cell = row.c[c];
        if (!cell) return '';
        return cell.f ?? String(cell.v ?? '');
      };

      const getCellNumber = (c) => {
        const cell = row.c[c];
        if (!cell) return 0;
        const v = Number(cell.v ?? 0);
        const f = String(cell.f ?? '');
        if (f.endsWith('%')) {
          return v * 100;
        }
        return v;
      };

      const id = getCellNumber(0);
      const name = getCellString(1);
      const rank = getCellString(2);
      const rol = getCellString(3);
      const leak = getCellString(4);
      const baseAtkMin = getCellNumber(5);
      const baseAtkMax = getCellNumber(6);
      const subStatName = getCellString(7);
      const subStatMin = getCellString(8);
      const subStatMax = getCellString(9);
      const effectTitle = getCellString(10);
      const effectDescription = getCellString(11);
      
      let refinements = [];
      try {
        const rawRefinements = getCellString(12);
        if (rawRefinements) {
          refinements = JSON.parse(rawRefinements);
        }
      } catch (e) {
        console.error('Error parsing refinements:', e);
      }

      const image = getCellString(13);
      const exclusiveAgentName = getCellString(14);
      const exclusiveAgentIcon = getCellString(15);

      return {
        id,
        name,
        rank,
        rol,
        leak,
        stats: {
          main: subStatName,
          value: subStatMax
        },
        detailStats: {
          baseAtk: { min: baseAtkMin, max: baseAtkMax },
          subStat: { name: subStatName, min: subStatMin, max: subStatMax }
        },
        effect: {
          title: effectTitle,
          description: effectDescription,
          refinements
        },
        image,
        exclusiveAgent: exclusiveAgentName ? {
          name: exclusiveAgentName,
          icon: exclusiveAgentIcon
        } : null
      };
    });
}

export async function fetchWeapons() {
  const now = Date.now();
  if (cachedWeapons && cacheTimestamp && (now - cacheTimestamp) < CACHE_TTL) {
    return cachedWeapons;
  }

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;

  const response = await fetch(url, { credentials: 'omit' });
  if (!response.ok) throw new Error(`Error fetching weapons: ${response.status}`);

  const rawText = await response.text();
  const weapons = parseWeaponsResponse(rawText);

  cachedWeapons = weapons;
  cacheTimestamp = now;

  return weapons;
}

export function useWeapons() {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchWeapons()
      .then(data => {
        if (!cancelled) {
          setWeapons(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          console.error('Error loading weapons from Sheets:', err);
          setError(err);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, []);

  return { weapons, loading, error };
}

import { diffWords } from 'diff';

/**
 * Compares two text strings and returns diff tokens
 * @param {string} oldText - The original text
 * @param {string} newText - The new text to compare
 * @returns {Array} Array of diff tokens with added/removed flags
 */
export function compareText(oldText, newText) {
  if (!oldText || !newText) return [];
  return diffWords(String(oldText), String(newText));
}

/**
 * Compares two numeric values and determines if it's a buff or nerf
 * @param {number|string} oldValue - The original value
 * @param {number|string} newValue - The new value
 * @returns {Object} Object with status ('buff', 'nerf', 'unchanged') and values
 */
export function compareNumber(oldValue, newValue) {
  const oldNum = parseFloat(String(oldValue).replace(/[^0-9.-]/g, ''));
  const newNum = parseFloat(String(newValue).replace(/[^0-9.-]/g, ''));
  
  if (isNaN(oldNum) || isNaN(newNum)) {
    return { status: 'unchanged', oldValue, newValue };
  }
  
  if (newNum > oldNum) {
    return { status: 'buff', oldValue, newValue, difference: newNum - oldNum };
  } else if (newNum < oldNum) {
    return { status: 'nerf', oldValue, newValue, difference: oldNum - newNum };
  }
  
  return { status: 'unchanged', oldValue, newValue };
}

/**
 * Renders diff tokens as React elements with appropriate styling
 * @param {Array} diffTokens - Array of diff tokens from diffWords
 * @param {string} side - 'left' or 'right' to determine which column
 * @returns {Array} Array of React elements
 */
export function renderDiffText(diffTokens, side = 'left') {
  if (!diffTokens || diffTokens.length === 0) return [];
  
  return diffTokens.map((part, index) => {
    // For left side (before)
    if (side === 'left') {
      if (part.removed) {
        return (
          <span key={index} className="diff-removed">
            {part.value}
          </span>
        );
      } else if (!part.added) {
        return (
          <span key={index} className="diff-unchanged">
            {part.value}
          </span>
        );
      }
      // Don't show added parts on left side
      return null;
    }
    
    // For right side (after)
    if (side === 'right') {
      if (part.added) {
        return (
          <span key={index} className="diff-added">
            {part.value}
          </span>
        );
      } else if (!part.removed) {
        return (
          <span key={index} className="diff-unchanged">
            {part.value}
          </span>
        );
      }
      // Don't show removed parts on right side
      return null;
    }
    
    return null;
  }).filter(Boolean);
}

/**
 * Extracts numbers from text and returns an array of found numbers with their positions
 * @param {string} text - Text to search for numbers
 * @returns {Array} Array of objects with number value and position
 */
export function extractNumbers(text) {
  if (!text) return [];
  
  const numberRegex = /(\d+\.?\d*%?)/g;
  const matches = [];
  let match;
  
  while ((match = numberRegex.exec(text)) !== null) {
    matches.push({
      value: match[1],
      index: match.index,
      length: match[1].length
    });
  }
  
  return matches;
}

/**
 * Compares text with number highlighting
 * Returns text segments with number comparison metadata
 * @param {string} oldText - Original text
 * @param {string} newText - New text
 * @returns {Object} Object with left and right segments including number comparisons
 */
export function compareTextWithNumbers(oldText, newText) {
  const oldNumbers = extractNumbers(oldText);
  const newNumbers = extractNumbers(newText);
  
  // Simple implementation: if texts are identical except for numbers, highlight the numbers
  // For more complex cases, use the diff tokens
  const diffTokens = compareText(oldText, newText);
  
  return {
    diffTokens,
    oldNumbers,
    newNumbers
  };
}

/**
 * Renders a number with color coding based on change
 * @param {number|string} value - The number value to display
 * @param {string} status - 'buff', 'nerf', or 'unchanged'
 * @returns {JSX.Element} Styled span element
 */
export function renderNumberChange(value, status) {
  const className = status === 'buff' 
    ? 'number-buff' 
    : status === 'nerf' 
    ? 'number-nerf' 
    : 'number-unchanged';
  
  return (
    <span className={className}>
      {value}
    </span>
  );
}

/**
 * Compares two skill objects and returns comparison metadata
 * @param {Object} oldSkill - Original skill data
 * @param {Object} newSkill - New skill data
 * @returns {Object} Comparison metadata
 */
export function compareSkills(oldSkill, newSkill) {
  if (!oldSkill || !newSkill) return null;
  
  return {
    name: {
      changed: oldSkill.name !== newSkill.name,
      diffTokens: compareText(oldSkill.name || '', newSkill.name || '')
    },
    description: {
      changed: oldSkill.description !== newSkill.description,
      diffTokens: compareText(oldSkill.description || '', newSkill.description || '')
    },
    type: {
      changed: oldSkill.type !== newSkill.type,
      old: oldSkill.type,
      new: newSkill.type
    }
  };
}

/**
 * Compares two stat objects
 * @param {Object} oldStats - Original stats
 * @param {Object} newStats - New stats
 * @returns {Object} Comparison of each stat
 */
export function compareStats(oldStats, newStats) {
  if (!oldStats || !newStats) return {};
  
  const allKeys = new Set([...Object.keys(oldStats), ...Object.keys(newStats)]);
  const comparison = {};
  
  allKeys.forEach(key => {
    const oldValue = oldStats[key];
    const newValue = newStats[key];
    
    if (oldValue !== newValue) {
      comparison[key] = compareNumber(oldValue, newValue);
    } else {
      comparison[key] = { status: 'unchanged', oldValue, newValue };
    }
  });
  
  return comparison;
}

import fs from 'fs';
import path from 'path';

export interface BibtexEntry {
  id: string;
  type: string;
  fields: Record<string, string>;
}

/**
 * Parse a BibTeX file and return entries indexed by their ID
 */
export function parseBibtex(filePath: string): Map<string, BibtexEntry> {
  const fullPath = path.join(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  const entries = new Map<string, BibtexEntry>();

  // Simple BibTeX parser
  // Matches entries like @article{id, ... }
  const entryRegex = /@(\w+)\s*\{\s*([^,]+)\s*,\s*([^}]+(?:\{[^}]*\}[^}]*)*)\s*\}/g;
  let match;

  while ((match = entryRegex.exec(content)) !== null) {
    const type = match[1];
    const id = match[2].trim();
    const fieldsString = match[3];

    const fields: Record<string, string> = {};
    
    // Parse fields (key = value,)
    const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}/g;
    let fieldMatch;
    
    while ((fieldMatch = fieldRegex.exec(fieldsString)) !== null) {
      const key = fieldMatch[1].trim();
      const value = fieldMatch[2].trim();
      fields[key] = value;
    }

    entries.set(id, {
      id,
      type,
      fields,
    });
  }

  return entries;
}

/**
 * Get a citation by ID from the BibTeX file
 */
export function getCitation(id: string, bibtexPath: string = 'data/citations.bibtex'): BibtexEntry | null {
  try {
    const entries = parseBibtex(bibtexPath);
    return entries.get(id) || null;
  } catch (error) {
    console.error(`Error reading citation ${id}:`, error);
    return null;
  }
}

/**
 * Format a BibTeX entry as a citation string
 */
export function formatCitation(entry: BibtexEntry): string {
  const { fields, type } = entry;
  
  // Basic formatting based on entry type
  if (type === 'article') {
    const author = fields.author || '';
    const title = fields.title || '';
    const journal = fields.journal || '';
    const year = fields.year || '';
    return `${author}. "${title}." ${journal} (${year}).`;
  }
  
  if (type === 'book') {
    const author = fields.author || '';
    const title = fields.title || '';
    const publisher = fields.publisher || '';
    const year = fields.year || '';
    return `${author}. ${title}. ${publisher}, ${year}.`;
  }
  
  // Default format: just concatenate key fields
  const parts: string[] = [];
  if (fields.author) parts.push(fields.author);
  if (fields.title) parts.push(`"${fields.title}"`);
  if (fields.year) parts.push(`(${fields.year})`);
  
  return parts.join('. ') + '.';
}

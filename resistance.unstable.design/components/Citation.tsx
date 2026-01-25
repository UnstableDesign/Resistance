import { getCitation, formatCitation } from '@/lib/bibtex';

interface CitationProps {
  id: string;
  bibtexPath?: string;
}

export default function Citation({ id, bibtexPath }: CitationProps) {
  const entry = getCitation(id, bibtexPath);

  if (!entry) {
    return <span className="citation">[Citation not found: {id}]</span>;
  }

  const formatted = formatCitation(entry);

  return <span className="citation">{formatted}</span>;
}

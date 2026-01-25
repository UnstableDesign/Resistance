import Footnote from './Footnote';

interface FootnoteItem {
  id: number;
  text: string;
}

interface TextWithFootnotesProps {
  children: React.ReactNode;
  footnotes: FootnoteItem[];
}

export default function TextWithFootnotes({ children, footnotes }: TextWithFootnotesProps) {
  return (
    <div className="text-with-footnotes grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <div className="text-content font-kyokasho">
        {children}
      </div>
      <div className="footnotes-column">
        {footnotes.map((footnote) => (
          <Footnote key={footnote.id} id={footnote.id} text={footnote.text} />
        ))}
      </div>
    </div>
  );
}

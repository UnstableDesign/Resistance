interface FootnoteProps {
    id: number;
    text: string;
}

export default function Footnote({ text }: FootnoteProps) {
    return <div className="footnote">{text}</div>;
}

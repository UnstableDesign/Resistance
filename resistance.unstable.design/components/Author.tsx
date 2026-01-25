interface AuthorProps {
    name: string;
}

export default function Author({ name }: AuthorProps) {
    return <div className="text-black font-bold font-inconsolata">{name}</div>;
}

import Link from "next/link";

interface Chapter {
  title: string;
  url: string;
  author: string;
}


export const chapters = [
  { title: "Resistance", url: "/resistance", author: "Poppy DeltaDawn" },
  { title: "What the warp remembers", url: "/what-the-warp-remembers", author: "Steven Frost" },
  { title: "On Designing A Warp", url: "/on-designing-a-warp", author: "Etta Sandry" },
  { title: "On sectionally warping \& beaming the TC2 loom", url: "/on-sectionally-warping", author: "Poppy DeltaDawn" },
  { title: "On Designing with AdaCAD", url: "/on-designing-with-adacad", author: "Laura Devendorf" },
  { title: "On Designing Templates for Photoshop", url: "/on-designing-templates-for-photoshop", author: "Poppy DeltaDawn" }
]

export default function ToC() {
  return (
    <div className="toc text-black text-left">
      <div className="pl-12  flex flex-col gap-4">
        {chapters.map((chapter, index) => (
          <Link href={chapter.url} key={index} scroll={false}>
            <p className="font-inconsolata text-xl font-bold">{index + 1}. {chapter.title}</p>
            <p className="pl-12 font-inconsolata font-style-italic text-xs">{chapter.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

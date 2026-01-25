import Link from "next/link";

export default function Title() {
    return (
        <div className="w-full">
            <Link href="/home" scroll={true} className="w-full">
                <div className="pl-8 w-full font-inconsolata text-black text-2xl font-semibold">
                    RESISTANCE
                </div>
                <div className="text-left w-full px-16 text-2xl font-inconsolata font-semibold text-red">
                    Digital Weaving to Save the World
                </div>
            </Link>
        </div>
    );
}

import Author from "@/components/Author";
import Authors from "@/components/Authors";
import Image from "next/image";
export default function TitlePage() {
    return (
        <section id="title-page" className="flex flex-col gap-4 w-full min-h-screen bg-white ">


            <div className="w-2/3 mx-auto">
                <div className="py-12">
                    <Authors />
                </div>

                <div className="title-page-content text-red decoration-underline font-inconsolata flex flex-col gap-2">
                    <span className="text-red text-style-underline  underline">Deep gratitude and special thanks are owed to:</span>
                </div>
                <ul className="list-style-disc list-inside font-inconsolata text-black">
                    <li className="pl-10"><span className="text-red">✸</span> Lily Gabriel, Undergraduate Research Assistant at Unstable Design Lab</li>
                    <li><span className="text-red">✸</span> Joel Swanson, Associate Professor & Director of TYPO Lab (Atlas Institute)</li>
                    <li className="pl-10"><span className="text-red">✸</span> Mimi Shalf, PhD, Information Technology, ATLAS institute, & Riso whisperer</li>
                    <li><span className="text-red">✸</span>Vibeke Vestby, inventor of the Thread Controller loom</li>
                    <li className="pl-10"><span className="text-red">✸</span> Bhakti Ziek & Alice Schlein, co-authors of the Woven Pixel</li>
                    <li><span className="text-red">✸</span> BTU Lab (Atlas Institute)</li>
                    <li className="pl-10"><span className="text-red">✸</span> Printmaking at University of Kansas</li>
                    <li> & most importantly: all our teachers</li>
                </ul>


                <ul className="list-style-square py-12 list-inside font-inconsolata flex flex-col gap-12 text-black">
                    <li><span className="text-red">✸</span> Resistance is a hand-made Risograph publication by Poppy DeltaDawn at the Unstable Design Lab, ATLAS Institute within the University of Colorado, Boulder, and University of Kansas Printmaking.</li>
                    <li className="text-red pl-10"> ✸ You are viewing the digital version, enjoy!</li>



                    <li><span className="text-red">✸</span> an edition of 40 risograph books and 50 digitally printed books were printed</li>

                    <li className="pl-10"><span className="text-red">✸</span> Resistance was conceived of and designed by Poppy DeltaDawn, and is a collaboration between her and Unstable Design Lab members Laura Devendorf, Steven Frost, and Etta Sandry.</li>
                    <li><span className="text-red">✸</span> Digital Weaving to Save the World is an ongoing printmedia series developed by Poppy DeltaDawn. This is the second segment.</li>
                    <li className="pl-10"><span className="text-red">✸</span> Made during the artist's <a className="underline underline-color-red" href="https://unstable.design/residency/" target="_blank">Experimental Weaving Artist Residency</a> hosted by Unstable Design Lab.</li>


                </ul>


            </div>

            <div className="w-full flex flex-row gap-4 flex-wrap justify-center items-center">

                <Image src="/Picture1.png" alt="Picture 1" width={200} height={200} />
                <Image src="/Picture2.png" alt="Picture 1" width={200} height={200} />

            </div>

            <div className="w-1/2 mx-auto pb-12">
                <ul className=" font-inconsolata text-black text-center">
                    <li>_infinity_ /50,   Spring 2025</li>

                    <li>The digital version of this project is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</li>
                </ul>
            </div>



        </section>
    );
}
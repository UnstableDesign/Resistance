import Author from "@/components/Author";
import Image from "next/image";
export default function OnDesigningAWarp() {
    return (

        <section id="on-designing-a-warp" className="flex flex-col gap-4 py-12 bg-white min-h-screen border-t-2 border-red">
            <div className="resistance-content mx-auto flex flex-col gap-4">
                <div className="chapter-header w-2/3 mx-auto">
                    <div className="font-inconsolata text-2xl  mx-auto font-bold text-red">Chapter 3: On Designing a Warp</div>
                    <Author name="Etta Sandry" />
                </div>
                <div className="flex w-2/3 mx-auto flex-col gap-6 font-kyokasho text-black">
                    As the last of our sixty yards of white warp came into view and the arrival of our 2025 Experimental Weaver in Residence, Poppy DeltaDawn, drew closer, Laura and I sat down in the Unstable Design Lab to plan our next warp. We were venturing into (for us) uncharted territory: a multi-colored threading pattern. We wanted to try something a little more fun than a black and white end-on-end warp, but I was apprehensive about getting too ambitious before understanding how the structures and design on a multi-color jacquard warp would work. We pulled out the thread sample cards and started pinching threads together, discussing their merits and color associations like sports teams, holidays, and the style choices of our youth.
                </div>

                <Image className="w-full object-cover" src="/DesigningWarp/1.jpg" alt="Designing a warp" width={500} height={500} />

                <div className="flex w-2/3 py-12 mx-auto flex-col gap-6 font-kyokasho text-black">
                    You can test out striping patterns and color combinations for your warp by drawing color bands using colored pencils or markers. The templates below have one inch and once centimeter markings, so you can try out some color repeats. Match to your yarn selection and take notes on thread colors/sources under each band.
                </div>


                <Image className="w-7/8 mx-auto object-cover" src="/DesigningWarp/2.png" alt="Designing a warp" width={500} height={500} />

                <a
                    href="/DesigningWarp/WarpTemplate.jpg"
                    download="warpingTemplate.jpg"
                    className="font-inconsolata text-white bg-red p-2 mb-12 rounded-md w-1/3 mx-auto text-center top-100 left-4"
                    aria-label="Download warping template"
                >
                    Download Warping Template 🖨️
                </a>

                <div className="flex w-2/3 mx-auto flex-col gap-6 font-kyokasho text-black py-12">
                    To maintain the tonal contrast that black and white offers, but with a pop of color, we drew from Dorothy Liebes’s design formula of ‘a light, a bright, and a dark,’ envisioning an end-on-end warp of light and dark threads, interspersed with stripes of a brighter color. I sketched out some promising combinations with colored pencils and graph paper and we ordered some spools of various colors to test through thread wrapping before making final decisions. One morning, Laura came into the lab after a morning swim, inspired by the pool’s pale blue water and black center lines of the lanes. These became our base colors, with stripes of four scarlet red ends every inch.
                </div>
                <Image className="w-1/3 mx-auto object-cover" src="/DesigningWarp/3.jpg" alt="Designing a warp" width={500} height={500} />
            </div>
        </section >
    );
}
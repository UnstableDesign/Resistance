import Image from "next/image";
import Link from "next/link";


const models = [
    {
        name: "Bobbin",
        image: "/models/Shuttle_Bobbin_Gif.gif",
        url: "https://github.com/UnstableDesign/Resistance/blob/main/Bobbin/",
    },
    {
        name: "Mini Bobbin",
        image: "/models/Shuttle_Bobbin_Short.gif",
        url: "https://github.com/UnstableDesign/Resistance/blob/main/Mini_Bobbin/",
    },
    {
        name: "Warp Guide",
        image: "/models/Warp_Beam_Guide_Gif.gif",
        url: "https://github.com/UnstableDesign/Resistance/blob/main/Sectional_Warp_Guide/",
    },
    {
        name: "Warp Spool",
        image: "/models/Warp_Spool_Gif.gif",
        url: "https://github.com/UnstableDesign/Resistance/tree/main/Warp_Spool/",
    }
]

export default function Models() {

    return (

        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white justify-between gap-4">

            {models.map((model, index) => (
                <div className="model-item w-full" key={index}>
                    <a href={model.url} key={index}>
                        <div className="model-item-image">
                            <Image src={model.image} alt="Model 1" width={400} height={400} />
                        </div>
                        <div className="model-item-title text-black">{model.name}</div>
                    </a>
                </div>
            ))}


        </div>
    );
}

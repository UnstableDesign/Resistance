import Image from "next/image";
import Resistance from "../chapters/1_resistance";
import WhatTheWarpRemembers from "../chapters/2_what_the_warp_remembers";
import TitlePage from "../chapters/0_title";
import Title from "@/components/Title";
import ToC from "@/components/ToC";
import Models from "@/components/Models";
import OnDesigningAWarp from "../chapters/3_on_designing_a_warp";
import OnSectionallyWarping from "../chapters/4_on_sectionally_warping";
import Authors from "@/components/Authors";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import OnDesigningWithAdaCAD from "../chapters/5_on_designing_with_adacad";




export default function Home() {
  const bannerText = "Now with 3D Printable Models!";
  const repeatedText = Array(10).fill(bannerText).join(" ✸ ");

  return (

    <div className="flex min-h-screen font-inconsolata items-center justify-center font-sans dark:bg-black">
      <ScrollProgressIndicator />

      <main className="flex flex-col items-center justify-between sm:items-start">
        <div className="banner-container bg-red w-full overflow-hidden">
          <div className="banner-scroll">
            <span className="banner-text">{repeatedText}</span>
          </div>
        </div>


        <section id="home" className="home w-full">


          <div className="title-container min-h-screen w-full p-12">
            <Title />
            <Authors />
          </div>
        </section>


        <section id="title-page" className="w-full min-h-screen ">

          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white">

            <div className="w-full p-12 col-span-2">
              <ToC />
            </div>
            <div className="w-full p-12 col-span-2 align-middle justify-center ">
              <div className="flex justify-left py-12 text-l text-red font-bold font-inconsolata">Free 3D Models! </div>
              <Models />
            </div>


          </div>
          <div className="w-full border-t-2 border-red">
            <TitlePage />
          </div>



        </section>









        <Resistance />
        <WhatTheWarpRemembers />
        <OnDesigningAWarp />
        <OnSectionallyWarping />
        <OnDesigningWithAdaCAD />



      </main >
    </div >

  );
}

import Author from "@/components/Author";
import Image from "next/image";
export default function OnSectionallyWarping() {
    return (

        <section id="on-sectionally-warping" className="w-full border-t-2 border-red flex flex-col gap-4 py-12 bg-white min-h-screen">
            <div className="resistance-content mx-auto flex flex-col gap-4">
                <div className="chapter-header w-2/3 mx-auto">
                    <div className="font-inconsolata text-2xl font-bold text-red">Chapter 4: On Sectionally Warping &amp; Beaming the TC2 Loom</div>
                    <Author name="Poppy DeltaDawn" />
                </div>



                <div className="flex flex-col gap-6 text-black">


                    <section id="wind-the-spools">
                        <div className="flex flex-col gap-6 w-2/3 mx-auto pt-12 pb-24">
                            <div className="font-kyokasho text-black font-bold text-2xl text-center">1.	Wind the spools.</div>
                            <div className="font-kyokasho text-red w-2/3 mx-auto py-20">
                                <span className="text-black">❊</span>	This is tedious: find yourself some noise-cancelling headphones and a good audio book or podcast and go to town. I recommend David Graeber’s The Democracy Project.
                            </div>
                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span>  Do not skimp on the amount of yarn: the more you must refill your yarn; the more knots will have in your warp from tying on new bobbins
                            </div>
                        </div>


                        <Image className="w-full object-cover" src="/WarpingImg/2.avif" alt="warping spools on a rack" width={500} height={500} />

                        <div className="flex flex-col gap-6 w-7/8 mx-auto">

                            <div className="font-kyokasho text-red w-2/3 mx-auto py-6">
                                <span className="text-black">❊</span> You will need each spool to have the total warp length of warp thread, multiplied by the width of your loom in inches.
                            </div>
                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> At Unstable Design, we warped 20 yards onto our beam. Our loom is 44 inches wide. How many spools? It's easiest and best to have one inch of your warp beamed on at a time. Our EPI was 60, so we had 60 bobbins, each with 660 yards of thread.
                            </div>


                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black mx-auto min-h-screen py-12">

                            <div className="w-2/3 mx-auto flex flex-col gap-6 my-auto">
                                <div className="text-2xl font-kyokasho text-center text-red font-bold">
                                    20 yards x 44 inches = 880 yards on each spool.
                                </div>
                                <div className="font-kyokasho text-red">
                                    <span className="text-black">❊</span>	Make sure that the bobbin, goes onto the creel, with the thread coming from the top (think like a toilet paper roll)
                                </div>
                                <div className="font-kyokasho text-red">
                                    <span className="text-black">❊</span>  Make a guide string going from the top to the bottom of your creel, with two threads, creating a giant heddle for the bobbin threads to travel through. This will prevent them from getting caught on the metal rod and snapping while warping.</div>

                                <div className="font-kyokasho text-red">
                                    <span className="text-black">❊</span> The order of the bobbins should go from top left row to the top right, and then to the next row’s left-most bobbin, and then finally ending at the bottom right bobbin. This order should be reflected in the order of the threads sleyed in the dent of your tension box.</div>
                                <div className="font-kyokasho text-red">
                                    <span className="text-black">❊</span>Left to right ➬ left to right, row by row, to the bottom of the creel.
                                </div>
                            </div>
                            <div>
                                <Image className="w-full min-h-screen object-cover" src="/WarpingImg/3a.jpg" alt="warping spools on a rack" width={500} height={500} />
                            </div>




                        </div>
                    </section>
                    <section id="set-up-the-tension-box">


                        <div className="flex flex-col gap-6 w-7/8 mx-auto py-12">
                            <div className="font-kyokasho text-black font-bold text-2xl text-center">2.	Set up the tension Box</div>
                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> Use the pegs and a threading hook in the box, forming at least one cross: the purpose of the tension box is to give even tension. There should not be resistance when pulling the threads through the box, though. If you are using two creels like us, with 60 bobbins total, position them so that the face inwards at about a 30-degree angle, with the threads travelling a straight, parallel path to the tension box.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-black mx-auto py-12">
                            <Image src="/WarpingImg/4.avif" alt="warping tension box" width={1000} height={1000} />
                            <Image src="/WarpingImg/5.avif" alt="warping tension box" width={1000} height={1000} />
                        </div>

                        <div className="mx-auto min-h-screen">

                            <div className="w-1/2 mx-auto font-kyokasho text-red text-2xl font-bold pb-12 ">
                                After the threads come through the tension box, they will need a rigid heddle or a paddle with a slot-and-hole scheme. After that, we found it helpful to use a second small dent reed which kept the precise width of an inch while we warped. It is essential that these tools are in this order:<br /><br />


                                Creel  ☞ tension box  ☞ paddle/reed with slots and holes   ☞ second reed   ☞ Beam
                            </div>
                            <Image className="w-full min-w-screen object-cover" src="/WarpingImg/6.avif" alt="warping tension box" width={1000} height={1000} />

                        </div>
                    </section>
                    <section id="set-up-your-back-beam">
                        <div className="flex flex-col gap-6 w-7/8 mx-auto py-12 min-h-[75vh] my-auto">
                            <div className="font-kyokasho text-black font-bold text-2xl text-center">3.	 Set up your back beam</div>

                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> it is helpful to have two or 3 clamps close at hand in case you need to stop the beam from moving, put something down, etc.
                            </div>
                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span>Make apron cords : cut a 3-yard length of yarn and use it to measure the rest of them: you should have one string for each inch of your width of warp. We have 44 inches to warp: I started on the right-most end of my beam but if you are left-handed maybe you want to start from the left. The long apron cords will make it possible to weave until the very end of your warp, drastically reducing the amount of waste yarn
                            </div>
                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> You should have the phalanges attachments installed on your beam. Use the slider attachments (not pictured here) on top of the phalanges on each to ensure that you don’t place threads outside of the inch segment. If you don’t have the slider attachments, you can still warp, but you should go slow and double check that your threads are being placed in the correct inch segment with each beam rotation.
                            </div>
                        </div>

                        <div className="font-kyokasho text-red grid grid-cols-1 md:grid-cols-2 gap-1">
                            <div className="w-1/2 mx-auto my-auto">
                                <span className="text-black">❊</span> Fold the apron string in half and place it over the beam with the two ends facing away from you. Make a lark's head knot by slipping them through the looped side of the cord and pull taught. You should be able to lock the string into place: if you find that it won't hold when you're turning the beam, try flipping the string. It should catch on itself when the beam turns away from you.
                            </div>
                            <div className="">
                                <Image className="w-full object-cover" src="/WarpingImg/7.avif" alt="warping back beam" width={1000} height={1000} />
                            </div>
                        </div>

                        <div className="py-12 min-h-screen w-2/3 mx-auto flex flex-col gap-6 font-kyokasho text-red">

                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> Make sure that the apron string is centered in the inch segment. The goal of this process is to have the warps laying flush and flat on top of each other in each inch. For this to happen, it is important to make sure that any knots you make (like the knot attaching the apron cords to the warps) are arranged so that they lay flat: if necessary, slide the apron cords so that the knots lay in the grooves of the back beam. There should be no bumps or anomalies.
                            </div>


                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> Once you have determined the placement of the first apron string, use painters’ tape on the beam to mark where the lark’s head knot is: each following apron string should be in the same place. If the apron strings are all the same length, the warp should begin and end in the same place on the beam. A few inches’ margin of error is okay! But the more variability of lengths, the more waste will be produced.
                            </div>

                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> After you’ve made the lark’s head knot, wind the apron cord onto the beam within the first inch segment. For the apron cord turns (and in turn the warps) to be all the same height, making a mound of string within the inch should be avoided: rather than rolling each turn of apron string on top of itself, each following turn’s worth of apron cord should lay next to the preceding turn: like the threading of a screw.
                            </div>

                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> Once you finish rolling the 1.5-yard apron cord onto the beam (remember? it’s folded in half now), tie the two ends of the cord together using an overhand knot.
                            </div>

                            <div className="font-kyokasho text-red w-2/3 mx-auto">
                                <span className="text-black">❊</span> Take the ends of the warps, which have been guided through the tensioning arrangement, and tie an overhand knot to secure them all together.
                            </div>
                        </div>
                        <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 gap-1">
                            <div className="flex flex-col gap-1">
                                <Image className="" src="/WarpingImg/8.avif" alt="warping back beam" width={1000} height={1000} />
                                <Image src="/WarpingImg/9.avif" alt="warping back beam" width={1000} height={1000} />
                            </div>
                            <div className="font-kyokasho text-red gap-6 mx-auto my-auto w-2/3">

                                <span className="text-black">❊</span> Now slip the warp knot through the 2 tied-together apron cord threads: split the warp segment and create another lark’s head knot attaching the warps to the apron cord by looping the warps around the black knot after going through the apron strings.<br /><br />

                                <span className="text-black">❊</span> Give the apron cord and the warps a tug to test and make sure they don’t come out under tension. Don’t overthink this: just make sure that they’re securely attached, and each segment is the same as the last. Once the warps are attached, begin turning the beam! Just like the knot that attached the apron cord to the beam, ensure that the knot attaching the apron cord to the warps lays in the groove of the beam so that a bump isn’t formed on the beam: abnormalities will cause tension issues while weaving.

                            </div>



                        </div>
                        <Image src="/WarpingImg/10.avif" alt="warping back beam" width={1000} height={1000} className="w-full object-cover" />

                        <Image src="/WarpingImg/11.avif" alt="warping back beam" width={1000} height={1000} className="w-full object-cover" />

                        <div className="flex flex-col gap-6  pt-24 min-h-screen">


                            <div id="begin-beaming" className="font-kyokasho text-black font-bold text-2xl text-center">4.	Begin Beaming</div>


                            <div className="font-kyokasho text-red w-1/3 mx-auto">
                                <span className="text-black">❊</span>At this point: double check the tension box yard counter to ensure it is reset to 0 (or its starting point). Slowly wind onto the beam, being very careful not to lose an errant thread: every single thread must be in its rightful inch segment. If you miss one or accidentally twist your warp inch segment: unwind and redo the turn.

                            </div>


                            <div className="font-kyokasho text-red w-1/3 mx-auto">
                                <span className="text-black">❊</span> We need: <strong>consistent tension</strong> that isn’t too taut. If you lose tension or mess up or a thread breaks and you realize too late, feel confident and okay with reversing.

                            </div>

                            <div className="font-kyokasho text-red w-1/3 mx-auto">
                                <span className="text-black">❊</span> Using the dent reed comb at all times will ensure that you don’t accidentally twist the warps. Any twist that is not caught will be a permanent fixture while weaving: if you’ve woven on a TC2 with twisted warps, you know it’s very annoying. Continue to push the rigid heddle or paddle back as it approaches the beam.
                            </div>

                            <Image src="/WarpingImg/12.avif" alt="warping back beam" width={1000} height={1000} className="w-full object-cover" />

                            <div className="font-kyokasho text-red w-1/3 mx-auto">
                                <span className="text-black">❊</span>	Wind until you reach the desired length of your warp: At UDL we used a Japanese thread counter using meters, and wound on about 20.7 meters of warp (or about 22.6 yards)

                            </div>

                        </div>

                    </section>
                    <section id="make-the-cross">
                        <div className="py-12">
                            <div className="font-kyokasho w-1/3 mx-auto text-black font-bold text-2xl text-center pb-12">5. Make the Cross</div>


                            <div className="font-kyokasho text-red w-1/3 mx-auto">
                                <span className="text-black">❊</span> Once you finish winding on your first inch of warp, use a clamp to secure the beam. Cut about a 10-ft length of contrasting-colored scrap yarn.<br /><br />
                            </div>
                        </div>
                        <div className="py-12 min-h-screen">

                            <div className="font-kyokasho text-red grid grid-cols-1 md:grid-cols-2 gap-1">

                                <div className="flex flex-col gap-1">
                                    <Image className="" src="/WarpingImg/13.avif" alt="warping back beam" width={1000} height={1000} />
                                    <Image className="" src="/WarpingImg/14.avif" alt="warping back beam" width={1000} height={1000} />
                                    <Image className="" src="/WarpingImg/15.avif" alt="warping back beam" width={1000} height={1000} />

                                </div>

                                <div className="font-kyokasho text-red w-2/3 my-auto mx-auto">
                                    <span className="text-black">❊</span> Now, with the warp yarns under tension, use the slot-and-hole reed and pull up to make the first half of your cross. Use one hand to reach into the cross/shed and catch the lifted threads, being very careful not to miss one or pick up and extras. If you are using an end-on-end, or every other, thread color sequence like us (except for our red stripes), you should see only see one of the warp colors lift in your cross.<br /><br />
                                    <span className="text-black">❊</span>The dent reed comb should be close to the slot and hole dent reed, because you will need to catch the cross in front of the dent reed comb.  Because our dent reed comb is a size 12 EPI and was threaded 5-per-dent, we had to coax the cross out. After you have the lifted threads, place the scrap yarn where your hand is, and gently guide the thread to the beam so that it is laying on the top of the beam in in between each thread. All of these steps are infinitely easier under tension, or <strong>resistance</strong>.<br /><br />
                                    <span className="text-2xl font-bold">
                                        <span className="text-black">❊</span>This cross will be the end of your warp.  I give myself about a half yard margin of error when considering the thread between the yard counter and the beam…but you can be precise, if desired.
                                    </span>


                                </div>


                            </div>
                            <div className="font-kyokasho text-red grid grid-cols-1 md:grid-cols-2 gap-1">



                                <div className="font-kyokasho text-red w-2/3 my-auto mx-auto">

                                    <span className="text-2xl font-bold">
                                        <span className="text-black">❊</span>Now, again under tension, push the slot-and-hole reed down, and do the same, using your hand to preserve the other half of the cross and making sure to catch it in front of the other reed.
                                    </span>
                                    <br /><br />


                                    <span className="text-black">❊</span>Secure the scrap yarn by tying an overhand knot and trimming the excess tail. I like to make sure that this <strong>scrap yarn knot on the right side of my inch segment</strong>, so that it doesn’t get in the way of the next segment.  <br /><br />


                                </div>
                                <div className="flex flex-col gap-1">
                                    <Image className="" src="/WarpingImg/16.avif" alt="warping back beam" width={1000} height={1000} />
                                    <Image className="" src="/WarpingImg/17.avif" alt="warping back beam" width={1000} height={1000} />
                                    <Image className="" src="/WarpingImg/18.avif" alt="warping back beam" width={1000} height={1000} />
                                </div>


                            </div>


                            <Image className="w-full object-cover py-6" src="/WarpingImg/19.avif" alt="warping back beam" width={1000} height={1000} />



                        </div>
                    </section>
                    <section id="cut-off-and-repeat">
                        <div className="flex flex-col gap-1  pt-24 min-h-screen">
                            <div className="font-kyokasho text-black font-bold text-2xl text-center">6.	Cut off and repeat</div>

                            <div className="font-kyokasho text-red w-2/3 my-auto mx-auto py-12">

                                Use painter’s tape to secure the warp segment before cutting.<br /><br />

                                <span className="text-black">❊</span>	Continue this process until you have completely covered your back beam in beautiful, even, uniform threads
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                <Image className="w-full object-cover pt-6" src="/WarpingImg/20.avif" alt="warping back beam" width={1000} height={1000} />
                                <Image className="w-full object-cover pt-6" src="/WarpingImg/21.avif" alt="warping back beam" width={1000} height={1000} />
                            </div>
                            <Image className="w-full object-cover" src="/WarpingImg/22.avif" alt="warping back beam" width={1000} height={1000} />
                        </div>
                    </section>
                    <section id="troubles" className="flex flex-col gap-1  pt-24 min-h-screen">
                        <div className="font-kyokasho text-black font-bold text-2xl text-center">7.	Troubles</div>

                        <div className="font-kyokasho text-red w-1/3 my-auto mx-auto py-12">

                            <span className="text-black">❊</span>	If you need to refill the warp yarn spools during the process, take special caution not to let the end of the warp thread leave the spool and the tension box: it’s not fun to rethread the warps through the reeds, tension box, or the creel in the correct order once you get started. If you must: take extra pains to rethread the replacement warp in its rightful place. Failure to complete this step will result in snags and breaks, leading to knots in your warp while weaving. <br></br>Which sucks.
                            <br /><br />

                            <span className="text-black">❊</span>That being said: <strong>some knots in your warp are inevitable</strong>, and especially while learning the process for the first time. <strong>If a thread snaps while you are warping</strong>, remain calm:
                            <ul className="list-disc list-outside flex flex-col gap-2">
                                <li className="ml-12 my-6">Secure the back beam with a clamp and find the two ends of the warp thread. Tie them together using an overhand knot. You should be able to FEEL unusual tension before a thread snaps: there is a cause for every effect. Troubleshoot if you are encountering frequent snapping threads, or threads keep snagging on each other or the creel. </li>
                                <li className="ml-12 mb-6">The most common cause of snapped threads is the warp thread getting caught on its metal rod of the creel: the guide strings that we set up on the creel(s) should minimize this issue, though. If you skipped that step, take some time to put them on. Future you will thank you. Adjust the tension on them too, if that’s not helping. </li>

                            </ul>
                        </div>
                        <Image className="w-full object-cover" src="/WarpingImg/23.avif" alt="warping back beam" width={1000} height={1000} />
                        <div className="font-kyokasho text-red w-1/3 my-auto mx-auto py-12">

                            <span className="text-black">❊</span>If you are still encountering snapping threads, the next trouble you may have encountered is inaccurate positioning of the creels. Try to realign the creels so that the thread leads to the tension box in 25% or 30% angles.
                            <br /><br />

                            <span className="text-black">❊</span>	The other common error and the most annoying to correct is the order of threads. Use your eyes and your fingers to follow threads from the spools to the tension box, ensuring that (facing the creels with the beam behind you,) the top left-most spool is leading to the left-most dent in the tension box, the next top left-most spool is threaded through the next, and then the next row in the same way: left, middle, right, like reading and writing English, until you reach the bottom right spool, the last one. <br /><br />

                            <span className="text-black">❊</span>	If you do encounter threads not in the correct placement, it may be easiest to snip a thread in an incorrect place and just retying on and correcting the knot while weaving.

                        </div>
                        <Image className="w-full object-cover" src="/WarpingImg/24.avif" alt="warping back beam" width={1000} height={1000} />

                    </section>

                </div>
            </div>
        </section >
    );
}
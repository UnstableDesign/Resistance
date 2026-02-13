import Author from "@/components/Author";
import ShowAnswers from "@/components/ShowAnswers";
import Image from "next/image";
export default function OnDesigningTemplatesForPhotoshop() {
    return (
        <section id="on-designing-templates-for-photoshop" className="flex w-full flex-col gap-4 py-12 border-t-2 border-red bg-white min-h-screen">
            <div className="flex flex-col gap-4">

                <div className="chapter-header mx-auto w-2/3 ">
                    <div className="font-inconsolata  mx-auto text-2xl font-bold text-red">Chapter 6: On Designing Templates for Photoshop</div>
                    <Author name="Poppy DeltaDawn" />
                </div>


                <div className="w-2/3 mx-auto font-kyokasho text-xl my-8 text-red text-center flex flex-col gap-12">
                    <div>
                        I am going to show you how I design a doubleweave for the TC2. From there, you can edit your template to create more complex or customized structures. I am using Photoshop 2025 with a Macbook Pro, here! It is helpful to have a cursory knowledge of Photoshop and a cursory knowledge of weaving drafts.  You can refer back to the first segment of this Digital Weaving to Save the World: RATIO!
                    </div>


                    <div>
                        First, let’s make the warp and weft design template.
                    </div>

                    <div>Open Photoshop and make a new document. This will be 1 pixel width, and the Unstable Design Lab (UDL) warp had 30 threads in a sequence. So: </div>

                    <div className="text-center">the width will be 30 pixels and the height will be 1 pixel.</div>

                    <div className="text-center font-bold">The resolution should always match the loom’s EPI. Ours is 60.</div>


                    <Image className="mx-auto" src="/ps/1.png" alt="Photoshop Screenshot" width={500} height={500} />

                    <div className="text-center">Make sure that <span className="underline">Transparent</span> is selected on the background contents and RGB color, 8 bit is selected. Ensure that <span className="font-bold">Pixels/Inch</span> is selected (a common mistake: inches selected). </div>

                    <div>Once the document is open, fit it to your <span className="font-bold">screen (command+0)</span> </div>


                    <div>Turn on your <span className="font-bold">pixel grid (command + ’ ) </span>  </div>

                    <Image className="mx-auto w-full object-cover" src="/ps/2.png" alt="Photoshop Screenshot" width={1000} height={1000} />



                    <div>If you don’t have the pixel view pictured here, you will need to open your photoshop settings and adjust the grid in <span className="underline">Guides, Grids, and Slices</span>. Make sure that your grid is set to <span className="font-bold">1 pixel, subdivisions: 1</span>. I use light blue!</div>

                    <Image className="mx-auto w-full object-cover" src="/ps/3.png" alt="Photoshop Screenshot" width={1000} height={1000} />

                    <Image className="mx-auto w-full object-cover" src="/ps/4.png" alt="Photoshop Screenshot" width={1000} height={1000} />


                    <div>Now using the pencil tool <span className="font-bold">(B)</span> set to 1 pixel size (<span className="font-bold">adjust the size of your pencil quickly by using the [ and ] keys</span>). </div>

                    <div>The pencil tool, not the brush tool has to be used. The pencil tool is nestled with the brush tool, and to access it, you can hold down the brush icon until the dropdown menu pictured here appears. </div>


                    <Image className="mx-auto w-full object-cover" src="/ps/5.png" alt="Photoshop Screenshot" width={1000} height={1000} />

                    <div>Now make a beautiful representation of your warp design! If you are using a monochrome warp, select a bright color to represent the warp. Using black and white can get confusing, since black and white are the colors that the loom understands as commands/structure. </div>


                    <Image className="mx-auto w-full object-cover" src="/ps/6.png" alt="Photoshop Screenshot" width={1000} height={1000} />


                    <div>Once you have your warp pattern represented in pixels here (double check: it’s easy to get wrong, and if this is incorrect, all of your work will show it), save it as a pattern in photoshop. </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/7.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/8.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <div>
                        I like to keep my patterns window in the default place that Photoshop has it (top right). I also use the <span className="italic">large list view format</span>, so that I can see both the icon and the name of the structure.
                    </div>

                    <div>Once you have your warp structure saved as a pattern, go to the Image menu and choose <span className="italic">Rotate 90° Clockwise</span>. </div>

                    <div className="grid grid-cols-8 gap-6">
                        <Image className="mx-auto col-span-7 w-full object-cover" src="/ps/9.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto col-span-1 w-1/2 object-cover" src="/ps/10.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <div>Save your weft as a pattern in Photoshop, close without saving, and <span className="animate-pulse font-bold">let’s get the party started.</span>  </div>

                    <div>Close out of this document and make a new one. I need to see at least one repeat in the structure that I’m going to make so I understand how the threads repeat their lifting sequence. So since my pattern has 30 threads, I’m going to make my structure template document 60 x 60 pixels. The EPI/resolution coincidentally is also 60. </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/11.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <div className="my-auto"> Fit your image to screen <span className="font-bold">(Command + 0)</span> and turn the pixel grid on if you haven’t already <span className="font-bold">(command + ‘)</span>

                            <br />
                            <br />
                            Make a new layer <span className="font-bold">(shift + command + N)</span> and click your new warp template from the patterns window.
                            <br />
                            <br />
                        </div>
                    </div>


                    <Image className="mx-auto w-full object-cover" src="/ps/13.png" alt="Photoshop Screenshot" width={1000} height={1000} />



                    <div>Now merge the two layers so that the warp is rasterized and we can work with the colors <span className="font-bold">(Command+ E while the top layer is selected)</span>. </div>

                    <div>Make a copy of the layer <span className="font-bold">(Command + J)</span> rename the first layer <span className="underline">warp template</span> and the second layer <span className="underline">weft template</span>.</div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/14.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/15.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <Image className="mx-auto w-1/2 object-cover" src="/ps/16.png" alt="Photoshop Screenshot" width={1000} height={1000} />


                    <div>Make the weft template layer a weft by rotating the layer: from the Edit menu, select <span className="font-bold">Transform {">"} Rotate 90° clockwise</span>.</div>

                    <Image className="mx-auto w-1/2 object-cover" src="/ps/17.png" alt="Photoshop Screenshot" width={1000} height={1000} />



                    <div>Now we have a warp and a weft! What we want is to visualize the two sets of threads interacting. We want to create simulations. </div>

                    <Image className="mx-auto w-1/2" src="/ps/18b.png" alt="Photoshop Screenshot" width={1000} height={1000} />


                    <div>My favorite tool: the magic wand now comes in to separate the different threads. Select the wand tool, <span className="font-bold">(W)</span>, and make double sure that the 3 check boxes on the top menu bar are unticked. This is the default. Sometimes I will want to use the contiguous function. Play around with selecting threads with your magic wand with contiguous unchecked and then checked if you don’t know what this is.

                    </div>

                    <div>Make the weft template layer invisible. Select the black warp thread using the wand. </div>

                    <Image className="mx-auto w-1/2 object-cover" src="/ps/19.png" alt="Photoshop Screenshot" width={1000} height={1000} />

                    <div>While you have the black threads selected, paste them onto their own layer by using the shortcut <span className="font-bold">(Command+J)</span>. You should have a new layer! Title it <span className="underline">black warp template</span>.</div>

                    <div> Do the same for all the warp colors, and then all the weft colors. Label all layers. You should have a layer for every warp color and a layer for every weft color when this step is complete. </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/22.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <div className="my-auto">I reordered my layers so that each warp is with its corresponding weft. </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Image className="mx-auto col-span-2 w-full object-cover" src="/ps/23.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/24.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <div>Next, make everything invisible except for the blue warps and wefts. Select the blue warp layer, and with the magic wand tool, select them. Now make a new layer while the blue warps are selected <span className="font-bold">(command + J)</span> Name this <span className="underline">blue warp</span>.
                        While the new blue warp layer you just made is selected, use the fill tool <span className="font-bold">(G)</span> to fill them with black.
                    </div>

                    <div>Now repeat this step, making a new layer for blue wefts, but instead of black, fill the new blue wefts layer with white. <span className="font-bold">(To quickly default to the system black and white, push D on your keyboard [for default]. Press X to swap the background and foreground colors).</span> </div>

                    {/* Missing images */}

                    <div>Remember that the golden most important rule in all of weaving: </div>

                    <div className="font-bold text-2xl">Black means lift the warp thread and white means lower the warp thread. In other words, Black is the warp and white is the weft. </div>

                    <div>Using this logic, we can deduce that any warp thread that is white will not show on the top of the cloth, and any warp that is black will. SO: If warps are black and wefts are white, the layer of cloth will be on the top. If warps are white and wefts are black, the layer will be on the bottom. THEREFORE, this layer that we are working on will be the top layer structure.  </div>

                    <div>The only thing it’s missing is the structure; areas where the weft intersects with the warp. If we visualize this as a blueprint or lift plan of the cloth, we can see that currently the white wefts just sit on top of the black warp threads. </div>

                    <div>Zoom into the structure, and look at the top left corner of the structure <span className="font-bold">(command + +)</span>. </div>

                    <div>Using the pencil tool <span className="font-bold">(B)</span>, fill the two diagonal weft/warp intersections (aka stitches), with black. </div>

                    <Image className="mx-auto w-1/2 object-cover" src="/ps/25.png" alt="Photoshop Screenshot" width={1000} height={1000} />

                    <div>Amazing! Now: we could manually complete the structure with this method, but that would take a long time, and also we are prone to mistakes. Instead, use the marquee tool (M) to select the repeating structure of the tabby we just made. </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/26.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/27.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <div>Notice that I took care that I didn’t pick up any extra pixels: always remember that the left edge of the structure will repeat, meeting the right edge of the structure. The same of course applied to the top and bottom edges. They should correspond to each other, creating a seamless tiling repeat. </div>

                    <div>Once you have your select, save it as a pattern in Photoshop. Name it <span className="underline">DW Tabby template</span>. DW is for doubleweave. </div>

                    <div>Now return your attention to the layers window: make all layers invisible except for the blue warp and weft templates.</div>

                    <div> Make a new layer <span className="font-bold">(Shift + command + N)</span> </div>

                    <div> and fill it by clicking your new pattern. </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/30.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/29.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <Image className="mx-auto w-full object-cover" src="/ps/28.png" alt="Photoshop Screenshot" width={1000} height={1000} />

                    <div>Look! Weaving! Now make one more new layer underneath the pattern layer you just made (shift + command + N), merge the two new layers together <span className="font-bold">(command + E)</span> and rename it <span className="underline">blue tabby</span>. Break a sweat, yet?</div>

                    <div>Now let’s make a black warp for underneath. We could do everything that we just did a second time, but I prefer the faster route: Make a copy of this layer <span className="font-bold">(command + J)</span>, and rename it <span className="underline">black tabby</span>. Remember: because we want this layer on the bottom, we want the warps to be white and the wefts to be black. So let’s just invert them <span className="font-bold">(command + I)</span> </div>

                    <Image className="mx-auto w-full object-cover" src="/ps/32.png" alt="Photoshop Screenshot" width={1000} height={1000} />


                    <div>Now, make the everything invisible except for the black warp and weft templates. Because black and white are our commanding structure colors, I like to change the black in my warp to a technical color, so that I don’t get confused. I am going to use green to represent black. Select the warp and change it to green. While we’re at it, let’s change the black weft to a lighter green. Do the same to the blue weft: choose a lighter blue and replace it using the fill tool <span className="font-bold">(G)</span>. Use the eyedropper tool <span className="font-bold">(I)</span> to select the blue and go lighter from there.

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/33.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/34.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <div>Make the blue invisible again but leave the black warp and weft templates visible. Return to the black tabby layer we made and make it visible. </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/35.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/36.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>
                    <Image className="mx-auto w-1/2 object-cover" src="/ps/37.png" alt="Photoshop Screenshot" width={1000} height={1000} />


                    <div>Now we just need to align the black tabby layer to match the black warp and weft layers. Use the move tool <span className="font-bold">(V)</span> while the black tabby layer is selected. Use the arrow keys on your keyboard to nudge the layer to match the template layers.</div>
                    <div> You’ll know you were successful because you won’t see any of the green peaking through, except for the two edges. Fill in the green pixels with the pencil tool <span className="font-bold">(B)</span> while on the black tabby layer using black, to match the rest of the wefts.
                    </div>

                    <div>(Alternatively, you could use the marquee tool <span className="font-bold">(M)</span>, and the cut and paste function to move the left column and top row to the right column and bottom row)</div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/38.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/39.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <div>One more step!!! All you have to do now is turn on the Blue tabby layer. That’s it! Now you can save this structure as a Photoshop pattern: Save it as <span className="underline">DW 2 tabbys - blue on top</span>. To make a structure with black on top and blue on the bottom, simply invert each tabby layer <span className="font-bold">(command + I while selected on the layer)</span> </div>

                    <div>This structure is a basic doubleweave with a tabby on each layer. Because we have warp striping, if we use two shuttles, one with blue and one with black, we can have solid layers of black and blue: except!!! That our warp has red warp stripes of 4 threads between each sequence of 26 black and blue. So if we were to use this structure on the UDL warp, each layer would have two red interlopers. </div>

                    <div>We could separate the red from the blue and black though and give these their own layers in our cloth. Make all layers invisible except for your red weft and red warp template layers. Just like before, make copies of each of these, and make the red warp black and the red weft white, labeling each layer. </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/40.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/41.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>


                    <div>Put the weft layer on top and make sure it is selected. If we want to make the structure perfectly square; or match the weft sequence with the warp sequence in the cloth, we only have 8 intersections (aka stitches) at each junction to work with. I recommend filling it with a tabby. Use the pencil tool <span className="font-bold">(B)</span> with black on the weft layer. </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Image className="mx-auto w-full object-cover" src="/ps/42.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/43.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                        <Image className="mx-auto w-full object-cover" src="/ps/44.png" alt="Photoshop Screenshot" width={1000} height={1000} />
                    </div>

                    <div>You could just manually place the pixels since there is only 32 stitches total here, but I always prefer the faster method: after you have your first 8 pixels done, use the marquee tool to select it (M), switch to the move tool (V), and holding down option + command on your keyboard, use the mouse to drag a copy to the next intersection.<br></br>
                        Repeat this step 2 more times to complete your stitches.<br></br>
                        Now turn your Black tabby and blue tabby layers back on.
                    </div>

                    <Image className="mx-auto w-full object-cover" src="/ps/45.png" alt="Photoshop Screenshot" width={1000} height={1000} />

                    <div>
                        Save this structure: the red warps are black so that layer is on top.
                    </div>

                    <div>To send the red layer to the bottom, all we have to do is invert the colors on both the red weft and warp layers. Do so and then save that structure – name them <span className="underline">DW 2 tabbys Black on top, NO RED</span>, and <span className="underline">DW 2 tabbys Black on top W RED</span>. My black layer is on top, and I confirmed this by making the red and blue layers invisible to see that the black warp threads were black/lifted.</div>

                    <div>So with this doubleweave that I have turned into a triple weave, we’ve got a plethora of options: </div>

                    <div>
                        <ul className="list-outside list-none text-black font-bold">
                            <li>DW 2 tabbys Black on top, NO RED</li>
                            <li>DW 2 tabbys Black on top W RED</li>
                            <li>DW 2 tabbys Blue on top NO RED</li>
                            <li>DW 2 tabbys Blue on top W RED</li>
                            <li>Remember these structures combine the red with the black and blue:</li>
                            <li>DW tabbys Blue on top</li>
                            <li>DW tabbys Black on top</li>
                        </ul>


                    </div>

                    <div>Save this photoshop document as a <span className="font-bold text-black">DOUBLEWEAVE TEMPLATE!</span> You can edit the tabbys to be any structure. Go nuts! </div>



                </div>








            </div >



        </section >
    );
}
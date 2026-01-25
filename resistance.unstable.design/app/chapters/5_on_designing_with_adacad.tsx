import Author from "@/components/Author";
import ShowAnswers from "@/components/ShowAnswers";
import Image from "next/image";
export default function OnDesigningWithAdaCAD() {
    return (
        <section id="on-designing-with-adacad" className="flex w-full flex-col gap-4 py-12 border-t-2 border-red bg-white min-h-screen">
            <div className="flex flex-col gap-4">

                <div className="chapter-header mx-auto w-2/3 ">
                    <div className="font-inconsolata  mx-auto text-2xl font-bold text-red">Chapter 5: On Designing with AdaCAD</div>
                    <Author name="Laura Devendorf" />
                </div>


                <div className="w-2/3 mx-auto font-inconsolata my-8 text-red flex flex-col gap-6">
                    <div> <strong>AdaCAD</strong> is an experimental workspace that applies parametric design to weave structure development. Where Photoshop will have you select interlacements in a free-hand fashion, AdaCAD is going to ask you to specify the instructions systematically using a “dataflow”. A dataflow tells AdaCAD how to combine information in specific ways to create drafts that can then be easily manipulated.</div>


                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-2/3 mx-auto">

                    <div className="flex flex-col text-red font-inconsolata  mx-auto">
                        <a className="underline my-12" href="https://docs.adacad.org/docs/learn/tutorials/multi-layer/" target="_blank">+ an updated version of this tutorials is also available at docs.adacad.org + </a>

                    </div>
                    <div className="text-red font-inconsolata  mx-auto my-auto flex flex-col gap-6">
                        <div className="font-bold my-1 text-left"><strong>Glossary:</strong></div>
                        <ul className="list-outside list-disc my-2 text-red">
                            <li><a href="https://docs.adacad.org/docs/reference/glossary/dataflow" target="_blank">Dataflow</a></li>
                            <li><a href="https://docs.adacad.org/docs/reference/glossary/system" target="_blank">Warp and Weft Systems</a></li>
                            <li><a href="https://docs.adacad.org/docs/reference/glossary/operation" target="_blank">Operation</a></li>
                            <li><a href="https://docs.adacad.org/docs/reference/glossary/inlet" target="_blank">Inlet</a></li>
                            <li><a href="https://docs.adacad.org/docs/reference/glossary/outlet" target="_blank">Outlet</a></li>
                            <li><a href="https://docs.adacad.org/docs/reference/operations/notation" target="_blank">Layer Notation</a></li>
                            <li><a href="https://docs.adacad.org/docs/reference/operations/assign_systems" target="_blank">Assign Draft to Systems</a></li>
                            <li><a href="https://docs.adacad.org/docs/reference/operations/overlay_multiple" target="_blank">Overlay multiple</a></li>
                        </ul>

                    </div>
                </div>

                <div className="w-2/3 mx-auto font-kyokasho my-8 text-black flex flex-col gap-6">

                    <div className="font-bold my-6"><strong>Open AdaCAD</strong></div>

                    <div>So, let’s start by opening <a className="underline text-red" href="https://adacad.org" target="_blank">https://adacad.org</a> in one tab of your browser and <a className="underline text-red" href="https://docs.adacad.org" target="_blank">https://docs.adacad.org</a> in the other. You’ll do your design work in adacad.org and you can use docs.adacad.org to find more help and references for the interface. If you are feeling overwhelmed already, head on over to the “Learn” tab in docs.adacad.org to watch some introduction videos to the interface.</div>
                </div>


                <Image className="w-full object-cover" src="/AdaCADTutorialImages/1.jpeg" alt="AdaCAD Screenshot" width={1000} height={1000} />


                <div className="w-2/3 mx-auto text-kyokasho my-8 text-black flex flex-col gap-6">
                    When you open adacad.org, you’ll see a blank interface with a top bar, a viewer on the right, and a workspace as the primary view. AdaCAD supports two modes of drafting, one in the “workspace” view where you connect little draft-making operations together, and a “draft” view where you can draft using a point and click point paper interface. You can toggle between the two modes at any time by clicking either design mode: “Workspace” or “Draft” in the topbar.
                </div>





                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        <div className="font-bold my-6"><strong>Defining Warp and Weft Systems</strong></div>
                        I think that the easiest way to work with multiple warp and weft colors and layers in AdaCAD is to think of the warp and weft as “systems”.
                        For instance, in the image below, we assign all the red warps to system 1, and orange warps to system 2. We can think of the weft in systems too. Here we assign dark blue to system ‘a’ and light blue to ‘b’.
                        <br />
                        <br />
                        We do this grouping of systems to tell AdaCAD that we want to associate these warps and wefts into groupings. Then, we can use these groupings to tell AdaCAD that we want to assign one kind of structure (let's say tabby) to systems 1 and a, and another to 2 and b. Conceptually, this lets us think of our draft as a collection of logical groups of warps and wefts, rather than treating each warp and weft as an individual or discrete unit. For an analogy, where Poppy uses warp and weft templates in Photoshop to split out logical groups (e.g. blue yarns, red yarns, etc) before assigning structures, AdaCAD uses systems to do the same thing (and as we’ll see in a minute, we’ll use operations to add structures to the different groupings).
                        <br />
                    </div>
                    <div>
                        <Image className="w-full object-cover" src="/AdaCADTutorialImages/2.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                    </div>
                </div>

                <div className="w-1/3 my-12 mx-auto text-kyokasho text-black flex flex-col gap-6">If we have a draft that specifies the relationship of warps and wefts to systems, then we can make use of AdaCAD’s Layer Notation and Assign Draft to System operations. </div>

                <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                    <div className="font-bold my-6 text-center"><strong>→ Layer Notation </strong></div>

                    <div>To explain the general concept of the Layer Notation operation, consider the example below. In this example, we have provided the operation with a map of the systems’ this draft will be using (warp systems 1, 2, 3, 4 and weft systems a, b, c, d). We can then describe the relationships between those groups to the layer notation operation by providing it with the text “(a1)(b2)(c3)(d4)”. </div>

                    <div>In layer notation, each ( ) group describes a unique layer and the warp and weft system codes in that ( ) describe the warp and weft systems that will form that layer.</div>

                    <div>So “(a1)(b2)(c3)(d4)” means that we are creating a 4 layer cloth. For each layer group, AdaCAD produces an “Inlet”. The draft that is connected to the inlet will be assigned to that inlet's associated layer group. In the example below, tabby is added to all the inlets, thereby producing a draft that will produce a four layer cloth with a tabby structure on each layer.</div>


                </div>
                <Image className="w-full object-cover" src="/AdaCADTutorialImages/3.png" alt="AdaCAD Screenshot" width={1000} height={1000} />

                <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">


                    <div className="my-12">Maybe you have four systems but only want two layers. You’re in luck, you can group systems into different layer groups by wrapping them in ( ). In the example below we use the text (a1)(b c d 2 3 4), which tells AdaCAD to make the structures used on a1 separate into a layer above the structure used on warp and wefts 2 3 4 and b c and d. </div>

                </div>

                <Image className="w-full object-cover" src="/AdaCADTutorialImages/4.png" alt="AdaCAD Screenshot" width={1000} height={1000} />


                <div className="text-inconsolata text-red text-2xl w-1/3 mx-auto my-12">
                    The best way to learn is to play.<br></br> Try some new combinations.<br></br> See what happens.<br></br> Break things.
                </div>

                <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                    <div className="font-bold my-6 text-center"><strong>→ Assign Draft to System </strong></div>

                    <div>The layer notation function is amazing for creating cloth with, well, layers. But sometimes we want to work with systems without necessarily using those systems to form distinct layer groups. Or, we want even more fine detailed control about how and where layers form.  Enter the “Assign Draft to System” Operation</div>
                </div>

                <Image className="w-full object-cover" src="/AdaCADTutorialImages/5.png" alt="AdaCAD Screenshot" width={1000} height={1000} />

                <div className="text-kyokasho text-black w-2/3 py-12 mx-auto my-auto">


                    <div>Just like ‘Layer notation’, in ‘assign draft to systems’, we also provide the operation with a draft that represents how the warps and wefts are grouped into systems. We also give it a line of text, only this text doesn’t use and ( ). Instead, you just type a letter and number (or multiple letters and numbers). Whichever draft you connect to the “draft” inlet, will then be repeated over all the interlacements associated with those letters and numbers. </div>

                    <div>When you want to combine multiple drafts assigned to systems together, you pop them all into a “overlay multiple” operation to fuse them into a single draft. </div>

                </div>


                <Image className="w-full object-cover" src="/AdaCADTutorialImages/6.png" alt="AdaCAD Screenshot" width={1000} height={1000} />


                <div className="text-kyokasho text-black w-2/3 py-12 mx-auto my-auto">


                    <div>What we’ve done here is assign drafts to each unique grouping of warp and weft systems a b 1 and 2. Then, we stitched them all together with an overlay multiple. to make a single draft composed of all the different system units. Oh look! It’s a double weave! </div>



                    <div className="font-bold my-6 text-center"><strong>Let’s get down to warp business</strong></div>

                    <div>With this broader concept in mind, we can now follow step by step guide to designing double layer cloth that plays with our unique warp coloring.  </div>

                    <div className="font-bold my-6 text-center text-inconsolata"><strong>Go to your tab with AdaCAD.org loaded and make sure the design mode says “workspace”</strong></div>


                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        dawdle on over to the left sidebar and click “add draft”
                    </div>
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/7.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/8.png" alt="AdaCAD Screenshot" width={1000} height={1000} />   <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        When prompted for the number of warps and wefts in the draft you are adding, type 30 and 30 (note that this is the size of our repeating color sequence.
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        After adding your warp and wefts, and selecting Ok, AdaCAD will drop a new blank draft onto the workspace. To edit this draft in more details, double-click it and then select “open in editor”
                    </div>
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/9.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/10.png" alt="AdaCAD Screenshot" width={1000} height={1000} />  <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        And voila, you’ll see the draft in the draft editor. When you get there, just make sure your loom type, which can be adjusted in the left sidebar, is set to “Jacquard”...
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        ...and then select a color from the drafting pencil tab.<br></br>

                        If you click the colored squares on the warp with this colored pencil, you’ll assign that color to the respective warp.  Repeat the process for each color in your sequence. When it looks like the image below, you have finished assigning the colors!
                    </div>
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/11.png" alt="AdaCAD Screenshot" width={1000} height={1000} />

                </div>

                <div className="text-kyokasho text-black w-1/3 mx-auto my-12">
                    Now it’s time to assign the systems. You see the little numbers above the colored warp boxes? Those define the system to which this warp belongs. Click on the number to increment up to the next available warp system number. See if you can click the warps so they follow this pattern:
                </div>


                <Image className=" w-full object-cover" src="/AdaCADTutorialImages/12.png" alt="AdaCAD Screenshot" width={1000} height={1000} />


                <div className="text-kyokasho text-black w-1/3 mx-auto my-12">
                    So what we have here is every blue warp assigned to 1, black assigned to 2, and red assigned to 3.
                </div>

                <Image className=" max-w-2/3 mx-auto object-cover" src="/AdaCADTutorialImages/warp_to_systems.gif" alt="AdaCAD Screenshot" width={1000} height={1000} />


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/13.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        ←  Repeat the exact same process along the weft until your completed warp and weft system template draft looks like this
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        Now, toggle back over to the workspace (remember, you can do this by hitting the “workspace” button next to “design modes:” in the top bar.<br></br><br></br>
                        Once you are back in the workspace, it’s time to assign structures to our warp and weft systems template using operations. This kind of drafting is considered “advanced” in AdaCAD so make sure you set the toggle next to “show advanced operations” to on.

                    </div>
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/14.png" alt="AdaCAD Screenshot" width={1000} height={1000} />

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/15.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto">
                        Scroll down the operations list to the section of green operations under the “compound” header. Click on the “layer notation” operation to drop it into your workspace.
                    </div>

                </div>

                <div className="text-kyokasho text-black w-1/3 mx-auto my-12">
                    Now, connect the outlet of the systems draft you made by clicking the down arrow attached to the systems draft. Connect it to the “systems draft” inlet of the layer notation operation by clicking the inlet labeled “systems draft”. By doing this, you have told the layer notation operation to use the systems draft you created as a template for your design.
                </div>
                <Image className="w-full object-cover" src="/AdaCADTutorialImages/16.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                <div className="text-kyokasho text-black w-1/3 mx-auto my-12">
                    Since layer notation expects some relationship between your systems and the layers in the cloth, you need to enter a line of text that corresponds with your layer relationship. Here I entered “(c3)(a1)(b2)”, meaning, all the red yarns (c and 3) are going to form a top layer, all the blue yarns (a and 1) are going to form the second layer, and all the black (b and 2) will form the bottom. When you hit the pink refresh button, you’ll see inlets appear…one for each ( ) / layer group you defined in the text string.

                    Now, you can connect structures into those inlets. AdaCAD will handle the layers, you just need to say if you want a tabby, twill or whatever in that layer. Let’s use twills for fun.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto flex flex-col gap-6">
                        <div>
                            Select the “twill” operation from the category of structure operations. This will pop a twill operation onto your workspace. Go ahead and click that twill 2 times so you have 2 different twill operations on your workspace. click “tabby” once, so you also have one tabby operation.
                        </div>
                        <div>Adjust the parameters of each tabby and twill operation to your desire (or match the picture below if you like to keep things simple) and connect the outlet of each structure operation to one of the inlets of the layer notation operation. In the image below, we’ve assigned tabby to red / c3, a 3,3 S twill to the blue/a1 and a 3,3 Z twill to black/b2. </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image className="w-full object-cover" src="/AdaCADTutorialImages/18.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <Image className="w-full object-cover" src="/AdaCADTutorialImages/19.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                    </div>
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto flex flex-col gap-6">

                        <div>
                            Voila, your draft has been created. Why, you might ask, is it so large? Well, AdaCAD automatically calculates how many times the pattern needs to repeat so that every component structure (e.g. the tabby and twills) will cleanly repeat when the structure is tiled.</div>
                        <div>
                            If you want to save this structure to use later, just double click it in the workspace and select “download to BMP”. Want to change something? you can change any of the parameters and the output will update automatically. This also is true if you update the system map, say, if you want the reds to only come in every 60 wefts, you could just adjust the system map to that sequence. Want to explore different colors, go ahead and change the on your systems draft and they’ll magically update.  </div>
                    </div>

                </div>

                <div className="text-kyokasho text-black w-1/3 mx-auto text-l my-24">
                    If you want to, say, change the pattern so that the blue and black weave on a single second layer and the reds float above, you could just change your pattern sequence to (c3)(a1 b2), hit update, and reconnect your structures like so:
                </div>

                <Image className="w-full object-cover" src="/AdaCADTutorialImages/20.png" alt="AdaCAD Screenshot" width={1000} height={1000} />

                <div className="text-kyokasho text-red w-1/3 mx-auto text-2xl my-24">

                    <div>
                        Let’s have a quick test. What pattern text would you use to have:
                        <ol className="list-outside list-decimal">
                            <li>The red on the top, black on the second layer and blue on the bottom?</li>
                            <li>What about all three on the same layer?</li>
                            <li>What if you wanted the black warp to weave with the red weft on layer 1 (top as one weaves), and the blue warps to weave with the blue wefts on 2, and the red warps to weave with black wefts on layer 3?</li>
                        </ol>
                    </div>


                    <ShowAnswers>
                        <div className="font-bold mb-2">Answers:</div>
                        <ol className="list-outside list-decimal">
                            <li>(c3)(b2)(a1)</li>
                            <li>(a1 b2 c3)</li>
                            <li>(c2)(a1)(b3)</li>
                        </ol>
                    </ShowAnswers>


                </div>
                <div className="text-kyokasho text-center text-black w-2/3 mx-auto text-xl my-24"> Using “Assign Draft to Systems” to Open More Space to Play
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto flex flex-col gap-6">
                        We can also get interesting combinations of warp and weft colors via “assign draft to systems” instead of layer notation. Here, AdaCAD won’t do anything fancy splitting things into layers. Instead, it will do as it is told—just add one structure to the selected combination of warp and weft systems.
                        <br />
                        <br />
                        So, for our warp and weft design, you can think of our design as having 9 possible combinations of warps and wefts.
                    </div>
                    <div className="grid grid-cols-4 grid-rows-4 w-7/8 mx-auto border-2 border-red text-xl font-bold">
                        <div className="text-black"></div>
                        <div className="text-blue text-center">Blue Warps (1)</div>
                        <div className="text-black text-center">Black Warps (2)</div>
                        <div className="text-red text-center">Red Warps(3)</div>
                        <div className="text-blue text-center">Blue Wefts (a)</div>
                        <div className="text-center"><span className="text-blue">a</span><span className="text-blue">1</span></div>
                        <div className="text-center"><span className="text-blue">a</span><span className="text-black">2</span></div>
                        <div className="text-center"><span className="text-blue">a</span><span className="text-red">3</span></div>
                        <div className="text-black text-center">Black Wefts (b)</div>
                        <div className="text-center"><span className="text-black">b</span><span className="text-blue">1</span></div>
                        <div className="text-center"><span className="text-black">b</span><span className="text-black">2</span></div>
                        <div className="text-center"><span className="text-black">b</span><span className="text-red">3</span></div>
                        <div className="text-red text-center">Red Wefts (c)</div>
                        <div className="text-center"><span className="text-red">c</span><span className="text-blue">1</span></div>
                        <div className="text-center"><span className="text-red">c</span><span className="text-black">2</span></div>
                        <div className="text-center"><span className="text-red">c</span><span className="text-red">3</span></div>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-24">
                    <Image className="mx-auto" src="/AdaCADTutorialImages/24_c1.png" alt="AdaCAD Screenshot" width={500} height={500} />
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto flex flex-col gap-6">
                        Assign draft to system lets you select a subset of these combinations to add structures. So, for instance, if we assign a satin to c1, you can see how the satin structure is applied only to the red wefts (c) and blue warps (1).
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-24">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto flex flex-col gap-6">
                        <div>Doing the same, but changing ‘c1’ to ‘c 1 2’ will assign the satin to both the blue and black warps as seen here</div>
                        <div>I typically repeat this process by adding as many “assign draft to system” operations as required for all combinations of warp and weft systems that I need. I then merge them into a single draft using the “overlay multiple” operation. Specifically, I connect the outlets from each assign draft to system operation I created, to an inlet on just one overlay multiple operation. Any unassigned system combination will be interpreted as a warp lowered. </div>
                    </div>
                    <Image className="mx-auto" src="/AdaCADTutorialImages/25_c12.png" alt="AdaCAD Screenshot" width={500} height={500} />

                </div>

                <div className="text-kyokasho text-black w-2/3 mx-auto my-auto flex flex-col gap-6">
                    In the image below, I created five different assigned drafts to system operations. Each one gets the system map we created as one of the inputs. The structures as assigned as follows (from left to right)
                    <ul className="list-outside list-disc my-12">
                        <li>c 1 2 - weft faced satin          → I’m attempting to make the red grid lines really pop</li>
                        <li>a b 3 - warp faced satin</li>
                        <li>c 3 - basket</li>
                        <li>a 1 2 - weft faced S twill    	  → I’m attempting a two-faced twill in the big square</li>
                        <li>b 1 2 - warp faced Z twill</li>
                    </ul>

                </div>
                <Image className="w-full object-cover" src="/AdaCADTutorialImages/26.png" alt="AdaCAD Screenshot" width={1000} height={1000} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-24">
                    <div className="text-kyokasho text-black w-2/3 mx-auto my-auto flex flex-col gap-6">
                        I drop them all into the overlap multiple operation and out came the result →

                    </div>
                    <Image className="w-full object-cover" src="/AdaCADTutorialImages/27.png" alt="AdaCAD Screenshot" width={1000} height={1000} />

                </div>





            </div >











        </section >
    );
}
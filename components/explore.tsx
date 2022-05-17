import React from "react";
import GridContainer from "./wrapers/gridContainer";

const explore = [
    { caption: "open events" , text: "APEX ARENA scouts will spot  talented skillful players that show promise" , img: "/img/explore1.png"},
    { caption: "arenas" , text: "Open-world terrains where players battle each other for the  ultimate goal of rankingup " , img: "/img/explore2.png"},
    { caption: "investments" , text: "Buy Arenas to rent it for battles if you don’t want to be a warrior or invest in best players " , img: "/img/explore3.png"},
]

const Explore = () => {
    return(
        <GridContainer className="mb-32 relative">
            <div className="absolute left-16 flex flex-col w-1/2 uppercase text-5xl justify-start">explore the variety<h1 className="flex justify-end">of ways to play</h1> </div>
            {explore.map((item, i) => (
                <div className="flex flex-col justify-end col-span-4">
                    <img src={item.img} alt="" className="mb-9"/>
                    <h3 className="text-2xl uppercase mb-4">{item.caption}</h3>
                    <div className="opacity-50 mb-5">{item.text}</div>
                    <a href="" className="opacity-30 uppercase">Open schedule</a>
                </div>
            ))}
        </GridContainer>
    )
}

export default Explore
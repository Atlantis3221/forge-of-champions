import React from "react";
import GridContainer from "./wrapers/gridContainer";

const Intro = () => {
    return (
        <GridContainer>
            <div className="col-span-12 flex h-screen w-full">
                <div className="flex items-end w-full pb-16">
                    <div className="flex flex-col col-span-8">
                    <h1 className="text-6xl uppercase leading-none">
                        stay the one who will <br /> survive on 
                    </h1>
                    <h1 className="text-6xl uppercase flex justify-center leading-none">the arena</h1>
                    </div>
                    <div>
                    Multiplayer battle royale play-to-earn <br /> game in which anyone can buy and own <br /> virtual property, manage exciting  arenas, <br /> and meet new friends
                    </div>
                </div>
            </div>
        </GridContainer>
    )
}

export default Intro
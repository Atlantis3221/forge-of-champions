import React from "react";
import GridContainer from "./wrapers/gridContainer";

const BuyLand = () => {
    return(
        <GridContainer className="mb-32">
            <div className="col-span-6 text-5xl uppercase flex flex-col w-full">
                <h1>Buy your land</h1>
                <h1 className="flex justify-end w-full">and become</h1>
                <h1>arena master</h1>
            </div>
            <div className="col-start-8 col-end-12 flex items-center">
                <div >Manage and grow your own private arena by hosting battles and become famous in the apex arena metaverse</div>
            </div>
        </GridContainer>
    )
}

export default BuyLand
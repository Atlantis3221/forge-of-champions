import React, { useState } from "react";

import GridContainer from "./wrapers/gridContainer";

const skins = [
  { skin: "/img/skin1.png", nav: "/img/navigation2.png" },
  { skin: "/img/skin2.png", nav: "/img/navigation2.png" },
  { skin: "/img/skin3.png", nav: "/img/navigation2.png" },
  { skin: "/img/skin4.png", nav: "/img/navigation2.png" },
  { skin: "/img/skin5.png", nav: "/img/navigation2.png" },
];

const Marketplace = () => {

  const [isActive, setIsActive] = useState(false);
  const [skinEl, setSkinEl] = useState(0);
  const [skinImage, setSkinImage] = useState(skins[skinEl].skin);

  const handleImageClick = () => {
    if(skinEl===skins.length-1){
      setSkinEl(0);
    } else {
      setSkinEl(skinEl+1);
    }
    setSkinImage(skins[skinEl].skin);
  }

  return (
    <GridContainer id="marketplace">
      <div className="col-span-5 flex flex-col justify-center mr-8">
        <h1 className="text-5xl flex justify-start">MARKETPLACE</h1>
        <div className="flex text-xl justify-end uppercase">
          giving skills a chance
        </div>
        <div className="flex justify-end">None of our NFTs will enhance player <br /> performance in any way. But it makes <br />a lot of fun!</div>
      </div>

      <div className="col-span-6">
        <img src={skinImage} onClick={handleImageClick}/>
      </div>

      <div className="flex flex-col justify-center">
        {skins.map((item, i)=>(
          <img src={item.nav} alt="" className="rounded-full mb-2" key={i} onClick={() => setSkinImage(item.skin)}/>
        ))}
      </div>
    </GridContainer>
  );
};

export default Marketplace;

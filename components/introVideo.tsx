import { url } from "inspector";
import React, { useState } from "react";
import GridContainer from "./wrapers/gridContainer";

const Intro = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <GridContainer className="mt-16">
      <div
        className="col-span-12 flex flex-col h-screen w-full"
      >
        <div className="flex justify-center">
          <div className="relative">
            <video
              controls
              poster="/img/land_bg.png"
            >
              <source src="/video/test_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="flex items-end w-full pb-16 bg-top">
          <div className="flex flex-col">
            <h1 className="text-6xl uppercase leading-none">
              stay the one who will <br /> survive on
            </h1>
            <h1 className="text-6xl uppercase flex justify-center leading-none">
              the arena
            </h1>
          </div>
          <div>
            Multiplayer battle royale play-to-earn <br /> game in which anyone
            can buy and own <br /> virtual property, manage exciting arenas,{" "}
            <br /> and meet new friends
          </div>
        </div>
      </div>
    </GridContainer>
  );
};

export default Intro;

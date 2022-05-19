import React, { useState } from "react";

const lands = [
  {
    name: "cyberpank",
    background: "url('/img/cyberpank_bg.png')",
    cost: "3458",
    arenaRoi: "984",
    playerRoi: "34",
    vector: "/img/landLine.svg",
  },
  {
    name: "apexium",
    background: "url('/img/apexium_bg.png')",
    cost: "2158",
    arenaRoi: "427",
    playerRoi: "21",
    vector: "/img/landLine.svg",
  },
  {
    name: "salvus",
    background: "url('/img/salvus_bg.png')",
    cost: "988",
    arenaRoi: "234",
    playerRoi: "14",
    vector: "/img/landLine.svg",
  },
  {
    name: "desert",
    background: "url('/img/desert_bg.png')",
    cost: "9782",
    arenaRoi: "1234",
    playerRoi: "89",
    vector: "",
  },
];

const Land = () => {
  const [background, setBackground] = useState(lands[0].background);
  const [activeTitle, setActiveTitle] = useState(lands[0].name);
  const [cost, setCost] = useState(lands[0].cost);
  const [arenaRoi, setArenaRoi] = useState(lands[0].arenaRoi);
  const [playerRoi, setPlayerRoi] = useState(lands[0].playerRoi);

  return (
      <div
        className={`flex w-full justify-center h-screen bg-cover mb-32`}
        style={{ backgroundImage: background }}
        id="land"
      >
        <div className="flex flex-col h-full items-center justify-center">
          <div className="flex h-full">
            {lands.map((item, i) => (
              <div key={i} className="flex items-center">
                <span
                  className={`uppercase cursor-pointer text-4xl mx-4 ${activeTitle === item.name ? '' : 'opacity-50'} hover:opacity-100`}
                  onClick={() => {
                    setCost(item.cost);
                    setArenaRoi(item.arenaRoi);
                    setPlayerRoi(item.playerRoi);
                    setBackground(item.background);
                    setActiveTitle(item.name);
                  }}
                >
                  {item.name}
                </span>
                <img src={item.vector} alt=""/>
              </div>
            ))}
          </div>
          <div className="flex justify-around w-3/4 items-end mb-8">
            <div className="flex flex-col">
              <div className="uppercase text-4xl">{cost} K</div>
              <div className="uppercase text opacity-50">land cost</div>
            </div>

            <div className="flex flex-col">
              <div className="uppercase text-4xl">{arenaRoi}%</div>
              <div className="uppercase text opacity-50">roi from arena</div>
            </div>

            <div className="flex-flex-col">
              <div className="uppercase text-4xl">{playerRoi}%</div>
              <div className="uppercase text opacity-50">roi from player</div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Land;

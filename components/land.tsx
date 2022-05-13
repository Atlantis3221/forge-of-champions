import React, { useState } from "react";

const lands = [
  {
    name: "cyberpank",
    background: "url('/img/cyberpank_bg.png')",
    cost: "3458",
    arenaRoi: "984",
    playerRoi: "34",
    activeNum: 0,
  },
  {
    name: "apexium",
    background: "url('/img/apexium_bg.png')",
    cost: "2158",
    arenaRoi: "427",
    playerRoi: "21",
    activeNum: 1,
  },
  {
    name: "salvus",
    background: "url('/img/salvus_bg.png')",
    cost: "988",
    arenaRoi: "234",
    playerRoi: "14",
    activeNum: 2,
  },
  {
    name: "desert",
    background: "url('/img/desert_bg.png')",
    cost: "9782",
    arenaRoi: "1234",
    playerRoi: "89",
    activeNum: 3,
  },
];

const Land = () => {
  const [background, setBackground] = useState(lands[0].background);
  const [active, setActive] = useState(true);
  const [cost, setCost] = useState(lands[0].cost);
  const [arenaRoi, setArenaRoi] = useState(lands[0].arenaRoi);
  const [playerRoi, setPlayerRoi] = useState(lands[0].playerRoi);

  return (
    <>
      <div
        className={`flex w-full justify-center h-screen bg-cover`}
        style={{ backgroundImage: background }}
      >
        <div className="flex flex-col h-full items-center justify-center">
          <div className="flex">
            {lands.map((item, i) => (
              <div className="flex">
                <span
                  className="uppercase text-xl mx-4"
                  onClick={() => {
                    setCost(item.cost);
                    setArenaRoi(item.arenaRoi);
                    setPlayerRoi(item.playerRoi);
                    setBackground(item.background);
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-end">
            <div className="flex flex-col">
              <div className="uppercase text-xl">{cost} K</div>
              <div className="uppercase text opacity-50">land cost</div>
            </div>

            <div className="flex flex-col">
              <div className="uppercase text-xl">{arenaRoi}%</div>
              <div className="uppercase text opacity-50">roi from arena</div>
            </div>

            <div className="flex-flex-col">
              <div className="uppercase text-xl">{playerRoi}%</div>
              <div className="uppercase text opacity-50">roi from player</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Land;

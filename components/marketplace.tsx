import React, { useRef } from "react";
import { Swiper, SwiperSlide, } from "swiper/react";

import "swiper/css";
import GridContainer from "./wrapers/gridContainer";

const skins = [
  { img: "/img/skin1.png" },
  { img: "/img/skin1.png" },
  { img: "/img/skin1.png" },
  { img: "/img/skin1.png" },
  { img: "/img/skin1.png" },
];

const Marketplace = () => {
  return (
    <GridContainer>
      <div className="col-span-5 flex flex-col justify-center mr-8">
        <h1 className="text-5xl flex justify-start">MARKETPLACE</h1>
        <div className="flex text-xl justify-end uppercase">
          giving skills a chance
        </div>
        <div className="flex justify-end">None of our NFTs will enhance player <br /> performance in any way. But it makes <br />a lot of fun!</div>
      </div>
     
      <Swiper
        spaceBetween={0}
        initialSlide={1}
        slidesPerView={1}
        style={{ display: "flex", width: "50vw", maxWidth: "50vw" }}
      >
        {skins.map((skin, i) => (
          <SwiperSlide
            key={i}
            className={`flex flex-col`}
          >
            <div style={{ background: "", width: "100%", height: "100%" }}>
              <img src={skin.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </GridContainer>
  );
};

export default Marketplace;

import React from "react";
import { Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import GridContainer from "../wrapers/gridContainer";

const tiers = [
  { img: "/public/tier1.png", caption: "TIERS #1" , text: "10" },
  { img: "/public/tier1.png", caption: "TIERS #2" , text: "100" },
  { img: "/public/tier1.png", caption: "TIERS #3" , text: "1000" },
]  
  
const ImproveSwiper = () => {
  return (
    <GridContainer>
      <div className="col-span-6 flex flex-col justify-center mr-8">
      <h1 className="text-5xl flex justify-start">IMPROVE YOUR</h1>
      <h1 className="text-5xl flex justify-end"> ABILITIES</h1>
      <div className="flex justify-end">Players are the core of APEX ARENA. <br />They give their time and effort to grow in <br />the game and to advance their ranks</div>
      </div>
      <Swiper
        modules={[Scrollbar, FreeMode]}
        spaceBetween={20}
        freeMode
        slidesPerView={1.5}
        
        
        scrollbar={{ draggable: true }}
        style={{display:"flex", width:"50vw", maxWidth:"50vw"}}
      >
        {tiers.map((tier, i) => (
          <SwiperSlide key={i} style={{ width:"28vw" }} className={`flex flex-col`}>
          <div style={{background: "linear-gradient(170.44deg, #790A10 10.67%, rgba(72, 7, 103, 0) 92.79%)", width:"100%", height:"100%"}}>
            <img src={tier.img} alt="" style={{height:"400px"}}/>
          </div>
          <div className="my-4 leading-none">{tier.caption}</div>
          <div className="leading-none">Play a minimum of {tier.text} <br /> battles In the Open Arena</div>
        </SwiperSlide>
        ))}
        

      </Swiper>
    </GridContainer>
  );
};

export default ImproveSwiper;

import React from "react";
import { Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import GridContainer from "../wrapers/gridContainer";

const ImproveSwiper = () => {
  return (
    <GridContainer>
      <h1 className="col-span-6">Jopa</h1>
      <Swiper
        modules={[Scrollbar, FreeMode]}
        spaceBetween={20}
        freeMode
        slidesPerView={1.5}
        
        
        scrollbar={{ draggable: true }}
        style={{display:"flex", width:"50vw", maxWidth:"50vw"}}
      >
        <SwiperSlide style={{display:"flex", width:"28vw" }}>
          <div style={{background: "linear-gradient(170.44deg, #790A10 10.67%, rgba(72, 7, 103, 0) 92.79%)", width:"100%"}}>
            <img src="/public/slide_1.png" alt="" className={`flex h-72 w-1/4`} />
            <div>dsbfasbfjkafuyl1111</div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", width:"28vw"}}>
        <div style={{background: "linear-gradient(170.44deg, #790A10 10.67%, rgba(72, 7, 103, 0) 92.79%)", width:"100%"}}>
            <img src="/public/slide_1.png" alt="" className={`flex h-72`} />
            <div>22222222222222222222</div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", width:"28vw"}}>
        <div style={{background: "linear-gradient(170.44deg, #790A10 10.67%, rgba(72, 7, 103, 0) 92.79%)", width:"100%"}}>
            <img src="/public/slide_1.png" alt="" className={`flex h-72`} />
            <div>33333333333333333333</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </GridContainer>
  );
};

export default ImproveSwiper;

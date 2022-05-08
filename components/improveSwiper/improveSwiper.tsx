import React from "react";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import GridContainer from "../wrapers/gridContainer";

const ImproveSwiper = () => {
  return (
    <GridContainer>
      <h1 className="col-span-6">Jopa</h1>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="/public/slide_1.png" alt="" />
          <div>dsbfasbfjkafuyl1111</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/slide_1.png" alt="" />
          <div>2222222222222222</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/slide_1.png" alt="" />
          <div>3333333333333333</div>
        </SwiperSlide>
      </Swiper>
    </GridContainer>
  );
};

export default ImproveSwiper;

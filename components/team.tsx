import React from "react";
import { Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import GridContainer from "./wrapers/gridContainer";

const team = [
  {
    img: "/img/member1.png",
    caption: "MORGAN FREEMAN",
    text: "None of our NFTs will enhance player performance in any way. But it makes a lot of fun!",
  },
  {
    img: "/img/member1.png",
    caption: "DANIEL HANKS",
    text: "None of our NFTs will enhance player performance in any way. But it makes a lot of fun!",
  },
  {
    img: "/img/member1.png",
    caption: "XELA RAY",
    text: "None of our NFTs will enhance player performance in any way. But it makes a lot of fun!",
  },
  {
    img: "/img/member1.png",
    caption: "TIERS #3",
    text: "None of our NFTs will enhance player performance in any way. But it makes a lot of fun!",
  },
  {
    img: "/img/member1.png",
    caption: "TIERS #3",
    text: "None of our NFTs will enhance player performance in any way. But it makes a lot of fun!",
  },
  {
    img: "/img/member1.png",
    caption: "TIERS #3",
    text: "None of our NFTs will enhance player performance in any way. But it makes a lot of fun!",
  },
];

const Team = () => {
  return (
    <GridContainer id="team">
      <div className="col-span-12 flex justify-between">
        <h1 className="text-5xl flex justify-start">MEET OUR PEOPLE</h1>
        <div className="flex justify-end">
          We are deverse team of domain <br />
          expert and problem solvers.
        </div>
      </div>
      <div className="col-span-2"/>
      <Swiper
        modules={[Scrollbar, FreeMode]}
        spaceBetween={114}
        freeMode
        loop
        slidesPerView={3}
        scrollbar={{ draggable: true }}

        style={{
          display: "flex",
          width: "83vw",
          maxWidth: "83vw",
          alignItems: "end",
        }}
      >
        {team.map((member, i) => (
          <SwiperSlide key={i} className={`flex flex-col`}>
            <img src={member.img} alt="" className="w-1/2" />
            <div className="my-4 leading-none">{member.caption}</div>
            <div className="leading-none">{member.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </GridContainer>
  );
};

export default Team;

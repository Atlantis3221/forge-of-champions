import React, { ReactNode, useCallback, useEffect, useState } from "react";
import HeaderLinks from "./headerLinks";

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [currentPoint, setCurrentPoint] = useState("");
  const [isShow, setIsShow] = useState(false);

  const links = [
    {
      name: "BATTLE ROYALE",
      link: "",
    },
    {
      name: "LANDS",
      link: "",
    },
    {
      name: "MARKETPLACE",
      link: "",
    },
    {
      name: "DAO",
      link: "team",
    },
  ];

  return (
    <>
      <div
        id="header"
        className={`flex sticky top-0 left-0 w-full z-50`}
      >
        <div className={`flex`}>
          {links.map((item, index) => {
            return (
              <HeaderLinks
                key={index}
                // {...{ setCurrentPoint, scrollTo }}
                active={item.link === currentPoint}
                {...{ setIsShow }}
                link={item.link}
              >
                {item.name}
              </HeaderLinks>
            );
          })}
        </div>
        <img className={`flex`} src={``} alt={`logo`} />
        <button></button>
      </div>
    </>
  );
}

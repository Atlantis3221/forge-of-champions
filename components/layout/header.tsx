import { url } from "inspector";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import GridContainer from "../wrapers/gridContainer";
import HeaderLinks from "./headerLinks";

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [currentPoint, setCurrentPoint] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const links = [
    {
      name: "BATTLE ROYALE",
      link: "1",
    },
    {
      name: "LANDS",
      link: "2",
    },
    {
      name: "MARKETPLACE",
      link: "marketplace",
    },
    {
      name: "DAO",
      link: "team",
    },
  ];

  useEffect(() => {
    function onScrolling() {
      var currentPosition = window.scrollY;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  });
  const scrollTo = (event: { target: { hash: string } }, hash: any) => {
    if (!event.target.hash && !hash) return;

    const point: string = hash || event.target.hash.replace("#", "");
    const target: HTMLElement | null = document.getElementById(point);

    if (target === null) return;
    window.scrollTo({
      top: Math.max(
        0,
        target.getBoundingClientRect().top - headerHeight + window.scrollY
      ),
      behavior: "smooth",
    });
  };

  const onScroll = useCallback((e: any) => {
    for (let detail of links) {
      //@ts-ignore
      const elm: HTMLElement = document.getElementById(detail.link);

      if (elm) {
        const top = elm.getBoundingClientRect().top;
        const beforeHeader = top <= headerHeight + 50;
        if (beforeHeader) continue;

        const topBeforeCenterOfScreen = top <= window.innerHeight / 2;
        if (topBeforeCenterOfScreen) {
          setCurrentPoint(detail.link);
          break;
        }
        // console.log(beforeHeader)
      }
      // console.log(elm)
    }
  }, []);

  useEffect(() => {
    setHeaderHeight(document.getElementById("header")?.clientHeight as number);
  }, []);

  const preventDefault = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  useEffect(() => {
    window.onhashchange = preventDefault;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  useEffect(() => {
    const body = document.body;
    if (isShow) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "visible";
    }
  });

  return (
    <div
      id="header"
      className={`flex sticky justify-between top-0 left-0 w-full px-16 z-50`}
    >
      <div className={`flex items-center`}>
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
      <img
        className={`absolute left-1/2 -translate-x-1/2 top-3`}
        src={`/img/logo.svg`}
        alt={`logo`}
      />
      <button
        className={`flex items-center justify-end`}
        onMouseEnter={() => setIsActive(!isActive)}
        onMouseLeave={() => setIsActive(!isActive)}
      >
        {isActive ? (
          <img src="/img/playDemoActive.png" />
        ) : (
          <img src="/img/playDemoInactive.png" />
        )}
      </button>
    </div>
  );
}

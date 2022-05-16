import React from "react";

export interface IMap {
    desertOnClick: any
    factoryOnClick: any
    schoolOnClick: any
}

const Map = ({ desertOnClick, factoryOnClick, schoolOnClick }: IMap) => {
    return (
        <div className="relative text-sm w-max ml-auto mr-auto">
            <img src="/img/map.png" className="" alt="" />
            <div
                onClick={desertOnClick}
                className="flex items-center group cursor-pointer absolute top-[8%] left-[18%] hover:left-[16%] hover:top-[6%]">
                <div className="bg-plus group-hover:bg-desert bg-no-repeat w-10 h-10 group-hover:w-16 group-hover:h-16" />
                <img src="/img/point.svg" className="invisible group-hover:visible mx-2" alt="" />
                <p className="invisible group-hover:visible uppercase">Desert</p>
            </div>
            <div
                onClick={factoryOnClick}
                className="flex items-center group cursor-pointer absolute top-[20%] left-[73%] hover:left-[71%] hover:top-[18%]">
                <div className="bg-plus group-hover:bg-factory bg-no-repeat w-10 h-10 group-hover:w-16 group-hover:h-16" />
                <img src="/img/point.svg" className="invisible group-hover:visible mx-2" alt="" />
                <p className="invisible group-hover:visible uppercase">Factory</p>
            </div>
            <div
                onClick={schoolOnClick}
                className="flex items-center group cursor-pointer absolute top-[70%] left-[60%] hover:left-[58%] hover:top-[68%]">
                <div className="bg-plus group-hover:bg-school bg-no-repeat w-10 h-10 group-hover:w-16 group-hover:h-16" />
                <img src="/img/point.svg" className="invisible group-hover:visible mx-2" alt="" />
                <p className="invisible group-hover:visible uppercase">School</p>
            </div>
        </div>
    )
}

export default Map
"use client";
import {
  faBars,
  faHouse,
  faInfoCircle,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BoldSVG } from "../../components/Shapes/boldSVG";
import { EmptySVG } from "../../components/Shapes/emptySVG";
import { ShadowSVG } from "../../components/Shapes/shadowSVG";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden w-full bg-gradient-to-br from-sky-300 to-blue-800 relative">
      <nav className="sm:flex md:py-12 sm:py-8 lg:px-32 sm:px-20 py-8 px-12 justify-between items-center relative">
        <div
          className="sm:hidden text-xl font-bold text-white flex gap-x-3 items-center cursor-pointer w-fit"
          onClick={() => setMenu((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} className="sm:hidden block w-4 z-50" />
          <span className="z-50 select-none">TinyModels</span>
        </div>
        <div className="sm:block hidden text-xl font-bold text-white cursor-pointer w-fit">
          <span className="z-50 select-none">TinyModels</span>
        </div>
        <div className="sm:flex md:gap-x-12 gap-x-8 hidden">
          <div className="font-medium text-white flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faHouse} className="w-4" /> Home
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faLayerGroup} className="w-4" />
            Models
          </div>
          <div className="font-medium text-white/70 hover:text-white transition-colors flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faInfoCircle} className="w-4" />
            About
          </div>
        </div>
        <div
          className={`bg-gradient-to-br h-screen to-sky-300 from-blue-800 sm:hidden absolute top-0 left-0 flex flex-col gap-4 z-10
            ${
              menu ? "w-full" : "w-0"
            } overflow-hidden transition-all duration-500
            `}
        >
          <div className="font-medium text-white flex gap-x-3 items-center mt-24 ml-12 w-full">
            <FontAwesomeIcon icon={faHouse} className="w-4" />
            Home
          </div>
          <div className="font-medium text-white/70 flex gap-x-3 items-center w-full ml-12">
            <FontAwesomeIcon icon={faLayerGroup} className="w-4" />
            Models
          </div>
          <div className="font-medium text-white/70 flex gap-x-3 items-center w-full ml-12">
            <FontAwesomeIcon icon={faInfoCircle} className="w-4" />
            About
          </div>
        </div>
      </nav>

      <div className="md:grid flex flex-col grid-cols-2 md:h-screen md:mt-8 mt-4 md:py-12 lg:px-32 sm:py-8 md:px-20 py-8 px-12 lg:gap-x-32 gap-x-14">
        <div className="flex flex-col gap-y-10 relative">
          <div className="lg:text-5xl md:text-[40px] text-2xl font-bold text-white ">
            Build better models. Easier. Together.
          </div>
          <div className="md:text-base text-sm text-white/80 font-light">
            Setting up the environment, putting things together, it takes
            forever. With TinyModels call it done when you finish coding
          </div>
          <div className="flex md:gap-x-4 gap-x-2">
            <div className="md:px-6 md:py-3 px-4 py-2 bg-white text-blue-700 hover:bg-white/60 hover:text-blue-700 rounded-md md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
              START FOR FREE
            </div>
            <div className="md:px-6 md:py-3 px-4 py-2 border border-white text-white hover:border-white/30 hover:bg-white/60 hover:text-blue-700 rounded-md md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
              READ THE DOCS
            </div>
          </div>
        </div>
        <div className="relative">
          <BoldSVG />
          <ShadowSVG />
          <EmptySVG />
        </div>
      </div>
      <div className="shapedividers_com-2451 w-full h-24 bottom-0 !absolute"></div>
    </div>
  );
};

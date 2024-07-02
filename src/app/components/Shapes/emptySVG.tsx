import React from "react";

export const EmptySVG = () => {
  return (
    <svg
      className="absolute md:top-0 top-12 
      xl:left-20 lg:left-16 md:left-12 left-9 
      xl:w-[450px] lg:w-[400px] md:w-[350px] w-[300px]"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stopColor="rgba(255, 255, 255, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stopColor="rgba(255, 255, 255, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="none"
        d="M17.5,-24.7C24,-19.4,31.4,-16,33.2,-10.8C34.9,-5.5,30.9,1.6,27.6,8.1C24.3,14.5,21.6,20.2,17.1,25.3C12.6,30.4,6.3,34.8,-0.8,35.9C-7.8,36.9,-15.6,34.6,-19.9,29.5C-24.1,24.3,-24.7,16.3,-28.3,8.4C-31.9,0.6,-38.5,-7,-36.8,-11.8C-35,-16.6,-25,-18.6,-17.5,-23.5C-9.9,-28.5,-5,-36.5,0.3,-36.9C5.5,-37.2,11,-30,17.5,-24.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

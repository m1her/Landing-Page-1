import React from "react";

export const HighliterSVG = () => {
  return (
    <svg
      className="stroke-white fill-white opacity-30 z-10 absolute -rotate-12  
      xl:w-[500px] lg:w-[450px] md:w-[400px] w-[300px]
      xl:top-28 lg:top-40 md:top-56 sm:top-20 top-24
      lg:right-6 md:-right-10 left-0 
      "
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <defs>
        <linearGradient id="gradient1" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(255,255,255)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0 }}
          />
        </linearGradient>
        <mask id="mask1">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient1)" />
        </mask>
      </defs>
      <g mask="url(#mask1)">
        <polygon
          points="0,-54.743402 47.409176,-27.371701 47.409176,27.3717 0,54.7434 -47.409176,27.3717 -47.409176,-27.371701 0,-54.743402"
          transform="matrix(.969546 0.56602-.581764 0.996514 234.896468 106.676832)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="white"
        />
        <rect
          width="161.669987"
          height="99.304071"
          rx="0"
          ry="0"
          transform="matrix(1.39053 0 0 1.15264 10.089501 49.445926)"
          strokeWidth="0"
          fill="white"
        />
      </g>
    </svg>
  );
};

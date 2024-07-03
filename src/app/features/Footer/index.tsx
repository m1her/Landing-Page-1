import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div
      className="overflow-hidden bg-white w-full min-h-screen flex flex-col items-center lg:gap-x-20 gap-x-8 md:gap-y-8 gap-y-6 py-20
    lg:px-32 px-20 relative"
    >
      <div className="z-50 flex flex-col items-center md:gap-y-4 gap-y-2 md:mt-8 mt-20">
        <div className="md:text-4xl text-2xl font-bold text-[#272767]">
          Ready to get started?
        </div>
        <div className="text-[#272767]/80 md:text-base text-sm">
          Start building better models today!
        </div>
      </div>
      <div className="z-50 w-full flex md:flex-row flex-col gap-y-4 gap-x-4 justify-center items-center mt-12">
        <div className="w-fit md:px-6 md:py-3 px-4 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
          START FOR FREE
        </div>
        <div className="md:px-6 md:py-3 px-4 py-2 border border-gray-600 text-gray-600 hover:bg-sky-500 hover:border-sky-500 hover:text-white rounded-md md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
          READ THE DOCS
        </div>
      </div>
      <div className="lg:px-32 px-20 absolute bottom-0 w-full z-50">
        <div className="flex items-center justify-between py-16 border-t border-gray-200 w-full">
          <div className="flex items-start text-sm text-gray-400">
            <FontAwesomeIcon icon={faCopyright} className="w-2 h-2 mr-1 mt-1" />
            2017 TinyModels.
          </div>
          <div className="flex items-start text-sm text-gray-400">
            Built by{" "}
            <span className="font-semibold text-gray-500 ml-1">Maher.</span>
          </div>
        </div>
      </div>

      <svg
        className="absolute lg:top-1/2 md:top-1/3 -translate-y-1/2 lg:left-40 md:left-32 left-0 w-[200px] fill-green-400"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="greenShadow" x="-50%" y="-50%" width="400%" height="400%">
          <feDropShadow
            dx="4"
            dy="10"
            stdDeviation="12"
            floodColor="#4ade80"
            floodOpacity="0.6"
          />
        </filter>
        <path
          d="M32,-25.6C36.3,-20.1,31.2,-7.1,28.3,6.8C25.4,20.7,24.8,35.5,13.3,49.4C1.9,63.2,-20.5,76.1,-32.5,69.6C-44.5,63,-46,36.9,-40,21.2C-34,5.4,-20.5,0,-12.5,-6.4C-4.6,-12.8,-2.3,-20,5.8,-24.6C13.8,-29.2,27.7,-31.1,32,-25.6Z"
          transform="translate(100 100)"
          filter="url(#greenShadow)"
        />
      </svg>
      <svg
        className="absolute lg:top-1/4 md:top-16 top-1/4 -translate-y-1/2 lg:right-40 md:right-24 right-10 w-[200px] fill-blue-400"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blueShadow" x="-50%" y="-50%" width="400%" height="400%">
          <feDropShadow
            dx="4"
            dy="10"
            stdDeviation="12"
            floodColor="#60a5fa"
            floodOpacity="0.6"
          />
        </filter>
        <path
          d="M43.7,-25.4C54,-21.9,58,-3.9,54,11.8C50,27.5,38.1,40.9,22.5,49.4C7,57.9,-12.2,61.5,-22.8,53.9C-33.3,46.3,-35.3,27.4,-34.8,12.7C-34.4,-1.9,-31.4,-12.3,-25.2,-14.9C-19,-17.4,-9.5,-12.1,3.6,-15C16.7,-17.8,33.4,-28.9,43.7,-25.4Z"
          transform="translate(100 100)"
          filter="url(#blueShadow)"
        />
      </svg>
      <svg
        className="absolute top-2/3 -translate-y-1/2 right-52 -translate-x-1/2 w-[200px] fill-indigo-600"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="purpleShadow" x="-50%" y="-50%" width="400%" height="400%">
          <feDropShadow
            dx="4"
            dy="10"
            stdDeviation="12"
            floodColor="#4f46e5"
            floodOpacity="0.6"
          />
        </filter>
        <path
          d="M46.4,-34.8C56.7,-24,59.3,-5,56.3,14.7C53.3,34.4,44.7,54.6,31.4,58.4C18.1,62.3,0.1,49.7,-12.1,38.6C-24.2,27.6,-30.5,18,-28.5,11C-26.6,4,-16.4,-0.5,-10.2,-10.3C-4.1,-20,-2,-35.2,8,-41.6C18,-47.9,36,-45.5,46.4,-34.8Z"
          transform="translate(100 100)"
          filter="url(#purpleShadow)"
        />
      </svg>
    </div>
  );
};

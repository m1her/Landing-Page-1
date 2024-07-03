import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div
      className="overflow-hidden bg-white w-full min-h-screen flex flex-col items-center lg:gap-x-20 gap-x-8 md:gap-y-8 gap-y-6 py-20
    lg:px-32 px-20 relative"
    >
      <div className="flex flex-col items-center md:gap-y-4 gap-y-2 mt-8">
        <div className="md:text-4xl text-2xl font-bold text-[#272767]">
          Ready to get started?
        </div>
        <div className="text-[#272767]/80 md:text-base text-sm">
          Start building better models today!
        </div>
      </div>
      <div className="w-full flex gap-x-4 justify-center items-center mt-12">
        <div className="w-fit md:px-6 md:py-3 px-4 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
          START FOR FREE
        </div>
        <div className="md:px-6 md:py-3 px-4 py-2 border border-gray-600 text-gray-600 hover:bg-sky-500 hover:border-sky-500 hover:text-white rounded-md md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
          READ THE DOCS
        </div>
      </div>
      <div className="lg:px-32 px-20 absolute bottom-0 w-full">
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
    </div>
  );
};

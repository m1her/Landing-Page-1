import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface PriceCardTypes {
  title?: string;
  price?: string;
  type?: string;
  isContact: boolean;
  advantages: string[];
  priceColor?: string;
}

export const PriceCard = ({
  title,
  price,
  type,
  isContact,
  advantages,
  priceColor,
}: PriceCardTypes) => {
  return (
    <div className="z-40 flex h-full min-w-44 flex-grow flex-col bg-white/90 hover:bg-white rounded relative w-full shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] lg:hover:scale-110 hover:scale-105 transition-all duration-300">
      {isContact ? (
        <div className="px-8 py-8 text-center">
          <div className="text-2xl font-bold text-[#141445] w-full mb-8">
            {title}
          </div>
          <div className="text-indigo-800 text-3xl font-semibold py-7">
            Contact Us
          </div>
        </div>
      ) : (
        <div className="px-8 py-8 text-center">
          <div className="text-2xl font-bold text-[#141445] w-full  mb-8">
            {title}
          </div>
          <div className="flex flex-col">
            <div className="flex items-start justify-center w-full ">
              <div className="text-gray-400 text-sm">$</div>
              <div className={`${priceColor} text-7xl font-light`}>{price}</div>
            </div>
            <div className="text-gray-400 text-sm w-full ">
              / {type} per hour
            </div>
          </div>
        </div>
      )}

      <div className="border-b-[1px] border-gray-100 "></div>
      <div className="px-8 py-8 text-center flex flex-col gap-y-4 text-sm">
        {advantages.map((item: string, idx) => (
          <div key={idx} className="flex justify-start items-start gap-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-sky-500 w-4 h-4 mt-1"
            />
            <div className="text-gray-400 text-start">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

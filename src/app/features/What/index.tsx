import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const What = () => {
  return (
    <div className="bg-[#ededf2] relative">
      <div className="flex flex-col items-center md:gap-y-4 gap-y-2">
        <div className="md:w-8 w-6 text-purple-500 bg-[#f9f2ff] shadow shadow-indigo-300/20 rounded-full aspect-square flex justify-center items-center">
          <FontAwesomeIcon icon={faShuffle} className="md:w-3 w-2 -rotate-90" />
        </div>
        <div className="md:text-4xl text-2xl font-bold text-[#272767]">
          Collaboration made easy
        </div>
        <div className="text-[#272767]/40 md:text-base text-sm">
          There are two ways to collaborate with models
        </div>
      </div>

      <div
        className="overflow-hidden w-full min-h-screen md:grid grid-cols-2 flex flex-col items-center lg:gap-x-20 gap-x-8 md:gap-y-8 gap-y-6 py-20 md:pt-0 pt-8
     lg:px-32 px-20 relative"
      >
        <div className="flex flex-col-reverse items-center text-center gap-y-8">
          <div className="md:w-[250px] w-[200px] aspect-square relative md:order-3 order-4">
            <Image src="/img3.png" alt={""} fill />
          </div>
          <div className="text-[#272767]/40 md:text-base text-sm">
            Machine learning is a lot of trial-and-error. Don&rsquo;t struggle
            again to find the best parameters and features.
          </div>
          <div className="md:text-2xl text-1xl font-bold text-[#272767] -mt-4">
            Comment/Issue reporting
          </div>
        </div>
        <div className="flex flex-col-reverse items-center text-center gap-y-8">
          <div className="md:w-[250px] w-[200px] aspect-square relative md:order-3 order-4">
            <Image src="/img44.png" alt={""} fill />
          </div>
          <div className="text-[#272767]/40 md:text-base text-sm">
            Machine learning is a lot of trial-and-error. Don&rsquo;t struggle
            again to find the best parameters and features.
          </div>
          <div className="md:text-2xl text-1xl font-bold text-[#272767] -mt-4">
            Models can inherit from each other
          </div>
        </div>
      </div>
      <div className="shapedividers_com-1188 w-full h-28 bottom-0 !absolute"></div>
    </div>
  );
};

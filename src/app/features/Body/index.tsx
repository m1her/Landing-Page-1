import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const Body = () => {
  return (
    <div
      className="overflow-hidden bg-white w-full min-h-screen md:grid grid-cols-2 flex flex-col items-center lg:gap-x-20 gap-x-8 md:gap-y-8 gap-y-6 py-20
    lg:px-48 md:px-32 px-20 relative
    "
    >
      <div className="flex flex-col items-start md:gap-y-8 gap-y-4">
        <div className="md:w-8 w-6 text-green-300 bg-[#f4fff8] shadow shadow-green-300/20 rounded-full aspect-square flex justify-center items-center">
          <FontAwesomeIcon icon={faPlay} className="md:w-2 w-1.5" />
        </div>
        <div className="md:text-4xl text-2xl font-bold text-[#272767]">
          Just-Click-Button modal training
        </div>
        <div className="text-[#272767]/40 md:text-base text-sm">
          It&rsquo;s a familiar experoence, we thought we&rsquo;ve finally
          finished the work, but the real challenge has just started. Setting up
          the environment, putting things together, it takes forever. With
          TimyModels, call it done when you finish coding.
        </div>
      </div>
      <div className="md:w-full w-[350px] aspect-square relative">
        <Image src="/img1.jpg" alt={""} fill />
      </div>
      <div className="md:w-full w-[350px] aspect-square relative md:order-3 order-4">
        <Image src="/img2.jpg" alt={""} fill />
      </div>
      <div className="flex flex-col items-start md:gap-y-8 gap-y-4">
        <div className="md:w-8 w-6 text-blue-300 bg-[#dff0fd] shadow shadow-blue-300/20 rounded-full aspect-square flex justify-center items-center">
          <FontAwesomeIcon icon={faClock} className="md:w-3 w-2" />
        </div>
        <div className="md:text-4xl text-2xl font-bold text-[#272767]">
          Your running record
        </div>
        <div className="text-[#272767]/40 md:text-base text-sm">
          Machine learning is a lot of trial-and-error. Don&rsquo;t struggle
          again to find the best parameters and features. Simply specify your
          ideas and TinyModels will run through them for you. No guesswork. No
          endless waiting.
        </div>
      </div>
      <div className="shapedividers_com-2436 w-full h-28 bottom-0 !absolute "></div>
    </div>
  );
};

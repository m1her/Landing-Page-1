import React from "react";
import { PriceCard } from "./PriceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export const Pricing = () => {
  return (
    <div className="w-full overflow-hidden h-full min-h-screen bg-gradient-to-b from-[#ededf2] to-[#f7f7f9] relative pt-8 pb-28">
      <div className="flex flex-col items-center md:gap-y-4 gap-y-2">
        <div className="md:text-4xl text-2xl font-bold text-[#272767]">
          Pricing
        </div>
        <div className="text-[#272767]/80 md:text-base text-sm">
          All the features. No hidden layers
        </div>
      </div>
      <div className="flex items-center justify-center py-20 xl:px-48 lg:px-36 md:px-32 px-20">
        <div className="grid w-full lg:grid-cols-4 grid-cols-1 gap-y-4 gap-x-6 items-start justify-center">
          <PriceCard
            title="CPU"
            price="0.09"
            type="CPU"
            isContact={false}
            priceColor="text-sky-500"
            advantages={[
              "High-performance Intel Xeon processor.",
              "6.5GB memory and 20GB SSD per CPU core.",
              "Choice of 1, 2, or 4 cores.",
            ]}
          />
          <PriceCard
            title="GPU"
            price="0.99"
            type="CPU"
            isContact={false}
            priceColor="text-sky-600"
            advantages={[
              "Nvidia Tesla K80 GPU with 12GB GDDRS memory.",
              "Each GPU comes with 4 CPU cores and the associated memory and storage.",
            ]}
          />
          <PriceCard
            title="GPU +"
            price="1.99"
            type="GPU"
            isContact={false}
            priceColor="text-indigo-700"
            advantages={[
              "Nvidia Tesla P100 GPU with 16GB GDDRS memory.",
              "Each GPU comes with 4 CPU cores and the associated memory and storage.",
            ]}
          />
          <PriceCard
            title="On premise"
            isContact={true}
            advantages={[
              "Bring your own computing resource locally or on AWS or GCP.",
              "Keep your data in house.",
              "Same easy workflow through TinyModels UI",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col md:gap-y-4 gap-y-2 xl:px-48 lg:px-36 md:px-32 px-20">
        <div className="md:text-xl text-lg font-bold text-[#161648] mb-4">
          All paid users will automatically recieve:
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-sm">
          <div className="flex justify-start items-start gap-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-sky-700 w-4 h-4 mt-1"
            />
            <div className="text-gray-400 text-start">
              Up to 5 concurrent executions.
            </div>
          </div>
          <div className="flex justify-start items-start gap-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-sky-700 w-4 h-4 mt-1"
            />
            <div className="text-gray-400 text-start">
              At least 250GB of free storage.
            </div>
          </div>
          <div className="flex justify-start items-start gap-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-sky-700 w-4 h-4 mt-1"
            />
            <div className="text-gray-400 text-start">
              Unlimited provate models and datasets.
            </div>
          </div>
          <div className="flex justify-start items-start gap-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-sky-700 w-4 h-4 mt-1"
            />
            <div className="text-gray-400 text-start">
              Up to 10 scheduled executions.
            </div>
          </div>
          <div className="flex justify-start items-start gap-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-sky-700 w-4 h-4 mt-1"
            />
            <div className="text-gray-400 text-start">Pre-second billing.</div>
          </div>
          <div className="flex justify-start items-start gap-x-2">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-sky-700 w-4 h-4 mt-1"
            />
            <div className="text-gray-400 text-start">
              7-day single-job run time.
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start gap-x-2 pt-12">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="text-sky-700 w-4 h-4 mt-1"
          />
          <div className="text-gray-400 text-start text-sm">
            All paid users have access to all TinyModels features.
            <br className="sm:block hidden" /> No hidden fees. No recurring
            charges.
          </div>
        </div>
      </div>

      <div className="shapedividers_com-2451 w-full h-24 bottom-0 !absolute"></div>

      <svg
        className="absolute top-48 -translate-y-1/2 lg:left-20 left-0 w-[200px] fill-blue-800 z-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="dBlueShadow" x="-50%" y="-50%" width="400%" height="400%">
          <feDropShadow
            dx="4"
            dy="8"
            stdDeviation="10"
            floodColor="#1e40af"
            floodOpacity="0.6"
          />
        </filter>
        <path
          d="M58.6,-27.2C69.4,-15.2,67.1,11.1,55.2,25C43.2,38.8,21.6,40.2,2.5,38.7C-16.6,37.3,-33.1,33,-41.7,21.1C-50.2,9.2,-50.8,-10.2,-42.5,-20.8C-34.2,-31.4,-17.1,-33.2,3.4,-35.2C23.9,-37.1,47.8,-39.3,58.6,-27.2Z"
          transform="translate(100 100)"
          filter="url(#dBlueShadow)"
        />
      </svg>
      <svg
        className="absolute lg:top-1/3 md:bottom-52 bottom-52 lg:left-1/3 md:left-[100px] right-20 translate-x-1/2 w-[600px] fill-blue-400/20 z-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="lBlueShadow" x="-50%" y="-50%" width="400%" height="400%">
          <feDropShadow
            dx="4"
            dy="8"
            stdDeviation="10"
            floodColor="#60a5fa"
            floodOpacity="0.6"
          />
        </filter>
        <path
          d="M54.4,-47.9C61,-35.1,50.4,-13,43.9,7.9C37.5,28.9,35.2,48.7,21.4,62.2C7.6,75.7,-17.9,82.8,-29.2,72.7C-40.5,62.6,-37.7,35.3,-38.7,13.7C-39.8,-7.9,-44.8,-23.8,-39,-36.4C-33.2,-49,-16.6,-58.3,3.7,-61.2C23.9,-64.2,47.8,-60.7,54.4,-47.9Z"
          transform="translate(100 100)"
          filter="url(#lBlueShadow)"
        />
      </svg>
    </div>
  );
};

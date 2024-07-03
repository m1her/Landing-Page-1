import React from "react";
import { PriceCard } from "./PriceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export const Pricing = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[rgb(237,237,242)] relative pt-8 pb-28">
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
            <br className="sm:block hidden" />
            {" "}No hidden fees. No recurring charges.
          </div>
        </div>
      </div>

      <div className="shapedividers_com-2451 w-full h-24 bottom-0 !absolute"></div>
    </div>
  );
};

import React from "react";
import { Card } from "./Card";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import {
  faBolt,
  faChartSimple,
  faMagicWandSparkles,
  faNetworkWired,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

export const Features = () => {
  return (
    <div className="w-full min-h-screen bg-[#1e40af] relative pt-8 pb-28">
      <div className="flex flex-col items-center md:gap-y-4 gap-y-2">
        <div className="md:text-4xl text-2xl font-bold text-white">
          Features
        </div>
        <div className="text-[#ffff]/60 md:text-base text-sm">
          All the features. No hidden layers
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-y-8 items-center justify-center py-20 lg:px-48 md:px-32 px-20 gap-x-14">
        <div className="flex flex-col items-center gap-y-8">
          <Card
            title="Jupyter Notebook"
            dsc="Launch fully configured Jupyter notebook with the click of a button.
            Experiment, discuss and share ideas in no time."
            icon={faNoteSticky}
            iconColor="#6366f1"
          />
          <Card
            title="Distributed Training"
            dsc="Machine learning is a lot of trial-and-error. Don’t struggle again to find the best parameters and features."
            icon={faNetworkWired}
            iconColor="#facc15  "
          />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <Card
            title="Experiment in Parallel"
            dsc="Machine learning is a lot of trial-and-error. Don’t struggle again to find the best parameters and features."
            icon={faChartSimple}
            iconColor="#38bdf8"
          />
          <Card
            title="Tensor Board"
            dsc="Machine learning is a lot of trial-and-error. Don’t struggle again to find the best parameters and features."
            icon={faThLarge}
            iconColor="#fb923c"
          />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <Card
            title="Fine-Tuned Performance"
            dsc="Our custom-built TensorFlow is up to 5x faster than the stock version, 
            so training is faster and cheaper for you."
            icon={faMagicWandSparkles}
            iconColor="#4ade80"
          />
          <Card
            title="Easy Deployment"
            dsc="Machine learning is a lot of trial-and-error. Don’t struggle again to find the best parameters and features."
            icon={faBolt}
            iconColor="#f87171"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center -mt-4">
        <div className="w-fit md:px-6 md:py-3 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md md:text-sm text-xs md:font-semibold font-medium cursor-pointer transition-colors duration-300">
          START FOR FREE
        </div>
      </div>
      <div className="shapedividers_com-2436 w-full h-28 bottom-0 !absolute "></div>
    </div>
  );
};

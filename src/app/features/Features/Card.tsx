import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface cardTypes {
  title: string;
  dsc: string;
  icon: any;
  iconColor: string;
}

export const Card = ({ title, dsc, icon, iconColor }: cardTypes) => {
  return (
    <div className="bg-white px-12 py-8 rounded relative z-50 shadow-[0_0_10px_5px_rgba(39,39,103,0.5)]">
      <div className="text-xl font-bold text-[rgb(39,39,103)] mb-6">
        {title}
      </div>
      <div className="text-sm text-[#272767]/60">{dsc}</div>
      <svg
        className="absolute top-2 -left-10 w-20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={iconColor}
          d="M44.8,-64.8C57.4,-52.4,66.8,-38.6,69.6,-24C72.4,-9.5,68.7,5.8,63.7,20.5C58.7,35.2,52.3,49.3,41.5,57.4C30.7,65.6,15.3,67.8,0.5,67.1C-14.3,66.4,-28.7,62.8,-39.5,54.7C-50.4,46.5,-57.8,33.9,-64.1,19.6C-70.3,5.4,-75.3,-10.3,-72.4,-24.8C-69.4,-39.2,-58.4,-52.2,-45,-64.4C-31.6,-76.6,-15.8,-88,0.1,-88.1C16,-88.3,32.1,-77.2,44.8,-64.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <FontAwesomeIcon
        icon={icon}
        className="text-white absolute top-[34px] -left-2.5 w-5 h-5"
      />
    </div>
  );
};

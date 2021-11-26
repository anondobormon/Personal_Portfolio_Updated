import { ExternalLinkIcon, LinkIcon } from "@heroicons/react/solid";
import React from "react";
// import image from "../../image/profile.jpg";

const PortfolioCard = ({ photo }) => {
  return (
    <div className="cursor-pointer">
      <div className="h-96 portfolio rounded-md overflow-hidden relative flex flex-col">
        <div className="p-4 absolute w-full h-full">
          <div className="p-8 w-full portfolio-card h-full  flex flex-col items-center justify-center">
            <div className="flex">
              <p className="text-gray-300 zindex-1000 code-link cursor-pointer mx-4 font-thin">
                <LinkIcon className="w-6" />
              </p>
              <p className="text-gray-300 cursor-pointer code-link zindex-1000 mx-4 font-thin">
                <ExternalLinkIcon className="w-6" />
              </p>
            </div>
            <p className="primary-color portfolio-title font-bold text-2xl">
              Tudo Real Estate
            </p>
          </div>
        </div>
        <img src={photo} className="portfolio-image w-full h-full " alt="" />
      </div>
    </div>
  );
};

export default PortfolioCard;

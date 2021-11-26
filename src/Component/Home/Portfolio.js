import React from "react";
import P1 from "../../image/Web1.png";
import P2 from "../../image/Web2.png";
import P3 from "../../image/Web3.png";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div className="mt-5 md:mt-5 section-border  px-4 py-16 md:px-0">
      <p className="text-3xl mt-4 font-bold primary-color">MY PORTFOLIO</p>
      <p className="text-lg font-thin text-gray-300 border-b-2 inline-block py-1 p-border-b">
        FULL STACK WEB DEVELOPER & DESIGNER
      </p>
      <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-8">
        <PortfolioCard photo={P1} />
        <PortfolioCard photo={P2} />
        <PortfolioCard photo={P3} />
        <PortfolioCard photo={P1} />
      </div>
    </div>
  );
};

export default Portfolio;

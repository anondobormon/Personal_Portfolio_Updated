import {
  ChipIcon,
  GlobeAltIcon,
  IdentificationIcon,
} from "@heroicons/react/outline";
import React from "react";
import ServiceCard from "./ServiceCard";

const service = [
  {
    id: 1,
    title: "Web Development",

    description:
      "You should ensure that when you are looking at hiring a web developer that you are picking the right one.",
    icon: <GlobeAltIcon className="w-20 mx-auto  img" />,
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "Make a good impression on your visitors with a custom website created by experts in SEO, website development and graphic design",
    icon: <IdentificationIcon className="w-20 mx-auto  img" />,
  },
  {
    id: 3,
    title: "Software Develop",
    description:
      "A Complete process to design an software particular business or personal objective, goal or process. ",
    icon: <ChipIcon className="w-20 mx-auto  img" />,
  },
];

const FeaturesCard = () => {
  return (
    <div className="mt-5 md:mt-5 section-border  px-4 py-16 md:px-0 ">
      <p className="text-3xl mt-4 font-bold primary-color">WHAT I DO !</p>
      <p className="text-lg font-thin text-gray-300 border-b-2 inline-block py-1 p-border-b">
        FULL STACK WEB DEVELOPER & DESIGNER
      </p>
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {service.map((service) => (
          <ServiceCard
            title={service.title}
            icon={service.icon}
            description={service.description}
            key={service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;

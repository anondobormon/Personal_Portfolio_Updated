import React from "react";

const ExperienceCard = () => {
  return (
    <div className="rounded p-4">
      <div className="my-2 pb-4 text-gray-300 p-border-b">
        <p className="text-3xl font-semibold mb-1">Jr. Software Engineer</p>
        <p className="text-md font-semibold">
          <span className="text-base">Full Time - Office</span>
        </p>
        <p className="text-md font-semibold">
          <span className="text-base">2020 - Present</span>
        </p>
      </div>
      <button className="px-5 mt-4 py-3 font-semibold mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center">
        NETRON SOFT
      </button>
      <p className="pt-8 text-gray-300 font-md text-base text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum
        error saepe officiis vero deserunt, eveniet nulla cum vitae molestiae.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nemo
        cumque numquam amet, officiis sequi voluptate veniam dolorum quia nihil
        .
      </p>
    </div>
  );
};

export default ExperienceCard;

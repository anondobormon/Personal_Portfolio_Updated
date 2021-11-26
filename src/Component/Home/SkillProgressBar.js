import React from "react";

const SkillProgressBar = () => {
  return (
    <div className="my-5">
      <div className="mb-8">
        <div className="flex justify-between ">
          <span className="text-gray-300 mb-2 font-semibold text-base">
            HTML/CSS
          </span>
          <span className="text-gray-300 font-semibold text-base">90%</span>
        </div>
        <div className="h-4 rounded-full progress-1 w-full"></div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between ">
          <span className="text-gray-300 mb-2 font-semibold text-base">
            JAVASCRIPT
          </span>
          <span className="text-gray-300 font-semibold text-base">85%</span>
        </div>
        <div className="h-4 rounded-full progress-2 w-full"></div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between ">
          <span className="text-gray-300 mb-2 font-semibold text-base">
            BOOTSTRAP
          </span>
          <span className="text-gray-300 font-semibold text-base">95%</span>
        </div>
        <div className="h-4 rounded-full progress-3 w-full"></div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between ">
          <span className="text-gray-300 mb-2 font-semibold text-base">
            REACT JS
          </span>
          <span className="text-gray-300 font-semibold text-base">95%</span>
        </div>
        <div className="h-4 rounded-full progress-4 w-full"></div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between ">
          <span className="text-gray-300 mb-2 font-semibold text-base">
            NODE JS
          </span>
          <span className="text-gray-300 font-semibold text-base">80%</span>
        </div>
        <div className="h-4 rounded-full progress-5 w-full"></div>
      </div>
      <div className="mb-8">
        <div className="flex justify-between ">
          <span className="text-gray-300 mb-2 font-semibold text-base">
            SERVER
          </span>
          <span className="text-gray-300 font-semibold text-base">90%</span>
        </div>
        <div className="h-4 rounded-full progress-6 w-full"></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;

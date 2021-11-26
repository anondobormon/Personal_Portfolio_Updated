import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [togglePage, setTogglePage] = useState(true);
  const [background, setBackground] = useState();

  const showEducation = (e) => {
    e.preventDefault();
    setTogglePage(true);
    setBackground(true);
  };

  const showExperience = (e) => {
    e.preventDefault();
    setTogglePage(false);
    setBackground(false);
  };
  return (
    <div className="mt-5 md:mt-5 section-border  px-4 py-16 md:px-0">
      <p className="text-3xl mt-4 font-bold primary-color">MY EXPERIENCE</p>
      <p className="text-lg font-thin text-gray-300 border-b-2 inline-block py-1 p-border-b">
        FULL STACK WEB DEVELOPER & DESIGNER
      </p>
      <div className="flex my-10">
        <button
          onClick={showEducation}
          className={`px-5 py-3 font-semibold mr-6 ${
            background ? "secondary-bg " : ""
          } primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
        >
          EDUCATION & SKILL
        </button>
        <button
          onClick={showExperience}
          className={`px-5 py-3 font-semibold mr-6 ${
            !background ? "secondary-bg " : ""
          } primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
        >
          EXPERIENCE
        </button>
      </div>
      {togglePage ? (
        <div
          className={`smoothness  grid my-2 md:my-8 grid-cols-1 md:grid-cols-2 gap-20 `}
        >
          <div className="p-8 rounded black-bg">
            <button
              className={`px-5 py-3 font-semibold mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
            >
              EDUCATION
            </button>
            <div className="my-5 pb-8 text-gray-300 p-border-b">
              <p className="text-base">2021-Present</p>
              <p className="text-md font-semibold">
                BSC IN CSE -
                <span className="text-base">
                  Dhaka International <br />
                  University, Dhaka.
                </span>
              </p>
            </div>
            <div className="my-5 pb-8 text-gray-300 p-border-b">
              <p className="text-base">2012-2016</p>
              <p className="text-md font-semibold">
                WEB DEVELOPMENT -
                <span className="text-base">
                  PROGRAMMING HERO <br />
                  Dhaka, Bangladesh.
                </span>
              </p>
            </div>
            <div className="my-5 pb-8 text-gray-300 p-border-b">
              <p className="text-base">2021-2025</p>
              <p className="text-md font-semibold">
                DIPLOMA IN ENGINEERING -
                <span className="text-base">
                  Kurigram Polytechnic <br />
                  Institute, Kurigram.
                </span>
              </p>
            </div>
          </div>
          <div className="p-8  black-bg rounded">
            <button
              className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
            >
              SKILLS
            </button>
            {/* <SkillProgressBar /> */}
            <div className="my-4 flex flex-wrap">
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                REACT JS
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                NODE JS
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                JSAVASCRIPT
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                C
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                C++
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                HTML5
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                PYTHON
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                CSS3
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                ES6
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                MONGODB
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                SAAS
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                EXPRESS JS
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                MONGOOSE
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                BOOTSTARP
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                TAILWIND CSS
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                FIREBASE
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                STYLED COMPONENT
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                REDUX
              </button>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                TYPESCRIPT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="smoothness grid my-8 grid-cols-1 md:grid-cols-2 gap-20">
          <div className="black-bg p-4 rounded">
            <ExperienceCard />
          </div>
          <div className="black-bg p-4 rounded">
            <ExperienceCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;

import { CloudDownloadIcon } from "@heroicons/react/solid";
import React from "react";

const Header = () => {
  return (
    <div className="text-gray-300 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="my-8 zindex-1000 pt-20 text-left">
          <p className="text-sm font-md tracking-widest my-2">
            WELCOME TO MY WORLD
          </p>
          <p className="text-4xl py-2 font-bold">
            I am <span className="primary-color">Anondo Bormon</span> <br />
            Web Developer
          </p>
          <p className="text-base my-5">
            I am Anondo Bormon. I am from Bangladesh. I am a professional
            Front-End Web Developer & MERN Stack web developer for the last 03
            years.
          </p>
          <div className="flex my-10 flex-wrap mx-auto md:mx-0">
            <button className="px-5 py-3 font-semibold mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center">
              CONTACT ME
            </button>
            <a
              href="https://drive.google.com/file/d/175uTUeiya4D7PBWcanK-P8W6tYAErIAf/view?usp=sharing"
              target="blank"
              className="px-5 py-3 font-semibold ml-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center"
            >
              RESUME
              <CloudDownloadIcon className="w-6 ml-4" />
            </a>
          </div>
        </div>
        <div className="overflow-hidden h-full relative zindex-1000">
          <img
            src="https://rainbowit.net/html/inbio/assets/images/slider/banner-01.png"
            alt=""
            className="w-10/12 mt-0 md:mt-20 ml-12  md:ml-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

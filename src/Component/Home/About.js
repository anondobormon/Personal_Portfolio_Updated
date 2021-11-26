import { CloudDownloadIcon } from "@heroicons/react/solid";
import React from "react";
import Profile from "../../image/profile.jpg";

const About = () => {
  return (
    <div className="mt-5 md:mt-20 section-border  px-4 py-16 md:px-0 ">
      <p className="text-3xl mt-4 font-bold primary-color">WHO I AM !</p>
      <p className="text-lg font-thin text-gray-300 border-b-2 inline-block py-1 p-border-b">
        FULL STACK WEB DEVELOPER & DESIGNER
      </p>

      <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-16">
        <div className=" flex justify-center items-center w-full">
          <img src={Profile} alt="" className="w-full" />
        </div>
        <div className="text-left my-10 w-full">
          <button className="px-5 py-3 font-semibold mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center">
            ABOUT ME
          </button>
          <p className="text-3xl mt-4 font-bold primary-color">PROFESSIONAL</p>
          <p className="text-lg font-thin text-gray-300 border-b-2 inline-block py-1 p-border-b">
            FULL STACK WEB DEVELOPER & DESIGNER
          </p>
          <p className="text-gray-300 my-4 font-thin text-justify text-lg">
            I am Anondo Bormon. I am Full Stack web developer for the last 03
            years. I have adequate knowledge about Full-Stack web Development.
            During that time I have expressed Ecommerce applications, Service
            applications, Blogs site applications & revamped user-friendly
            websites. This experience wrought up me professionally also taught
            me how to establish a delicate solution to any problem regarding
            this section. I am continuing my Bachelor's degree in Computer
            Science Engineering from the Dhaka International University in
            Bangladesh.
          </p>
          <a
            href="https://drive.google.com/file/d/175uTUeiya4D7PBWcanK-P8W6tYAErIAf/view?usp=sharing"
            target="blank"
            className="px-5 py-3 mt-10 font-semibold primary-bg text-base text-gray-300 rounded flex items-center justify-center"
          >
            RESUME
            <CloudDownloadIcon className="w-6 ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

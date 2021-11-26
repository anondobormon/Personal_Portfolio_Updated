import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(0);
  const [sideMenu, setSideMenu] = useState(true);
  console.log(height);
  const handleSideMenu = () => {
    console.log(sideMenu);
  };

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  console.log(width);
  const updateScroll = () => {
    setHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div className={`h-24 ${height > 10 ? "sticky-nav" : "navbar"} w-full  `}>
      <div className="2xl:max-w-screen-xl max-w-6xl m-auto">
        {width > 768 ? (
          //Desktop view
          <div className=" h-full py-6 flex items-center justify-between">
            <div className="flex justify-between items-center">
              <p className="text-3xl font-bold mx-5">
                <span
                  className={` ${
                    height > 10 ? "black-color" : "primary-color"
                  } text-4xl`}
                >
                  A.
                </span>{" "}
                Bormon
              </p>
            </div>
            <ul className="list-items nav-menu flex">
              <a
                className="font-semibold hover:text-black text-white  cursor-pointer"
                href="#home"
              >
                <li>HOME</li>
              </a>
              <a
                className="font-semibold hover:text-black text-white  cursor-pointer"
                href="#about"
              >
                <li>ABOUT</li>
              </a>
              <a
                className="font-semibold  hover:text-black text-white cursor-pointer"
                href="#service"
              >
                <li>SERVICE</li>
              </a>
              <a
                className="font-semibold hover:text-black text-white  cursor-pointer"
                href="#experience"
              >
                <li>EXPERIENCE</li>
              </a>
              <a
                className="font-semibold hover:text-black text-white  cursor-pointer"
                href="#portfolio"
              >
                <li>PORTFOLIO</li>
              </a>
              <a
                className="font-semibold hover:text-black text-white  cursor-pointer"
                href="#contact"
              >
                <li>CONTACT</li>
              </a>
            </ul>
          </div>
        ) : (
          //Mobile view
          <div className="relative ">
            {sideMenu ? (
              <div
                onClick={() => handleSideMenu(setSideMenu(!sideMenu))}
                className="rounded px-4 text-black py-7 mobile flex items-center cursor-pointer"
              >
                <MenuAlt1Icon className="w-10 p-1 rounded  border" />
              </div>
            ) : (
              ""
            )}
            <div
              className={`w-96 h-screen mobile-sidebar  ${
                sideMenu ? "mobile-menu " : "mobile-menu1"
              } `}
            >
              <div className="">
                <div className="fex  justify-between p-4 items-center">
                  <XIcon
                    onClick={() => handleSideMenu(setSideMenu(!sideMenu))}
                    className="w-6 hover:text-red-600 cursor-pointer"
                  />
                </div>
                <ul className=" w-full">
                  <li className="w-full text-white w-full hover:bg-red-600 p-4 cursor-pointer">
                    HOME
                  </li>
                  <li className="w-full text-white w-full hover:bg-red-600 p-4 cursor-pointer">
                    ABOUT
                  </li>
                  <li className="w-full text-white w-full hover:bg-red-600 p-4 cursor-pointer">
                    SERVICE
                  </li>
                  <li className="w-full text-white w-full hover:bg-red-600 p-4 cursor-pointer">
                    EXPERIENCE
                  </li>
                  <li className="w-full text-white w-full hover:bg-red-600 p-4 cursor-pointer">
                    PORTFOLIO
                  </li>
                  <li className="w-full text-white w-full hover:bg-red-600 p-4 cursor-pointer">
                    CONTACT
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

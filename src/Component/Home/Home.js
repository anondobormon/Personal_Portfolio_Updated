import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Nvbar/Navbar";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import FeaturesCard from "./FeaturesCard";
import Header from "./Header";
import Portfolio from "./Portfolio";

const Home = () => {
  useEffect(() => {
    let windows = window.scrollY;
    console.log(windows);
  }, []);

  return (
    <div
      className="md:px:0"
      style={{ backgroundColor: "#333333", color: "#C4CFDE" }}
    >
      <Navbar />
      <div className="header-bg header-height overflow-hidden px-4 flex ">
        <div className="2xl:max-w-screen-xl h-full max-w-6xl -mb-1 m-auto">
          <Header />
        </div>
      </div>
      <div className="2xl:max-w-screen-xl max-w-6xl m-auto">
        <About />
        <FeaturesCard />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

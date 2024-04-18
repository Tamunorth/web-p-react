import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className=" text-white px-4">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="  text-[#00df9a] uppercase font-bold">
          Growing with data analytics
        </p>
        <p className=" md:text-7xl sm:text-6xl  md:p-6 text-4xl font-bold text-[2rem]">
          Grow with data
        </p>
        <div className="flex justify-center items-center p md:text-5xl sm:text-4xl text-xl font-bold">
          <p>Fast flexible financing for </p>
          <ReactTyped
            className="pl-2"
            startWhenVisible
            loop
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={100}
            backSpeed={120}
          />
        </div>

        <p className="my-4 md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms
        </p>

        <button className=" bg-[#00df9a] py-3 rounded w-[200px] my-6 mx-auto px-4 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

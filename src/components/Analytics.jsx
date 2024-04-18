import React from "react";

import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="flex justify-center w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-2xl text-3l">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            labore maxime, quas deserunt rem distinctio quod facilis voluptatum,
            sapiente, vero fuga? Autem eos repellendus magni eveniet officia
            incidunt quam natus.
          </p>

          <button className="bg-black rounded py-3 px-16 mx-auto my-4 text-green-500">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

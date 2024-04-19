import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white grid grid-cols-2 gap-3 px-4 py-16 justify-strech">
      <div className="lg:col-span-1 col-span-2 pb-8 ">
        <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold  ">
          Want tips and tricks to optimize your flow?
        </h1>
        <p>Sign up to our newsletter and stay up to date</p>
      </div>

      <div className="lg:col-span-1 2xl:ml-[150px] col-span-2 ">
        <div className="flex ">
          <input
            className="p-2 rounded lg:w-3/4 w-full"
            type="email"
            name="Enter your email"
            placeholder="Enter your email"
            id=""
          />

          <button className="ml-4 px-8 h-10 rounded bg-[#00df9a] text-black min-w-[190px]">
            Notify me
          </button>
        </div>
        <div className="flex ">
          <p className="pr-2">
            We care about the protection of your data. Read our
          </p>
          <a className="text-[#00df9a] underline" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

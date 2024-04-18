import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white grid grid-cols-2 px-4 py-16 ">
      <div className="lg:col-span-1 col-span-2 pb-8">
        <h1 className="text-4xl font-bold  ">
          Want tips and tricks to optimize your flow?
        </h1>
        <p>Sign up to our newsletter and stay up to date</p>
      </div>

      <div className="lg:col-span-1 col-span-2">
        <input
          className="p-2 rounded lg:w-3/4 md:w-1/2 w-full mb-4"
          type="email"
          name="Enter your email"
          placeholder="Enter your email"
          id=""
        />
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

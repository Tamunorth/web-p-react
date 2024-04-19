import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function PriceCardBenefits({ title, isLast }) {
  return (
    <p
      className={
        !isLast
          ? "border-t border-gray-200 py-2"
          : "border-y border-gray-200 py-2"
      }
    >
      {title}
    </p>
  );
}

function PriceCard({ title, image, price, benefits }) {
  return (
    <div
      className={`flex flex-col justify-center mx-16 my-8 md:mx-5 lg:mx-0 rounded-lg shadow-md py-12 px-6 duration-300 ${
        price === 150
          ? " scale-105 hover:scale-110 bg-slate-200"
          : "hover:scale-105"
      }`}
    >
      <img
        className="w-20 mx-auto mt-[-5rem] mb-4 bg-transparent"
        src={image}
        alt="Single"
      />
      <h2 className="font-bold text-2xl">{title}</h2>
      <h1 className="my-8 font-bold text-4xl">${price}</h1>

      <div className="">
        {benefits.map((item, index) => (
          <div key={index}>
            <PriceCardBenefits
              title={item}
              isLast={benefits.length - 1 === index}
            />
          </div>
        ))}
      </div>

      <br />
      <button
        className={`${
          price === 150 ? "bg-black text-[#00df9a]" : "bg-[#00df9a] text-black"
        } px-16 py-2 mx-auto rounded-md`}
      >
        {" "}
        Start trial
      </button>
    </div>
  );
}

const PriceCards = () => {
  return (
    <div className=" flex flex-col text-center w-full py-[10rem] px-4 bg-white">
      <div className="grid lg:grid-cols-3 gap-8">
        <PriceCard
          title={"Single Card"}
          image={Single}
          price={149}
          benefits={["500gb Storage", "1 User allowed", "Send up to 2GB"]}
        />
        <PriceCard
          title={"Double Card"}
          image={Double}
          price={150}
          benefits={["500gb Storage", "1 User allowed", "Send up to 2GB"]}
        />

        <PriceCard
          title={"Triple Card"}
          image={Triple}
          price={175}
          benefits={["500gb Storage", "1 User allowed", "Send up to 2GB"]}
        />
      </div>
    </div>
  );
};

export default PriceCards;

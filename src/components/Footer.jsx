import React from "react";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function FooterCol({ title, itemsList }) {
  return (
    <div>
      <h6 className="font-medium text-gray-400">{title}</h6>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index} className="py-2 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className=" py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim labore
          maxime, quas deserunt rem distinctio quod facilis voluptatum,
          sapiente, vero fuga? Autem eos repellendus magni eveniet officia
          incidunt quam natus.
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className=" lg:col-span-2 flex justify-between mt-6">
        <FooterCol
          title={"Solutions"}
          itemsList={["Analytics", "Marketing", "Commerce", "Insights"]}
        />
        <FooterCol
          title={"Support"}
          itemsList={[
            "Support",
            "Pricing",
            "Documentation",
            "Guides",
            "API Status",
          ]}
        />
        <FooterCol
          title={"Company"}
          itemsList={["About", "Blog", "Jobs", "Press", "Careers"]}
        />
        <FooterCol title={"Legal"} itemsList={["Claim", "Policy", "Terms"]} />
      </div>
    </div>
  );
};

export default Footer;

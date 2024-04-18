import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavItem({ title, isMobile }) {
  return (
    <li className={isMobile ? "p-4 " : "p-4 border-b border-gray-500"}>
      {title}
    </li>
  );
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto p-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]"> REACT.</h1>

      <ul className="hidden md:flex ">
        <NavItem title="Home" isMobile={true}></NavItem>
        <NavItem title="Company" isMobile={true}></NavItem>
        <NavItem title="Resources" isMobile={true}></NavItem>
        <NavItem title="About" isMobile={true}></NavItem>
        <NavItem title="Contact" isMobile={true}></NavItem>
      </ul>

      <div className=" p-4 block md:hidden " onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed  md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed top-0 left-[-100%]"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#00df9a] m-4">
          {" "}
          REACT.
        </h1>
        <ul className=" uppercase p-4 ">
          <NavItem title="Home"></NavItem>
          <NavItem title="Company"></NavItem>
          <NavItem title="Resources"></NavItem>
          <NavItem title="About"></NavItem>
          <NavItem title="Contact"></NavItem>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

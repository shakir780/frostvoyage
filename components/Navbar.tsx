import React from "react";
import Image from "next/image";
import Logo from "../assets/logo (2).png";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="  max-w-[1440px] mx-auto justify-between md:justify-center flex items-center  py-2 z-50 text-white font-bold">
        <div className="hidden md:flex gap-[3rem] ">
          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer hover:text-gray-600 hover:scale-110 ">
              Regions
            </li>
            <li className="cursor-pointer hover:text-gray-600 hover:scale-110 ">
              Lodgings
            </li>
            <li className="cursor-pointer hover:text-gray-600 hover:scale-110 ">
              Resorts
            </li>
          </ul>

          <span className="self-center mb-10">
            <Image src={Logo} alt="logo" width={100} height={100} />
          </span>

          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer hover:text-gray-600 hover:scale-110 ">
              About Us
            </li>
            <li className="cursor-pointer hover:text-gray-600 hover:scale-110 ">
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-gray-600 hover:scale-110 ">
              Login
            </li>
          </ul>
        </div>
        <div className=" block md:hidden text-white text-3xl  cursor-pointer">
          <span>
            <CiMenuBurger />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

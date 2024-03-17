import React from "react";
import logo from "../assets/logo (2).png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import HR from "./HR";
const Footer = () => {
  return (
    <div className="md:h-[50vh] h-fit pb-20  bg-blue-300">
      <div className="flex md:flex-row flex-col  items-center gap-7 justify-around">
        <div className="flex flex-col">
          <Image src={logo} alt="logo" className="w-[150px]" />
          <div className="flex gap-3 text-3xl items-center justify-center">
            <span className=" rounded-full hover:opacity-80 text-yellow-300 cursor-pointer bg-white w-[50px] h-[50px] flex items-center justify-center">
              <FaFacebook />
            </span>
            <span className=" rounded-full hover:opacity-80 text-yellow-300 cursor-pointer bg-white w-[50px] h-[50px] flex items-center justify-center">
              <FaInstagram />
            </span>
            <span className=" rounded-full hover:opacity-80 text-yellow-300 cursor-pointer bg-white w-[50px] h-[50px] flex items-center justify-center">
              <FaTwitter />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div>
            <span className="uppercase font-bold text-white text-xl">
              Contact
            </span>
            <HR />
          </div>
          <span className="text-gray-100">info@frosttvoyage.com</span>
          <span className="text-gray-100">785 256 444</span>
        </div>
        <div className="flex flex-col  gap-3">
          <div>
            <span className="uppercase font-bold text-white text-xl">
              Company
            </span>
            <HR />
          </div>
          <span className="text-gray-100">About Us</span>
          <span className="text-gray-100">Need help?</span>
        </div>
      </div>
      <div className="flex justify-center  mt-8 px-6 md:px-0 gap-3 text-sm text-white">
        <span>Privacy Statement</span>
        <div className="bg-white w-[1px] h-6" />
        <span>Term of use</span>
        <div className="bg-white w-[1px] h-6" />
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;

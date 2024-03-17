import Image from "next/image";
import React from "react";
import pic from "../assets/Canadasnowlake.jpg";
import pic2 from "../assets/switzs.jpg";

import Cabin from "../assets/shaksCabin.jpg";
import Button from "./Button";
import { FaLocationDot } from "react-icons/fa6";
const LodgingsCard = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 justify-center items-center px-6 ">
      <div className="md:flex-row flex flex-col ">
        <div className="  ">
          <Image
            src={pic}
            alt="pic"
            className="w-[300px] h-[180px]  md:w-[400px] md:h-[410px] md:rounded-l-xl object-cover"
          />
        </div>
        <div className="bg-white w-[300px] h-[180px] md:w-[350px] md:h-[410px] rounded-r-xl shadow-xl">
          <div className="md:flex  hidden flex-col gap-4 p-6">
            <span className="font-bold text-xl">Warm Wood</span>
            <div className="flex gap-2 items-center">
              <span className="text-yellow-500">
                <FaLocationDot />
              </span>
              <span className="font-semibold text-gray-800">
                Engordany,Andorra
              </span>
            </div>
            <span className="text-gray-800 text-sm">
              In the south of Andorra,this wonderful reddish wooden cabin is the
              perfect accommodation for your stay in snowy mountains <br />{" "}
              <br />
              You can choose the options that best suit you and you will enjoy
              stay in best possible way
            </span>
            <div className="self-center justify-self-center mt-5 w-full">
              <Button title="See Details" />
            </div>
          </div>
          <div className="bg-white w-[300px] h-[180px] gap-6 rounded-b-xl shadow-xl md:hidden inline-block">
            <div className="flex flex-col justify-center px-6 py-8 gap-2">
              <span className="font-bold text-xl text-gray-800">Warm Wood</span>
              <div className="flex gap-2 items-center">
                <span className="text-yellow-500">
                  <FaLocationDot />
                </span>
                <span className="font-semibold text-gray-800">
                  Engordany,Andorra
                </span>
              </div>
              <div className="self-center justify-self-center mt-5 w-full">
                <Button title="See Details" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col   ">
        <Image
          src={Cabin}
          alt="pic"
          className="w-[300px] h-[228px]  object-cover"
        />
        <div className="bg-white w-[300px] h-[180px] gap-6 rounded-b-xl shadow-xl">
          <div className="flex flex-col justify-center px-6 py-8 gap-2">
            <span className="font-bold text-xl text-gray-800">Shaks House</span>
            <div className="flex gap-2 items-center">
              <span className="text-yellow-500">
                <FaLocationDot />
              </span>
              <span className="font-semibold text-gray-800">
                North Cascades,Canada
              </span>
            </div>
            <div className="self-center justify-self-center mt-5 w-full">
              <Button title="See Details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LodgingsCard;

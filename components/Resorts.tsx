import React from "react";
import skiing from "../assets/cyprien-delaporte-cITgqiIsg3c-unsplash.jpg";
import HR from "./HR";
import Button from "./Button";
import Image from "next/image";
import Cabin from "../assets/federico-bottos-jRulTLMCMJY-unsplash.jpg";
import Subsribe from "./Subsribe";

const Resorts = () => {
  return (
    <div
      className="h-[170vh] relative overflow-hidden"
      style={{
        position: "relative",
        marginTop: "100px", // Adjusted margin top
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1616429553002-faf23468952d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 Q 15 20 50 10 Q 85 0 100 0 L 100 100 L 0 100 Z"></path></svg>\')',
          maskImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 Q 15 20 50 10 Q 85 0 100 0 L 100 100 L 0 100 Z"></path></svg>\')',
        }}
      >
        <div className="flex justify-between">
          <div className="flex px-16 flex-col gap-3 mt-56 lg:mt-36 justify-center items-start">
            <div>
              <span className="text-xl lg:text-4xl text-white font-bold">
                Resorts
              </span>
              <HR />
            </div>
            <span className="text-sm capitalize lg:text-lg  font-semibold text-white lg:w-[38%] mt-10 ">
              If You are Lookinng for something more complete,we offer you a
              wide range of resorts and we are sure to surprise you
            </span>

            <div className="self-center mt-5 w-full">
              <Button title="Find your resorts" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex gap-8 z-30 top-[500px] lg:top-0 right-3">
        <div>
          <Image
            src={Cabin}
            alt="pic"
            className="lg:w-[350px] lg:h-[320px] w-[250px] h-[250px] shadow-2xl rounded-2xl  object-cover"
          />
        </div>
        <div>
          <Image
            src={Cabin}
            alt="pic"
            className="lg:w-[350px] lg:h-[450px] w-[250px] h-[250px] shadow-2xl rounded-2xl  object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-24 lg:bottom-32 left-[10%] lg:left-[30%]">
        <Subsribe />
      </div>
    </div>
  );
};

export default Resorts;

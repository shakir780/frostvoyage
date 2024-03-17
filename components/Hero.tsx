import React from "react";
import Image from "next/image";
import HeroBG from "../assets/HeroSection.jpg";
import Navbar from "./Navbar";
import Button from "./Button";
const Hero = () => {
  return (
    <div
      className="h-[100vh] "
      style={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",

        WebkitMask:
          "radial-gradient(111.8px at 50% calc(100% - 150px), #000 99%, #0000 101%) calc(50% - 100px) 0/200px 100%, radial-gradient(111.8px at 50% calc(100% + 100px), #0000 99%, #000 101%) 50% calc(100% - 50px)/200px 100% repeat-x",
        mask: "radial-gradient(111.8px at 50% calc(100% - 150px), #000 99%, #0000 101%) calc(50% - 100px) 0/200px 100%, radial-gradient(111.8px at 50% calc(100% + 100px), #0000 99%, #000 101%) 50% calc(100% - 50px)/200px 100% repeat-x",
      }}
    >
      <Navbar />

      <div className="flex flex-col justify-center items-center gap-6 text-white font-semibold capitalize py-28 lg:py-0 md:mt-4 ">
        <span className=" text-2xl md:text-5xl">
          Plan your Perfect Winter Trip
        </span>
        <span className=" text-md md:text-2xl text-center">
          Easily Plan your ideal Ski trip from home with the help of
          professionals
        </span>
        <Button title="Book Here Now" />
      </div>
    </div>
  );
};

export default Hero;

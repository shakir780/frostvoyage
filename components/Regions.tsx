import React from "react";
import HR from "./HR";
import Card from "./RegionsCard";
import CanandaLake from "../assets/Canadasnowlake.jpg";
import switz from "../assets/switzs.jpg";
import Andorra from "../assets/Andorra.jpg";
import Button from "./Button";

const Regions = () => {
  return (
    <section className="h-fit">
      <div className="max-w-[1140px] mx-auto ">
        <div className="flex px-3 flex-col gap-3 justify-center items-center md:items-start">
          <div>
            <span className="text-xl md:text-4xl">
              Many regions to discover
            </span>
            <HR />
          </div>
          <span className="text-sm md:text-lg text-center font-semibold text-gray-900">
            You can choose between many regions to spend your trip
          </span>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center gap-7 px-6">
          <Card name="Canada" background={CanandaLake} />
          <Card name="Switzerland" background={switz} />
          <Card name="Andorra" background={Andorra} />
        </div>

        <div className="py-10 text-center">
          <Button title="Explore other Regions" />
        </div>
      </div>
    </section>
  );
};

export default Regions;

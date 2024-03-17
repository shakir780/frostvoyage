import React from "react";
import HR from "./HR";
import LodgingsCard from "./LodgingsCard";

const Lodgings = () => {
  return (
    <section
      className="h-fit pb-28"
      style={{
        background:
          "linear-gradient(145deg, rgba(28,122,221,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="max-w-[1140px] mx-auto ">
        <div className="flex px-3 flex-col gap-3 py-20 justify-center items-center md:items-start">
          <div>
            <span className="text-xl md:text-4xl text-white">
              Comfortable Lodgings
            </span>
            <HR />
          </div>
          <span className="text-sm md:text-lg text-center font-semibold text-white">
            We Offer you the best lodging to enjoy your experience
          </span>
        </div>
        <div>
          <LodgingsCard />
        </div>
      </div>
    </section>
  );
};

export default Lodgings;

import React from "react";

interface CardProps {
  name: String;
  background: {
    src: string;
  };
}
const Card = ({ name, background }: CardProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="border md:w-[450px] w-[285px] px-6 h-[450px]  rounded-xl overflow-hidden shadow-lg mt-11"
    >
      <div className=" text-white px-2 py-4">
        <h2 className="lg:text-4xl text-xl font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default Card;

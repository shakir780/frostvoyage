import React from "react";

interface ButtonProps {
  title: string;
  style?: string;
}
const Button = ({ title, style }: ButtonProps) => {
  return (
    <span
      className={` ${style} px-6 py-3 mt-4 font-bold text-white bg-yellow-500 rounded-xl uppercase hover:opacity-90 cursor-pointer`}
    >
      {title}
    </span>
  );
};

export default Button;

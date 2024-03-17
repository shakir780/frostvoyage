import React from "react";
import Button from "./Button";

const Subsribe = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <span className="text-lg md:text-3xl font-semibold capitalize text-gray-200">
        Subscribe to our newsletter <br />
        <span>and do not miss anything!</span>{" "}
      </span>
      <div>
        <input
          type="text"
          className="rounded-full w-[300px] md:w-[400px] h-[50px] placeholder:text-center outline-none"
          placeholder="Enter your email!"
        />
      </div>

      <div>
        <Button title="Subscribe" style="md:px-[80px]" />
      </div>
    </div>
  );
};

export default Subsribe;

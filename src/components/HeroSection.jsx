import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default function HeroSection() {
  return (
    <div>
      <div className="py-10 space-y-4 text-center text-white">
        <h1 className="text-6xl font-bold poppins-regular ">SAAS STUDIOS</h1>
        <p className="max-w-sm m-auto text-lg font-semibold">
          WE DESIGN AND DEVELOP HIGH-LEVEL DIGITAL PRODUCTS.
        </p>
      </div>
      <div>
        <button className="flex items-center text-white justify-center space-x-3 bg-[#1d9bf0] w-[85vw] md:w-[70vw] lg:w-[20vw] mx-auto py-3.5 rounded-full ">
          <h1 className="text-xl font-semibold ">Book a Call</h1>
          <IoArrowForward size={25} className="-rotate-45" />
        </button>
      </div>
    </div>
  );
}

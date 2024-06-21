import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default function Button() {
  return (
    <div>
      <button
        className={`group flex items-center justify-center space-x-3 bg-[#5ED0E7] text-gray-800 w-64 mx-auto py-3.5 mt-5 rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900`}
        onClick={() => {
          window.open("https://calendly.com/firebase476/30min", "_blank");
        }}
      >
        <span className="text-xl font-semibold">Book a Call</span>
        <IoArrowForward
          size={25}
          className="transition-transform transform -rotate-45 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

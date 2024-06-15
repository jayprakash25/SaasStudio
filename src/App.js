import React from "react";
import { HeroSection } from "./components/index";
import data from "./data/Clients";
export default function App() {
  return (
    <div className="bg-[#222222] w-screen overflow-x-clip">
      <HeroSection />
      <div className="flex justify-center mt-16">
        <div className="items-center justify-around max-w-md gap-20 space-y-3 text-white md:max-w-7xl md:flex">
          <h1 className="text-2xl font-bold md:text-5xl">What We Do</h1>
          <div className="space-y-5 md:max-w-2xl">
            <p className="font-semibold md:text-2xl">
              We are a website agency covering high-level Design, Development,
              and SEO.
            </p>
            <p className="font-semibold md:text-2xl">
              Our website packages are diverse from stunning landing pages to
              complex website apps.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-between max-w-6xl gap-10 mx-auto md:flex">
        <div className="px-6 text-white">
          <h1 className="mt-16 text-2xl font-bold md:text-5xl md:max-w-sm">
            Why Our Clients Choose Us
          </h1>
        </div>
        
        <div className="flex flex-col justify-center px-6 py-12 gap-7 md:px-3">
          {data.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  className={`max-w-md md:max-w-xl  bg-[#272727] p-5 rounded-lg space-y-2 ${
                    item.tittle === "Custom Crafted Solutions"
                      ? "  bg-[#aaeec4] text-black"
                      : "text-white"
                  }`}
                >
                  <h1 className="text-lg font-bold md:text-xl">
                    {item.tittle}
                  </h1>
                  <p className="font-bold md:text-lg">{item.Para}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

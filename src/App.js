import React from "react";
import { HeroSection, Line } from "./components/index";
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

      <div className="justify-between max-w-6xl gap-10 pt-10 mx-auto md:pl-4 md:flex">
        <div className="px-6 text-white ">
          <h1 className="max-w-md mt-16 text-2xl font-bold md:text-5xl md:max-w-sm">
            Why Our Clients Choose Us
          </h1>
        </div>

        <div className="flex flex-col justify-center px-6 py-12 gap-7 md:px-3">
          {data.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  className={`max-w-md  md:max-w-2xl  bg-[#272727] p-10 rounded-xl space-y-4 ${
                    item.tittle === "Custom Crafted Solutions"
                      ? "  bg-[#aaeec4] text-black"
                      : "text-white"
                  }`}
                >
                  <img
                    src={item.icon}
                    className={`w-16 h-16 ${
                      item.tittle === "Custom Crafted Solutions"
                        ? "bg-black"
                        : null
                    } bg-[#aaeec4] text-black rounded-full p-2`}
                    alt=""
                  />
                  <h1 className="text-lg font-bold md:text-xl">
                    {item.tittle}
                  </h1>
                  <p className="font-semibold md:text-lg">{item.Para}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="justify-between max-w-5xl gap-10 py-10 mx-auto md:flex">
        <div className="px-6 text-white ">
          <h1 className="text-2xl font-bold md:text-5xl md:max-w-sm">
            Explore Our Workflow
          </h1>
        </div>
      </div>

       
       

    <Line/>
    <Line/>
    <Line/>

    <Line/>
    </div>
  );
}

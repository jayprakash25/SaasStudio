import React from "react";
import { HeroSection, Line } from "../components/index";
import data from "../data/Clients";
import workflow from "../data/Workflow";
import Plans from "../data/Plans";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#222222] w-screen overflow-x-clip">
      <HeroSection
        tittle={"SaaS Studios"}
        message={"WE DESIGN FOR THE FUTURE."}
      />
      <Projects />
      <div className="mt-24">
        <div className="flex flex-col max-w-md px-6 mx-auto text-white md:max-w-7xl md:justify-between md:flex-row">
          <h1 className="text-2xl font-bold md:text-5xl">What We Do</h1>
          <div className="mt-5 space-y-5 md:max-w-2xl">
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

      <div className="justify-between gap-10 pt-24 mx-auto max-w-7xl md:px-7 md:flex">
        <div className="px-6 text-white md:px-0 ">
          <h1 className="max-w-md mt-16 text-2xl font-bold md:text-5xl md:max-w-sm">
            Why Our Clients Choose Us
          </h1>
        </div>

        <div className="flex flex-col justify-center px-6 py-16 gap-7 md:px-3">
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
                  <h1 className="text-xl font-bold md:text-xl">
                    {item.tittle}
                  </h1>
                  <p className="font-semibold md:text-lg">{item.Para}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="justify-between gap-10 py-20 mx-auto max-w-7xl md:px-7 md:flex">
        <div className="px-6 text-white ">
          <h1 className="text-2xl font-bold md:text-5xl md:max-w-sm">
            Explore Our Workflow
          </h1>
        </div>
      </div>
      <div className="pl-6 mx-auto space-y-5 max-w-7xl md:px-12">
        {workflow.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col justify-between gap-5 my-3 text-white md:items-center md:flex-row">
                <h1 className="text-xl font-bold md:text-2xl">{item.tittle}</h1>
                <p className=" md:text-lg">{item.Para}</p>
              </div>
              <Line />
            </React.Fragment>
          );
        })}
      </div>

      <div className="justify-between gap-10 mx-auto pt-28 max-w-7xl md:px-7 md:flex">
        <div className="px-6 text-white ">
          <h1 className="text-2xl font-bold md:text-5xl md:max-w-lg">
            Choose the tariff plan that suits you needs
          </h1>
        </div>
      </div>

      <div className="flex flex-col max-w-md gap-5 mx-auto py-14 md:flex-row md:max-w-7xl">
        {Plans.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div
                className={`bg-[#272727] ${
                  item.tittle === "Landing page"
                    ? "bg-[#aaeec4] text-black"
                    : "text-white"
                } space-y-4 max-w-md rounded-xl  p-8`}
              >
                <h1 className="text-xl font-bold md:text-2xl">{item.tittle}</h1>
                <p className=" md:text-lg">{item.Para}</p>
                <button
                  className={` w-full py-3 rounded-full font-semibold ${
                    item.tittle === "Landing page"
                      ? "bg-black text-white"
                      : "bg-[#aaeec4]  text-black"
                  }`}
                >
                  Get Started
                </button>
                {item.features.length > 0 ? (
                  <h1 className="text-lg font-bold md:text-2xl">Features : </h1>
                ) : null}
                <ul className="space-y-3">
                  {item.features.map((item) => {
                    return (
                      <li className="flex items-center gap-3">
                        {item.tittle === "Landing page" ? (
                          <img
                            src="https://squarelogic.space/_next/image?url=%2Ftick-black.svg&w=32&q=75"
                            alt=""
                          />
                        ) : (
                          <img
                            src="https://squarelogic.space/_next/image?url=%2Ftick-green.svg&w=32&q=75"
                            alt=""
                          />
                        )}
                        <h1>{item}</h1>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

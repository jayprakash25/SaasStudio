import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Package from "../data/Package";

function Plans() {
  return (
    <div>
      <div className="justify-between gap-10 mx-auto pt-28 max-w-7xl  md:flex">
        <div className="px-6 text-white ">
          <h1 className="text-2xl font-bold md:text-5xl md:max-w-lg">
            Choose Your Plan
          </h1>
        </div>
      </div>
      <div className="flex flex-col  gap-5 mx-auto py-14 lg:grid lg:grid-cols-3 w-full px-6">
        {Package.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div
                className={` ${
                  i % 2 !== 0
                    ? "bg-[#5ED0E7] text-black"
                    : "bg-[#272727] text-white"
                } space-y-4 max-w-md rounded-xl shadow-lg  p-8`}
              >
                <h1 className="text-xl font-bold md:text-2xl ubuntu-bold ">
                  {item.tittle}
                </h1>
                <p className=" md:text-lg poppins-medium h-24">{item.Para}</p>
                <button
                  className={` w-full py-3 rounded-full font-semibold ${
                    i % 2 !== 0
                      ? "bg-black text-white"
                      : "bg-[#5ED0E7]  text-black"
                  }`}
                  onClick={() => {
                    window.open(
                      "https://calendly.com/firebase476/30min",
                      "_blank"
                    );
                  }}
                >
                  Get Started
                </button>
                <hr
                  className={`${i === 0 && "hidden"}  bg-black h-0.5 w-full`}
                />
                {item.features.length > 0 ? (
                  <h1 className="text-lg ubuntu-bold md:text-2xl">
                    Features :{" "}
                  </h1>
                ) : null}
                <ul className="space-y-3 poppins-medium">
                  {item.features.map((_, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li className="flex items-center gap-3">
                          {i % 2 !== 0 ? (
                            <FaCircleCheck color="black" />
                          ) : (
                            <FaCircleCheck color="#5ED0E7" />
                          )}
                          <h1>{_}</h1>
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;

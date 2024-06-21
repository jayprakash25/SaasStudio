import React from "react";
import Button from "./Button";

function AboutUs() {
  return (
    <div className=" py-16">
      <div className=" mx-auto px-2 lg:px-8">
        <div className="lg:flex lg:justify-between lg:space-x-8">
          <div className="lg:w-1/3">
            <h2 className="text-5xl ubuntu-bold tracking-tight text-white">
              What we do
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Learn more about why we do, what we do.
            </p>
            <div className="flex lg:hidden mt-8 justify-center">
              <Button />
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex-1">
            <div className="bg-[#272727] rounded-3xl shadow-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl leading-6 ubuntu-bold text-white">
                  The Story. The WHY
                </h3>
                <div className="mt-2  md:text-justify poppins-medium text-lg text-white">
                  <p>
                    I've encountered numerous instances where I've had to
                    abandon purchasing items because the platform wasn't up to
                    par. This problem seemed to be growing, so I've taken it
                    upon myself to ensure that every site I come across offers
                    an exceptional user experience, comparable to that of a
                    physical store or office. This approach benefits both users
                    and business owners. It's a win-win-win situation - a win
                    for the users, a win for the business owners, and a win for
                    me, as I'm providing valuable assistance. In return, I
                    receive compensation and the satisfaction of resolving a
                    problem that can lead to increased conversions for you.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <h3 className="text-xl leading-6 ubuntu-bold text-white">
                  Our Values
                </h3>
                <div className="mt-2 max-w-xl text-lg text-white">
                  <ul className="list-disc space-y-2 pl-5 poppins-medium">
                    <li>User-centric design</li>
                    <li>Creativity</li>
                    <li>Transparency and integrity</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex mt-8 justify-end">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

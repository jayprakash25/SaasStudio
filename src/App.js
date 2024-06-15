import React from "react";
import { HeroSection } from "./components/index";
export default function App() {
  return (
    <div className="bg-[#222222] w-screen h-screen">
      <HeroSection />

      <div className="flex justify-center mt-16">
        <div className="items-center justify-around max-w-md gap-20 space-y-3 text-white md:max-w-7xl md:flex">
          <h1 className="text-lg font-bold md:text-5xl">What We Do</h1>
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
    </div>
  );
}

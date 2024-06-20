import React from "react";
import { HeroSection } from "../components/index";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Process from "../components/Process";
import Why from "../components/Why";
import Plans from "../components/Plans";

export default function Home() {
  return (
    <div className="bg-[#222222] w-screen overflow-x-clip px-2">
      <HeroSection
        tittle={"SaaS Studios"}
        message={"WE DESIGN FOR THE FUTURE."}
      />
      <Projects />
      {/* why our clients  */}

      <Why />

      {/* ----------------------------- Process ------------------------------- */}
      <Process />

      {/*-------------------------------- Plans ------------------------------- */}
      <Plans />

      {/* -----------------------------about us----------------------------  */}
      <AboutUs />

      <FAQ />

      {/* <Navbar /> */}
      <Footer />
    </div>
  );
}

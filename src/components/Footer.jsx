import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-20 px-2 lg:px-6 text-white ubuntu-bold">
        <div className="flex flex-col items-center md:flex-row md:justify-between space-y-6 md:space-y-0">
          {/* Back to top button */}
          <div
            className="order-1 md:order-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <p>Back to top</p>
          </div>

          {/* Social media links */}
          <div className="order-2 md:order-1 flex space-x-4">
            <a href="https://x.com/Jayprakash300" className="cursor-pointer">
              X
            </a>
            <a
              href="https://www.instagram.com/_jay_prakash_25/"
              className="cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/jay-prakash-n-reddy-44539722a/"
              className="cursor-pointer"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <div className="order-3 cursor-pointer">SAASSTUDIO ©</div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed left-0 w-full bottom-5">
      <div className="z-50 p-4 mx-auto bg-gray-400 rounded-full w-72">
        <ul className="flex items-center space-x-3 justify-evenly">
          <Link to={"/"}>
            <li className="font-semibold cursor-pointer">Home</li>
          </Link>
          <Link to={"/contact"}>
            <li className="font-semibold cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

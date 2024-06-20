import React, { useState, useRef, useEffect } from "react";
import data from "../data/FAQ";

const Faqs = ({ Q, children }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-[#272727] rounded-3xl p-10 ">
      <div
        onClick={toggle}
        className="flex text-white items-center cursor-pointer justify-between"
      >
        <h1 className="ubuntu-bold text-2xl">{Q}</h1>
        <p className="text-2xl transform transition-transform duration-300 ease-in-out">
          {open ? "-" : "+"}
        </p>
      </div>

      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="pt-4 text-white">{children}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className=" relative  text-white flex px-6 justify-start space-x-8">
      <div className="w-1/3 lg:h-[10vh] sticky top-20">
        <h1 className="text-5xl ubuntu-bold">FAQ</h1>
        <p>Clear things out here.</p>
      </div>
      <div className="w-full max-w-3xl grid gap-4 ">
        {data.map((item, i) => (
          <div key={i} className="">
            <Faqs Q={item.question}>{item.answer}</Faqs>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import data from "../data/FAQ";

const Faq = ({ Q, children, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-[#272727] rounded-3xl p-10 ">
      <div
        onClick={onToggle}
        className="flex text-white items-center cursor-pointer justify-between"
      >
        <h1 className="ubuntu-bold text-xl md:text-2xl">{Q}</h1>
        <p className="text-2xl transform transition-transform duration-300 ease-in-out">
          {isOpen ? "-" : "+"}
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
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative text-white lg:flex lg:px-6 px-2 lg:justify-start lg:space-x-8">
      <div className="lg:w-1/3 py-10 lg:h-[10vh] lg:sticky top-20">
        <h1 className="text-5xl ubuntu-bold">FAQ</h1>
        <p>Clear things out here.</p>
      </div>
      <div className="w-full max-w-3xl grid gap-4 ">
        {data.map((item, i) => (
          <div key={i} className="">
            <Faq
              Q={item.question}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            >
              {item.answer}
            </Faq>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import workflow from "../data/Workflow";

function Process() {
  return (
    <div className="px-2 mx-auto max-w-7xl md:px-8 pt-24">
      <h2 className="text-5xl ubuntu-bold text-center text-white mb-10">
        The Way We Work
      </h2>
      <div className="grid gap-10 md:gap-16 md:grid-cols-2">
        {workflow.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5ED0E7] to-[#0c4356] rounded-full text-white">
              <span className="text-3xl font-bold">{item.icon}</span>
            </div>
            <div>
              <h3 className="text-xl ubuntu-bold text-white mb-2">
                {item.tittle}
              </h3>
              <p className="text-gray-300 max-w-md poppins-medium">
                {item.Para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;

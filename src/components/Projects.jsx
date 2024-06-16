import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../data/Projects";

export default function Projects() {
  return (
    <div className="flex-col justify-between gap-10 pt-20 mx-auto text-white max-w-7xl md:px-7 md:flex">
      <div className="px-6">
        <h1 className="text-2xl font-bold md:text-5xl">Projects</h1>
      </div>
      <div className="grid pt-10 md:grid-cols-2 lg:gap-y-4 lg:py-10 lg:px-10 lg:gap-x-10 place-items-center">
        {data.map((project) => {
          return (
            <div className={`${project.id % 2 === 0 ? "py-20" : ""}`}>
              <ProjectCard key={project.id} project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

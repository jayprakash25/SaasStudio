import React from "react";
import ProjectCard from "./ProjectCard";
import { data } from "../data/Projects";

export default function Projects() {
  return (
    <div className="text-white px-6 lg:px-10">
      <div className="space-y-4">
        <h1 className="text-7xl ubuntu-bold">Projects</h1>
        <p className="ubuntu-medium text-3xl">The work we talk about.</p>
      </div>
      <div className="grid  lg:gap-y-4 lg:py-10 lg:px-10 lg:gap-x-10">
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

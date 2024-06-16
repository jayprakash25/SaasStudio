import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      <div className={`lg:p-10 p-5  rounded-3xl bg-[${project.bgcolor}]`}>
        <motion.div classname="project-card">
          <div className="image-carousel relative w-[20rem] h-52  lg:h-80 lg:w-[30rem] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={project.images[currentImage]}
                alt={project.title}
                className="absolute object-cover w-full h-full rounded-lg "
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.75 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
        {/* Dots */}
        <div className="flex justify-center mt-4">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 rounded-full mx-1 bg-gray-300 `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

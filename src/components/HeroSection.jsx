import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

export default function HeroSection() {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const title = "SaaS Studios";
  const message = "WE DESIGN FOR THE FUTURE.";

  return (
    <div className="h-screen flex items-center justify-center  overflow-hidden">
      <div className="relative z-10 space-y-8 text-center text-white">
        <motion.h3
          className="load-screen--message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span
              className="text-5xl md:text-7xl lg:text-9xl font-bold poppins-bold mb-6 "
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}

          <br />

          {message.split("").map((word, index) => (
            <motion.span
              className="max-w-md mx-auto text-lg  md:text-xl mb-10 text-gray-300 ubuntu-bold"
              key={word + "-" + index}
              variants={letter}
            >
              {word}
            </motion.span>
          ))}
        </motion.h3>
        <button
          className={`group flex items-center justify-center space-x-3 bg-[#aaeec4] text-gray-900 w-64 mx-auto py-3.5 mt-5 rounded-full transition-all duration-300 hover:bg-white`}
        >
          <span className="text-xl font-semibold">Book a Call</span>
          <IoArrowForward
            size={25}
            className="transform -rotate-45 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}

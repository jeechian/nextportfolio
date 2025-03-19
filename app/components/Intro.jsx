import React from "react";
import Image from "next/image";
import { assets } from "../Assets/asset";
import { motion } from "framer-motion";

const Intro = () => {
  // Function to scroll to AboutMe section
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl md:text-2xl text-yellow-500 p-5"
      >
        Effortless Digital Solutions for Your Success 
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-4xl"
      >
        Get<strong className="text-yellow-500"> INSTANT </strong> access to powerful digital solutions
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl md:text-4xl pt-3"
      >
        that save you <strong className="text-yellow-500">time & effort! 🚀</strong>
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mt-8 gap-6">
        {/* Left side - Image (60%) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-3/5 flex justify-center"
        >
          <Image
            src={assets.IT}
            alt="Digital Solutions"
            width={400}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>

        {/* Right side - Features (40%) */}
        <div className="w-full md:w-2/5 text-left px-4">
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl"
          >
            ✔  Fast, Responsive & Secure
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-lg md:text-xl pt-6"
          >
            ✔  Custom-Designed to Fit Your Needs
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl pt-6"
          >
            ✔  Optimized for Performance & Profitability
          </motion.h2>
          <div className="pt-6 pb-10 pl-10">
            <motion.button
              onClick={scrollToAboutMe}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="bg-yellow-500 border p-2 rounded-xl text-white text-lg md:text-2xl px-6 md:px-10 hover:bg-yellow-400"
            >
              Learn More About Me
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
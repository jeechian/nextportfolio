"use client";
import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="p-10 space-y-10 bg-gray-900 text-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-center"
      >
        Portfolio Motion Effects
      </motion.h1>

      {/* Slide in from Left */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Slide in from Left
      </motion.div>

      {/* Slide in from Bottom */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Slide in from Bottom
      </motion.div>

      {/* Blur to Clear with Floating Effect */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        animate={{ y: [10, 0, 10] }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          filter: { duration: 0.8, ease: "easeOut" },
          y: { duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
        }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Blur to Clear with Floating Effect
      </motion.div>

      {/* Scale In (Zoom Effect) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Scale In (Zoom Effect)
      </motion.div>

      {/* Rotate In with Slide */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Rotate In with Slide
      </motion.div>

      {/* Staggered Fade-in for List */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="space-y-4"
      >
        {["Item 1", "Item 2", "Item 3"].map((item, index) => (
          <motion.li
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-gray-700 rounded-lg"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
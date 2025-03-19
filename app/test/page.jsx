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

      {/* Flip Animation */}
      <motion.div
        initial={{ rotateY: 180, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Flip Animation
      </motion.div>

      {/* Skew Effect */}
      <motion.div
        initial={{ skewX: -10, opacity: 0 }}
        whileInView={{ skewX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Skew Effect
      </motion.div>

      {/* Elastic Bounce */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Elastic Bounce
      </motion.div>

      {/* Expanding Width */}
      <motion.div
        initial={{ width: "50%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Expanding Width
      </motion.div>

      {/* Color Transition */}
      <motion.div
        initial={{ backgroundColor: "#1F2937" }}
        whileInView={{ backgroundColor: "#6366F1" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="p-5 rounded-xl shadow-lg"
      >
        Color Transition
      </motion.div>

      {/* Wave Effect */}
      <motion.div
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Wave Effect
      </motion.div>

      {/* 3D Tilt Effect */}
      <motion.div
        whileHover={{ rotateX: 15, rotateY: 15 }}
        transition={{ duration: 0.3 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        3D Tilt Effect (Hover)
      </motion.div>

      {/* Pulse Effect */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Pulse Effect
      </motion.div>



      {/* Shaking Effect */}
      <motion.div
        animate={{ x: [-10, 10, -10, 10, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Shaking Effect
      </motion.div>

      {/* Stretching Effect */}
      <motion.div
        initial={{ scaleY: 0.5, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Stretching Effect
      </motion.div>

      {/* Scroll-Based Scaling */}
      <motion.div
        whileInView={{ scale: 1.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Scroll-Based Scaling
      </motion.div>

      {/* Wobble Effect */}
      <motion.div
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Wobble Effect (Hover)
      </motion.div>

      {/* Glowing Border Effect */}
      <motion.div
        initial={{ boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
        whileHover={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)" }}
        transition={{ duration: 0.5 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Glowing Border (Hover)
      </motion.div>

      {/* Flipping from Top */}
      <motion.div
        initial={{ rotateX: -90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Flipping from Top
      </motion.div>

      {/* Pop Out (Button Press Animation) */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="p-5 bg-gray-800 rounded-xl shadow-lg"
      >
        Pop Out (Click Me)
      </motion.div>

      {/* Fading Borders Effect */}
      <motion.div
        initial={{ borderColor: "rgba(255, 255, 255, 0)" }}
        whileInView={{ borderColor: "rgba(255, 255, 255, 1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-5 border-4 border-transparent rounded-xl shadow-lg"
      >
        Fading Borders Effect
      </motion.div>
    </div>
  );
};

export default Test;

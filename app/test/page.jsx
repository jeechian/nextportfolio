"use client";
import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div>
      <div className="relative w-[400px] h-[300px]  bg-slate-950 text-white">
        {/* Animated Border Box */}
        <motion.div
          className="absolute top-[50px] left-[50px] w-[200px] h-[150px] border-4 border-yellow-500"
          animate={{
            x: [0, 10, -20, 0], // Moves left and right
            y: [0, 10, -10, 0], // Moves up and down
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Text Block (Blocks the border) */}
        <div className="absolute top-[70px] left-[80px] p-4">
          <h1 className="text-2xl text-yellow-500">About Me</h1>
          <h1 className="text-4xl font-bold">
            NG <br /> JEE CHIAN
          </h1>
        </div>
        
      </div>
      
    </div>
  );
};

export default Test;

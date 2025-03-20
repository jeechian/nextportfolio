"use client"
import React from "react";
import Image from "next/image";
import { EP } from "../Assets/asset";
import { motion } from "framer-motion";



const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white ">
      <motion.h1
        initial={{ rotateX: 180, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl text-center w-full text-yellow-500 pt-10">
        Employer Project
      </motion.h1>
      <motion.h1
        initial={{ rotateX: 180, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-4xl font-bold text-center w-full">
        BYOD Policy and SETA Program Design
      </motion.h1>

      <motion.div className="flex flex-wrap justify-center p-10"
        initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
        whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}> {/* Centering the content within the flex container */}
        {/* Left side - EP[2] images displayed top-to-bottom */}
        <div className="flex flex-col gap-5 items-center"> {/* Added items-center for centering images and text */}
          {EP[2].map((ep, index) => (
            <motion.div
              initial={{ width: "50%", opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 + index * 0.2 }}
              key={ep.name} className="flex flex-col items-center">
              <h2 className="text-4xl font-bold text-left w-full">{ep.description}</h2>
              <div className="p-1 border-4 border-gray-800 rounded-lg bg-white ">
                <Image
                  src={ep.src}
                  alt={ep.description}
                  width={500}
                  className="border-1 border-black"
                />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Right side - Description and EP[0], EP[1], EP[3] images */}
        <div className="flex flex-col items-center gap-12 sm:pl-10 sm:max-w-2xl sm:w-full">
          <motion.p 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
          className="text-left space-x-2 text-base sm:text-lg mb-4">
            Collaborated with IP Server One to design a BYOD policy and SETA program, including the creation of awareness quizzes and specific
            real-world solutions for the company.
            <br />
            <motion.strong 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            className="text-yellow-500">~2024 DEC</motion.strong>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-5 p-1 border-4 border-gray-800 rounded-lg bg-white">
            <Image
              src={EP[0].src}
              alt="profile"
              className="border-1 border-black"
              width={450}
              height={400}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-5 p-1 border-4 border-gray-800 rounded-lg bg-white">
            <Image
              src={EP[1].src}
              alt="profile"
              className="border-1 border-black"
              width={450}
              height={400}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-center w-full">{EP[3].description}</h2>
            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image
                src={EP[3].src}
                alt={EP[3].description}
                className="border-1 border-black"
                width={450}
                height={400}
              />
            </div>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;

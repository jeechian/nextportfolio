"use client";
import React from "react";
import Image from "next/image";
import { webDev } from "../Assets/asset";
import { motion } from "framer-motion";

const Page = ({ more }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[20vh] p-10 bg-slate-950 text-white">
      <motion.h1
        initial={{ rotateY: 180, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full mt-0 text-2xl text-yellow-500"
      >
        Web Development
      </motion.h1>

      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-center w-full text-center text-4xl font-bold"
      >
        The Puppet Shoes
      </motion.h1>

      <motion.p
        initial={{ width: "50%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap justify-center w-full mt-5 text-center"
      >
        <span>
          Developed a website to sell shoes using HTML, CSS, and JavaScript. Designed an intuitive user interface to
          enhance the online shopping experience.
        </span>
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full sm:w-auto text-yellow-500 font-bold pl-2 sm:pl-5"
        >
          ~2022 AUG
        </motion.span>
      </motion.p>

      {/* Grid for Images */}
      <div
        className="gap-12 pt-10 grid lg:grid-cols-2 sm:grid-cols-1 w-full"
      >
        {/* Show only 6 items if more is false */}
        {webDev.slice(0, more ? webDev.length : 6).map((web) => (
          <motion.div
            key={web.name}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col items-center"
          >
            <motion.h2 className="text-4xl font-bold">{web.description}</motion.h2>
            <motion.div className="p-1 border-4 border-gray-800 rounded-lg bg-white flex justify-center items-center">
              <Image
                src={web.src}
                alt={web.name}
                width={500}
                className="border-1 border-black object-cover rounded-lg mx-auto"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;

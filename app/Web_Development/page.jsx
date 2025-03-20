"use client"
import React from "react";
import Image from "next/image";
import { webDev } from "../Assets/asset";
import { motion } from "framer-motion";


const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[20vh] p-10 bg-slate-950 text-white"

    >
      <motion.h1
        initial={{ rotateY: 180, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full mt-0 text-2xl text-yellow-500">
        Web Development
      </motion.h1>
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex justify-center w-full text-center text-4xl font-bold">
        The Puppet Shoes
      </motion.h1>
      <motion.p
        initial={{ width: "50%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap justify-center w-full mt-5 text-center">
        <span>Developed a website to sell shoes using HTML, CSS, and JavaScript. Designed an intuitive user interface to enhance the online shopping experience.</span>
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full sm:w-auto text-yellow-500 font-bold pl-2 sm:pl-5">~2022 AUG</motion.span>
      </motion.p>
      <motion.div className="gap-12 pt-10 grid lg:grid-cols-2 sm:grid-cols-1 "
        initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
        whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }}

      >
        {webDev.map((web) => (
          <motion.div
            initial={{ rotateX: 180, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={web.name}
            className="text-center"

          >
            <motion.h2 
            animate={{ x: [0, 5, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl font-bold">{web.description}</motion.h2>
            <motion.div 
                    animate={{ x: [0, 10, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-1 border-4 border-gray-800 rounded-lg bg-white">
              <Image
                src={web.src}
                alt=""
                layout="responsive"
                className="border-1 border-black"
              />
            </motion.div>
          </motion.div>

        ))}
      </motion.div>
    </div>
  );
}

export default Page;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../Assets/asset";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[20vh] gap-10 p-6 md:p-10 bg-slate-950 text-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">

        {/* Left Content */}
        <div className="pl-6 md:pl-24 pt-5 max-w-full md:max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-yellow-500"
          >
            About Me
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-0 text-3xl md:text-4xl font-bold"
          >
            NG <br /> JEE CHIAN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pt-5 text-sm md:text-base"
          >
            Motivated Computer Science student with hands-on experience in
            programming (C++, Java, Python, R, SQL), database management,
            cybersecurity knowledge, and game development. Demonstrates strong
            leadership and communication skills, with proficiency in English,
            Chinese, and Malay. Experienced in sharing knowledge through alumni
            events and with transportation flexibility.
          </motion.p>
          <br />
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-yellow-500"
          >
            INTI International College Subang
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-xl font-bold pt-2"
          >
            Diploma In Computer Science
          </motion.h3>

          {/* Rate Me Button */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pt-20 pr-10 flex justify-center items-center"
          >
            <Link href={"/rateMe"}>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-500 border p-2 rounded-xl text-white text-2xl pl-10 pr-10 hover:bg-yellow-400"
                
              >
                Rate Me
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-1 border-4 border-gray-800 rounded-lg bg-white flex justify-center items-center"
        >
          <Image
            src={assets.jeeChian}
            alt="Jee Chian"
            height={300}
            className="border-1 border-black"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;

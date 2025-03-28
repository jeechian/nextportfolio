"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../Assets/asset";


const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[20vh] gap-10 p-6 md:p-10 md:pl-20 bg-slate-950 text-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
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
            height={400}
            className="border-1 border-black"
          />
        </motion.div>

        {/* Left Content */}
        <div className=" pt-5 md:max-w-[60%]">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-yellow-500"
          >
            Introduction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pt-5 md:text-base"
          >
            Motivated Computer Science student with hands-on experience in
            programming (C++, Java, Python, R, SQL), database management,
            cybersecurity knowledge, and game development. Demonstrates strong
            leadership and communication skills, with proficiency in English,
            Chinese, and Malay. Experienced in sharing knowledge through alumni
            events and with transportation flexibility.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-yellow-500 pt-10">
            Achivement
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-2xl font-bold pt-1 font-bold">
            Alumni Sharing Event Speaker
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pt-5 md:text-base">
            Invited by Ms. Norayu, Head of Program, to share insights and
            experiences with Certificate in Information Technology students.
          </motion.p>

        </div>

        {/* Right Image */}

      </div>

    </div>
  );
};

export default AboutMe;

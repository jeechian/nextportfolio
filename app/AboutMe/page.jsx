"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../app/asset/asset";


const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[20vh] gap-10 p-10 bg-slate-950 text-white"

    >


      <div className="flex gap-20">
        <div className="p-1 border-4 border-gray-800 rounded-lg bg-white">
          <Image src={assets.jeeChian} alt="Jee Chian" height={300} />
        </div>

        <div className="pl-24 pt-5 max-w-4xl">
          <h1 className="flex justify-start w-full mt-0 text-2xl text-yellow-500">
            About Me
          </h1>
          <h1 className="flex justify-start w-full mt-0 text-4xl font-bold">
            NG <br />JEE CHIAN
          </h1>
          <p className="space-x-2 pt-5">
            Motivated Computer Science student with hands-on experience in
            programming (C++, Java, Python, R, SQL), database management,
            cybersecurity knowledge, and game development. Demonstrates strong
            leadership and communication skills, with proficiency in English,
            Chinese, and Malay. Experienced in sharing knowledge through alumni
            events and with transportation flexibility.
          </p>
          <br />
          <h2 className="text-3xl font-bold text-yellow-500">INTI International College Subang</h2>
          <h3 className="text-xl font-bold pt-2">Diploma In Computer Science</h3>
          <h2 className="text-2xl pt-10 text-yellow-500">Award</h2>
          <h3 className="text-3xl font-bold ">Alumni Sharing</h3>
          <p className="space-x-2 pt-2">
            Invited by Head of Program to share insights with Certificate in Information Technology juniors, including
            (how to efficiently learn, using AI, and elective choosing).
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;

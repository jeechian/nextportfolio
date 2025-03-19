"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { iconSocial } from "../Assets/asset";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <div className="bg-black py-6 px-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 text-white">
          {/* Left Side - Paragraphs */}
          <motion.p
            initial={{ color: "#ffffff" }}
            whileInView={{ color: "#eab308" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 text-left pl-10 text-lg hidden sm:block">📢 Let’s build something amazing together! </motion.p>
        </div>

        {/* Right Side - Social Media Icons and Resume */}
        <div className="flex gap-3 items-center">
          {iconSocial.map((iconData) => (
            iconData.name !== "Resume" ? (
              // Social Media Icons
              <Link
                href={iconData.link}
                key={iconData.name}
                className="flex flex-col items-center"
              >
                <motion.div
                  initial={{ boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
                  whileHover={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)" }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-1">
                  <Image
                    src={iconData.src}
                    alt={`${iconData.name} Icon`}
                    width={40}
                    height={40}
                  />
                </motion.div>
              </Link>
            ) : (
              // Resume Link - This will trigger a download
              <a
                key={iconData.name}
                href={iconData.link}
                download
                className="flex flex-col items-center"
              >
                <motion.div
                  initial={{ boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
                  whileHover={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)" }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-1">
                  <Image
                    src={iconData.src}
                    alt={`${iconData.name} Icon`}
                    width={40}
                    height={40}

                  />
                </motion.div>
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

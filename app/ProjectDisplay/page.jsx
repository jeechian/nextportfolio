"use client";
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import GameDev from "../Programme/page";
import EmployerProject from "../EmployerProject/page";
import WebDev from "../Web_Development/page";
import Image from "next/image";
import { assets } from "../Assets/asset";


const projects = [
    { name: "Game Development", component: <GameDev /> ,src:assets.Axe,src2:assets.Axe2},
    { name: "Employer Project", component: <EmployerProject /> ,src:assets.Closure,src2:assets.Closure2},
    { name: "Web Development", component: <WebDev />,src:assets.Shoes,src2:assets.Shoes2 },
];


const ProjectDisplay = () => {
    const [selectedProgram, setSelectedProgram] = useState("Game Development");
    const [size, setSize] = useState(50);
      useEffect(() => {
        const updateSize = () => {
          if (window.innerWidth < 640) {
            setSize(38);
          } else {
            setSize(50);
          }
        };
    
        updateSize();
        window.addEventListener("resize", updateSize);
    
        return () => window.removeEventListener("resize", updateSize);
      }, []);
    return (
        <div className="flex flex-col items-center bg-white pt-10">
            {/* Buttons */}
            <div>
                {projects.map((project) => (
                    <motion.button
                        key={project.name}
                        onClick={() => setSelectedProgram(project.name)}
                        whileTap={{ scale: 0.9 }}
                        className="border-t-[2px] border-l-[2px] border-r-[2px] border-yellow-500 p-2 bg-slate-900 text-white text-2xl pl-10 pr-10 hover:bg-gray-500"

                    >
                        <Image src={selectedProgram===project.name?project.src2:project.src} width={size} alt={project.name}/>
                    </motion.button>
                ))}
            </div>

            <div className="flex justify-center items-center w-full">
            <div className="w-[95%] pb-10">
                {projects.find((project) => project.name === selectedProgram)?.component}
            </div>
            </div>
            
        </div>
    );
};

export default ProjectDisplay;

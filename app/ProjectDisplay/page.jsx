import React, { useState, useEffect, useRef } from "react"; // Import useRef
import { motion } from "framer-motion";
import GameDev from "../Programme/page";
import EmployerProject from "../EmployerProject/page";
import WebDev from "../Web_Development/page";
import Image from "next/image";
import { assets } from "../Assets/asset";

const projects = [
  { name: "Game Development", component: GameDev, src: assets.Axe, src2: assets.Axe2 },
  { name: "Employer Project", component: EmployerProject, src: assets.Closure, src2: assets.Closure2 },
  { name: "Web Development", component: WebDev, src: assets.Shoes, src2: assets.Shoes2 },
];

const projectsToggle = {
  "Game Development": { prev: "Web Development", next: "Employer Project" },
  "Employer Project": { prev: "Game Development", next: "Web Development" },
  "Web Development": { prev: "Employer Project", next: "Game Development" },
};

const ProjectDisplay = () => {
  const [selectedProgram, setSelectedProgram] = useState("Game Development");
  const [size, setSize] = useState(50);
  const [more, setMore] = useState(false);
  const projectRef = useRef(null); // Create a ref for the component

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 640 ? 39 : 50);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleSwitchProject = (newProject) => {
    setSelectedProgram(newProject);
    setMore(false);
    projectRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to component
  };

  const SelectedComponent = projects.find((project) => project.name === selectedProgram)?.component;

  return (
    <div ref={projectRef} className="flex flex-col items-center bg-white pt-10">
      {/* Navigation Buttons */}
      <div>
        {projects.map((project) => (
          <motion.button
            key={project.name}
            onClick={() => handleSwitchProject(project.name)}
            whileTap={{ scale: 0.9 }}
            className="border-t-[2px] border-l-[2px] border-r-[2px] border-yellow-500 p-2 bg-slate-900 text-white text-2xl pl-10 pr-10 hover:bg-gray-500"
          >
            <Image src={selectedProgram === project.name ? project.src2 : project.src} width={size} alt={project.name} />
          </motion.button>
        ))}
      </div>

      {/* Display Selected Component */}
      <div className="flex justify-center items-center w-full">
        <div className="w-[95%] pb-10">
          {SelectedComponent && <SelectedComponent more={more} />}
        </div>
      </div>

      {/* Buttons Container (Previous + Show More + Next) */}
      <div className="flex justify-center items-center gap-6 mt-4">
        {/* Previous Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="p-3 rounded-full transition-all"
          onClick={() => handleSwitchProject(projectsToggle[selectedProgram].prev)}
        >
          <Image src={assets.Home} alt="Previous" width={40} />
        </motion.button>

        {/* Show More / Show Less Button */}
        <motion.button
          className={` pl-5 pr-5 pt-3 pb-3 rounded-xl ${selectedProgram=="Employer Project"?"bg-white text-white":"bg-black text-yellow-500"}`}
          onClick={() => setMore(!more)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {more ? "Show Less" : "Show More"}
        </motion.button>

        {/* Next Button */}
        <motion.button
          initial={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="p-3 rounded-full transition-all"
          onClick={() => handleSwitchProject(projectsToggle[selectedProgram].next)}
        >
          <Image src={assets.Home} alt="Next" width={40} />
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectDisplay;

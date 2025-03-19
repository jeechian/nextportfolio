import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
    const scrollToProgram = () => {
        const programSection = document.getElementById("programme");
        if (programSection) {
            programSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mt-8 gap-6 mx-auto">
            <motion.h2 
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-yellow-500">Skills I Master</motion.h2>
            <div className="flex flex-wrap justify-center gap-6 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="border border-gray-500 w-[250px] h-[250px] rounded-xl flex flex-col items-center justify-start p-4 text-center shadow-md">
                    <h1 className="text-3xl font-bold mb-2 pb-5">CyberSecurity</h1>
                    <div className="pl-4">
                        <p>Fundamental knowledge, how cyber attacks happen, how to prevent them, etc.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="border border-gray-500 w-[250px] h-[250px] rounded-xl flex flex-col items-center justify-start p-4 text-center shadow-md">
                    <h1 className="text-3xl font-bold mb-2 pb-5">Programming</h1>
                    <div className="grid grid-cols-2 gap-2 text-left w-full pl-4">
                        <p>✔️ C#</p>
                        <p>✔️ C++</p>
                        <p>✔️ C</p>
                        <p>✔️ Python</p>
                        <p>✔️ Java</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="border border-gray-500 w-[250px] h-[250px] rounded-xl flex flex-col items-center justify-start p-4 text-center shadow-md">
                    <h1 className="text-3xl font-bold mb-2 pb-5">Database</h1>
                    <div className="grid grid-cols-2 gap-2 text-left w-full pl-2">
                        <p>✔️ SQL</p>
                        <p>✔️ R </p>
                        <p>✔️ SAS</p>
                        <p>✔️ MongoDB</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration:1.2, ease: "easeOut" }}
                    className="border border-gray-500 w-[300px] h-[250px] rounded-xl flex flex-col items-center justify-start p-4 text-center shadow-md">
                    <h1 className="text-3xl font-bold mb-2 pb-5">Web Development</h1>
                    <div className="flex flex-col justify-center h-full w-full">
                        <div className="grid grid-cols-2 gap-2 text-left w-full pl-4">
                            <p>✔️ HTML</p>
                            <p>✔️ CSS</p>
                            <p>✔️ JavaScript</p>
                            <p>✔️ Next JS</p>
                            <p>✔️ Node JS</p>
                            <p>✔️ React JS</p>
                            <p>✔️ Tailwind CSS</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.h2 
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-yellow-500">SoftSkill</motion.h2>
            <motion.div 
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-wrap gap-5 text-center md:text-left md:flex-row md:justify-center">
                <p className="w-full md:w-auto">✔️ Teamwork</p>
                <p className="w-full md:w-auto">✔️ Time Management</p>
                <p className="w-full md:w-auto">✔️ Leadership</p>
                <p className="w-full md:w-auto">✔️ Effective Communication</p>
                <p className="w-full md:w-auto">✔️ Critical Thinking</p>
            </motion.div>
            <div className="p-5">
                <motion.button
                    onClick={scrollToProgram}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-yellow-500 border p-2 rounded-xl text-white text-2xl pl-10 pr-10 hover:bg-yellow-400"
                >
                    My Project
                </motion.button>
            </div>
        </div>
    );
};

export default Skill;
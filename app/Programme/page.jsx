"use client"
import React from "react";
import Image from "next/image";
import { gameDev } from "../Assets/asset";
import { motion } from "framer-motion";

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-10  bg-slate-950 text-white ">
            <div>
                <motion.h1
                    initial={{ width: "50%", opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center w-full mt-0 text-2xl text-yellow-500">
                    Game Development
                </motion.h1>
                <motion.h1
                    initial={{ width: "50%", opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="flex justify-center w-full mt-0 text-4xl font-bold">
                    Lumberjack Blues
                </motion.h1>
                <motion.div className="flex grid lg:grid-cols-2 md-grid-cols-2 sm:grid-cols-1"
                    initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
                    whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl font-bold">Poster</motion.h2>
                        <motion.div
                            initial={{ rotateY: 180, opacity: 0 }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-1 border-4 border-gray-800 rounded-lg bg-white">
                            <Image src={gameDev[2].src} alt="title" width={800} className="border-1 border-black" />
                            <Image src={gameDev[3].src} alt="title" className="border-1 border-black" />
                        </motion.div>
                    </div>

                    <div className="pt-5 sm:pl-10 sm:max-w-2xl">
                        <motion.p
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="space-x-2 text-base sm:text-lg mb-4">
                            Developed a 2D game in Unity where players chop trees to earn money, upgrade attributes, and unlock new skills through market transactions. Utilized C# scripting for game mechanics, including tree chopping, attribute upgrades, and skill unlocking.
                            <br />
                            <strong className="text-yellow-500">~2024 DEC</strong>
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl sm:text-4xl font-bold">Developed By:</motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-lg sm:text-xl font-bold pt-2">
                            Coding: Ng Jee Chian
                        </motion.h3>
                        <motion.h3
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.3, ease: "easeOut" }}
                            className="text-lg sm:text-xl font-bold ">
                            Animation and UI: Nigel
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl font-bold pt-10">Title</h2>
                            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white mb-4">
                                <Image src={gameDev[1].src} alt="Title" width={800} height={450} className="border-1 border-black" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl font-bold pt-10">Game Scene</h2>
                            <div className="p-1 border-4 border-gray-800 rounded-lg bg-white mb-4">
                                <Image src={gameDev[0].src} alt="Game Scene" width={800} height={450} className="border-1 border-black" />
                            </div>
                        </motion.div>

                    </div>
                </motion.div >
            </div>

            <motion.div
                className="flex flex-col items-center justify-center w-full pt-10"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-bold pt-10 text-left">~Lumberjack Blues Gameplay</h2>
                <video width={1200} height={1000} controls className="p-1 border-4 border-gray-800 rounded-lg bg-white">
                    <source src="LB_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            <motion.div className="flex flex-wrap justify-center gap-10 pt-10 grid lg:grid-cols-3 md-grid-cols-2 sm:grid-cols-1 "
                initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
                whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
                transition={{ duration: 0.8, ease: "easeOut" }}>
                {/* Display LB1 to LB12 */}
                {gameDev[4].map((gameItem, index) => (
                    <div key={gameItem.name}>
                        <h2 className={`text-4xl font-bold ${gameItem.description === "" ? "pt-10" : ""}`}>
                            {gameItem.description}
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 100, x: -50 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }} // Ensures it only animates once when in view
                            transition={{ duration: 0.8 + (index%3) * 0.2, ease: "easeOut" }} // Incrementing duration
                            className="p-1 border-4 border-gray-800 rounded-lg bg-white"
                        >
                            <Image src={gameItem.src} alt={gameItem.name} width={450} height={450} className="border-1 border-black" />
                        </motion.div>
                    </div>
                ))}



            </motion.div>


        </div>
    );
};

export default Page;

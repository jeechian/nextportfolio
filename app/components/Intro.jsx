import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { iconSocial, sample, assets } from "../Assets/asset";

const Intro = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen w-full gap-10 p-6 md:p-10 text-white">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/background2.mp4" type="video/mp4" />
            </video>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full max-w-7xl relative z-10">
                {/* Left Content */}
                <div className="md:pl-10 pt-5 max-w-full md:max-w-4xl text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-2xl md:text-4xl text-yellow-500"
                    >
                        About Me
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mt-0 text-3xl md:text-5xl font-bold"
                    >
                        NG <br /> JEE CHIAN
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-sm md:text-lg"
                    >
                        Diploma in Computer Science student from INTI International College Subang
                    </motion.p>

                    <br />

                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl font-bold"
                    >
                        Contact Me
                    </motion.h2>
                    <div className="flex gap-3 items-center justify-center md:justify-start pt-2">
                        {iconSocial.map((iconData,index) => (
                            <Link
                                href={iconData.link}
                                key={iconData.name}
                                className="flex flex-col items-center"
                            >
                                <motion.div
                                    initial={{ boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)",opacity:0,y:50 }}
                                    whileInView={{opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)" }}
                                    transition={{ duration: 1+(index*0.2) }}
                                    className="relative mb-1"
                                >
                                    <Image
                                        src={iconData.src}
                                        alt={`${iconData.name} Icon`}
                                        width={35}
                                        height={35}
                                    />
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="pt-10 flex justify-center md:justify-start gap-5"
                    >
                        <Link href={"/rateMe"}>
                            <motion.button
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                className="bg-yellow-500 border p-2 rounded-xl text-white text-xl px-5 hover:bg-yellow-400 md:text-3xl"
                            >
                                Rate Me
                            </motion.button>
                        </Link>

                        <motion.button
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            className="border p-2 border-yellow-500 hover:border-yellow-400 rounded-xl text-yellow-500 text-xl px-5 hover:text-yellow-400 md:text-3xl"
                        >
                            <a href={"/NgJeeChian_Resume.pdf"} download className="flex items-center gap-2">
                                <Image src={assets.resume_icon} alt="Resumé" width={30} height={30} />
                                Resumé
                            </a>
                        </motion.button>

                    </motion.div>
                </div>

                <div className="md:pl-25 pt-15">
                    {sample.map((sampleData, index) => (
                        <motion.div
                            key={sampleData.name}
                            initial={{opacity: 0, rotate: 15, y: index * -120 }}
                            viewport={{ once: true }}
                            whileInView={{opacity: 1, y: index * -30 }}
                            transition={{ duration: 1, ease: "linear" }}
                            className="relative mb-1 pb-5"
                        >
                            <div className="relative">
                                {/* Blur Overlay */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-600/30 to-transparent blur-md"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-600/30 to-transparent blur-md"></div>
                                </div>

                                {/* Image */}
                                <Image
                                    src={sampleData.src}
                                    alt={`${sampleData.name} Icon`}
                                    width={330}
                                    className="border border-yellow-500 rounded-xl"
                                />
                            </div>
                        </motion.div>
                    ))}

                </div>


            </div>
        </div>
    );
};

export default Intro;

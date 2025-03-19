import React from "react";
import { motion } from "framer-motion";

const Ending = () => {
    return (
        <div className=" bg-slate-950 text-white text-center pt-10">
            
            <motion.h2  
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center w-full mt-0 text-2xl text-yellow-500">
                Achivement
            </motion.h2>
            <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center w-full mt-0 text-4xl font-bold">
            Alumni Sharing Event Speaker
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-x-2 text-base sm:text-lg p-4">
            Invited by Ms. Norayu, Head of Program, to share insights and
            experiences with Certificate in Information Technology students.
            </motion.p>
        </div>
    )
}
export default Ending

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../Assets/asset";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { motion } from "framer-motion";

const RateMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
    liked: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleLike = () => {
    setData((prevData) => ({ ...prevData, liked: !prevData.liked }));
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("comment", data.comment);
      formData.append("liked", data.liked);

      setData({
        name: "",
        email: "",
        comment: "",
        liked: false,
      });

      const response = await axios.post("/api/rating", formData);
      toast.success(response.data.msg);
    } catch (error) {
      toast.error("Error submitting feedback.");
    }
  };

  return (
    <motion.div
      className="w-full p-6 sm:p-10 bg-slate-900 flex flex-col items-center"
      initial={{ opacity: 0, x: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-yellow-500">Rate Me</h1>
      <div className="w-full sm:w-[80%] bg-white p-6 sm:p-10 rounded-xl">
        <div className="border-gray-400 w-full mb-4"></div>

        <form onSubmit={onSubmitHandle} className="flex flex-col sm:flex-row gap-5 w-full">
          <div className="flex flex-col gap-5 w-full sm:w-[30%]">
            <div>
              <label htmlFor="name" className="text-lg font-bold text-gray-800">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={onChangeHandler}
                required
                placeholder="Enter your name"
                className="border p-3 w-full rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-bold text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={onChangeHandler}
                required
                placeholder="Enter your email"
                className="border p-3 w-full rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full sm:w-[65%] pl-0 sm:pl-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="comment" className="text-lg font-bold text-gray-800">
                Feedback
              </label>
              <textarea
                name="comment"
                id="comment"
                value={data.comment}
                onChange={onChangeHandler}
                placeholder="Share your thoughts"
                className="border p-3 rounded-md min-h-[150px] text-lg"
              />
            </div>
            <div>

            </div>
            <div className="flex justify-end w-full gap-5">
              <motion.button
                type="button"
                onClick={toggleLike}
                className={`${data.liked ? "bg-black" : "bg-gray-400"
                  } text-white py-3 px-5 h-[50px] rounded-md`}
                whileTap={{ scale: 0.9 }} // Shrink slightly on click
                whileHover={{ scale: 1.1 }} // Grow slightly on hover
              >
                <Image
                  src={data.liked ? assets.like : assets.unlike}
                  alt={data.liked ? "Liked" : "Unlike"}
                  width={24}
                  height={24}
                />
              </motion.button>
              <motion.button
                type="submit"
                className="bg-black text-yellow-500 font-bold py-3 px-5 rounded-md  w-[100px] h-[50px] self-end disabled:cursor-not-allowed"
                whileHover={{ scale: 1.1 }} // Slight grow on hover
                whileTap={{ scale: 0.95 }} // Shrink slightly on click
              >
                Submit
              </motion.button>
            </div>

          </div>


        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </motion.div>
  );
};

export default RateMe;

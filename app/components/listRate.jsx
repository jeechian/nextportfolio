"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { assets } from "../Assets/asset";
import { motion } from "framer-motion";

const ListRate = () => {
  const [ratings, setRatings] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await axios.get("api/rating");
        setRatings(response.data.ratings);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };
    fetchRate();
  }, []);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < ratings.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <motion.div
      className="w-full p-6 sm:p-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-yellow-500">Ratings</h1>

      {ratings.length === 0 ? (
        <motion.p
          className="text-lg text-gray-300 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          No ratings available.
        </motion.p>
      ) : (
        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className="absolute left-8 sm:left-4 top-[55%] transform -translate-y-1/2 md:p-3 lg:p-3 sm:p-1 rounded-full disabled:opacity-50"
          >
            <Image src={assets.left} alt="Previous" width={24} height={24} />
          </button>

          <div className="w-[80%] px-6 sm:px-10 py-5 mx-auto flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {ratings.slice(startIndex, startIndex + itemsPerPage).map((rating, index) => (
              <motion.div
                key={rating._id}
                initial={{ x:0,opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                animate={{ y: index % 2 === 0 ? [10, 0, 10] : [0, 10, 0] }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeOut" },
                  filter: { duration: 0.8, ease: "easeOut" },
                  y: { duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
                }}
                className="flex flex-col items-center border border-black bg-gray-100 p-4 rounded-lg shadow-md w-[90%] sm:w-[80%] md:w-[100%] mx-auto"
              >
                <Image
                  src={rating.liked ? assets.like : assets.unlike}
                  alt={rating.liked ? "Liked" : "Unlike"}
                  width={24}
                  height={24}
                  className="mb-2"
                />
                <div className="text-lg font-bold text-gray-800">{rating.name}</div>
                <div className="text-sm text-gray-600">{rating.email}</div>
                <div className="text-base text-gray-800 my-2 text-center">{rating.comment}</div>
                <div className="text-sm text-gray-500">{new Date(rating.date).toLocaleDateString()}</div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= ratings.length}
            className="absolute right-8 sm:right-4 top-[55%] transform -translate-y-1/2 md:p-3 lg:p-3 sm:p-1 rounded-full disabled:opacity-50"
          >
            <Image src={assets.right} alt="Next" width={24} height={24} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ListRate;
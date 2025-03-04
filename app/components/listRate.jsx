"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { assets } from "../Asset/asset";
import { motion } from "framer-motion";


const ListRate = () => {
  const [ratings, setRatings] = useState([]); // Store the ratings
  const [filter, setFilter] = useState("All"); // Filter state to track the current filter

  const fetchRate = async () => {
    const response = await axios.get("api/rating");
    setRatings(response.data.ratings);
    console.log(response.data.ratings);
  };

  useEffect(() => {
    fetchRate();
  }, []);

  // Filter ratings based on the selected filter
  const filteredRatings = ratings.filter((rating) => {
    if (filter === "Liked") return rating.liked === true;
    if (filter === "Disliked") return rating.liked === false;
    return true; // Show all ratings
  });

  return (
    <motion.div className="w-[full] p-10 rounded-lg bg-slate-950 flex flex-col items-center"
      initial={{ opacity: 0, x: "blur(10px) " }} // Start off-screen to the left
      whileInView={{ opacity: 1, filter: "blur(0px)" }} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-4xl font-bold mb-5 text-yellow-500">Ratings</h1>
      <div className="w-[80%] items-center bg-white p-10 rounded-xl">
        <div className="mb-5">
          <label htmlFor="filter" className="mr-2 text-lg font-medium">Filter: </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="All">All</option>
            <option value="Liked">Liked</option>
            <option value="Disliked">Disliked</option>
          </select>
        </div>

        {filteredRatings.length === 0 ? (
          <p>No ratings to display.</p>
        ) : (
          <div className="w-full p-5">
            {/* Displaying headers */}
            <div className="flex flex-row font-bold text-lg mb-4 text-gray-800">
              <div className="w-1/4">Name / Email</div>
              <div className="flex-1">Comment</div>
              <div className="w-1/5">Liked</div>
              <div className="w-1/5">Date</div>
            </div>

            {/* Ratings List */}
            {filteredRatings.map((rating) => (
              <div
                key={rating._id}
                className="flex flex-row items-center justify-between mb-4 border-b-2 pb-4"
              >
                {/* Name and Email */}
                <div className="flex flex-col w-1/4">
                  <div className="text-lg font-bold text-gray-800">{rating.name}</div>
                  <div className="text-sm text-gray-600">{rating.email}</div>
                </div>

                {/* Comment */}
                <div className="flex-1 text-base text-gray-800">{rating.comment}</div>

                {/* Like Status */}
                <div className="w-1/5 flex justify-start pl-3">
                  <Image
                    src={rating.liked ? assets.like : assets.unlike}
                    alt={rating.liked ? "Liked" : "Unlike"}
                    width={24}
                    height={24}
                  />
                </div>

                {/* Date */}
                <div className="w-1/5 text-base text-gray-800">
                  {new Date(rating.date).toLocaleDateString()} {/* Formatting the date */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      


    </motion.div>
  );
};

export default ListRate;

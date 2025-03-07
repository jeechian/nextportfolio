"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { assets } from "../Assets/asset";
import { motion } from "framer-motion";

const ListRate = () => {
  const [ratings, setRatings] = useState([]); // Store the ratings
  const [filter, setFilter] = useState("All"); // Filter state to track the current filter
  const [max, setMax] = useState(3); // To toggle between 3 comments and all comments

  // Fetch ratings from the server
  const fetchRate = async () => {
    try {
      const response = await axios.get("api/rating");
      setRatings(response.data.ratings);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
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

  // Get the ratings to display based on the `max` value
  const ratingsToDisplay = filteredRatings.slice(0, max);

  // Toggle to show all or 3 ratings
  const toggleShowMore = () => {
    if (max === 3) {
      setMax(filteredRatings.length); // Show all ratings
    } else {
      setMax(3); // Show only the 3 most recent ratings
    }
  };

  return (
    <motion.div
      className="w-full p-6 sm:p-10 bg-slate-950 flex flex-col items-center"
      initial={{ opacity: 0, x: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-yellow-500">Ratings</h1>
      <div className="w-full sm:w-[80%] items-center bg-white p-6 sm:p-10 rounded-xl">
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
            <div className="hidden sm:flex flex-row font-bold text-lg mb-4 text-gray-800">
              <div className="w-1/4">Name / Email</div>
              <div className="flex-1">Comment</div>
              <div className="w-1/5">Liked</div>
              <div className="w-1/5">Date</div>
            </div>

            {/* Ratings List */}
            {ratingsToDisplay.map((rating) => (
              <div
                key={rating._id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-5 sm:border-b-2 pb-4 sm:pb-0 border-b-2 sm:border-b-0"
              >
                {/* Name and Email */}
                <div className="flex flex-col sm:w-1/4 mb-3 sm:mb-0">
                  <div className="text-lg font-bold text-gray-800">{rating.name}</div>
                  <div className="text-sm text-gray-600">{rating.email}</div>
                </div>

                {/* Comment */}
                <div className="flex-1 text-base text-gray-800 mb-3 sm:mb-0">
                  {rating.comment}
                </div>

                {/* Like Status */}
                <div className="w-1/5 flex justify-start mb-3 sm:mb-0 sm:pl-3">
                  <Image
                    src={rating.liked ? assets.like : assets.unlike}
                    alt={rating.liked ? "Liked" : "Unlike"}
                    width={24}
                    height={24}
                  />
                </div>

                {/* Date */}
                <div className="w-1/5 text-base text-gray-800">
                  {new Date(rating.date).toLocaleDateString()}
                </div>
              </div>
            ))}

            {/* Toggle button to show more or less */}
            {filteredRatings.length > 3 && (
              <div className="flex justify-end bg:pr-5 md:pr-5">
                <button
                  onClick={toggleShowMore}
                  className="mt-4 bg-black text-yellow-500 py-2 px-4 rounded-md ml-auto"
                >
                  {max === 3 ? "Show All Comments" : "Show Less"}
                </button>
              </div>

            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ListRate;

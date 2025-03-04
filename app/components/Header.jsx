"use client";
import React, { useState } from "react";
import { program_page } from "../asset/asset"; // Importing the icon array
import Link from "next/link";


const Header = () => {
  const [selectedIcon, setSelectedIcon] = useState("aboutMe");
  const [selectedProgram, setSelectedProgram] = useState("Game Development");

  return (
    <div className="bg-slate-900 text-white py-1">
      <div className="flex justify-end gap-5 my-6 flex-nowrap pr-10"> {/* Prevent wrapping */}
        <Link
          href={"/"}
          onClick={() => setSelectedIcon("aboutMe")} // Set selectedIcon to 'aboutMe' on click
        >
          <p className={`${selectedIcon === "aboutMe" ? "text-yellow-500" : ""}`}>About Me</p>
        </Link>
        <Link
          href={"/Programme"}
          onClick={() => {
            setSelectedIcon("program");
            setSelectedProgram("Game Development");
          }}
           // Set selectedIcon to 'program' on click
        >
          <p className={`${selectedIcon === "program" ? "text-yellow-500" : ""}`}>Program</p>
        </Link>
        <Link
          href={"tel:0165990147"}
        >
          <h2 className="font-bold text-yellow-500">
            | 0165990147
          </h2>
        </Link>
      </div>

      {/* Program page links render based on icon selection */}
      {selectedIcon === "program" && (
        <div className="flex justify-center gap-x-12 my-6 flex-nowrap">
          {program_page.map((pPage) => (
            <Link
              href={pPage.link}
              key={pPage.name}
              onClick={() => setSelectedProgram(pPage.name)} // Set selectedProgram to the clicked program
            >
              <p className={`${selectedProgram === pPage.name ? "text-yellow-500" : ""}`}>
                {pPage.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;

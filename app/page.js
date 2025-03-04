"use client";
import AboutMe from "./AboutMe/page";
import ListRate from "./components/listRate";
import RateMe from "./components/rateMe";



export default function Home() {
  return (
    <>
      <AboutMe/>
      <RateMe/>
      <ListRate/>
    </>
  );
}

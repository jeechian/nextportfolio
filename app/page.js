"use client";
import AboutMe from "./AboutMe/page";
import Intro from "./components/Intro";
import ListRate from "./components/listRate";
import Skill from "./components/Skill";
import ProjectDisplay from "./ProjectDisplay/page";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Intro />
      <Skill />
      <AboutMe />
      <div id="programme">
        <ProjectDisplay />
      </div>
      <ListRate />
      <Footer/>


    </>
  );
}

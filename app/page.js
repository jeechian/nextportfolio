"use client";
import AboutMe from "./AboutMe/page";
import Intro from "./components/Intro";
import ListRate from "./components/listRate";
import Ending from "./components/Ending";
import Skill from "./components/Skill";
import ProjectDisplay from "./ProjectDisplay/page";


export default function Home() {
  return (
    <>
    
      <Intro/>
      <Skill/>
      <div id="about-me">
      <AboutMe/>
      </div>
      <ListRate/>
      <Ending/>
      <div id="programme">
      <ProjectDisplay/>
      </div>
      
    </>
  );
}

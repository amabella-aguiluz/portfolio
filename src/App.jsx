import { useState } from 'react'
import './App.css'
import large_pic from "./assets/wide.jpg"
import portrait_pic from "./assets/pfp.jpg"

// links
const email = "amabellaaguiluz1@gmail.com";
const linkedin = "https://www.linkedin.com/in/amabella-aguiluz";
const github = "https://github.com/amabella-aguiluz";

// contact icons
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// skillset icons
import { DiGit } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiGnubash } from "react-icons/si";
import { SiScrapy } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const colors = {
    text: "#FCF5EE",
    light: "#FFC4C4",
    main: "#EE6983",
    dark: "#850E35",};


function PortraitImage({src, alt}){
  return(
    <div className="flex w-auto h-auto items-center">
      <img src={src} alt={alt} className="w-auto max-h-[200px] rounded-3xl"/>
    </div>
  )}


    // buton components
function ButtonIconOnlyLink({url, icon}){
  const click= () => {
  window.open(url, "_blank");
  };
  return(
    <button onClick={click} className="p-2 flex items-center">
      {icon}
    </button>
  )
}


function ButtonIconLink({text,url, icon}){
  const click= () => {
  window.open(url, "_blank");
  };
  return(
    <button onClick={click} className=" self-start px-4 py-2 bg-[#EE6983] text-[#FCF5EE] rounded flex items-center gap-2 hover:bg-[#FFC4C4]">
      {icon}{text}
    </button>
  )
}
function SkillIcon({icon, text}){
  return(
    <div className="flex flex-col lightborder items-center p-4 rounded-2xl w-[100px] h-[100px]">
      {icon}
      <div className="text-sm mt-2 text-[#EE6983]">{text}</div>
    </div>
  );
}


function PortfolioSample({title, skills, description, githubUrl}){
  return(
    <div className="flex p-4 px-6 rounded-2xl lightborder flex-col w-auto h-auto gap-2">
      <h2>{title}</h2>
      <p><i>{skills}</i></p>
      <p>{description}</p>
      <ButtonIconLink text="View on GitHub" url={githubUrl} icon={ <DiGithubBadge size="1.5em"/> }
      className="w-fit" />
      </div>)
}

  // about me components

function ContactMeRow({text}){
  return(
    <div className="flex flex-col">
      <h3>Contact Me</h3>
    <div className="flex flex-row">
      <ButtonIconOnlyLink icon={ <DiGithubBadge className="logos" /> } url={github} />
      <ButtonIconOnlyLink icon={ <FaLinkedin className="logos" /> } url={linkedin} />
      <ButtonIconOnlyLink icon={ <MdEmail className="logos" /> } url={'mailto:${email}'} /> 
      </div>
    </div>
  )
}


function Experience({}){
  return(
    <div>
      <h2>Experience</h2>
      <h3>Freelancer (2020-Present)</h3>
        <p>Worked on various projects revolving illustration.</p>
      <h3>Software Engineering Intern - FullSuite (2025-Present)</h3>
        <p>Developing and maintaining web apps.</p> 
    </div>
  )}

function Profile({}){
  return(
    <div className="flex flex-col md:flex-row p-4 rounded-2xl w-full h-auto gap-5">
      <div className='flex-shrink-0'>
        <PortraitImage className="items-center" src={portrait_pic} alt="Profile Picture" />
      </div>
      <div>
        <h1> Amabella Aguiluz</h1>
        <h2> Web Developer </h2>
        <p>I'm a junior developer with a passion for creativity and learning new things everyday.</p>
        <br />
        <h2>Schooling</h2>
        <h3>AMA Computer College Baguio (2024-Present)</h3>
        <p>B.S. Computer Science</p>
        <br />
        <Experience />
        <br />
        <ContactMeRow />
      </div>
    </div>
  )
}

function Skillset({}){
  return(
    <div>
    <h2>My Skillset</h2>
    <br />
    <div className="flex flex-wrap gap-2 p-4 rounded-2xl  w-auto h-auto">
      <SkillIcon icon={ <FaFigma className="logos" /> } text="Figma"/>
      <SkillIcon icon={ <DiReact className="logos" /> } text="React"/>
      <SkillIcon icon={ <RiTailwindCssFill className="logos" /> } text="TailwindCSS"/>
      <SkillIcon icon={ <IoLogoElectron className="logos" /> } text="ElectronJS"/>
      <SkillIcon icon={ <DiPython className="logos" /> } text="Python"/>
      <SkillIcon icon={ <SiScrapy className="logos" /> } text="Scrapy"/>    
      <SkillIcon icon={ <SiSqlite className="logos" /> } text="SQLite"/>  
      <SkillIcon icon={ <DiGit className="logos" /> } text="Git"/>
      <SkillIcon icon={ <SiGnubash className="logos" /> } text="UNIX / Bash"/>
    </div>
    </div>
  )
}

function PortfolioSet({}){
  return(
    <div className="flex flex-row gap-4 flex-wrap">
      <PortfolioSample title="Spinagotchi"
        skills="React, TailwindCSS, ElectronJS" 
        description="A desktop tamagotchi."
        githubUrl="https://github.com/amabella-aguiluz/spinagotchi" />
        <br />
      <PortfolioSample title="Angela_Bot"
          skills="Python, SQLite"
          description="A general-use Discord bot."
          githubUrl="https://github.com/amabella-aguiluz/angela-bot" />
          <br />
      <PortfolioSample title="GigBytes"
        skills="Figma"
        description="A UI/UX mockup for an app where you can find local gigs anywhere."
        githubUrl="https://github.com/amabella-aguiluz/gigbytes_demo" />
    </div>
  )
}



function App() {
  return (
    <>
    <div className="min-h-screen gap-10 max-w-5xl px-6 flex flex-col py-10 mx-auto items-center">
      <Profile />
      <Skillset />
      <PortfolioSet />
      </div>
    </>
  )
}

export default App

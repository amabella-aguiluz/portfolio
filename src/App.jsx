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


    // text components
function H3Text({header}){
  return(
    <div className="w-auto h-auto text-3xl font-bold. text-[#FCF5EE]">
      {header}
    </div>
  )
}



function H2Text({text}){
  return(
    <div className="w-auto h-auto text-2xl font-semibold text-[#FCF5EE]">
      {text}
    </div>
  )
}

function H1Text({text}){
  return(
    <div className="w-auto h-auto text-xl font-semibold text-[#FCF5EE]">
      {text}
    </div>
  )
}

function RegularText({ text, className = "" }) {
  return (
    <p className={`w-auto h-auto text-[#FFC4C4] text-base ${className}`}>
      {text}
    </p>
  );
}

  // image components
function WideImage({src, alt}){
  return(
    <div className="flex w-full h-auto ">
      <img src={src} alt={alt} className="max-w-[200px] w-auto h-auto"/>
    </div>
  )
}

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
    <button onClick={click} className=" self-start px-4 py-2 bg-[#850E35] text-[#FCF5EE] rounded flex items-center gap-2 hover:bg-[#EE6983]">
      {icon}{text}
    </button>
  )
}
function SkillIcon({icon, text}){
  return(
    <div className="flex flex-col items-center p-4 rounded-2xl w-[100px] h-[100px]">
      {icon}
      <div className="text-sm mt-2 text-[#FFC4C4]">{text}</div>
    </div>
  );
}

function H3WithH2({header, text}){
  return(
    <div className="flex flex-col w-auto h-auto">
      <H3Text header={header} />
      <H2Text text={text} />
    </div>
  )
}

function H3WithText({header, text}){
  return(
    <div className="flex flex-col w-auto h-auto">
      <H3Text header={header} />
      <RegularText text={text} />
    </div>
  )
}

function PortfolioSample({title, skills, description, githubUrl}){
  return(
    <div className="flex p-4 border-2 border-[#850E35] rounded-2xl flex-col w-auto h-auto gap-2">
      <H2Text text={title}/>
      <RegularText text={skills} className="italic" />
      <RegularText text={description} />
      <ButtonIconLink text="View on GitHub" url={githubUrl} icon={ <DiGithubBadge size="1.5em"/> }
      className="w-fit" />
      </div>)
}

  // about me components

function ContactMeRow({text}){
  return(
    <div className="flex flex-col items-center">
      <H1Text text="Contact Me" />
    <div className="flex flex-row">
      <ButtonIconOnlyLink icon={ <DiGithubBadge className="text-[#FFC4C4]" size="2em" /> } url={github} />
      <ButtonIconOnlyLink icon={ <FaLinkedin className="text-[#FFC4C4]" size="2em" /> } url={linkedin} />
      <ButtonIconOnlyLink icon={ <MdEmail className="text-[#FFC4C4]" size="2em" /> } url={'mailto:${email}'} /> 
      </div>
    </div>
  )
}


function Experience({text}){
  return(
    <div>
      <H2Text text="Experience" />
      <H1Text text="Freelancer (2020-Present)" />
        <RegularText text="Worked on various projects revolving illustration." />
      <H1Text text="Software Engineering Intern - FullSuite (2025-Present)" />
        <RegularText text="Developing and maintaining web apps." />
    </div>
  )}

function Profile({text}){
  return(
    <div className="flex flex-col md:flex-row items-center p-4 rounded-2xl border-2 border-[#850E35] w-full h-auto gap-5">
      <div className='flex-shrink-0'>
        <PortraitImage className="items-center" src={portrait_pic} alt="Profile Picture" />
      </div>
      <div>
        <H3WithH2 header="Amabella Aguiluz" text="Developer" />
        <RegularText text="I'm a junior developer with a passion for creativity and learning new things everyday."/>
        <br />
        <H2Text text="Schooling" />
        <H1Text text="AMA Computer College Baguio (2024-Present)" />
        <RegularText text="B.S. Computer Science" />
        <br />
        <Experience />
        <br />
        <ContactMeRow />
      </div>
    </div>
  )
}

function Skillset({text}){
  return(
    <div>
    <H2Text text = "My Skillset"/>
    <br />
    <div className="flex flex-wrap border-2 border-[#850E35] gap-2 p-4 rounded-2xl  w-auto h-auto">
      <SkillIcon icon={ <FaFigma className="text-[#FFC4C4]" size="2em" /> } text="Figma"/>
      <SkillIcon icon={ <DiReact className="text-[#FFC4C4]" size="2em" /> } text="React"/>
      <SkillIcon icon={ <RiTailwindCssFill className="text-[#FFC4C4]" size="2em" /> } text="TailwindCSS"/>
      <SkillIcon icon={ <IoLogoElectron className="text-[#FFC4C4]" size="2em" /> } text="ElectronJS"/>
      <SkillIcon icon={ <DiPython className="text-[#FFC4C4]" size="2em" /> } text="Python"/>
      <SkillIcon icon={ <SiScrapy className="text-[#FFC4C4]" size="2em" /> } text="Scrapy"/>    
      <SkillIcon icon={ <SiSqlite className="text-[#FFC4C4]" size="2em" /> } text="SQLite"/>  
      <SkillIcon icon={ <DiGit className="text-[#FFC4C4]" size="2em" /> } text="Git"/>
      <SkillIcon icon={ <SiGnubash className="text-[#FFC4C4]" size="2em" /> } text="UNIX / Bash"/>
    </div>
    </div>
  )
}

function PortfolioSet({text}){
  return(
    <div>
      <PortfolioSample title="Spinagotchi"
        skills="React, TailwindCSS, ElectronJS" 
        description="A desktop tamagotchi"
        githubUrl="" />
        <br />
      <PortfolioSample title="Angela_Bot"
          skills="Python, SQLite"
          description="A general-use Discord bot based off of Angela from Lobotomy Corporation"
          githubUrl="https://github.com/amabella-aguiluz/angela-bot" />
          <br />
      <PortfolioSample title="GigBytes"
        skills="Figma"
        description="A UI/UX mockup for an app where you can find local gigs anywhere."
        githubUrl="" />
    </div>
  )
}



function App() {
  return (
    <>
    <div className="gap-10 max-w-3xl mx-auto px-6 flex flex-col py-10">
      <Profile />
      <Skillset />
      <PortfolioSet />
      </div>
    </>
  )
}

export default App

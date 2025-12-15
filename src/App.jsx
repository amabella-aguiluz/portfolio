import { useState } from 'react'
import './App.css'
import large_pic from "./assets/wide.jpg"
import portrait_pic from "./assets/pfp.jpg"

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
    <div className="w-auto h-auto text-3xl font-bold">
      {header}
    </div>
  )
}

function H2Text({text}){
  return(
    <div className="w-auto h-auto text-2xl font-semibold">
      {text}
    </div>
  )
}

function H1Text({text}){
  return(
    <div className="w-auto h-auto text-xl font-semibold">
      {text}
    </div>
  )
}

function RegularText({text}) {
  return(
    <div className="w-auto h-auto text-base">
      {text}
    </div>
  )
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
    <div className="flex w-auto h-auto">
      <img src={src} alt={alt} className="w-auto max-h-[200px] rounded-3xl"/>
    </div>
  )}


    // buton components
function ButtonIcon({text, onClick, icon}){
  return(
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2">
      {icon}{text}
    </button>
  )
}
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
    <button onClick={click} className="px-4 py-2 bg-gray-800 text-white rounded flex items-center gap-2 hover:bg-gray-700">
      {icon}{text}
    </button>
  )
}

function Button({text, onClick}){
  return(
    <button onClick={onClick} className="px-1 py-1 bg-blue-500 text-white rounded">
      {text}
    </button>
  )
}

function SkillIcon({icon, text}){
  return(
    <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow w-[100px] h-[120px]">
      {icon}
      <div className="text-sm mt-2">{text}</div>
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

function PortfolioSample({title, imageSrc, skills, description, githubUrl}){
  return(
    <div>
      <H2Text text={title}/>
      <WideImage src={imageSrc} alt="Project Image" />
      <RegularText text={skills} />
      <RegularText text={description} />
      <ButtonIconLink text="View on GitHub" url={githubUrl} icon={ <DiGithubBadge size="1.5em"/> } />
      </div>)
}

  // about me components
function Bio(text){
  return(
    <div className="flex flex-col">
      <RegularText text="I'm a junior developer with a passion for creativity and learning new things everyday."/>
    </div>
  )
}

function ContactMeRow({text}){
  return(
    <div className="flex flex-row">
      <ButtonIconOnlyLink icon={ <DiGithubBadge size="2em" /> } url="https://github.com/amabella-aguiluz" />
      <ButtonIconOnlyLink icon={ <FaLinkedin size="2em" /> } url="https://www.linkedin.com/in/amabella-aguiluz" />
      <ButtonIconOnlyLink icon={ <MdEmail size="2em" /> } url="mailto: amabellaaguiluz1@gmail.com" /> 
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
    <div className="flex items-center bg-white p-4 rounded shadow w-auto h-auto gap-5">
      <PortraitImage src={portrait_pic} alt="Profile Picture" />
      <div>
        <H3WithH2 header="Amabella Aguiluz" text="Developer" />
        <Bio />
        <H2Text text="Schooling" />
        <H1Text text="AMA Computer College Baguio (2024-Present)" />
        <RegularText text="B.S. Computer Science" />
        <Experience />
        <H1Text text="Contact Me" />
        <ContactMeRow />
      </div>
    </div>
  )
}

function Skillset({text}){
  return(
    <div>
    <H2Text text = "My Skillset"/>
    <div className="flex flex-row bg-white gap-4 p-4 rounded shadow w-auto h-auto">
      <SkillIcon icon={ <FaFigma size="2em" /> } text="Figma"/>
      <SkillIcon icon={ <DiReact size="2em" /> } text="React"/>
      <SkillIcon icon={ <RiTailwindCssFill size="2em" /> } text="TailwindCSS"/>
      <SkillIcon icon={ <IoLogoElectron size="2em" /> } text="ElectronJS"/>
      <SkillIcon icon={ <DiPython size="2em" /> } text="Python"/>
      <SkillIcon icon={ <SiScrapy size="2em" /> } text="Scrapy"/>    
      <SkillIcon icon={ <SiSqlite size="2em" /> } text="SQLite"/>  
      <SkillIcon icon={ <DiGit size="2em" /> } text="Git"/>
      <SkillIcon icon={ <SiGnubash size="2em" /> } text="UNIX / Bash"/>
    </div>
    </div>
  )
}

function PortfolioSet({text}){
  return(
    <div>
      <PortfolioSample title="Spinagotchi"
        imageSrc={null}
        skills="React, TailwindCSS, ElectronJS" 
        description="A desktop tamagotchi"
        githubUrl="" />
      <PortfolioSample title="Angela_Bot"
        imageSrc={null}
          skills="Python, SQLite"
          description="A general-use Discord bot based off of Angela from Lobotomy Corporation"
          githubUrl="" />
      <PortfolioSample title="GigBytes"
        imageSrc={null}
        skills="Figma"
        description="A UI/UX mockup for an app where you can find local gigs anywhere."
        githubUrl="" />
    </div>)
}



function App() {
  return (
    <>
    <div className="gap-10">
      <Profile />
      <Skillset />
      <PortfolioSet />
      </div>
    </>
  )
}

export default App

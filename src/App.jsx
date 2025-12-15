import { useState } from 'react'
import './App.css'
import large_pic from "./assets/wide.jpg"
import portrait_pic from "./assets/pfp.jpg"
import { DiGithubBadge } from "react-icons/di";

// skillset icons
import { DiGit } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { SiGnubash } from "react-icons/si";



const colors = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    accent: "#ff5722",};


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
      <img src={src} alt={alt} className="w-full h-auto"/>
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
    <div className="flex flex-col items-center bg-white p-4 rounded shadow w-auto max-w-[100px] h-auto max-h-[120px]">
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

  // about me components
function Bio(text){
  return(
    <div className="flex flex-col">
      <RegularText text="I'm a junior developer with a passion for creativity and learning new things everyday."/>
    </div>
  )
}

function Experience({text}){
  return(
    <div>
      <H2Text text="Experience" />
      <H1Text text="Freelancer (2020-Present)" />
        <RegularText text="Worked on various projects revolving illustration." />
      <H1Text text="Software Engineering Intern (FullSuite) (2025-Present)" />
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
      </div>
    </div>
  )
}

function Skillset({text}){
  return(
    <div className="grid grid-cols-20 gap-1 bg-white p-4 rounded shadow w-auto h-auto">
      <SkillIcon icon={ <DiJavascript size="2em" /> } text="JavaScript"/>
      <SkillIcon icon={ <DiPython size="2em" /> } text="Python"/>
      <SkillIcon icon={ <DiReact size="2em" /> } text="React"/>
      <SkillIcon icon={ <DiGit size="2em" /> } text="Git"/>
      <SkillIcon icon={ <SiSqlite size="2em" /> } text="SQLite"/>
      <SkillIcon icon={ <IoLogoElectron size="2em" /> } text="ElectronJS"/>
      <SkillIcon icon={ <SiGnubash size="2em" /> } text="UNIX / Bash"/>
    </div>
  )
}

// assets: 
//   !text box 
//   !wide image 
//   !portrait image 
//   text box (front) + wide image 

// about me:
  // !portrait + text
  // !about me - bio
  // !experience

// !skillset

// portfolio:
  // title
  // skillset
  // description
  // link to github



function App() {
  return (
    <>
      {/* <HeaderText header="test header"/>
      <RegularText text="test" />
      <ButtonIcon text="Click Me" onClick={() => alert("Button Clicked!")} icon={ <DiGithubBadge size="1.5em"/> } />
      <ButtonIconLink text="GitHub" url="https://github.com/amabella-aguiluz" icon={ <DiGithubBadge size="1.5em"/> } />
      <SkillIcon icon={ <DiJavascript size="2em" /> } text="JavaScript"/> */}
    <div className="gap-10">
      <Profile />
      <Skillset />
      </div>
    </>
  )
}

export default App

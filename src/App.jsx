import { useState } from 'react'
import './App.css'
import wide_pic from "./assets/wide.jpg"
import portrait_pic from "./assets/pfp.jpg"
import { DiGithubBadge } from "react-icons/di";

// skillset icons
import { DiGit } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";



const colors = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    accent: "#ff5722",};

function HeaderText({header}){
  return(
    <div className="w-auto h-auto text-3xl font-bold">
      {header}
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

const test = "test box";

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
      <img src={src} alt={alt} className="w-auto h-full"/>
    </div>
  )}


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
    <div className="flex flex-col items-center bg-grey p-4 rounded shadow w-auto max-w-[100px] h-auto max-h-[120px]">
      {icon}
      <div className="text-sm mt-2">{text}</div>
    </div>
  );
}

// assets: 
//   !text box 
//   !wide image 
//   !portrait image 
//   text box (front) + wide image 

// about me:
  // portrait + text
  // about me - bio
  // experience

// !skillset

// portfolio:
  // title
  // skillset
  // description
  // link to github



function App() {
  return (
    <>
      <HeaderText header="test header"/>
      <RegularText text="test" />
      {/* <WideImage src={wide_pic} alt='wide image'/>
      <PortraitImage src={portrait_pic} alt='portrait image'/> */}
      <ButtonIcon text="Click Me" onClick={() => alert("Button Clicked!")} icon={ <DiGithubBadge size="1.5em"/> } />
      <ButtonIconLink text="GitHub" url="https://github.com/amabella-aguiluz" icon={ <DiGithubBadge size="1.5em"/> } />
      <SkillIcon icon={ <DiJavascript size="2em" /> } text="JavaScript"/>
    </>
  )
}

export default App

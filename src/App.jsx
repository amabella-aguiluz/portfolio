import { useState } from 'react'
import './App.css'
import wide_pic from "./assets/wide.jpg"
import portrait_pic from "./assets/pfp.jpg"
import { DiGithubBadge } from "react-icons/di";

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

// assets: 
//   !text box 
//   !wide image 
//   !portrait image 
//   text box (front) + wide image 

// about me:
  // portrait
  // text
  // about me - bio
  // experience

// skillset:
  // icon
  // text box

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
    </>
  )
}

export default App

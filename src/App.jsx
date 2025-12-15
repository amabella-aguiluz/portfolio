import { useState } from 'react'
import './App.css'
import wide_pic from "./assets/wide.jpg"
import portrait_pic from "./assets/pfp.jpg"

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
  )
}



// assets: 
//   text box !
//   wide image !
//   portrait image !
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
    </>
  )
}

export default App

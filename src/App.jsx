import { useState } from 'react'
import './App.css'
import portrait_pic from "./assets/pfp.jpg"
import ContactUs from './pages/contact.jsx'
import {DiGithubBadge, FaLinkedin, DiGit, DiPython, DiReact, SiSqlite, IoLogoElectron, SiGnubash, SiScrapy, FaFigma, RiTailwindCssFill}
    from './pages/icons.jsx'

// links
const email = "amabellaaguiluz1@gmail.com";
const linkedin = "https://www.linkedin.com/in/amabella-aguiluz";
const github = "https://github.com/amabella-aguiluz";

function App() {
  return (
    <>
    <div className="min-h-screen gap-10 max-w-4xl px-6 flexcol py-10 mx-auto items-center">
      <Profile />
      <Skillset />
      <PortfolioSet />
      <ContactMeAll />
      </div>
    </>
  )
}

export default App

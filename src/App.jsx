import { useState } from 'react'
import './App.css'
import {DiGithubBadge, FaLinkedin, DiGit, DiPython, DiReact, SiSqlite, IoLogoElectron, SiGnubash, SiScrapy, FaFigma, RiTailwindCssFill}
    from './pages/components/icons.jsx'
import Profile from './pages/profile.jsx'
import Skillset from './pages/skillset.jsx'
import PortfolioSet from './pages/portfolioset.jsx'
import ContactMe from './pages/contactme.jsx'
import Navbar from './pages/components/navbar.jsx'

// links

function App() {
  return (
    <>
    <div>
      <Navbar />
      <div className="min-h-screen gap-10 max-w-4xl px-3 flexcol py-10 mx-5">
      <Profile id="profile"/>
      <Skillset id="skillset"/>
      <PortfolioSet id="portfolio"/>
      <ContactMe id="contact"/>
      </div>
      </div>
    </>
  )
}

export default App

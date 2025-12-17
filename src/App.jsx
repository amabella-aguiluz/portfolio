import { useState } from 'react'
import './App.css'
import {DiGithubBadge, FaLinkedin, DiGit, DiPython, DiReact, SiSqlite, IoLogoElectron, SiGnubash, SiScrapy, FaFigma, RiTailwindCssFill}
    from './pages/components/icons.jsx'
import Profile from './pages/profile.jsx'
import Skillset from './pages/skillset.jsx'
import PortfolioSet from './pages/portfolioset.jsx'
import ContactMe from './pages/contactme.jsx'

// links

function App() {
  return (
    <>
    <div className="min-h-screen gap-10 max-w-4xl px-6 flexcol py-10 mx-auto items-center">
      <Profile />
      <Skillset />
      <PortfolioSet />
      <ContactMe />
      </div>
    </>
  )
}

export default App

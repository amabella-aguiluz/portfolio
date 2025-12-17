
import './App.css'
import Profile from './pages/profile.jsx'
import Skillset from './pages/skillset.jsx'
import PortfolioSet from './pages/portfolioset.jsx'
import ContactMe from './pages/contactme.jsx'
import Navbar from './pages/components/components.jsx'

function App() {
  return (
    <>
    <div>
      <Navbar />
      <div className="app-content flex flex-row justify-center w-full min-h-screen mt-5 mb-5 gap-10">
      <div className="main-content min-h-screen gap-10 max-w-6xl flexcol px-4">
      <Profile id="profile"/>
      <Skillset id="skillset"/>
      <PortfolioSet id="portfolio"/></div>
      <div className="sidebar px-4">
      <ContactMe id="contact"/>
      </div>
      </div>
      </div>
    </>
  )
}

export default App

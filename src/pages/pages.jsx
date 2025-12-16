import portrait_pic from "./assets/pfp.jpg"
import ContactLinks from './pages/components.jsx'
import PortraitImage from './pages/components.jsx'
import SkillIcon from './pages/components.jsx'
import PortfolioSample from './pages/components.jsx'
import ButtonWithIcon from './pages/components.jsx'
import ContactUs from '../hooks/contact.js'

const ContactMe = ({}) => {
  return(
  <div className="flexcol w-full h-auto gap-4">
    <div className="flex flex-row justify-between items-center gap-5"><h2>Contact Me</h2> <ContactLinks className="self-end"/></div>
<div><ContactUs /></div>
</div>
  )
}
export default ContactMe;

const Experience = ({}) =>{
  return(
    <div>
      <h2>Experience</h2>
      <h3>Freelancer (2020-Present)</h3>
        <p>Worked on various projects revolving illustration.</p>
      <h3>Software Engineering Intern - FullSuite (2025-Present)</h3>
        <p>Developing and maintaining web apps.</p> 
    </div>
  )}
export default Experience;

const Profile = ({}) =>{
  return(
    <div className="flex flex-row flex-wrap p-4 rounded-2xl w-full h-auto gap-5">
      <div className='flex-shrink-0'>
        <PortraitImage className="items-center" src={portrait_pic} alt="Profile Picture" />
      </div>
      <div>
        <h1> Amabella Aguiluz</h1>
        <h2> Web Developer </h2>
        <p>I'm a junior developer with a passion for creativity and learning new things everyday.</p>
        <br />
        <h2>Schooling</h2>
        <h3>AMA Computer College Baguio (2024-Present)</h3>
        <p>B.S. Computer Science</p>
        <br />
        <Experience />
      </div>
    </div>
  )
}
export default Profile;

const Skillset = ({}) => {
  return(
    <div>
    <h2>My Skillset</h2>
    <br />
    <div className="flex flex-wrap gap-2 p-4 rounded-2xl w-auto h-auto justify-evenly md:justify-start">
      <SkillIcon icon={ <FaFigma className="logos" /> } text="Figma"/>
      <SkillIcon icon={ <DiReact className="logos" /> } text="React"/>
      <SkillIcon icon={ <RiTailwindCssFill className="logos" /> } text="Tailwind"/>
      <SkillIcon icon={ <IoLogoElectron className="logos" /> } text="Electron"/>
      <SkillIcon icon={ <DiPython className="logos" /> } text="Python"/>
      <SkillIcon icon={ <SiScrapy className="logos" /> } text="Scrapy"/>    
      <SkillIcon icon={ <SiSqlite className="logos" /> } text="SQLite"/>  
      <SkillIcon icon={ <DiGit className="logos" /> } text="Git"/>
      <SkillIcon icon={ <SiGnubash className="logos" /> } text="Bash"/>
    </div>
    </div>
  )
}
export default Skillset;

const PortfolioSet = ({}) => {
  return(
    <div className="flex flex-row justify-around gap-2 flex-wrap">
      <PortfolioSample title="Spinagotchi"
        skills="React, TailwindCSS, ElectronJS" 
        description="A desktop tamagotchi."
        githubUrl="https://github.com/amabella-aguiluz/spinagotchi" />
        <br />
      <PortfolioSample title="Angela_Bot"
          skills="Python, SQLite"
          description="A general-use Discord bot."
          githubUrl="https://github.com/amabella-aguiluz/angela-bot" />
          <br />
      <PortfolioSample title="GigBytes"
        skills="Figma"
        description="A UI/UX mockup for an app where you can find local gigs anywhere."
        githubUrl="https://github.com/amabella-aguiluz/gigbytes_demo" />
    </div>
  )
}
export default PortfolioSet;
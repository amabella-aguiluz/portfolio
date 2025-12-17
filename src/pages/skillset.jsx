import {DiGit, DiPython, DiReact} from 'react-icons/di'
import {SiSqlite, SiGnubash, SiScrapy} from 'react-icons/si'
import {IoLogoElectron} from 'react-icons/io5'
import {FaFigma} from 'react-icons/fa'
import {RiTailwindCssFill} from 'react-icons/ri'
import SkillIcon from "./components/components.jsx";

const Skillset = ({id}) => {
  return(
    <div id={id} className="divBg">
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
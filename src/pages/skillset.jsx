import { DiGit, DiPython, DiReact, DiMysql } from 'react-icons/di'
import { SiSqlite, SiGnubash, SiScrapy, SiPrisma, SiExpress, SiVitest, SiTypescript } from 'react-icons/si'
import { IoLogoElectron, IoLogoVercel } from 'react-icons/io5'
import { FaFigma, FaNodeJs, FaDocker } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import SkillIcon from './components/skillicon'


const Skillset = ({ id }) => {
  return (
    <div id={id} className="divBg">
      <h2>My Skillset</h2>
      <br />
      <div className="flex flex-wrap gap-2 p-4 rounded-2xl w-auto h-auto justify-around md:justify-start">
        <SkillIcon icon={<FaFigma className="logos" />} text="Figma" />
        <SkillIcon icon={<DiReact className="logos" />} text="React" />
        <SkillIcon icon={<RiTailwindCssFill className="logos" />} text="Tailwind" />
        <SkillIcon icon={<IoLogoElectron className="logos" />} text="Electron" />
        <SkillIcon icon={<DiPython className="logos" />} text="Python" />
        <SkillIcon icon={<SiScrapy className="logos" />} text="Scrapy" />
        <SkillIcon icon={<SiSqlite className="logos" />} text="SQLite" />
        <SkillIcon icon={<DiGit className="logos" />} text="Git" />
        <SkillIcon icon={<IoLogoVercel className="logos" />} text="Vercel" />
        <SkillIcon icon={<SiGnubash className="logos" />} text="Bash" />

        <SkillIcon icon={<DiMysql className="logos" />} text="MySQL" />
        <SkillIcon icon={<SiPrisma className="logos" />} text="Prisma" />
        <SkillIcon icon={<FaNodeJs className="logos" />} text="Node.js" />
        <SkillIcon icon={<SiExpress className="logos" />} text="Express" />
        <SkillIcon icon={<SiVitest className="logos" />} text="Vitest" />
        <SkillIcon icon={<SiTypescript className="logos" />} text="Typescript" />
        <SkillIcon icon={<FaDocker className="logos" />} text="Docker" />


      </div>
    </div>
  )
}
export default Skillset;
import {DiGithubBadge} from 'react-icons/di'
import {FaLinkedin} from 'react-icons/fa'

const ButtonWithIcon = ({text,url, icon}) => {
  const click= () => {
  window.open(url, "_blank");
  };
  return(
    <button onClick={click} className=" self-start px-4 py-2 buttoncolor rounded-xl flex items-center gap-2 hover:bg-[#FFC4C4]">
      {icon}{text}
    </button>
  )
}

const IconButton = ({url, icon}) =>{
  const click= () => {
  window.open(url, "_blank");
  };
  return(
    <button onClick={click} className="p-2 flex items-center">
      {icon}
    </button>
  )
}

const SkillIcon = ({icon, text}) => {
  return(
    <div className="flexcol lightborder items-center p-4 rounded-2xl w-25 h-25 gap-2">
      {icon}
      <div className="text-[#EE6983]">{text}</div>
    </div>
  );
}


const PortraitImage = ({src, alt}) => {
  return(
    <div className="flex w-auto h-auto items-center">
      <img src={src} alt={alt} className="w-auto max-h-50 rounded-3xl"/>
    </div>
  )}


const NavbarLink = ({link, linkname}) => {
  return(
<ul>
    <a className="text-[#FCF5EE] text-lg" href={link}>{linkname}</a>
</ul>
  )
}

const Navbar = ({}) => {
  return(
    <nav className="bg-[#EE6983] w-full sticky top-0 z-50 p-4">
        <div className="flex flex-row gap-8 justify-start  items-center">
            {/* navbar links */}
            <NavbarLink link="#profile" linkname="Profile" />
            <NavbarLink link="#skillset" linkname="Skillset" />
            <NavbarLink link="#portfolio" linkname="Portfolio" />
            <NavbarLink link="#contact" linkname="Contact Me" />
        </div>
    </nav>
  );
}

const PortfolioSample = ({title, skills, description, githubUrl}) => {
  return(
    <div className="flex p-4 px-6 rounded-2xl lightborder flex-col w-full max-w-100 h-auto gap-2">
      <h2>{title}</h2>
      <p><i>{skills}</i></p>
      <p>{description}</p>
      <ButtonWithIcon text="View on GitHub" url={githubUrl} icon={ <DiGithubBadge size="1.5em" /> }
      className="w-fit" />
      </div>)
}

const linkedin = "https://www.linkedin.com/in/amabella-aguiluz";
const github = "https://github.com/amabella-aguiluz";


const ContactLinks = ({}) => {
  return(
    <div className="flexcol">
    <div className="flex flex-row">
      <IconButton icon={ <DiGithubBadge className="logos" /> } url={github} />
      <IconButton icon={ <FaLinkedin className="logos" /> } url={linkedin} />
      </div>
    </div>
  )
}

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

export default {IconButton, ButtonWithIcon, NavbarLink, Navbar, PortfolioSample, ContactLinks, Experience, SkillIcon, PortraitImage};
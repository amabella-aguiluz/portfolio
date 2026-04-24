import PortraitImage from "./components/portraitimage";
import portrait_pic from '../assets/pfp.jpg'
import Experience from "./experience.jsx";

const Profile = ({id}) =>{
  return(
    <div id={id} className="divBg flex flex-row flex-wrap p-4 rounded-2xl w-full h-auto gap-5 justify-center items-center">
      <div className='flex-shrink-0'>
        <PortraitImage className="items-center" src={portrait_pic} alt="Profile Picture" />
      </div>
      <div>
        <h1> Amabella Aguiluz</h1>
        <h2> Full-stack Web Developer </h2>
        <p>I'm a full-stack developer who enjoys building interactive web applications with a focus on design.</p>
        <p>I enjoy working on projects where I can combine logic and creativity.</p>
        <p>I am always exploring new tools, frameworks, continuously improving my skills as a developer.</p>
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
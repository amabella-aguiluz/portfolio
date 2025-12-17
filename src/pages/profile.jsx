import PortraitImage from "./components/components.jsx";
import portrait_pic from '../assets/pfp.jpg';
import Experience from "./components/components.jsx";

const Profile = ({id}) =>{
  return(
    <div id={id} className="divBg flex flex-row flex-wrap p-4 rounded-2xl w-full h-auto gap-5">
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
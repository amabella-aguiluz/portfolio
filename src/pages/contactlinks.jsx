import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import IconButton from "./components/iconbutton.jsx";

const linkedin = "https://www.linkedin.com/in/amabella-aguiluz";
const github = "https://www.linkedin.com/in/amabella-aguiluz-7500a5336/";


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
export default ContactLinks;
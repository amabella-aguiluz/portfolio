import React from "react";
import { DiGithubBadge } from "react-icons/di";
import ButtonWithIcon from "../components/buttonwithicon.jsx";  


const PortfolioSample = ({title, skills, description, githubUrl}) => {
  return(
    <div className="flex p-4 px-6 rounded-2xl lightborder flex-col w-full max-w-xs h-auto gap-2">
      <h2>{title}</h2>
      <p><i>{skills}</i></p>
      <p>{description}</p>
      <ButtonWithIcon text="View on GitHub" url={githubUrl} icon={ <DiGithubBadge size="1.5em"/> }
      className="w-fit" />
      </div>)
}
export default PortfolioSample;


const PortraitImage = ({src, alt}) => {
  return(
    <div className="flex w-auto h-auto items-center">
      <img src={src} alt={alt} className="w-auto max-h-[200px] rounded-3xl"/>
    </div>
  )}
  export default PortraitImage;


    // buton components
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
export default IconButton;


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
    export default ButtonWithIcon;

const SkillIcon = ({icon, text}) => {
  return(
    <div className="flexcol lightborder items-center p-4 rounded-2xl w-[100px] h-[100px] gap-2">
      {icon}
      <div className="text-[#EE6983]">{text}</div>
    </div>
  );
}
export default SkillIcon;

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
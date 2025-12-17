const SkillIcon = ({icon, text}) => {
  return(
    <div className="flexcol lightborder items-center p-4 rounded-2xl w-25 h-25 gap-2">
      {icon}
      <div className="text-[#EE6983]">{text}</div>
    </div>
  );
}
export default SkillIcon;
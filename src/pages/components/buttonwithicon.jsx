
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
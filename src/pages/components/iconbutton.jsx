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
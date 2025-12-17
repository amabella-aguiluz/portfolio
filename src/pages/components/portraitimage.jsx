
const PortraitImage = ({src, alt}) => {
  return(
    <div className="flex w-auto h-auto items-center">
      <img src={src} alt={alt} className="w-auto max-h-50 rounded-3xl"/>
    </div>
  )}
  export default PortraitImage;

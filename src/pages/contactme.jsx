import ContactUs from "./contact.jsx";
import ContactLinks from "./contactlinks.jsx";

const ContactMe = ({}) => {
  return(
  <div className="flexcol w-full h-auto gap-4">
    <div className="flex flex-row justify-between items-center gap-5"><h2>Contact Me</h2> <ContactLinks className="self-end"/></div>
<div><ContactUs /></div>
</div>
  )
}
export default ContactMe;
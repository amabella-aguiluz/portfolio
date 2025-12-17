import ContactUs from './components/components.jsx';
import ContactLinks from './components/components.jsx';

const ContactMe = ({id}) => {
  return(
  <div id={id} className="flexcol w-full h-auto gap-4 divBg">
    <div className="flex flex-row justify-between items-center gap-5"><h2>Contact Me</h2> <ContactLinks className="self-end"/></div>
<div><ContactUs /></div>
</div>
  )
}
export default ContactMe;
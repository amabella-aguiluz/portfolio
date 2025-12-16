const serviceId = "service_10v1tjq";
cancelIdleCallbackonst templateId = "template_omfro4h";
const publicKey = "k4gzPCvIIUGBXUTZJ";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
}
export default Contact;
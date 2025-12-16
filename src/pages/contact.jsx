import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Contact from '../hooks/contact.js';


export const ContactUs = () => {

  return (
  <div className="flexcol flex-wrap w-auto h-auto w-full mx-auto">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder="John Doe" /><br />
      <label>Email</label>
      <input type="email" name="user_email" placeholder="you@example.com" />  <br />
      <label>Message</label>
      <textarea className="lightborder rounded-2xl" name="message" placeholder="I am reaching out to ask about ..."/> <br />
      <input className="buttoncolor p-2 w-full" type="submit" value="Send" />
    </form>
  </div>
  );
};

export default ContactUs;
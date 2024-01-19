import subtract from "../images/Send_fill.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form)
    emailjs
      .sendForm(
        "service_56rk60l",
        "template_39hls93",
        form.current,
        "2mwjQgkeIvnpfHvrq"
      )
      .then(
        (result) => {
          console.log(result.text);
          location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="contact-strip-container">
        <h1 className="contact-paragraph" id="contact">Contact</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-main-container">
          <div className="contact-main-rectangle">
            <div className="contact-image-container">
              <img className="contact-image" alt="#" src={subtract}></img>
            </div>
            <div className="contact-info-container">
              <h1 className="contact-name-h1">User name</h1>
              <input
                type="text"
                placeholder="Enter your Name"
                name="user_name"
              ></input>
              <h1 className="contact-email-h1">Email</h1>
              <input
                type="email"
                placeholder="Enter your email"
                name="user_email"
              ></input>
              <h1 className="contact-message-h1">Message</h1>
              <input
                type="text"
                placeholder="Enter your message"
                name="message"
              ></input>
              <button type="submit" value="Send" className="contact-submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

import man from "../images/Low code development-pana 1.svg";
import telegram from "../images/Mask group.svg";
import github from "../images/github1.svg";
import ind from "../images/in.svg";
import line1 from '../images/Line 1.svg'

const Info = () => {
  return (
    <div>
      <div className="info-container">
        <h1 className="info-main-text">Hello there</h1>
        <h1 className="info-name-text">I'm Dmytro Voliasnkyi</h1>
        <div className="info-gradient-container">
          <h1>Frontend Developer</h1>
          <h1>& ui | ux Designer</h1>
        </div>
      </div>
      <img src={man} alt="#" className="info-man-image"></img>    
      <div className="info-radial-container"><div className="info-radial"></div></div>
      <div className="info-buttons-main">
        <button className="info-buttons-main-1">
          <img src={telegram} alt="#" className="info-telegram-image" />
        </button>
        <button className="info-buttons-main-2">
          <img src={github} alt="#" className="info-github-image" />
        </button>
        <button className="info-buttons-main-3">
          <img src={ind} alt="#" className="info-in-image" />
        </button>
        <button className="info-cv-button">Download CV</button>
      </div>
      <div className="info-about-container">
        <h1 className="info-about-header">About</h1>
        <p className="info-about-paragraph">
          I like building new things, creating impressive designs and develop
          them into code. I currently starting my developer carrier and i just
          love to learn something new all the time.
        </p>
        <img src={line1} alt="#" className="info-about-line1" />
      </div>
    </div>
  );
};

export default Info;

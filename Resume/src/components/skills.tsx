import css from "../images/css.svg";
import git from "../images/git.svg";
import html from "../images/htnl.svg";
import jqery from "../images/jqery.svg";
import js from "../images/js.svg";
import react from "../images/react.svg";
import redux from "../images/redux.svg";
import scss from "../images/scss.svg";
import ts from "../images/ts.svg";
import bt from "../images/bootstrap.svg";
import figma from "../images/figma.svg";
import ps from "../images/ps.svg";
import { Link } from "react-router-dom";


const Skills = () => {
  return (
    <div className="skills-main-container">
      <div className="skills-radial"></div>
      <div className="skills-strip-container">
        <h1 className="skills-strip-container-text" id="skills">Skills</h1>
      </div>
      <div className="skills-buttons-container">
        <div className="skills-main-buttons-firts-column">
          <button className="skills-main-button-1">
            <Link to="https://en.wikipedia.org/wiki/JavaScript" target="blank">
              <img src={js} className="img-1" alt="JavaScript"></img>
            </Link>
          </button>
          <button className="skills-main-button-2">
            <Link to="https://en.wikipedia.org/wiki/TypeScript" target="blank">
              <img src={ts} className="img-2"></img>
            </Link>
          </button>
          <button className="skills-main-button-3">
            <Link to="https://uk.wikipedia.org/wiki/CSS" target="blank">
              <img src={css} className="img-3"></img>
            </Link>
          </button>
          <button className="skills-main-button-4">
            <Link to="https://uk.wikipedia.org/wiki/HTML" target="blank">
              <img src={html} className="img-4"></img>
            </Link>
          </button>
          <button className="skills-main-button-5">
            <Link
              to="https://en.wikipedia.org/wiki/React_(software)"
              target="blank"
            >
              <img src={react} className="img-5"></img>
            </Link>
          </button>
          <button className="skills-main-button-6">
            <Link to="https://en.wikipedia.org/wiki/GitHub" target="blank">
              <img src={git} className="img-6"></img>
            </Link>
          </button>

          <button className="skills-main-button-7">
            <Link
              to="https://en.wikipedia.org/wiki/Sass_(style_sheet_language)"
              target="blank"
            >
              <img src={scss} className="img-7"></img>
            </Link>
          </button>
          <button className="skills-main-button-8">
            <Link
              to="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)"
              target="blank"
            >
              <img src={redux} className="img-8"></img>
            </Link>
          </button>
          <button className="skills-main-button-9">
            <Link to="https://en.wikipedia.org/wiki/JQuery" target="blank">
              <img src={jqery} className="img-9"></img>
            </Link>
          </button>
          <button className="skills-main-button-10">
            <Link
              to="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
              target="blank"
            >
              <img src={bt} className="img-10"></img>
            </Link>
          </button>
          <button className="skills-main-button-10">
            <Link to="https://en.wikipedia.org/wiki/Figma" target="blank">
              <img src={figma} className="img-11"></img>
            </Link>
          </button>
          <button className="skills-main-button-10">
            <Link
              to="https://en.wikipedia.org/wiki/Adobe_Photoshop"
              target="blank"
            >
              <img src={ps} className="img-12"></img>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

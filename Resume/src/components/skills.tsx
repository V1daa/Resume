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

const Skills = () => {
  return (
    <div className="skills-main-container">
      <div className="skills-radial"></div>
      <div className="skills-strip-container">
        <h1 className="skills-strip-container-text">Skills</h1>
      </div>
      <div className="skills-buttons-container">
        <div className="skills-main-buttons-firts-column">
          <button className="skills-main-button-1">
            <img src={js} className="img-1"></img>
          </button>
          <button className="skills-main-button-2">
            <img src={ts} className="img-2"></img>
          </button>
          <button className="skills-main-button-3">
            <img src={css} className="img-3"></img>
          </button>
          <button className="skills-main-button-4">
            <img src={html} className="img-4"></img>
          </button>
          <button className="skills-main-button-5">
            <img src={react} className="img-5"></img>
          </button>
          <button className="skills-main-button-6">
            <img src={git} className="img-6"></img>
          </button>

          <button className="skills-main-button-7">
            <img src={scss} className="img-7"></img>
          </button>
          <button className="skills-main-button-8">
            <img src={redux} className="img-8"></img>
          </button>
          <button className="skills-main-button-9">
            <img src={jqery} className="img-9"></img>
          </button>
          <button className="skills-main-button-10">
            <img src={bt} className="img-10"></img>
          </button>
          <button className="skills-main-button-10">
            <img src={figma} className="img-11"></img>
          </button>
          <button className="skills-main-button-10">
            <img src={ps} className="img-12"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

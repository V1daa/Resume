import temporary from "../images/image 15.svg";

const Projects = () => {
  return (
    <div className="projects-main-container">
      <h1 className="projects-title-main">Projects</h1>
      <div className="projects-container">
        <div className="first-project-container">
          <img
            src={temporary}
            alt="#"
            className="projects-temporary-image"
          ></img>
          <div>
            <h1 className="first-project-title">Title</h1>
          </div>
          <div className="first-project-paragraph-container">
            <p className="first-project-paragraph">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
        <div className="first-project-container">
          <img
            src={temporary}
            alt="#"
            className="projects-temporary-image"
          ></img>
          <div>
            <h1 className="first-project-title">Title</h1>
          </div>
          <div className="first-project-paragraph-container">
            <p className="first-project-paragraph">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
        <div className="first-project-container">
          <img
            src={temporary}
            alt="#"
            className="projects-temporary-image"
          ></img>
          <div>
            <h1 className="first-project-title">Title</h1>
          </div>
          <div className="first-project-paragraph-container">
            <p className="first-project-paragraph">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

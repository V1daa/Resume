import Info from "../components/info";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
      <>
        <div className="portfolio-main-container">
          <h2 className="portfolio-text-main" id="info">Portfolio</h2>
          <div className="header-buttons">
              <button className="header-buttons-2">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
                Skills
            </Link>
                </button>
              <button className="header-buttons-3">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={100}
            >
                Contact
            </Link>
                </button>
              <button className="header-buttons-1">
            <Link to="info" spy={true} smooth={true} offset={-50} duration={100}>
                Home
            </Link>
                </button>
          </div>
        </div>
      </>
      <Info />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

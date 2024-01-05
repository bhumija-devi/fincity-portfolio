import { NavLink } from "react-router-dom";
import AddProject from "../AddProject";
import Projects from "../Projects";
import Header from "../Header";
import "./index.css";

function Home() {
  return (
    <>
      <div className="Home-con">
        <div className="self-details-con">
          <p className="designation">Full Stack Developer</p>
          <h1 className="self-intro">Hello, my name is Devi Mallela</h1>
          <p className="self-discription">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="btn-con">
            <NavLink  to="/projects">
              <button className="projects-btn" type="button">
                Projects
              </button>
            </NavLink>
            <NavLink  to="https://www.linkedin.com/in/devimallela/">
              <button className="linkedin-btn" type="button">
                LinkedIn
              </button>
            </NavLink>
          </div>
        </div>
        <div className="self-image-con">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 720 629"
            fill="none"
          >
            <rect width="100%" height="100%" fill="none" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
              fill="#FDC435"
            />

            <Header />
            <image
              href="https://i.ibb.co/G3sKDxj/pexels-artem-beliaikin-1832323-removebg-preview.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
      <AddProject />
      <Projects/>
    </>
  );
}

export default Home;

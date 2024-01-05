import React from "react";
import ProjectCard from "../ProjectCard";
import { useProjectContext } from "../ProjectContext";
import './index.css'

function Projects() {
  const { projects } = useProjectContext();
  

  return (
    <div className="projects-con">
      <h1 className="project-main-head">Projects</h1>
      <ul className="ul-con">
      <li className='project-card-con'>
       <div className="card-dis-con">
       <h3 className='project-name-on-card'>BookHub</h3>
        <p className='project-dis-on-card'>Designed a comprehensive book management platform, inspired by Goodreads. Implemented advanced features such as login, home, bookshelves,
search, and rating with React Router, React Rating Stars, React Select,
and fetch APIs.
</p>
        <a className="view-project-btn" rel="noopener noreferrer" href={'https://bookhubdevi.ccbp.tech/login'} target="_blank">View Project</a>
       </div>
       <img className='project-image' src="https://i.ibb.co/rwftdkR/Rectangle-1467.png" alt='BookHub'/>
      </li>
      <li className='project-card-con'>
      <img className='project-image' src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/cb1a5027-184f-4c8a-a96b-154987ff47f31692955360626-HERENOW-Women-Kurtis-1661692955360126-1.jpg" alt='BookHub'/>
       <div className="card-dis-con">
       <h3 className='project-name-on-card'>Shooping App</h3>
        <p className='project-dis-on-card'>It is a small Shoping App created using HTML, CSS, Java Script</p>
        <a className="view-project-btn" rel="noopener noreferrer" href={'https://marmeto-assignment-ecru.vercel.app/'} target="_blank">View Project</a>
       </div>
      </li>
      <li className='project-card-con'>
       <div className="card-dis-con">
       <h3 className='project-name-on-card'>Planets</h3>
        <p className='project-dis-on-card'>By Using React Slick Created a Carousel to Showcase all the details of our Planets.</p>
        <a className="view-project-btn" rel="noopener noreferrer" href={'https://reactslickdevi.ccbp.tech/'} target="_blank">View Project</a>
       </div>
       <img className='project-image'  src="https://assets.ccbp.in/frontend/react-js/planets-app/jupiter-img.png" alt='PlanetsApp'/>
      </li>
        {projects.map((project, index) => (<ProjectCard key={index} id={index} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;

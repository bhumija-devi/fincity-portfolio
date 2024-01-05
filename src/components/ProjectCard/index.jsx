import "./index.css";

function ProjectCard({ project,id }) {
  return (
    <li  className={id % 2 === 0 ? 'even project-card-con' : 'odd project-card-con'}>
      <div className="card-dis-con">
        <h3 className="project-name-on-card">{project.projectName}</h3>
        <p className="project-dis-on-card">{project.projectDescription}</p>
        <a className="view-project-btn" href={project.projectLink} rel="noopener noreferrer" target="_blank">
          View Project
        </a>
      </div>

      <img
        className="project-image"
        src=""
        alt={project.projectName}
      />
    </li>
  );
}

export default ProjectCard;

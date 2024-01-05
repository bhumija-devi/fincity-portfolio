import { useState } from "react";
import { useProjectContext } from "../ProjectContext";
import "./index.css";

function AddProject() {
  const { addProject } = useProjectContext();
  const [project, setProject] = useState({
    projectName: "portfolio",
    projectLink: "portfolio.vercel.com",
    projectDescription: "This is my portfolio",
  });
 

  const handleInputChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    addProject(project);
    // Reset the form or perform other actions after adding the project
    setProject({
      projectName: "",
      projectLink: "",
      projectDescription: "",
    });
  };

  return (
    <div className="add-project-con">
      <h2 className="add-project-head">Add Project</h2>
      <form>
        <div className="label-input-con">
          <label className="label-name" htmlFor="projectName">
            {" "}
            Project Name
          </label>
          <input
            name="projectName"
            value={project.projectName}
            className="input-feild"
            type="text"
            id="projectName"
            placeholder="Portfolio"
            onChange={handleInputChange}
          />
        </div>

        <div className="label-input-con">
          <label className="label-name" htmlFor="projectLink">
            {" "}
            Project Link
          </label>
          <input
            name="projectLink"
            value={project.projectLink}
            className="input-feild"
            type="text"
            id="projectLink"
            onChange={handleInputChange}
          />
        </div>

        <div className="label-input-con">
          <label className="label-name" htmlFor="projectdis">
            {" "}
            Project Discription
          </label>
          <textarea
            name="projectDescription"
            value={project.projectDescription}
            className="textareabox"
            rows={5}
            columns={50}
            id="projectdis"
            placeholder="Tell Something About Your Project.."
            onChange={handleInputChange}
          />
        </div>

        <button type="button" className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProject;

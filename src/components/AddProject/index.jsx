import { useState } from "react";
import { useProjectContext } from "../ProjectContext";
import "./index.css";

function AddProject() {
  const { addProject } = useProjectContext();
  const [error,setError] = useState(false)
  const [project, setProject] = useState({
    projectName: "",
    projectLink: "",
    projectDescription: "",
  });
 

  const handleInputChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
if (project.projectName==='' || project.projectLink==='' || project.projectDescription===''){
setError(true)
}else{
  setError(false)
  addProject(project);
  setProject({
    projectName: "",
    projectLink: "",
    projectDescription: "",
  });
}
       
   
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
            placeholder="Devi Portfolio"
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
            placeholder="https://fincity-portfolio-dun.vercel.app/"
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

        {error &&<p className="error"> Please Provide All Details </p>}

        <button type="button" className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProject;

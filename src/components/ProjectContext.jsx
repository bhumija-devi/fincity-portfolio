
import { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export function useProjectContext() {
  return useContext(ProjectContext);
}

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);

  const addProject = (projectData) => {
    setProjects([...projects, projectData]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
}


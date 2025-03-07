import { useState } from "react";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectsSidebar from "./ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const onButtonClick = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onButtonClick={onButtonClick} />

      {projectsState.selectedProjectId === null ? (
        <NewProject />
      ) : (
        <NoProjectSelected onButtonClick={onButtonClick} />
      )}
    </main>
  );
}

export default App;

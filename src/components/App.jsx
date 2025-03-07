import { useEffect, useState } from "react";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectsSidebar from "./ProjectsSidebar";
import SelectedProject from "./SelectedProject";
import { Context } from "./Context";

function App() {
  const loadDataFromLocalStorage = () => {
    const savedData = localStorage.getItem("projectsState");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return {
      selectedProjectId: undefined,
      projects: [],
      tasks: [],
    };
  };

  const [projectsState, setProjectsState] = useState(loadDataFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("projectsState", JSON.stringify(projectsState));
  }, [projectsState]);

  const onButtonClick = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const onAddProject = (title, description, dueTo) => {
    const newProject = { id: Math.random(), title, description, dueTo };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const onCancel = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  };

  const onDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const newTask = {
        id: Math.random(),
        text,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };
  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const currentTasks = projectsState.tasks.filter(
    (task) => task.projectId === selectedProject?.id
  );

  let content = (
    <Context.Provider
      value={{
        handleAddTask,
        handleDeleteTask,
        tasks: currentTasks,
      }}
    >
      <SelectedProject project={selectedProject} onDelete={onDeleteProject} />
    </Context.Provider>
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject handleAddProject={onAddProject} handleCancel={onCancel} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onButtonClick={onButtonClick} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onButtonClick={onButtonClick}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={selectedProject}
      />
      {content}
    </main>
  );
}

export default App;

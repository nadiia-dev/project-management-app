import clsx from "clsx";
import Button from "./Button";

const ProjectsSidebar = ({
  onButtonClick,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Add your projects
      </h2>
      <Button onClick={onButtonClick}>+ Add project</Button>
      <ul className="mt-8">
        {projects &&
          projects.map((project) => {
            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectProject(project.id)}
                  className={clsx(
                    "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800",
                    {
                      "bg-stone-800 text-stone-200":
                        project.id === selectedProjectId,
                      "text-stone-400": project.id !== selectedProjectId,
                    }
                  )}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;

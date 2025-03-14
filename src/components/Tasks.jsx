import { use } from "react";
import { Context } from "./Context";
import NewTask from "./NewTask";

const Tasks = () => {
  const context = use(Context);
  if (!context) {
    return;
  }
  const { handleDeleteTask, tasks } = context;

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <p>{task.text}</p>
              <button
                type="button"
                className="text-stone-700 hover:text-red-500"
                onClick={() => handleDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;

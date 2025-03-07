import { use, useState } from "react";
import { Context } from "./Context";

const NewTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const context = use(Context);
  if (!context) {
    return;
  }
  const { handleAddTask } = context;

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleTaskAdd = () => {
    if (enteredTask.trim() === "") return;
    setEnteredTask("");
    handleAddTask(enteredTask);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleTaskAdd}
        className="text-stone-700 hover:text-stone-950"
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;

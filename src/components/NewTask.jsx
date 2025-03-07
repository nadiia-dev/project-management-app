import { useState } from "react";
import { Context } from "./Context";

const NewTask = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  return (
    <Context.Consumer>
      {({ handleAddTask }) => (
        <div className="flex items-center gap-4">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={enteredTask}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
          <button
            onClick={() => {
              if (enteredTask.trim() === "") return;
              setEnteredTask("");
              handleAddTask(enteredTask);
            }}
            className="text-stone-700 hover:text-stone-950"
          >
            Add task
          </button>
        </div>
      )}
    </Context.Consumer>
  );
};

export default NewTask;

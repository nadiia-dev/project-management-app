import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ handleAddProject }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              handleAddProject(
                titleRef.current.value,
                descRef.current.value,
                dateRef.current.value
              )
            }
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descRef} label="Description" textarea />
        <Input type="date" ref={dateRef} label="Due To" />
      </div>
    </div>
  );
};

export default NewProject;

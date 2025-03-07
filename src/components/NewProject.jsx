import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ handleAddProject, handleCancel }) => {
  const modalRef = useRef();
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);

  const handleSave = () => {
    if (
      titleRef.current.value.trim() === "" ||
      descRef.current.value.trim() === "" ||
      dateRef.current.value.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    handleAddProject(
      titleRef.current.value,
      descRef.current.value,
      dateRef.current.value
    );
  };

  return (
    <>
      <Modal ref={modalRef} buttonContent="Okay">
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you fogot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button
              onClick={handleCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSave()}
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
    </>
  );
};

export default NewProject;

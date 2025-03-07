import noProjectImg from "../assets/no-project-img.png";
import Button from "./Button";

const NoProjectSelected = ({ onButtonClick }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-15 object-contain mx-auto"
      />
      <h2 className="my-4 text-xl font-bold text-stone-500">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onButtonClick}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;

import React from "react";

const ProjectsSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Add your projects
      </h2>
      <button className="px-4 py-2 text-xs md:tesxt-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stote-100">
        + Add project
      </button>
      <ul></ul>
    </aside>
  );
};

export default ProjectsSidebar;

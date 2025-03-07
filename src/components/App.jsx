import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import ProjectsSidebar from "./ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;

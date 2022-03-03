import { lazy, useState } from "react";
import useProjects from "../../hooks/useProjects";
import { SortOptions } from "../../models/dataLists";

const ProjectFilters = lazy(
  () => import("../../components/projects/ProjectFilters")
);
const ProjectsList = lazy(
  () => import("../../components/projects/ProjectsList")
);

export default function ProjectsPage() {
  const [selectedSort, setSelectedSort] = useState(SortOptions[0]);
  const { projects } = useProjects();

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 py-20 flex">
      <div className="flex-auto container mx-auto h-auto flex flex-col">
        <h1 className="flex-initial font-Oswald text-5xl pb-10 uppercase">
          projects
        </h1>
        <ProjectFilters
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />

        <div className="relative container mx-auto flex-auto p-10 ">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </div>
  );
}

import { lazy, useState } from "react";
import { Link } from "react-router-dom";
import AppPagination from "../../components/common/AppPagination";
import LoadingComponent from "../../components/common/LoadingComponent";
import ProjectForm from "../../components/projects/projectDetails/ProjectForm";
import useProjects from "../../hooks/useProjects";
import { SortOptions } from "../../models/dataLists";
import { setPageNumber } from "../../slices/projectSlice";
import { useAppDispatch } from "../../store/configureStore";

const ProjectFilters = lazy(
  () => import("../../components/projects/ProjectFilters")
);
const ProjectsList = lazy(
  () => import("../../components/projects/ProjectsList")
);

export default function ProjectsPage() {
  const dispatch = useAppDispatch();
  const [selectedSort, setSelectedSort] = useState(SortOptions[0]);
  const { projects, projectsLoaded, metaData } = useProjects();
  const [isEdit, setIsEdit] = useState(false);

  // if (!projectsLoaded)
  //   return (
  //     <div className="py-20 w-screen h-screen bg-slate-300 flex items-center justify-center">
  //       <LoadingComponent message="Loading Projects..." />
  //     </div>
  //   );

  if (isEdit) return <ProjectForm handleClose={() => setIsEdit(false)} />;

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 py-20 flex">
      <div className="flex-auto container mx-auto h-auto flex flex-col">
        <div className=" w-full flex flex-row justify-between items-center">
          <h1 className="flex-initial font-Oswald text-7xl pb-10 uppercase">
            projects
          </h1>
          <button
            type="button"
            className=" font-Oswald uppercase font-thin bg-slate-600 text-white py-2 px-5 rounded-md"
            onClick={() => setIsEdit(true)}
          >
            Add Project
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <ProjectFilters />
          {metaData && (
            <div className="py-5 border-black w-full">
              <AppPagination
                metaData={metaData}
                onPageChange={(page: number) =>
                  dispatch(setPageNumber({ pageNumber: page + 1 }))
                }
              />
            </div>
          )}
        </div>

        <div className="relative container mx-auto flex-auto p-10 ">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </div>
  );
}

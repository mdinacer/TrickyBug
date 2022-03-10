import { lazy, useState } from "react";
import AppPagination from "../../components/common/AppPagination";
import LoadingComponentSmall from "../../components/common/LoadingComponentSmall";
import ProjectForm from "../../components/projects/projectDetails/ProjectForm";
import useProjects from "../../hooks/useProjects";
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
    <div className="h-full min-h-screen w-screen bg-slate-100 pt-20 flex">
      <div className="flex-auto lg:container mx-auto h-auto flex flex-col">
        <div className=" w-full flex flex-col lg:flex-row justify-between lg:items-center py-5 px-5 lg:px-0">
          <h1 className="flex-initial font-Oswald text-5xl lg:text-7xl pb-5 lg:pb-10 uppercase">
            projects
          </h1>
          <button
            type="button"
            className="px-2 py-1 bg-slate-600 text-white"
            onClick={() => setIsEdit(true)}
          >
            <p className="font-Oswald text-lg font-thin uppercase">
              Add Project
            </p>
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <ProjectFilters />
        </div>

        <div className="relative container mx-auto flex-auto lg:p-10 py-10 ">
          {projectsLoaded ? (
            <ProjectsList projects={projects} />
          ) : (
            <LoadingComponentSmall />
          )}
        </div>
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
    </div>
  );
}

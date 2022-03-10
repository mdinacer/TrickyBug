import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import LoadingComponent from "../../components/common/LoadingComponent";
import ProjectForm from "../../components/projects/projectDetails/ProjectForm";
import { ProjectDetails } from "../../models/project";
import { useAppSelector } from "../../store/configureStore";

const ProjectHeader = lazy(
  () => import("../../components/projects/projectDetails/ProjectHeader")
);
const ProjectInfo = lazy(
  () => import("../../components/projects/projectDetails/ProjectInfo")
);

const ProjectPhases = lazy(
  () => import("../../components/projects/projectDetails/ProjectPhases")
);

const ProjectMembers = lazy(
  () => import("../../components/projects/projectDetails/ProjectMembers")
);

const ProjectTickets = lazy(
  () => import("../../components/projects/projectDetails/ProjectTickets")
);

const ProjectActions = lazy(
  () => import("../../components/projects/projectDetails/ProjectActions")
);

export default function ProjectDetailsPage() {
  const { user } = useAppSelector((state) => state.account);
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetails | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isPermitted, setIsPermitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (user && project) {
      setIsPermitted(user.roles.includes("Admin") || project.isLeader);
    }
  }, [project, user]);

  useEffect(() => {
    setLoading(true);
    if (slug) {
      agent.Projects.details(slug)
        .then((response) => {
          setProject(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      setProject(undefined);
    };
  }, [slug]);

  if (loading)
    return <LoadingComponent message="Loading Project, please wait..." />;
  if (!project)
    return (
      <div className="py-20 w-screen h-screen bg-slate-300 flex items-center justify-center">
        <p className=" font-Montserrat text-xl">Cant find Project</p>
      </div>
    );

  if (isEdit)
    return (
      <ProjectForm project={project} handleClose={() => setIsEdit(false)} />
    );

  return (
    <div className=" w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20">
      <div className="container mx-auto flex flex-col gap-y-5 py-10">
        <div className="px-5 flex flex-row justify-end items-start gap-x-5 py-3">
          <button
            className="flex flex-row gap-x-2 items-center"
            onClick={() => setIsEdit(true)}
          >
            <PencilAltIcon className="h-6 w-6" />
            <p className=" font-Oswald text-lg font-thin uppercase">Edit</p>
          </button>

          <button
            className="flex flex-row gap-x-2 items-center"
            onClick={() => {}}
          >
            <TrashIcon className="h-6 w-6 text-red-600" />
            <p className=" font-Oswald text-lg font-thin uppercase">Delete</p>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className=" w-full h-full p-10 bg-white text-black drop-shadow-md">
            <ProjectHeader project={project} />
          </div>

          <div className=" w-full h-auto p-10 bg-white text-black drop-shadow-md">
            <ProjectInfo project={project} />
          </div>
          <div className=" w-full h-auto p-10 bg-white text-black drop-shadow-md">
            <ProjectMembers projectId={project.id} />
          </div>
        </div>

        <div className=" w-full py-10 lg:p-10 bg-white text-black drop-shadow-md h-auto">
          <ProjectPhases
            projectId={project.id}
            projectSlug={project.slug}
            isPermitted={isPermitted}
          />
        </div>
        <div className=" w-full py-10 lg:p-10 bg-white text-black drop-shadow-md h-auto">
          <ProjectActions
            projectId={project.id}
            projectSlug={project.slug}
            isPermitted={isPermitted}
          />
        </div>
        <div className=" w-full py-10 lg:p-10 bg-white text-black drop-shadow-md h-auto">
          <ProjectTickets
            projectId={project.id}
            projectSlug={project.slug}
            isPermitted={isPermitted}
          />
        </div>
      </div>
    </div>
    // <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-16 lg:pt-20  flex">
    //   <div className="lg:container lg:px-5 mx-auto flex flex-col rounded-md overflow-hidden flex-auto">
    //     <div className="flex-auto w-full flex flex-col  gap-y-5 lg:gap-y-0 lg:flex-row h-auto">
    //       <div className="relative py-10 px-5 lg:px-0 lg:py-5 w-full lg:w-1/3 bg-slate-700 lg:rounded-md overflow-hidden text-white flex flex-col">
    //         {isPermitted && (
    //           <div className="absolute top-0 right-0 w-full flex justify-end p-1 ">
    //             <button
    //               title="edit members"
    //               className=" ml-auto font-Montserrat text-sm uppercase h-12 w-12 m-3  lg:py-1 lg:px-2 text-white rounded-md"
    //               type="button"
    //               onClick={() => setIsEdit((prev) => !prev)}
    //             >
    //               <PencilAltIcon className="h-8 w-8" />
    //             </button>
    //           </div>
    //         )}
    //         <div className="lg:h-1/3">
    //           <ProjectHeader project={project} />
    //         </div>
    //         <div className="lg:h-1/3">
    //           <ProjectInfo project={project} />
    //         </div>
    //         <div className="lg:h-1/3">
    //           <ProjectMembers projectId={project.id} />
    //         </div>
    //       </div>
    //       <div className=" relative lg:w-2/3 lg:px-5">
    //         <div className="lg:h-1/3 ">
    //           <ProjectPhases
    //             projectId={project.id}
    //             projectSlug={project.slug}
    //             isPermitted={isPermitted}
    //           />
    //         </div>

    //         <div className="lg:h-1/3  py-5">
    //           <ProjectTickets
    //             projectId={project.id}
    //             projectSlug={project.slug}
    //             isPermitted={isPermitted}
    //           />
    //         </div>

    //         <div className="lg:h-1/3 ">
    //           <ProjectActions
    //             projectId={project.id}
    //             projectSlug={project.slug}
    //             isPermitted={isPermitted}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

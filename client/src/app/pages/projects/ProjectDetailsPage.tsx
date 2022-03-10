import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const { user, isAdmin } = useAppSelector((state) => state.account);
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetails | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isPermitted, setIsPermitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

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

  const handleDeleteProject = (id: string) => {
    agent.Projects.delete(id).then(() => {
      setIsDelete(false);
      navigate("/projects");
    });
  };

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

  if (isDelete)
    return (
      <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
        <div className="bg-white h-auto max-w-lg w-full p-5 lg:p-10 rounded-lg drop-shadow-md">
          <p className=" font-Oswald text-2xl uppercase font-thin border-b-2 border-b-red-500">
            Attention
          </p>

          <p className=" font-Montserrat text-lg py-5">
            This Project will be deleted permanently, do you want to proceed?
          </p>
          <div className="flex flex-row gap-x-5 mx-auto w-full justify-center lg:justify-end ">
            <button
              className="cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin"
              type="button"
              onClick={() => setIsDelete(false)}
            >
              No
            </button>
            <button
              className="cursor-pointer bg-red-600 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
              type="button"
              onClick={() => handleDeleteProject(project.id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className=" w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20">
      <div className="container mx-auto flex flex-col gap-y-5 py-10">
        <div className="px-5 flex flex-row justify-end items-start gap-x-5 py-3">
          {(isAdmin || project.isLeader) && (
            <button
              className="flex flex-row gap-x-2 items-center"
              onClick={() => setIsEdit(true)}
            >
              <PencilAltIcon className="h-6 w-6" />
              <p className=" font-Oswald text-lg font-thin uppercase">Edit</p>
            </button>
          )}

          {isAdmin && (
            <button
              className="flex flex-row gap-x-2 items-center"
              onClick={() => setIsDelete(true)}
            >
              <TrashIcon className="h-6 w-6 text-red-600" />
              <p className=" font-Oswald text-lg font-thin uppercase">Delete</p>
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className=" w-full h-full px-5 py-10 lg:p-10 bg-white text-black drop-shadow-md">
            <ProjectHeader project={project} />
          </div>

          <div className=" w-full h-auto px-5 py-10 lg:p-10 bg-white text-black drop-shadow-md">
            <ProjectInfo project={project} />
          </div>
          <div className=" w-full h-auto px-5 py-10 lg:p-10 bg-white text-black drop-shadow-md">
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
    
  );
}

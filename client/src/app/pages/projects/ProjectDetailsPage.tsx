import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import LoadingComponent from "../../components/common/LoadingComponent";
import { Project } from "../../models/project";

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
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20  flex">
      {/* <img
        src={project.photo}
        alt={project.title}
        className="object-cover object-center fixed top-0 left-0 bottom-0 right-0 w-full h-full"
      /> */}

      <div className="container mx-auto flex flex-col rounded-md overflow-hidden flex-auto">
        <div className="flex-auto w-full flex flex-row h-full">
          <div className="relative py-10 w-1/3 bg-slate-700   text-white flex flex-col">
            <div className="h-1/3">
              <ProjectHeader project={project} />
            </div>
            <div className="h-1/3">
              <ProjectInfo project={project} />
            </div>
            <div className="h-1/3">
              <ProjectMembers projectId={project.id} />
            </div>
          </div>
          <div className=" relative w-2/3 bg-slate-400 ">
            <div className="h-1/3">
              <ProjectPhases
                projectId={project.id}
                projectSlug={project.slug}
              />
            </div>

            <div className="h-1/3 py-5">
              <ProjectTickets
                projectId={project.id}
                projectSlug={project.slug}
              />
            </div>

            <div className="h-1/3">
              <ProjectActions
                projectId={project.id}
                projectSlug={project.slug}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

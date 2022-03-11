import { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import LoadingComponent from "../../components/common/LoadingComponent";
import { ProjectPhase } from "../../models/phase";
import { ProjectDetails } from "../../models/project";

const ProjectPhasesList = lazy(
  () => import("../../components/projects/projectPhases/ProjectPhasesList")
);

export default function ProjectPhasesPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetails | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);
  const [phases, setPhases] = useState<ProjectPhase[]>([]);
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

  useEffect(() => {
    if (project && !loaded) {
      agent.Projects.listPhases(project.id)
        .then((response) => {
          setPhases(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoaded(false));
    }

    return () => {
      setPhases([]);
    };
  }, [loaded, project]);

  if (loading)
    return <LoadingComponent message="Loading Phases, please wait" />;
  if (!project) return <div className="py-20">Not Found</div>;

  return (
    <div className="w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20">
      <div className="container mx-auto flex flex-col gap-y-5 p-10 my-10 bg-white text-black drop-shadow-md">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end border-b-2 border-black pb-1 flex-initial">
          <p className=" font-Oswald text-4xl uppercase font-thin">Phases</p>

          <p className=" font-Oswald font-thin uppercase text-2xl">
            {project.title}
          </p>
        </div>

        {phases.length > 0 ? (
          <ProjectPhasesList
            projectId={project.id}
            phases={phases}
            projectSlug={project.slug}
          />
        ) : (
          <div className="h-20 w-full flex items-center justify-center">
            <p className="font-Montserrat text-lg">
              This project have no phases
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

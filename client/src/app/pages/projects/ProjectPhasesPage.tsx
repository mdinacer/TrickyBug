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
    <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 ">
      <div className="container mx-auto flex flex-col  w-full rounded-md overflow-hidden">
        <p className="text-2xl font-Oswald uppercase underline underline-offset-2 ">
          Phases
        </p>
        <h1 className="flex-initial text-5xl font-Oswald mb-10 uppercase">
          {project.title}
        </h1>
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

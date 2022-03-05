import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";
import { ProjectPhase } from "../../../models/phase";

const PhasesList = lazy(() => import("../../Phases/PhasesList"));

interface Props {
  projectId: string;
  projectSlug: string;
}

export default function ProjectPhases({ projectId, projectSlug }: Props) {
  const [phases, setPhases] = useState<ProjectPhase[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (projectId && !loaded) {
      agent.Projects.listRecentPhases(projectId)
        .then((response) => {
          setPhases(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoaded(false));
    }

    return () => {
      setPhases([]);
    };
  }, [loaded, projectId]);
  return (
    <div className="relative px-10 py-5 h-full flex flex-col">
      <div className="flex-initial bg-slate-700 text-white py-1 px-5 flex flex-row items-center justify-between">
        <p className="font-Oswald text-xl uppercase ">Recent Phases</p>
        <Link
          className="text-Montserrat text-sm uppercase underline underline-offset-2"
          to={`/projects/${projectSlug}/phases/`}
        >
          view all
        </Link>
      </div>
      <div className="flex-auto h-full w-full">
        {phases.length > 0 ? (
          <PhasesList phases={phases} />
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

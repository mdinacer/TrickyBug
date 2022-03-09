import { lazy, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";
import { ProjectPhase } from "../../../models/phase";
import PhaseForm from "../../Phases/PhaseForm";

const PhasesList = lazy(() => import("../../Phases/PhasesList"));

interface Props {
  projectId: string;
  projectSlug: string;
  isPermitted: boolean;
}

export default function ProjectPhases({
  projectId,
  projectSlug,
  isPermitted,
}: Props) {
  const [phases, setPhases] = useState<ProjectPhase[]>([]);
  const [selectedPhase, setSelectedPhase] = useState<ProjectPhase | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loadProjectPhases = useCallback(() => {
    agent.Projects.listRecentPhases(projectId)
      .then((response) => {
        setPhases(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaded(false));
  }, [projectId]);

  useEffect(() => {
    if (projectId && !loaded) {
      loadProjectPhases();
    }

    return () => {
      setPhases([]);
    };
  }, [loadProjectPhases, loaded, projectId]);

  const handleOnClose = () => {
    loadProjectPhases();
    if (selectedPhase) setSelectedPhase(null);
    setIsOpen(false);
  };

  function handleOnPhaseSelect(item: ProjectPhase) {
    setSelectedPhase(item);
    setIsOpen(true);
  }

  if (isOpen && projectId)
    return (
      <PhaseForm
        projectId={projectId}
        onClose={handleOnClose}
        phase={selectedPhase}
      />
    );

  return (
    <div className="relative pb-5 h-full flex flex-col bg-slate-200 lg:rounded-md overflow-hidden">
      <div className="flex-initial bg-slate-700 px-10 text-white  py-2 flex flex-row items-center justify-between">
        <p className="font-Oswald text-xl uppercase ">Recent Phases</p>
        <div className="flex flex-row gap-x-5">
          {isPermitted && (
            <button
              onClick={() => setIsOpen(true)}
              className="text-Montserrat text-sm uppercase underline underline-offset-2"
              type="button"
            >
              Add
            </button>
          )}
          <Link
            className="text-Montserrat text-sm uppercase underline underline-offset-2"
            to={`/projects/${projectSlug}/phases/`}
          >
            view all
          </Link>
        </div>
      </div>
      <div className="flex-auto h-full w-full px-10">
        {phases.length > 0 ? (
          <PhasesList phases={phases} onPhaseSelected={handleOnPhaseSelect} />
        ) : (
          <div className="h-40 w-full flex items-center justify-center">
            <p className="font-Montserrat text-xl text-gray-400">EMPTY</p>
          </div>
        )}
      </div>
    </div>
  );
}

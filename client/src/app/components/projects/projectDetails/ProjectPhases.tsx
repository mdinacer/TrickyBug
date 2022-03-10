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
      <div className="fixed z-10 top-0 left-0 w-full h-auto">
        <PhaseForm
          projectId={projectId}
          onClose={handleOnClose}
          phase={selectedPhase}
        />
      </div>
    );

  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <div className="flex-initial flex flex-row items-end justify-between">
        <p className="font-Oswald text-3xl font-thin uppercase leading-loose">
          Recent Phases
        </p>
        <div className="flex flex-row items-end gap-x-2 self-start">
          {isPermitted && (
            <button
              onClick={() => setIsOpen(true)}
              className="px-2 py-1 bg-slate-600 text-white"
              type="button"
            >
              <p className="font-Oswald text-lg font-thin uppercase">
                Add Phase
              </p>
            </button>
          )}
          <Link
            className="px-2 py-1 bg-slate-600 text-white"
            to={`/projects/${projectSlug}/phases/`}
          >
            <p className="font-Oswald text-lg font-thin uppercase">
              View Phases
            </p>
          </Link>
        </div>
      </div>
      <div className="flex-auto h-full w-full px-5">
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

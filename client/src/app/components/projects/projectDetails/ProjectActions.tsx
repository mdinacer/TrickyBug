import { lazy, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";
import { ProjectAction } from "../../../models/action";
import ActionForm from "../../Actions/ActionForm";

const ActionsList = lazy(() => import("../../Actions/ActionsList"));

interface Props {
  projectId: string;
  projectSlug: string;
  isPermitted: boolean;
}

export default function ProjectRecentActions({
  projectId,
  projectSlug,
  isPermitted,
}: Props) {
  const [actions, setActions] = useState<ProjectAction[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedAction, setSelectedAction] = useState<ProjectAction | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const loadProjectActions = useCallback(() => {
    agent.Projects.listRecentActions(projectId)
      .then((response) => {
        setActions(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaded(false));
  }, [projectId]);

  useEffect(() => {
    if (projectId && !loaded) {
      loadProjectActions();
    }
    return () => {
      setActions([]);
    };
  }, [loadProjectActions, loaded, projectId]);

  const handleOnClose = () => {
    loadProjectActions();
    if (selectedAction) setSelectedAction(null);
    setIsOpen(false);
  };

  function handleOnActionSelect(item: ProjectAction) {
    setSelectedAction(item);
    setIsOpen(true);
  }

  if (isOpen && projectId)
    return (
      <ActionForm
        projectId={projectId}
        onClose={handleOnClose}
        action={selectedAction}
      />
    );
  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <div className="flex-initial flex flex-row items-end justify-between">
        <p className="font-Oswald text-3xl font-thin uppercase leading-loose">
          Recent Actions
        </p>
        <div className="flex flex-row items-end gap-x-2 self-start">
          {isPermitted && (
            <button
              onClick={() => setIsOpen(true)}
              className="px-2 py-1 bg-slate-600 text-white"
              type="button"
            >
              <p className="font-Oswald text-lg font-thin uppercase">
                Add Actioin
              </p>
            </button>
          )}
          <Link
            className="px-2 py-1 bg-slate-600 text-white"
            to={`/projects/${projectSlug}/actions/`}
          >
            <p className="font-Oswald text-lg font-thin uppercase">
              View Actions
            </p>
          </Link>
        </div>
      </div>

      <div className="px-5">
        {actions.length > 0 ? (
          <ActionsList
            onActionSelected={handleOnActionSelect}
            actions={actions}
          />
        ) : (
          <div className="h-40 w-full flex items-center justify-center">
            <p className="font-Montserrat text-xl text-gray-400">EMPTY</p>
          </div>
        )}
      </div>
    </div>
  );
}

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
    <div className="relative pb-5 h-full flex flex-col bg-slate-200 rounded-md overflow-hidden">
      <div className="flex-initial bg-slate-700 px-10 text-white  py-2 flex flex-row items-center justify-between">
        <p className="font-Oswald text-xl uppercase ">Recent Actions</p>
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
            to={`/projects/${projectSlug}/actions/`}
          >
            view all
          </Link>
        </div>
      </div>

      <div className="px-10">
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

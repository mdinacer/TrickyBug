import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";
import { ProjectAction } from "../../../models/action";

const ActionsList = lazy(() => import("../../Actions/ActionsList"));

interface Props {
  projectId: string;
  projectSlug: string;
}

export default function ProjectRecentActions({
  projectId,
  projectSlug,
}: Props) {
  const [actions, setActions] = useState<ProjectAction[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (projectId && !loaded) {
      agent.Projects.listRecentActions(projectId)
        .then((response) => {
          setActions(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoaded(false));
    }

    return () => {
      setActions([]);
    };
  }, [loaded, projectId]);
  return (
    <div className="relative px-10 pb-5">
      <div className=" bg-slate-700 text-white py-1 px-5 flex flex-row items-center justify-between">
        <p className="font-Oswald text-xl uppercase ">Recent Actions</p>
        <Link
          className="text-Montserrat text-sm uppercase underline underline-offset-2"
          to={`/projects/${projectSlug}/actions/`}
        >
          view all
        </Link>
      </div>

      {actions.length > 0 ? (
        <ActionsList actions={actions} />
      ) : (
        <div className="h-20 w-full flex items-center justify-center">
          <p className="font-Montserrat text-lg">
            This project have no actions
          </p>
        </div>
      )}
    </div>
  );
}

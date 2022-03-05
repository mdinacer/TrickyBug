import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";
import { ProjectTicket } from "../../../models/ticket";

const TicketsList = lazy(() => import("../../Tickets/TicketsList"));

interface Props {
  projectId: string;
  projectSlug: string;
}

export default function ProjectRecentTickets({
  projectId,
  projectSlug,
}: Props) {
  const [tickets, setTickets] = useState<ProjectTicket[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (projectId && !loaded) {
      agent.Projects.listRecentTickets(projectId)
        .then((response) => {
          setTickets(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoaded(false));
    }

    return () => {
      setTickets([]);
    };
  }, [loaded, projectId]);
  return (
    <div className="relative px-10 pb-5">
      <div className="bg-slate-700 text-white py-1 px-5 flex flex-row items-center justify-between">
        <p className="font-Oswald text-xl uppercase ">Recent Tickets</p>
        <Link
          className="text-Montserrat text-sm uppercase underline underline-offset-2"
          to={`/projects/${projectSlug}/tickets/`}
        >
          view all
        </Link>
      </div>
      {tickets.length > 0 ? (
        <TicketsList tickets={tickets} />
      ) : (
        <div className="h-20 w-full flex items-center justify-center">
          <p className="font-Montserrat text-lg">
            This project have no tickets
          </p>
        </div>
      )}
    </div>
  );
}

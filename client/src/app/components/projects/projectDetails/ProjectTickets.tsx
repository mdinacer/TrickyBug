import { lazy, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";
import { ProjectTicket } from "../../../models/ticket";
//import TicketForm from "../../Tickets/TicketForm";

const TicketsList = lazy(() => import("../../Tickets/TicketsList"));
const TicketForm = lazy(() => import("../../Tickets/TicketForm"));

interface Props {
  projectId: string;
  projectSlug: string;
  isPermitted: boolean;
}

export default function ProjectRecentTickets({
  projectId,
  isPermitted,
}: Props) {
  const [tickets, setTickets] = useState<ProjectTicket[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loadProjectTickets = useCallback(() => {
    agent.Projects.listRecentTickets(projectId)
      .then((response) => {
        setTickets(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaded(false));
  }, [projectId]);

  useEffect(() => {
    if (projectId && !loaded) {
      loadProjectTickets();
    }
    return () => {
      setTickets([]);
    };
  }, [loadProjectTickets, loaded, projectId]);

  const handleOnClose = () => {
    loadProjectTickets();
    setIsOpen(false);
  };

  if (isOpen && projectId)
    return <TicketForm projectId={projectId} onClose={handleOnClose} />;
  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      <div className="flex-initial flex flex-col lg:flex-row lg:items-end justify-between px-5 lg:px-0">
        <p className="font-Oswald text-3xl font-thin uppercase leading-loose">
          Recent Tickets
        </p>
        <div className="flex flex-row self-start gap-x-2">
          {isPermitted && (
            <button
              onClick={() => setIsOpen(true)}
              className="px-2 py-1 bg-slate-600 text-white"
              type="button"
            >
              <p className="font-Oswald text-lg font-thin uppercase">
                Add Ticket
              </p>
            </button>
          )}
          <Link
            className="px-2 py-1 bg-slate-600 text-white"
            to={{
              pathname: `/tickets`,
              search: `?projectId=${projectId}`,
            }}
          >
            <p className="font-Oswald text-lg font-thin uppercase">
              View Tickets
            </p>
          </Link>
        </div>
      </div>
      <div className="px-5">
        {tickets.length > 0 ? (
          <TicketsList tickets={tickets} />
        ) : (
          <div className="h-40 w-full flex items-center justify-center">
            <p className="font-Montserrat text-xl text-gray-400">EMPTY</p>
          </div>
        )}
      </div>
    </div>
  );
}

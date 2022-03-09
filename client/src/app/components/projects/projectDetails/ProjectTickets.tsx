import { lazy, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../../api/agent";
import { ProjectTicket } from "../../../models/ticket";
import TicketForm from "../../Tickets/TicketForm";

const TicketsList = lazy(() => import("../../Tickets/TicketsList"));

interface Props {
  projectId: string;
  projectSlug: string;
  isPermitted: boolean;
}

export default function ProjectRecentTickets({
  projectId,
  projectSlug,
  isPermitted,
}: Props) {
  const [tickets, setTickets] = useState<ProjectTicket[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);
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
    if (selectedTicketId) setSelectedTicketId(null);
    setIsOpen(false);
  };

  function handleOnTicketSelect(id: number) {
    setSelectedTicketId(id);
    setIsOpen(true);
  }

  if (isOpen && projectId)
    return (
      <TicketForm
        projectSlug={projectSlug}
        onClose={handleOnClose}
        ticketId={selectedTicketId}
      />
    );
  return (
    <div className="relative pb-5 h-full flex flex-col bg-slate-200 lg:rounded-md overflow-hidden">
      <div className="flex-initial bg-slate-700 px-10 text-white  py-2 flex flex-row items-center justify-between">
        <p className="font-Oswald text-xl uppercase ">Recent Tickets</p>
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
            to={{
              pathname: `/tickets`,
              search: `?projectId=${projectId}`,
            }}
          >
            view all
          </Link>
        </div>
      </div>
      <div className="px-10">
        {tickets.length > 0 ? (
          <TicketsList
            tickets={tickets}
            onActionSelected={handleOnTicketSelect}
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

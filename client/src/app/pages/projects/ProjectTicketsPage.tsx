import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import agent from "../../api/agent";
import LoadingComponent from "../../components/common/LoadingComponent";
import TicketsFilters from "../../components/Tickets/TicketsFilters";
import { TicketStatus, TicketPriority } from "../../models/enums";
import { Project } from "../../models/project";
import { ProjectTicket } from "../../models/ticket";
import { TicketParams, TicketParamsInitial } from "../../models/ticketParams";
import { getTicketsParams } from "../../util/queryParams";

export default function ProjectTicketsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);
  const [tickets, setTickets] = useState<ProjectTicket[]>([]);
  const [loading, setLoading] = useState(false);
  const [ticketParams, setTicketParams] = useState<TicketParams>(
    new TicketParamsInitial()
  );
  const { state }: any | null = useLocation();
  const fromPhase = state?.fromPhase ?? false;
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

  const loadTickets = useCallback(
    (id: string) => {
      setLoading(true);
      const params = getTicketsParams(ticketParams);
      agent.Projects.listTickets(id, params)
        .then((response) => {
          setTickets(response);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoaded(true);
          setLoading(false);
        });
    },
    [ticketParams]
  );

  useEffect(() => {
    if (project && !loaded) {
      loadTickets(project.id);
    }

    return () => {
      setTickets([]);
    };
  }, [loadTickets, loaded, project]);

  useEffect(() => {
    if (project && ticketParams) {
      console.log(ticketParams);

      loadTickets(project.id);
    }
  }, [loadTickets, project, ticketParams]);

  if (loading)
    return (
      <div className="py-20 w-screen h-screen bg-slate-300 flex items-center justify-center">
        <LoadingComponent message={"Loading Tickets..."} />
      </div>
    );
  if (!project) return <div className="py-20">Not Found</div>;

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 ">
      <div className="container mx-auto flex flex-col  w-full rounded-md overflow-hidden max-w-5xl">
        <p className="text-2xl font-Oswald uppercase underline underline-offset-2 ">
          Tickets
        </p>
        <h1 className="flex-initial text-5xl font-Oswald mb-10 uppercase">
          {project.title}
        </h1>

        {!fromPhase && (
          <TicketsFilters
            params={ticketParams}
            setParams={(value) => setTicketParams(value)}
          />
        )}

        {tickets.length > 0 ? (
          <ul className="list-none flex flex-col py-5 gap-y-4">
            {tickets.map((ticket) => (
              <li key={ticket.id} className="list-item">
                <Link
                  to={`/projects/${slug}/tickets/${ticket.id}`}
                  className="flex flex-row justify-start border-b px-5  border-b-black hover:border-red-700 hover:text-white hover:bg-red-500 transition-all duration-200"
                >
                  <p className="font-Oswald text-xl font-thin w-full max-w-xs">
                    {format(new Date(ticket.creationDate), "dd-MM-yy")}
                  </p>
                  <p className=" font-Montserrat flex flex-row gap-x-2">
                    <span className=" text-lg">{ticket.subject}</span>
                    <span className=" text-sm">
                      ({TicketStatus[ticket.status]})
                    </span>
                  </p>
                  <p className="ml-auto font-Oswald uppercase font-thin text-lg">
                    {TicketPriority[ticket.priority]}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="h-20 w-full flex items-center justify-center">
            <p className="font-Montserrat text-lg">
              This project have no tickets
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

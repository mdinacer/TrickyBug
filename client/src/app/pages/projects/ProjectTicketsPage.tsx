import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import agent from "../../api/agent";
import LoadingComponent from "../../components/common/LoadingComponent";
import { TicketStatus, TicketPriority } from "../../models/enums";
import { MetaData } from "../../models/pagination";
import { Project } from "../../models/project";
import { ProjectTicket } from "../../models/ticket";
import { ProjectPhaseTicketParams } from "../../models/ticketParams";
import { getProjectPhaseTicketParams } from "../../util/queryParams";

export default function ProjectActionsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const phaseId = searchParams.get("phaseId");
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [projectLoaded, setProjectLoaded] = useState(false);
  const [ticketsLoaded, setTicketsLoaded] = useState(false);
  const [tickets, setTickets] = useState<ProjectTicket[]>([]);
  const [projectLoading, setProjectLoading] = useState(false);
  const [ticketsLoading, setTicketsLoading] = useState(false);
  const [ticketParams, setTicketParams] = useState<ProjectPhaseTicketParams>({
    pageNumber: 1,
    pageSize: 10,
    phaseId: null,
  });
  const [metaData, setMetaData] = useState<MetaData | null>(null);

  const loadTickets = useCallback(
    async (id: string) => {
      try {
        setTicketsLoading(true);
        const params = getProjectPhaseTicketParams(ticketParams);
        const result = await agent.Projects.listTickets(id, params);
        setTickets(result);
        console.log(result.metadata);
      } catch (error) {
        console.log(error);
      } finally {
        setTicketsLoading(false);
        setTicketsLoaded(true);
      }
    },
    [ticketParams]
  );

  const loadProject = useCallback(
    async (slug: string) => {
      try {
        setProjectLoading(true);
        const result = await agent.Projects.details(slug);
        setProject(result);
        setProjectLoaded(true);
        if (phaseId) {
          setTicketParams({ ...ticketParams, phaseId });
        }
        await loadTickets(result.id);
      } catch (error) {
        console.log(error);
      } finally {
        setProjectLoading(false);
      }
    },
    [loadTickets, phaseId, ticketParams]
  );

  useEffect(() => {
    if (slug && !projectLoading && !projectLoaded) {
      loadProject(slug);
    }
  }, [loadProject, projectLoading, projectLoaded, slug]);

  if (ticketsLoading && !ticketsLoaded)
    return (
      <div className="py-20 w-screen h-screen bg-slate-300 flex  items-center justify-center">
        <LoadingComponent message={"Loading Tickets..."} />
      </div>
    );
  if (!project) return <div className="py-20">Not Found</div>;

  return (
    <div className="w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20">
      <div className="container mx-auto flex flex-col gap-y-5 p-10 my-10 bg-white text-black drop-shadow-md">
        <div className="flex lg:flex-row flex-col justify-between lg:items-end border-b-2 border-black pb-1 flex-initial">
          <p className=" font-Oswald text-4xl uppercase font-thin">Tickets</p>

          <p className=" font-Oswald font-thin uppercase text-2xl">
            {project.title}
          </p>
        </div>

        {tickets.length > 0 ? (
          <ul className="list-none flex flex-col py-5 gap-y-5">
            {tickets.map((ticket) => (
              <li key={ticket.id} className="list-item  ">
                <Link
                  to={`/tickets/${ticket.id}`}
                  className=" flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-between border-b border-b-gray-400 items-end py-5"
                >
                  <div className="">
                    <p className=" font-Oswald font-thin leading-loose text-2xl">
                      {ticket.subject}
                    </p>
                    <p className=" font-Montserrat font-thin text-lg pr-5 ">
                      {ticket.body}
                    </p>
                  </div>
                  <div className="grid grid-flow-col max-w-xl gap-x-10 ml-auto">
                    <div>
                      <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
                        Created
                      </p>
                      <p className="font-Oswald text-xl font-thin">
                        {format(new Date(ticket.creationDate), "dd/MM/yy")}
                      </p>
                    </div>

                    <div>
                      <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
                        Status
                      </p>
                      <p className="font-Oswald text-xl font-thin uppercase">
                        {TicketStatus[ticket.status]}
                      </p>
                    </div>
                    <div>
                      <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
                        Priority
                      </p>
                      <p className="font-Oswald text-xl font-thin uppercase">
                        {TicketPriority[ticket.priority]}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="h-20 w-full flex items-center justify-center">
            <p className="font-Montserrat text-lg">
              This project have no phases
            </p>
          </div>
        )}
      </div>
    </div>
    // <div className="h-full min-h-screen w-screen bg-slate-300 px-5 pb-10 pt-20 ">
    //   <div className="container mx-auto flex flex-col  w-full rounded-md overflow-hidden">
    //     <div className=" w-full border-b-2 py-1 border-b-black flex flex-col lg:flex-row justify-between lg:items-end">
    //       <h1 className="flex-initial text-3xl lg:text-5xl font-Oswald  uppercase">
    //         {project.title}
    //       </h1>
    //       <p className="text-2xl font-Oswald uppercase font-thin">Tickets</p>
    //     </div>

    //     {actions.length > 0 ? (
    //       <ul className="list-none flex flex-col py-5 gap-y-5">
    //         {actions.map((action) => (
    //           <li key={action.id} className="list-item  ">
    //             <div className="flex flex-col lg:flex-row justify-start lg:items-center px-5 border-b border-b-black">
    //               <p className="font-Oswald text-xl ml-auto lg:ml-0 font-thin w-full max-w-[6rem]">
    //                 {format(new Date(action.actionDate), "dd-MM-yy")}
    //               </p>
    //               <div className="">
    //                 <p className=" font-Oswald font-thin text-2xl">
    //                   {action.title}
    //                 </p>
    //                 <p className=" font-Montserrat text-xl ">
    //                   {action.description}
    //                 </p>
    //               </div>
    //               <p className="lg:ml-auto font-Oswald uppercase font-thin text-lg">
    //                 {action.author}
    //               </p>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     ) : (
    //       <div className="h-20 w-full flex items-center justify-center">
    //         <p className="font-Montserrat text-lg">
    //           This project have no tickets
    //         </p>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

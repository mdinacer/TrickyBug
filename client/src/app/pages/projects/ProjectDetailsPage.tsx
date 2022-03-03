import { lazy, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import agent from "../../api/agent";
import { Tickets } from "../../models/dataLists";
import { TicketPriority, TicketStatus } from "../../models/enums";
import { ProjectDetails } from "../../models/project";

const Moment = lazy(() => import("react-moment"));

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetails | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (slug) {
      agent.Projects.details(slug)
        .then((response) => {
          setProject(response);
          console.log(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      setProject(undefined);
    };
  }, [slug]);

  if (loading) return <div className="py-20">Loading please wait</div>;
  if (!project) return <div className="py-20">Not Found</div>;

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 ">
      <img
        src={project.photo}
        alt={project.title}
        className="object-cover object-center fixed top-0 left-0 bottom-0 right-0 w-full h-full"
      />
      <div className="container mx-auto flex flex-col rounded-md overflow-hidden mt-20 mb10">
        <div className="flex-auto w-full flex flex-row h-full">
          <div className="relative w-1/3 bg-slate-700 bg-opacity-70 backdrop-blur-md  text-white flex flex-col">
            <div className="relative max-w-sm mx-auto my-5  flex-initial">
              <h1 className="flex-initial text-5xl font-Oswald mb-10 uppercase">
                {project.title}
              </h1>
              <p className=" font-Oswald text-lg font-bold uppercase underline underline-offset-1">
                Description
              </p>
              <p className=" font-Montserrat text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                dolorem voluptate distinctio, vitae assumenda odio. Similique
                corporis fugiat blanditiis. Eveniet?
              </p>
            </div>
            <div className="relative max-w-sm mx-auto mb-5 flex-auto w-full">
              <p className=" font-Oswald text-lg font-bold uppercase underline underline-offset-1">
                info
              </p>
              <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end">
                <span className="font-Montserrat text-sm">Creation Date</span>
                <span className="font-Montserrat text-lg">
                  {new Date(project.creationDate).toLocaleDateString()}
                </span>
              </p>
              <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end ">
                <span className="font-Montserrat text-sm">Last update</span>
                <span className="font-Montserrat text-lg">
                  {project.lastUpdate
                    ? new Date(project?.lastUpdate).toLocaleDateString()
                    : new Date(project?.creationDate).toLocaleDateString()}
                </span>
              </p>
              <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end">
                <span className="font-Montserrat text-sm">Tickets Count</span>
                <span className="font-Montserrat text-lg">
                  {`${project.ticketsCount} ${
                    project.ticketsCount > 1 ? "Tickets" : "Ticket"
                  }`}
                </span>
              </p>
              <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end">
                <span className="font-Montserrat text-sm">Current Phase</span>
                <span className="font-Montserrat text-lg">
                  {project.actualPhase ?? "Starting"}
                </span>
              </p>
            </div>

            <div className="max-w-sm mx-auto my-10 mt-auto flex-initial w-full">
              <p className=" font-Oswald text-lg font-bold uppercase underline underline-offset-1">
                Team
              </p>
              <ul className=" list-none flex flex-col gap-y-1">
                {project.members.map((member) => (
                  <li
                    key={member.userId}
                    className=" py-1 rounded-md  flex items-center"
                  >
                    <div className=" flex flow-row justify-between items-end w-full border-b border-b-white">
                      <p className="font-Montserrat uppercase text-xl font-bold">
                        {member.userName}
                      </p>
                      <p className="font-Oswald text-base  uppercase font-thin">
                        {member.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" relative w-2/3 bg-slate-400 bg-opacity-70 backdrop-blur-md">
            <div className="relative px-10 py-5">
              <div className="bg-slate-700 text-white py-1 px-5 flex flex-row items-center justify-between">
                <p className="font-Oswald text-xl uppercase ">Phases</p>
                <Link
                  className="text-Montserrat text-sm uppercase underline underline-offset-2"
                  to={`/projects/${project.slug}/phases/`}
                >
                  view all
                </Link>
              </div>
              <ul className="list-none flex flex-col py-5 gap-y-4">
                {project.phases.map((phase) => (
                  <li key={phase.id} className="list-item w-full">
                    <Link
                      to={`/projects/${project.slug}/phases/${phase.id}`}
                      className="flex flex-row justify-start border-b px-5  border-b-black hover:border-red-700 hover:text-white hover:bg-red-500 transition-all duration-200"
                    >
                      <Moment
                        className="font-Oswald text-xl font-thin  w-full max-w-xs"
                        format="DD/MM/YY"
                      >
                        {phase.startDate}
                      </Moment>
                      <p className=" font-Montserrat text-lg uppercase">
                        {phase.title}
                      </p>
                      <Moment
                        className="font-Oswald text-xl font-thin ml-auto"
                        format="DD/MM/YY"
                      >
                        {phase.endDate}
                      </Moment>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative px-10 pb-5">
              <div className="bg-slate-700 text-white py-1 px-5 flex flex-row items-center justify-between">
                <p className="font-Oswald text-xl uppercase ">Recent Tickets</p>
                <Link
                  className="text-Montserrat text-sm uppercase underline underline-offset-2"
                  to={`/projects/${project.slug}/tickets/`}
                >
                  view all
                </Link>
              </div>
              <ul className="list-none flex flex-col py-5 gap-y-4">
                {Tickets.map((ticket) => (
                  <li key={ticket.id} className="list-item">
                    <Link
                      to={`/projects/${project.slug}/tickets/${ticket.id}`}
                      className="flex flex-row justify-start border-b px-5  border-b-black hover:border-red-700 hover:text-white hover:bg-red-500 transition-all duration-200"
                    >
                      <Moment
                        className="font-Oswald text-xl font-thin w-full max-w-xs"
                        format="DD/MM/YY"
                      >
                        {ticket.creationDate}
                      </Moment>
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
            </div>

            <div className="relative px-10 pb-5">
              <div className=" bg-slate-700 text-white py-1 px-5 flex flex-row items-center justify-between">
                <p className="font-Oswald text-xl uppercase ">Recent Actions</p>
                <Link
                  className="text-Montserrat text-sm uppercase underline underline-offset-2"
                  to={`/projects/${project.slug}/actions/`}
                >
                  view all
                </Link>
              </div>

              <ul className="list-none flex flex-col py-5   gap-y-4">
                {project.actions.map((action) => (
                  <li key={action.id} className="list-item ">
                    <Link
                      to={`/projects/${project.slug}/actions/${action.id}`}
                      className="flex flex-row justify-start border-b px-5  border-b-black hover:border-red-700 hover:text-white hover:bg-red-500 transition-all duration-200"
                    >
                      <Moment
                        className="font-Oswald text-xl font-thin w-full max-w-xs"
                        format="DD/MM/YY"
                      >
                        {action.actionDate}
                      </Moment>
                      <p className=" font-Montserrat flex flex-row gap-x-2">
                        <span className=" text-lg">{action.title}</span>
                      </p>
                      <p className="ml-auto font-Oswald uppercase font-thin text-lg">
                        {action.author}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

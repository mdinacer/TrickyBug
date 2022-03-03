import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { Project } from "../../models/project";

interface Props {
  project: Project;
}

export default function ProjectListItem({ project }: Props) {
  return (
    <div
      key={project.id}
      className="w-full h-auto bg-gray-200 drop-shadow-sm lg:hover:drop-shadow-xl duration-300 transition-all lg:hover:-translate-y-3 rounded-md overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-64 lg:h-52 flex-initial">
        <img
          src={project.photo}
          className="object-cover object-center h-full w-full"
          alt="test"
        />
      </div>
      <div className="px-5 py-4 flex-auto flex flex-col gap-y-2">
        <Link to={`/projects/${project.slug}`}>
          <p className="uppercase font-Oswald text-4xl mb-2 underline underline-offset-2 lg:no-underline lg:hover:underline">
            {project.title}
          </p>
        </Link>
        <p className=" font-Montserrat text-sm gap-x-5 flex flex-row items-center justify-between">
          <span className="uppercase font-bold">Created at</span>
          <span>{new Date(project.creationDate).toLocaleDateString()}</span>
        </p>
        <p className="font-Montserrat text-sm gap-x-5 flex flex-row items-center justify-between">
          <span className="uppercase font-bold">Last update</span>
          <span>{project.lastUpdate}</span>
        </p>
        <p className=" font-Montserrat text-sm gap-x-5 flex flex-row items-center justify-between">
          <span className="uppercase font-bold">Actual Phase</span>
          <span>{project.actualPhase}</span>
        </p>
        <p className="font-Montserrat text-sm gap-x-5 flex flex-row items-center justify-between">
          <span className="uppercase font-bold">Tickets</span>
          <span>{`${project.ticketsCount} ${
            project.ticketsCount > 1 ? "Tickets" : "Ticket"
          }`}</span>
        </p>
      </div>

      <div className="flex-initial flex flex-row px-5 py-2 justify-end gap-x-5 font-Montserrat text-sm uppercase items-center">
        <button
          type="button"
          title="edit project"
          className="flex flex-row gap-x-2 items-center"
        >
          <PencilAltIcon className="h-6 w-6 " />
          <p>Edit</p>
        </button>

        <button
          type="button"
          title="delete project"
          className="flex flex-row gap-x-2 items-center"
        >
          <TrashIcon className="h-6 w-6 text-red-600" />
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}

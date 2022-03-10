import { Label } from "@headlessui/react/dist/components/label/label";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Project } from "../../models/project";
import LabelItem from "../common/LabelItem";

interface Props {
  project: Project;
}

export default function ProjectListItem({ project }: Props) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="relative w-full h-auto border-b-black hover:border-b-transparent bg-white lg:bg-transparent  lg:hover:bg-slate-200 drop-shadow-sm lg:hover:drop-shadow-xl duration-700 transition-all lg:hover:-translate-y-3 lg:rounded-md overflow-hidden flex flex-col">
        <div className="relative w-full h-64 lg:h-64 flex-initial">
          <img
            src={project.photo}
            className="object-fill object-center h-full w-full drop-shadow-md"
            alt="test"
          />
        </div>
        <div className="px-5 lg:px-10 py-4 flex-auto flex flex-col border-b-inherit gap-y-2">
          <p className="uppercase font-Oswald font-thin text-3xl mb-2">
            {project.title}
          </p>

          <LabelItem
            title="Created at"
            value={format(new Date(project.creationDate), "dd/MM")}
          />
          <LabelItem title="Actual Phase" value={project.actualPhase} />
          <LabelItem
            title="Tickets"
            value={`${project.ticketsCount} ${
              project.ticketsCount > 1 ? "Tickets" : "Ticket"
            }`}
          />
        </div>
        {project.isMember && (
          <p className=" font-Oswald text-sm absolute top-0 right-0 py-1 px-2 m-2 rounded-md uppercase bg-slate-300 text-black font-thin">
            Member
          </p>
        )}
      </div>
    </Link>
  );
}

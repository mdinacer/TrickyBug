import { ProjectPhase } from "../../../models/phase";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ClipboardListIcon } from "@heroicons/react/solid";

interface Props {
  phases: ProjectPhase[];
  projectSlug: string;
  projectId: string;
}
export default function ProjectPhasesList({
  phases,
  projectSlug,
  projectId,
}: Props) {
  return (
    <ul className="list-none flex flex-col py-5 gap-y-6">
      {phases.map((phase) => (
        <li key={phase.id} className="list-item w-full">
          <div className=" flex flex-col lg:flex-row justify-between border-b border-b-gray-400 gap-y-3 lg:gap-y-0 lg:items-end py-5">
            <div className="flex-auto">
              <p className=" font-Oswald font-thin text-2xl ">{phase.title}</p>
              <p className=" font-Montserrat font-thin text-lg max-w-3xl ">
                {phase.description}
              </p>
            </div>
            <div className="grid grid-cols-2 max-w-md gap-x-10 ml-0 lg:ml-auto flex-initial">
              <div>
                <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
                  Start
                </p>
                <p className="font-Oswald text-xl font-thin">
                  {format(new Date(phase.startDate), "dd/MM/yy")}
                </p>
              </div>

              {phase.endDate && (
                <div className="">
                  <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
                    End
                  </p>
                  <p className="font-Oswald text-xl font-thin lg:ml-auto">
                    {format(new Date(phase.endDate), "dd/MM/yy")}
                  </p>
                </div>
              )}
            </div>
            <div className="px-10 self-bottom ml-auto flex-initial">
              <Link
                state={{ fromPhase: true }}
                to={{
                  pathname: `/projects/${projectSlug}/actions`,
                  search: `?phaseId=${phase.id}`,
                }}
                className="flex flex-row gap-x-2"
              >
                <ClipboardListIcon className="h6 w-6" />
                <p className=" font-Oswald text-lg font-thin">View Actions</p>
              </Link>
              <Link
                to={{
                  pathname: `/projects/${projectSlug}/tickets`,
                  search: `?phaseId=${phase.id}`,
                }}
                className="flex flex-row gap-x-2"
              >
                <ClipboardListIcon className="h6 w-6" />
                <p className=" font-Oswald text-lg font-thin">View Tickets</p>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

import { ProjectPhase } from "../../../models/phase";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface Props {
  phases: ProjectPhase[];
  projectSlug: string;
}
export default function ProjectPhasesList({ phases, projectSlug }: Props) {
  return (
    <ul className="list-none flex flex-col py-5 gap-y-6">
      {phases.map((phase) => (
        <li key={phase.id} className="list-item w-full">
          <div className="flex flex-row justify-between border-b px-5  border-b-black ">
            <div className="py-1 max-w-sm w-full">
              <p className=" font-Montserrat text-lg uppercase ">
                {`${phase.id} - ${phase.title}`}
              </p>
              <p className=" font-Montserrat text-sm">{phase.description}</p>
            </div>
            <div className=" flex flex-row gap-x-10 items-center max-w-md w-full">
              <div className="flex flex-row gap-x-3 items-end max-w-md w-full">
                <span className=" font-Montserrat text-base uppercase">
                  Start:
                </span>
                <p className="font-Oswald text-xl font-thin  w-full max-w-xs">
                  {format(new Date(phase.startDate), "dd/MM/YY")}
                </p>
              </div>

              <div className="flex flex-row gap-x-3 items-end max-w-md w-full">
                <span className=" font-Montserrat text-base uppercase">
                  End:
                </span>
                {phase.endDate !== "0001-01-01T00:00:00" ? (
                  <p className="font-Oswald text-xl font-thin">
                    {format(new Date(phase.endDate), "dd/MM/YY")}
                  </p>
                ) : (
                  <p className="font-Oswald text-xl uppercase font-thin ">
                    Actual
                  </p>
                )}
              </div>
            </div>

            <div className=" flex flex-row justify-between items-center gap-x-10 uppercase text-sm font-Montserrat">
              <Link
                state={{ fromPhase: true }}
                to={{
                  pathname: `/projects/${projectSlug}/actions`,
                  search: `?startDate=${
                    phase.startDate
                      ? new Date(phase.startDate).toLocaleDateString()
                      : null
                  }&endDate=${
                    phase.endDate
                      ? new Date(phase.endDate).toLocaleDateString()
                      : null
                  }`,
                }}
                className="uppercase"
              >
                View Actions
              </Link>
              <Link
                state={{ fromPhase: true }}
                to={{
                  pathname: `/projects/${projectSlug}/tickets`,
                  search: `?startDate=${
                    phase.startDate
                      ? new Date(phase.startDate).toLocaleDateString()
                      : null
                  }&endDate=${
                    phase.endDate
                      ? new Date(phase.endDate).toLocaleDateString()
                      : null
                  }`,
                }}
                className="uppercase"
              >
                View Tickets
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

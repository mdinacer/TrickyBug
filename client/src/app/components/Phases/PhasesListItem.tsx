import { format } from "date-fns";
import { ProjectPhase } from "../../models/phase";

interface Props {
  phase: ProjectPhase;
}

export default function PhasesListItem({ phase }: Props) {
  return (
    <div className="flex flex-row justify-between border-b px-5  border-b-black ">
      <p className=" font-Montserrat text-lg uppercase">{phase.title}</p>
      <div className=" max-w-xs w-full flex flex-row items-center justify-between">
        <div className=" flex flex-row gap-x-5 items-end">
          <p className=" font-Oswald text-base uppercase font-thin">From</p>
          <p className="font-Oswald text-xl font-thin">
            {format(new Date(phase.startDate), "dd/MM/YY")}
          </p>
        </div>
        {phase.endDate ? (
          <div className=" flex flex-row gap-x-5 items-end">
            <p className=" font-Oswald text-base uppercase font-thin">To</p>
            <p className="font-Oswald text-xl font-thin ml-auto">
              {format(new Date(phase.endDate), "dd/MM/YY")}
            </p>
          </div>
        ) : (
          <p className="font-Oswald text-xl font-thin ml-auto">Actual Phase</p>
        )}
      </div>
    </div>
  );
}

import { PencilAltIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { ProjectPhase } from "../../models/phase";

interface Props {
  phase: ProjectPhase;
  onPhaseSelected: (item: ProjectPhase) => void;
}

export default function PhasesListItem({ phase, onPhaseSelected }: Props) {
  return (
    <div className="flex flex-row justify-between items-center border-b px-5  border-b-black ">
      <p className=" font-Montserrat text-lg uppercase">{phase.title}</p>
      <div className="ml-auto max-w-xs w-full flex flex-row items-center justify-between">
        <div className=" flex flex-row gap-x-5 items-end">
          <p className=" font-Oswald text-base uppercase font-thin">From</p>
          <p className="font-Oswald text-xl font-thin">
            {format(new Date(phase.startDate), "dd/MM/yy")}
          </p>
        </div>
        {phase.endDate ? (
          <div className=" flex flex-row gap-x-5 items-end">
            <p className=" font-Oswald text-base uppercase font-thin">To</p>
            <p className="font-Oswald text-xl font-thin ml-auto">
              {format(new Date(phase.endDate), "dd/MM/yy")}
            </p>
          </div>
        ) : (
          <p className="font-Oswald text-xl font-thin ml-auto">Actual Phase</p>
        )}
      </div>
      <div className="pl-5">
        <button
          type="button"
          title="Edit Phase"
          onClick={() => onPhaseSelected(phase)}
        >
          <PencilAltIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

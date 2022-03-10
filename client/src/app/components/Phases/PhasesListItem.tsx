import { PencilAltIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { ProjectPhase } from "../../models/phase";

interface Props {
  phase: ProjectPhase;
  onPhaseSelected: (item: ProjectPhase) => void;
}

export default function PhasesListItem({ phase, onPhaseSelected }: Props) {
  return (
    <div className=" flex flex-row justify-between border-b border-b-gray-400 items-end py-5">
      <div>
        <p className=" font-Oswald font-thin text-2xl">{phase.title}</p>
        <p className=" font-Montserrat font-thin text-lg">
          {phase.description}
        </p>
      </div>
      <div className="grid grid-cols-2 max-w-md gap-x-10 ml-auto">
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
      <div className="px-10 self-center">
        <button type="button" title="edit" className="flex flex-row gap-x-2">
          <PencilAltIcon className="h6 w-6" />
          <p className=" font-Oswald text-lg font-thin">Edit</p>
        </button>
      </div>
    </div>
  );
}

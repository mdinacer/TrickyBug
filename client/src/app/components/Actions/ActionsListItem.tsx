import { PencilAltIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { ProjectAction } from "../../models/action";

interface Props {
  action: ProjectAction;
  onActionSelected: (item: ProjectAction) => void;
}

export default function ActionsListItem({ action, onActionSelected }: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-start border-b lg:px-5 lg:items-end  border-b-black ">
      <p className="font-Oswald text-xl font-thin w-full max-w-[7rem]">
        {format(new Date(action.actionDate), "dd/MM/yy")}
      </p>
      <p className=" font-Montserrat flex flex-row gap-x-2">
        <span className=" text-lg">{action.title}</span>
      </p>
      <p className="lg:ml-auto font-Oswald uppercase font-thin ">
        <span className="text-lg">{action.author}</span>
      </p>

      <div className=" ml-auto lg:pl-5">
        <button
          type="button"
          title="Edit Phase"
          onClick={() => onActionSelected(action)}
        >
          <PencilAltIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

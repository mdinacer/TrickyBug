import { PencilAltIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { ProjectAction } from "../../models/action";

interface Props {
  action: ProjectAction;
  onActionSelected: (item: ProjectAction) => void;
  isPermitted: boolean;
}

export default function ActionsListItem({
  action,
  onActionSelected,
  isPermitted,
}: Props) {
  return (
    <div className=" flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row justify-between border-b border-b-gray-400 lg:items-end py-5">
      <div>
        <p className=" font-Oswald font-thin text-2xl">{action.title}</p>
        <p className=" font-Montserrat font-thin text-lg">
          {action.description}
        </p>
      </div>
      <div className="grid grid-cols-3 lg:max-w-md gap-x-10 ml-0 lg:ml-auto">
        <div>
          <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
            Date
          </p>
          <p className="font-Oswald text-xl font-thin">
            {format(new Date(action.actionDate), "dd/MM/yy")}
          </p>
        </div>

        <div className="">
          <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
            By
          </p>
          <p className="font-Oswald text-xl font-thin lg:ml-auto">
            {action.author}
          </p>
        </div>
        {(isPermitted || action.isAuthor) && (
          <div className="self-end lg:self-center">
            <button
              type="button"
              title="edit"
              className="flex flex-row gap-x-2"
              onClick={() => onActionSelected(action)}
            >
              <PencilAltIcon className="h6 w-6" />
              <p className=" font-Oswald text-lg font-thin">Edit</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

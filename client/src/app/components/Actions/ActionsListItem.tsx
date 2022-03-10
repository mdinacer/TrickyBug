import { PencilAltIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { ProjectAction } from "../../models/action";

interface Props {
  action: ProjectAction;
  onActionSelected: (item: ProjectAction) => void;
}

export default function ActionsListItem({ action, onActionSelected }: Props) {
  return (
    <div className=" flex flex-row justify-between border-b border-b-gray-400 items-end py-5">
      <div>
        <p className=" font-Oswald font-thin text-2xl">{action.title}</p>
        <p className=" font-Montserrat font-thin text-lg">
          {action.description}
        </p>
      </div>
      <div className="grid grid-cols-3 max-w-md gap-x-10 ml-auto">
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
        <div className="self-center">
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
      </div>
    </div>
    // <div className="flex flex-col lg:flex-row justify-start border-b lg:px-5 lg:items-end  border-b-black ">
    //   <p className="font-Oswald text-xl font-thin w-full max-w-[7rem]">
    //     {format(new Date(action.actionDate), "dd/MM/yy")}
    //   </p>
    //   <p className=" font-Montserrat flex flex-row gap-x-2">
    //     <span className=" text-lg">{action.title}</span>
    //   </p>
    //   <p className="lg:ml-auto font-Oswald uppercase font-thin ">
    //     <span className="text-lg">{action.author}</span>
    //   </p>

    //   <div className=" ml-auto lg:pl-5">
    //     <button
    //       type="button"
    //       title="Edit Phase"
    //       onClick={() => onActionSelected(action)}
    //     >
    //       <PencilAltIcon className="h-6 w-6" />
    //     </button>
    //   </div>
    // </div>
  );
}

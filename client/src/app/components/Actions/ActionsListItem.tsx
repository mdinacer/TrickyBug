import { format } from "date-fns";
import { ProjectAction } from "../../models/action";

interface Props {
  action: ProjectAction;
}

export default function ActionsListItem({ action }: Props) {
  return (
    <div className="flex flex-row justify-start border-b px-5  border-b-black ">
      <p className="font-Oswald text-xl font-thin w-full max-w-[7rem]">
        {format(new Date(action.actionDate), "dd/MM/YY")}
      </p>
      <p className=" font-Montserrat flex flex-row gap-x-2">
        <span className=" text-lg">{action.title}</span>
      </p>
      <p className="ml-auto font-Oswald uppercase font-thin ">
        <span className="text-lg">{action.author}</span>
      </p>
    </div>
  );
}

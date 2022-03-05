import { ProjectAction } from "../../models/action";
import ActionsListItem from "./ActionsListItem";

interface Props {
  actions: ProjectAction[];
}

export default function ActionsList({ actions }: Props) {
  return (
    <ul className="list-none flex flex-col py-5   gap-y-4">
      {actions.map((action) => (
        <li key={action.id} className="list-item ">
          <ActionsListItem action={action} />
        </li>
      ))}
    </ul>
  );
}

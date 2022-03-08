import { ProjectAction } from "../../models/action";
import ActionsListItem from "./ActionsListItem";

interface Props {
  actions: ProjectAction[];
  onActionSelected: (item: ProjectAction) => void;
}

export default function ActionsList({ actions, onActionSelected }: Props) {
  return (
    <ul className="list-none flex flex-col py-5   gap-y-4">
      {actions.map((action) => (
        <li key={action.id} className="list-item ">
          <ActionsListItem
            onActionSelected={onActionSelected}
            action={action}
          />
        </li>
      ))}
    </ul>
  );
}

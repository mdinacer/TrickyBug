import { ProjectAction } from "../../models/action";
import ActionsListItem from "./ActionsListItem";

interface Props {
  actions: ProjectAction[];
  onActionSelected: (item: ProjectAction) => void;
  isPermitted: boolean;
}

export default function ActionsList({
  actions,
  onActionSelected,
  isPermitted,
}: Props) {
  return (
    <div className="relative w-full h-full">
      <ul className="list-none flex flex-col py-5 gap-y-5">
        {actions.map((action) => (
          <li key={action.id} className="list-item w-full">
            <ActionsListItem
              isPermitted={isPermitted}
              onActionSelected={onActionSelected}
              action={action}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

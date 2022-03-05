import { ProjectPhase } from "../../models/phase";
import PhasesListItem from "./PhasesListItem";

interface Props {
  phases: ProjectPhase[];
}

export default function PhasesList({ phases }: Props) {
  return (
    <div className="relative w-full h-full">
      <ul className="list-none flex flex-col py-5 gap-y-4">
        {phases.map((phase) => (
          <li key={phase.id} className="list-item w-full">
            <PhasesListItem phase={phase} />
          </li>
        ))}
      </ul>
    </div>
  );
}

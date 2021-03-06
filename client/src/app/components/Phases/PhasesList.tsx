import { ProjectPhase } from "../../models/phase";
import PhasesListItem from "./PhasesListItem";

interface Props {
  phases: ProjectPhase[];
  onPhaseSelected: (item: ProjectPhase) => void;
  isPermitted: boolean
}

export default function PhasesList({ phases, onPhaseSelected, isPermitted }: Props) {
  return (
    <div className="relative w-full h-full">
      <ul className="list-none flex flex-col py-5 gap-y-5">
        {phases.map((phase) => (
          <li key={phase.id} className="list-item w-full">
            <PhasesListItem phase={phase} onPhaseSelected={onPhaseSelected} isPermitted={isPermitted} />
          </li>
        ))}
      </ul>
    </div>
  );
}

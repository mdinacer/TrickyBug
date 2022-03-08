import { ProjectDetails } from "../../../models/project";
import LabelItem from "../../common/LabelItem";

interface Props {
  project: ProjectDetails;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <div className="relative max-w-md mx-auto mb-5 flex-auto w-full flex flex-col gap-3">
      <p className=" font-Oswald text-3xl font-thin uppercase  underline-offset-2">
        info
      </p>
      <LabelItem
        title="Last update"
        value={new Date(project.creationDate).toLocaleDateString()}
      />

      <LabelItem
        title="Creation Date"
        value={
          project.lastUpdate
            ? new Date(project?.lastUpdate).toLocaleDateString()
            : new Date(project?.creationDate).toLocaleDateString()
        }
      />

      <LabelItem
        title="Tickets Count"
        value={`${project.ticketsCount} ${
          project.ticketsCount > 1 ? "Tickets" : "Ticket"
        }`}
      />

      <LabelItem
        title="Current Phase"
        value={project.actualPhase ?? "Starting"}
      />
    </div>
  );
}

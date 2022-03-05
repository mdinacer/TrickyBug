import { Project } from "../../../models/project";

interface Props {
  project: Project;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <div className="relative max-w-sm mx-auto mb-5 flex-auto w-full">
      <p className=" font-Oswald text-lg font-bold uppercase underline underline-offset-1">
        info
      </p>
      <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end">
        <span className="font-Montserrat text-sm">Creation Date</span>
        <span className="font-Montserrat text-lg">
          {new Date(project.creationDate).toLocaleDateString()}
        </span>
      </p>
      <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end ">
        <span className="font-Montserrat text-sm">Last update</span>
        <span className="font-Montserrat text-lg">
          {project.lastUpdate
            ? new Date(project?.lastUpdate).toLocaleDateString()
            : new Date(project?.creationDate).toLocaleDateString()}
        </span>
      </p>
      <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end">
        <span className="font-Montserrat text-sm">Tickets Count</span>
        <span className="font-Montserrat text-lg">
          {`${project.ticketsCount} ${
            project.ticketsCount > 1 ? "Tickets" : "Ticket"
          }`}
        </span>
      </p>
      <p className=" font-Montserrat text-lg w-full flex flex-row justify-between items-end">
        <span className="font-Montserrat text-sm">Current Phase</span>
        <span className="font-Montserrat text-lg">
          {project.actualPhase ?? "Starting"}
        </span>
      </p>
    </div>
  );
}

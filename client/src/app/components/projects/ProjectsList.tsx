import { Project } from "../../models/project";
import ProjectListItem from "./ProjectListItem";

interface Props {
  projects: Project[];
}

export default function ProjectsList({ projects }: Props) {
  return (
    <div className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {projects.map((project) => (
        <ProjectListItem project={project} key={project.id} />
      ))}
    </div>
  );
}

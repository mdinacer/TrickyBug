import { Project } from "../../../models/project";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  return (
    <div className="relative w-full max-w-sm mx-auto my-5 flex-initial">
      <h1 className="flex-initial text-5xl font-Oswald mb-10 uppercase">
        {project.title}
      </h1>
      <p className=" font-Oswald text-lg font-bold uppercase underline underline-offset-1">
        Description
      </p>
      <p className=" font-Montserrat text-lg ">{project.description}</p>
    </div>
  );
}

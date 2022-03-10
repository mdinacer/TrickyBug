import { Project } from "../../../models/project";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  return (
    <div className="relative w-full max-w-md mx-auto ">
      <h1 className="flex-initial text-4xl lg:text-5xl font-Oswald mb-5 uppercase">
        {project.title}
      </h1>
      <p className="font-Oswald text-3xl font-thin uppercase leading-loose flex-initial">
        Description
      </p>
      <p className=" font-Montserrat text-xl flex-auto ">
        {project.description}
      </p>
    </div>
  );
}

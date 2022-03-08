import { Project } from "../../../models/project";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  return (
    <div className="relative w-full max-w-md mx-auto my-5 flex-initial">
      <h1 className="flex-initial text-6xl font-Oswald mb-10 uppercase">
        {project.title}
      </h1>
      <p className="font-Oswald text-3xl font-thin uppercase underline-offset-2 leading-loose">
        Description
      </p>
      <p className=" font-Montserrat text-xl ">{project.description}</p>
    </div>
  );
}

import { TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import useProjects from "../../hooks/useProjects";

export default function AdminProjectsList() {
  const { projects, projectsLoaded, metaData } = useProjects();

  return (
    <div>
      {projectsLoaded && projects.length > 0 && (
        <ul className="list-none">
          {projects.map((project) => (
            <li key={project.id} className="relative list-item ">
              <div className=" flex flex-col lg:flex-row justify-between border-b border-b-gray-400 gap-y-3 lg:gap-y-0 lg:items-end py-5">
                <div className="flex-auto">
                  {!project.isActive && (
                    <p className="font-Oswald text-base font-thin text-gray-500">
                      Archived
                    </p>
                  )}
                  <Link to={`/projects/${project.slug}`}>
                    <p className="font-Oswald font-thin text-2xl ">
                      <span>{project.title}</span>
                    </p>
                  </Link>
                  <p className=" font-Montserrat font-thin text-lg max-w-3xl ">
                    {project.description}
                  </p>
                </div>

                <div className="px-10 self-end ml-auto flex-initial">
                  <button
                    type="button"
                    title="edit"
                    className="flex flex-row gap-x-2"
                    onClick={() => {}}
                  >
                    <TrashIcon className="h6 w-6 text-red-500" />
                    <p className=" font-Oswald text-lg font-thin">
                      {project.isActive ? "Archive" : "Delete"}
                    </p>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

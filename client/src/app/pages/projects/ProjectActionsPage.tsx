import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import LoadingComponent from "../../components/common/LoadingComponent";
import { ProjectAction } from "../../models/action";
import { PaginationParams } from "../../models/pagingParams";
import { Project } from "../../models/project";
import { getPaginationParams } from "../../util/queryParams";

export default function ProjectActionsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);
  const [actions, setActions] = useState<ProjectAction[]>([]);
  const [loading, setLoading] = useState(false);
  const [paginationParams, setPaginationParams] = useState<PaginationParams>({
    searchTerm: null,
    pageNumber: 1,
    pageSize: 10,
  });

  const loadProject = useCallback((slug: string) => {
    setLoading(true);
    agent.Projects.details(slug)
      .then((response) => {
        setProject(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    if (slug) {
      loadProject(slug);
    }
    return () => {
      setProject(undefined);
    };
  }, [loadProject, slug]);

  const loadActions = useCallback(
    (id: string) => {
      setLoading(true);
      const params = getPaginationParams(paginationParams);
      agent.Projects.listActions(id, params)
        .then((response) => {
          setActions(response);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoaded(true);
          setLoading(false);
        });
    },
    [paginationParams]
  );

  useEffect(() => {
    if (project && !loaded) {
      loadActions(project.id);
    }

    return () => {
      setActions([]);
    };
  }, [loadActions, loaded, project]);

  useEffect(() => {
    if (project && paginationParams) {
      loadActions(project.id);
    }
  }, [loadActions, project, paginationParams]);

  if (loading)
    return (
      <div className="py-20 w-screen h-screen bg-slate-300 flex items-center justify-center">
        <LoadingComponent message={"Loading Tickets..."} />
      </div>
    );
  if (!project) return <div className="py-20">Not Found</div>;

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 ">
      <div className="container mx-auto flex flex-col  w-full rounded-md overflow-hidden">
        <div className=" w-full border-b-2 py-1 border-b-black flex flex-row justify-between items-end">
          <h1 className="flex-initial text-5xl font-Oswald  uppercase">
            {project.title}
          </h1>
          <p className="text-2xl font-Oswald uppercase font-thin">Tickets</p>
        </div>

        {/* {!fromPhase && (
          <TicketsFilters
            params={paginationParams}
            setParams={(value) => setPaginationParams(value)}
          />
        )} */}

        {actions.length > 0 ? (
          <ul className="list-none flex flex-col py-5 gap-y-5">
            {actions.map((action) => (
              <li key={action.id} className="list-item  ">
                <div className="flex flex-row justify-start items-center px-5 border-b border-b-black">
                  <p className="font-Oswald text-xl font-thin w-full max-w-[6rem]">
                    {format(new Date(action.actionDate), "dd-MM-yy")}
                  </p>
                  <div className="">
                    <p className=" font-Oswald font-thin text-2xl">
                      {action.title}
                    </p>
                    <p className=" font-Montserrat text-xl ">
                      {action.description}
                    </p>
                  </div>
                  <p className="ml-auto font-Oswald uppercase font-thin text-lg">
                    {action.author}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="h-20 w-full flex items-center justify-center">
            <p className="font-Montserrat text-lg">
              This project have no tickets
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

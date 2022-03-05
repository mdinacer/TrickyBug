import { lazy, useEffect, useState } from "react";
import agent from "../../../api/agent";
import { ProjectMember } from "../../../models/member";

const MembersList = lazy(() => import("../../Members/MembersList"));

interface Props {
  projectId: string;
}

export default function ProjectMembers({ projectId }: Props) {
  const [members, setMembers] = useState<ProjectMember[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (projectId && !loaded) {
      agent.Projects.listMembers(projectId)
        .then((response) => {
          setMembers(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoaded(false));
    }

    return () => {
      setMembers([]);
    };
  }, [loaded, projectId]);

  return (
    <div className="max-w-sm mx-auto my-10 mt-auto flex-initial w-full">
      <p className=" font-Oswald text-lg font-bold uppercase underline underline-offset-1 pb-3">
        Team
      </p>
      {members.length > 0 ? (
        <MembersList members={members} />
      ) : (
        <p className=" font-Montserrat text-base">The members list is empty</p>
      )}
    </div>
  );
}

import { PencilIcon } from "@heroicons/react/solid";
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
    <div className="max-w-md mx-auto my-10 mt-auto flex-initial w-full">
      <p className="font-Oswald text-3xl pb-4 font-thin uppercase underline-offset-2">
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

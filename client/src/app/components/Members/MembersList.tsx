import { ProjectMember } from "../../models/member";
import MembersListItem from "./MembersListItem";

interface Props {
  members: ProjectMember[];
}

export default function MembersList({ members }: Props) {
  return (
    <ul className=" list-none flex flex-col gap-y-1">
      {members.map((member) => (
        <li className=" py-1 rounded-md  flex items-center">
          <MembersListItem member={member} />
        </li>
      ))}
    </ul>
  );
}

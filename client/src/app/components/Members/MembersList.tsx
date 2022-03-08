import { ProjectMember } from "../../models/member";
import LabelItem from "../common/LabelItem";
interface Props {
  members: ProjectMember[];
}

export default function MembersList({ members }: Props) {
  return (
    <ul className=" list-none flex flex-col gap-y-1">
      {members.map((member) => (
        <li
          key={member.userId}
          className=" py-1 rounded-md   flex items-center"
        >
          <LabelItem title={member.userName} value={member.title} />
        </li>
      ))}
    </ul>
  );
}

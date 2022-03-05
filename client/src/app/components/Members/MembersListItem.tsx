import { ProjectMember } from "../../models/member";

interface Props {
  member: ProjectMember;
}

export default function MembersListItem({ member }: Props) {
  return (
    <div className=" flex flow-row justify-between items-end w-full border-b border-b-white">
      <p className="font-Montserrat uppercase text-xl font-bold">
        {member.userName}
      </p>
      <p className="font-Oswald text-base  uppercase font-thin">
        {member.title}
      </p>
    </div>
  );
}

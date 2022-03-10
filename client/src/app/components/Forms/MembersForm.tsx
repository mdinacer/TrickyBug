import { PlusIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import agent from "../../api/agent";
import { CreateMember } from "../../models/member";
import { AppUserFull } from "../../models/user";

interface Props {
  isEdit: boolean;
  projectId: string;
  members: CreateMember[];
  setMembers: (members: CreateMember[]) => void;
}

export type MemberItemStatus = "Added" | "Updated" | "Removed";

export default function MembersForm({
  isEdit,
  projectId,
  members,
  setMembers,
}: Props) {
  const [users, setUsers] = useState<AppUserFull[]>([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addedMembers, setAddedMembers] = useState<string[]>([]);
  const [removedMembers, setRemovedMembers] = useState<string[]>([]);

  useEffect(() => {
    if (!usersLoaded) {
      setLoading(true);
      agent.Account.listAll()
        .then((response) => {
          setUsers(response);
          setUsersLoaded(true);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [usersLoaded]);

  // const loadMembers = useCallback(
  //   (projectId: string) => {
  //     setLoading(true);
  //     agent.Projects.listMembers(projectId)
  //       .then((members: ProjectMember[]) => {
  //         const membersList = members.map((member) => ({
  //           userId: member.userId,
  //           username: member.userName,
  //           projectId,
  //           isLeader: member.isLeader,
  //         }));
  //         const userIds = members.map((m) => m.userId);
  //         setMembers(members);
  //         setAddedMembers(userIds);
  //         reset({ members: membersList });
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   },
  //   [reset]
  // );

  // useEffect(() => {
  //   if (projectId && usersLoaded) {
  //     loadMembers(projectId);
  //   }
  // }, [loadMembers, projectId, usersLoaded]);

  // function handleAddMember(user: AppUserFull) {
  //   append({
  //     userId: user.id,
  //     username: user.displayName,
  //     projectId,
  //     isLeader: false,
  //     role: "",
  //   });
  //   setAddedMembers([...addedMembers, user.id]);
  //}

  // function handleRemoveMember(index: number, userId: string) {
  //   remove(index);
  //   const items = addedMembers.filter((m) => m !== userId);

  //   if (isEdit) {
  //     setRemovedMembers([...removedMembers, userId]);
  //   }
  //   setAddedMembers(items);
  // }

  const itemExists = (userId: string) => {
    return addedMembers.some((m) => m === userId);
  };

  //if (loading) return <LoadingComponent message="Loading users, please wait" />;
  if (usersLoaded && users.length === 0) return <p>no users</p>;

  const handleAddUser = (user: AppUserFull) => {
    if (members.some((m) => m.userId === user.id)) {
      const items = members.filter((m) => m.userId !== user.id);
      setMembers(items);
    } else {
      const item: CreateMember = {
        userId: user.id,
        isLeader: false,
      };
      setMembers([...members, item]);
    }
  };

  const styles = {
    menu: `list-none flex flex-col flex-wrap gap-2`,
    menuItem: `relative bg-slate-200 px-3 rounded-sm flex flex-row justify-start items-center w-full h-auto`,
    menuItemText: `font-Oswald font-thin text-2xl`,
  };

  return (
    <div className="w-full h-full bg-slate-100 overflow-hidden py-5">
      <ul className={styles.menu}>
        {users.map((user) => (
          <li key={user.id} className={`${styles.menuItem} py-2 pl-5 pr-10`}>
            <div className="w-full">
              <p className={`${styles.menuItemText} w-full`}>
                {user.displayName}
              </p>
              <p className=" font-Montserrat font-thin text-gray-500 uppercase">
                {user.title}
              </p>
            </div>
            {!itemExists(user.id) ? (
              <button
                type="button"
                title="add member"
                onClick={() => {}}
                className=""
              >
                <PlusIcon className="h-6 w-6" />
              </button>
            ) : (
              <p className=" font-Oswald font-thin text-lg text-gray-500">
                Added
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

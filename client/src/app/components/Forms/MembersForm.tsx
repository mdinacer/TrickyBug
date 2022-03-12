import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import agent from "../../api/agent";
import { ProjectMember } from "../../models/member";
import { AppUserFull } from "../../models/user";
import Dropdown from "../common/Dropdown";

interface Props {
  projectId: string;
  onClose: () => void;
}

export default function MembersForm({ projectId, onClose }: Props) {
  const [users, setUsers] = useState<AppUserFull[]>([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);
  const [members, setMembers] = useState<{ name: string; id: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);

  const loadMembers = useCallback(async (projectId: string) => {
    try {
      const result: ProjectMember[] = await agent.Projects.listMembers(
        projectId
      );

      const membersList = result.map((m) => ({
        name: m.userName,
        id: m.userId,
      }));

      const leader = result.find((u) => u.isLeader);

      setSelectedLeader(leader?.userName ?? null);

      setMembers(membersList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadUsers = useCallback(async () => {
    try {
      const result: AppUserFull[] = await agent.Account.listAll();
      setUsers(result);
      setUsersLoaded(true);
      await loadMembers(projectId);
    } catch (error) {
      console.log(error);
    } finally {
      setUsersLoading(false);
    }
  }, [loadMembers, projectId]);

  useEffect(() => {
    if (!usersLoaded && !usersLoading) {
      setUsersLoading(true);
      loadUsers();
    }
  }, [loadUsers, usersLoaded, usersLoading]);

  const itemExists = (id: string) => {
    return members.some((m) => m.id === id);
  };

  const handleAddMember = async (user: AppUserFull) => {
    try {
      setLoading(true);
      await agent.Members.create(projectId, {
        userId: user.id,
        isLeader: false,
      });
      setMembers([...members, { id: user.id, name: user.displayName }]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMember = async (memberId: string) => {
    try {
      setLoading(true);
      await agent.Members.delete(projectId, memberId);
      const list = members.filter((m) => m.id !== memberId);
      setMembers(list);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSetLeader = async (userId: string) => {
    try {
      await agent.Members.setLeader(projectId, userId);
      const leader = members.find((u) => u.id === userId);
      setSelectedLeader(leader?.name ?? null);
    } catch (error) {}
  };

  const styles = {
    menu: `list-none flex flex-col h-auto flex-wrap gap-2 `,
    menuItem: `relative bg-slate-200 px-3 rounded-sm flex flex-row justify-start items-center w-full h-auto`,
    menuItemText: `font-Oswald font-thin text-2xl`,
  };

  return (
    <div className="w-full h-full min-h-screen bg-slate-100 overflow-hidden pt-20 flex items-center justify-center">
      <div className="w-full max-w-xl flex flex-col gap-y-5  px-5">
        <p className=" font-Oswald text-4xl font-thin uppercase leading-loose flex-initial">
          Project Members
        </p>
        <div className="flex-initial">
          <Dropdown
            title="Leader"
            items={members.map((u) => ({ name: u.name, value: u.id }))}
            selectedValue={selectedLeader}
            onChange={(value) => handleSetLeader(value)}
          />
        </div>
        <div className="flex-auto overflow-y-auto overflow-x-hidden h-full max-h-[60vh]">
          <ul className={styles.menu}>
            {users.map((user) => (
              <li
                key={user.id}
                className={`${styles.menuItem} py-2 pl-5 pr-10`}
              >
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
                    onClick={() => handleAddMember(user)}
                    className=""
                  >
                    <PlusIcon className="h-6 w-6" />
                  </button>
                ) : (
                  <button
                    type="button"
                    title="add member"
                    onClick={() => handleRemoveMember(user.id)}
                    className=""
                  >
                    <MinusIcon className="h-6 w-6 text-red-500" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-initial">
          <button
            className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

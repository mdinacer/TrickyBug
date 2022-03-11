import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import agent from "../../api/agent";
import { AppUserFull } from "../../models/user";
import AdminRolesForm from "./RolesForm";

export default function AdminUsersList() {
  const [users, setUsers] = useState<AppUserFull[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AppUserFull | null>(null);
  const isEditRoles = !!selectedUser;

  const loadUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await agent.Account.listAll();
      setUsers(result);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      loadUsers();
    }
  }, [isLoaded, loadUsers]);

  return (
    <div>
      {!isEditRoles ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className=" flex flex-col lg:flex-row justify-between border-b border-b-gray-400 gap-y-3 lg:gap-y-0 lg:items-end py-5">
                <div className="flex-auto">
                  {!user.isActive && (
                    <p className="font-Oswald text-base font-thin text-gray-500">
                      Archived
                    </p>
                  )}
                  <p className=" font-Oswald font-thin text-2xl ">
                    {user.displayName}
                  </p>
                  <p className=" font-Montserrat font-thin text-lg max-w-3xl ">
                    {user.title}
                  </p>
                </div>

                <div className="px-10 self-end ml-auto flex-initial flex flex-row gap-x-5">
                  <button
                    type="button"
                    title="edit"
                    className="flex flex-row gap-x-2"
                    onClick={() => setSelectedUser(user)}
                  >
                    <PencilAltIcon className="h6 w-6" />
                    <p className=" font-Oswald text-lg font-thin">Roles</p>
                  </button>

                  <button
                    type="button"
                    title="edit"
                    className="flex flex-row gap-x-2 "
                    onClick={() => setSelectedUser(user)}
                  >
                    <TrashIcon className="h6 w-6  text-red-500" />
                    <p className=" font-Oswald text-lg font-thin">
                      {user.isActive ? "Archive" : "Delete"}
                    </p>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <AdminRolesForm
          user={selectedUser}
          handleClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

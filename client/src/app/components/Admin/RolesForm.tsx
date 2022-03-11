import { useCallback, useEffect, useState } from "react";
import agent from "../../api/agent";
import AppCheckbox from "../common/AppCheckbox";
import { AppUserFull } from "../../models/user";

interface Props {
  user: AppUserFull;
  handleClose: () => void;
}

export default function AdminRolesForm({ user, handleClose }: Props) {
  const [rolesLoaded, setRolesLoaded] = useState(false);
  const [rolesLoading, setRolesLoading] = useState(false);
  const [roles, setRoles] = useState<string[]>([]);
  const [userRolesLoaded, setUserRolesLoaded] = useState(false);
  const [userRolesLoading, setUserRolesLoading] = useState(false);
  const [userRoles, setUserRoles] = useState<string[]>([]);

  const loadRoles = useCallback(async () => {
    try {
      var result = await agent.Admin.listRoles();
      setRoles(result);
      setRolesLoaded(true);
    } catch (error) {
      console.log(error);
    } finally {
      setRolesLoading(false);
    }
  }, []);

  const loadUserRoles = useCallback(async (id: string) => {
    try {
      var result = await agent.Admin.listUserRoles(id);
      setUserRoles(result);
      setUserRolesLoaded(true);
    } catch (error) {
      console.log(error);
    } finally {
      setUserRolesLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user && !userRolesLoaded && !userRolesLoading) {
      setUserRolesLoading(true);
      loadUserRoles(user.id);
    }
  }, [loadUserRoles, user, userRolesLoaded, userRolesLoading]);

  useEffect(() => {
    if (!rolesLoading && !rolesLoaded) {
      setRolesLoading(true);
      loadRoles();
    }
  }, [loadRoles, rolesLoaded, rolesLoading]);

  const handleRoleChange = (role: string, checked: boolean) => {
    if (!checked) {
      const items = userRoles.filter((r) => r !== role);
      setUserRoles(items);
      removeRoleAsync(user.id, role);
    } else {
      setUserRoles([...userRoles, role]);
      addRoleAsync(user.id, role);
    }
  };

  const addRoleAsync = async (id: string, role: string) => {
    await agent.Admin.addRole(user.id, role);
  };

  const removeRoleAsync = async (id: string, role: string) => {
    await agent.Admin.removeRole(user.id, role);
  };

  return (
    <div className="py-4 flex items-center justify-center">
      <div className=" max-w-md w-full">
        <p className=" font-Oswald text-4xl font-thin  py-5">
          {`${user.displayName}'s Roles`}
        </p>
        <div>
          {roles && roles.length > 0 && (
            <ul className=" list-none flex flex-col gap-y-5 w-full">
              {roles.map((role, index) => (
                <li key={index}>
                  <div>
                    <AppCheckbox
                      label={role}
                      isChecked={userRoles.includes(role)}
                      onChange={(value) => handleRoleChange(role, value)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-row gap-x-0 mx-auto w-full justify-center py-5">
          <button
            className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
            type="submit"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

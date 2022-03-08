import { PlusIcon, XIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import agent from "../../api/agent";
import { CreateMember, ProjectMember } from "../../models/member";
import { AppUserFull } from "../../models/user";
import AppTextInput from "../common/TextInput";

interface Props {
  isEdit: boolean;
  projectId: string;
}

export default function MembersForm({ isEdit, projectId }: Props) {
  const [users, setUsers] = useState<AppUserFull[]>([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectMembers, setProjectMembers] = useState<ProjectMember[]>([]);
  const [addedMembers, setAddedMembers] = useState<string[]>([]);
  const [removedMembers, setRemovedMembers] = useState<string[]>([]);

  const { control, handleSubmit, reset } = useForm({
    mode: "all",
    //resolver: yupResolver<any>(productValidation)
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

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

  const loadMembers = useCallback(
    (projectId: string) => {
      setLoading(true);
      agent.Projects.listMembers(projectId)
        .then((members: ProjectMember[]) => {
          const membersList = members.map((member) => ({
            userId: member.userId,
            username: member.userName,
            title: member.title,
            projectId,
            isLeader: member.isLeader,
            role: member.role,
          }));
          const userIds = members.map((m) => m.userId);
          setProjectMembers(members);
          setAddedMembers(userIds);
          reset({ members: membersList });
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    },
    [reset]
  );

  useEffect(() => {
    if (projectId && usersLoaded) {
      loadMembers(projectId);
    }
  }, [loadMembers, projectId, usersLoaded]);

  function handleAddMember(user: AppUserFull) {
    append({
      userId: user.id,
      username: user.displayName,
      projectId,
      isLeader: false,
      role: "",
    });
    setAddedMembers([...addedMembers, user.id]);
  }

  function handleRemoveMember(index: number, userId: string) {
    remove(index);
    const items = addedMembers.filter((m) => m !== userId);

    if (isEdit) {
      setRemovedMembers([...removedMembers, userId]);
    }
    setAddedMembers(items);
  }

  const itemExists = (userId: string) => {
    return addedMembers.some((m) => m === userId);
  };

  async function handleSubmitData(data: FieldValues) {
    if (!projectId) return;
    const list: CreateMember[] = data.members.map((m: CreateMember) => ({
      userId: m.userId,
      role: m.role,
      projectId,
      isLeader: m.isLeader,
    }));

    if (isEdit) {
      let newItems = list.filter(
        (i: any) => !projectMembers.map((i) => i.userId).includes(i.userId)
      );

      console.log(newItems);

      if (newItems.length > 0) {
        try {
          await agent.Members.createRange(projectId, newItems);
          console.log("Adding Members:", newItems);
        } catch (error) {
          console.log(error);
        } finally {
          newItems = [];
        }
      }
      let oldItems = list.filter((i: any) =>
        projectMembers.map((i) => i.userId).includes(i.userId)
      );
      if (oldItems.length > 0) {
        let itemsToUpdate: CreateMember[] = [];
        oldItems.forEach((i) => {
          const oldItem = projectMembers.find((o) => o.userId === i.userId);
          if (i.title !== oldItem!.title) {
            itemsToUpdate.push(i);
          }
        });
        console.log("items to update: ", itemsToUpdate);

        if (itemsToUpdate.length > 0) {
          try {
            await agent.Members.updateRange(projectId, itemsToUpdate);
          } catch (error) {
            console.log(error);
          } finally {
            oldItems = [];
            itemsToUpdate = [];
          }
        }
      }

      if (removedMembers.length > 0) {
        try {
          console.log(removedMembers);
          await agent.Members.deleteRange(projectId, removedMembers);
        } catch (error) {
          console.log(error);
        }
      }
      loadMembers(projectId!);
    } else {
      try {
        await agent.Members.createRange(projectId, list);
      } catch (error) {
        console.log(error);
      }
    }
  }

  //if (loading) return <LoadingComponent message="Loading users, please wait" />;
  if (usersLoaded && users.length === 0) return <p>no users</p>;

  const styles = {
    menu: `list-none flex flex-col flex-wrap gap-2`,
    menuItem: `relative bg-slate-600 text-white px-3 rounded-sm flex flex-row justify-start items-center w-full h-auto`,
    menuItemText: `font-Oswald font-thin text-2xl`,
  };

  return (
    <div className="w-full h-full bg-slate-400 overflow-hidden py-10">
      <div className="w-full container mx-auto flex flex-row ">
        <div className=" max-w-lg w-full">
          <p className="font-Oswald text-3xl font-thin pb-4">Available Users</p>
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
                  <p className=" font-Montserrat font-thin text-gray-300 uppercase">
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
                  <p className=" font-Oswald font-thin text-lg text-gray-300">
                    Added
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="w-full pl-10"
        >
          <div className=" w-full flex flex-row justify-between items-center  ">
            <p className="font-Oswald text-3xl font-thin pb-4">
              Project Members
            </p>
            <div className="flex flex-row gap-x-2">
              {isEdit && projectId && removedMembers.length > 0 && (
                <input
                  className="cursor-pointer border-slate-800 border-2 text-black py-1 px-5 uppercase font-Oswald text-xl font-thin"
                  type="button"
                  value="Reset"
                  onClick={() => loadMembers(projectId)}
                />
              )}
              <input
                className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
                type="submit"
                value={isEdit ? "Update Members" : "Add Members"}
              />
            </div>
          </div>
          <ul className="list-none flex flex-col flex-wrap gap-2">
            {fields.map((field: Record<string, any>, index) => (
              <li
                key={field.id}
                className="relative bg-slate-600 text-white px-3 rounded-sm flex flex-row justify-start items-center w-auto h-auto"
              >
                <p className="font-Oswald font-thin text-2xl leading-loose px-2 max-w-[22rem] w-full">
                  <span>{field.username}</span>
                </p>

                <AppTextInput
                  control={control}
                  type={"text"}
                  name={`members.${index}.role`}
                  label="Assigned Role"
                  placeholder="Assigned Role"
                  rules={{
                    required: "Role is required",
                  }}
                  fullWidth
                />

                <button
                  type="button"
                  title="remove member"
                  className="ml-auto w-auto h-full px-5 "
                  onClick={() => handleRemoveMember(index, field.userId)}
                >
                  <XIcon className="h-6 w-6 mx-2" />
                </button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

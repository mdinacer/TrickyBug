import { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import agent from "../../api/agent";
import {
  IssueNature,
  IssueOccurrence,
  IssueSeverity,
  TicketPriority,
  TicketStatus,
} from "../../models/enums";
import { ProjectMember } from "../../models/member";
import { Project, ProjectDetails } from "../../models/project";
import { ProjectTicketFull } from "../../models/ticket";
import { useAppSelector } from "../../store/configureStore";
import { EnumToArray } from "../../util/enumToArray";
import { flattenObj } from "../../util/flattenObject";
import Dropdown from "../common/Dropdown";
import MediaDropZone from "../common/MediaDropZone";
import AppTextArea from "../common/TextArea";
import AppTextInput from "../common/TextInput";

interface Props {
  projectId: string;
  ticketId?: number | null;
  isFullScreen?: boolean;
  onClose: () => void;
}

export default function TicketForm({ projectId, ticketId, onClose }: Props) {
  const { isAdmin } = useAppSelector((state) => state.account);
  const [ticket, setTicket] = useState<ProjectTicketFull | null>(null);
  const isEdit = !!ticket;
  const [project, setProject] = useState<ProjectDetails | null>(null);
  const projectLoaded = !!project;
  const [members, setMembers] = useState<{ name: string; value: string }[]>([]);
  const {
    control,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = useForm({
    mode: "all",
  });
  const watchFile = watch("file", null);
  const loadMembers = useCallback(async (id: string) => {
    try {
      const result = await agent.Projects.listMembers(id);
      const items = result.map((member: ProjectMember) => ({
        name: member.userName,
        value: member.userId,
      }));
      setMembers(items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadProject = useCallback(
    async (id: string) => {
      try {
        const project = await agent.Projects.detailsById(id);
        setProject(project);
        setValue("projectId", project.id);
        await loadMembers(project.id);
      } catch (error) {
        console.log(error);
      }
    },
    [loadMembers, setValue]
  );

  const loadTicket = useCallback(async (id: number) => {
    try {
      const result = await agent.Tickets.details(id);
      setTicket(result);
      console.log("ticket", result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (projectId) {
      loadProject(projectId);
    }
  }, [loadProject, projectId]);

  useEffect(() => {
    if (ticketId) {
      loadTicket(ticketId);
    }
  }, [loadTicket, ticketId]);

  useEffect(() => {
    if (ticket && !watchFile && !isDirty) {
      reset(ticket);
    }

    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview);
    };
  }, [isDirty, reset, ticket, watchFile]);

  const handleOnChange = (name: any, value: any) => {
    setValue(name, value);
  };

  async function handleSubmitData(data: FieldValues) {
    if (!projectLoaded) return;
    const { file, description } = data; //{ ...data, projectId: project.id };

    const obj = {
      id: ticket ? ticket.id : 0,
      subject: data.subject,
      body: data.body,
      priority: data.priority,
      projectId: project.id,
      status: data.status,
      assignedMemberId: data.assignedMemberId,
      description,
    };

    const flatObj = { ...flattenObj(obj), "description.file": file };
    if (!project) return;
    try {
      if (isEdit) {
        await agent.Tickets.update(flatObj);
      }

      if (!isEdit) {
        await agent.Tickets.create(flatObj);
      }
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  }

  return (
    <div className="lg:fixed top-0 left-0 h-full min-h-screen w-screen bg-slate-100 z-[5] px-5 lg:px-0 flex items-center  py-20">
      <div className="container mx-auto flex flex-col max-w-4xl">
        <div className="flex flex-col lg:flex-row justify-between border-b border-b-white py-1 lg:items-end ">
          <p className="font-Oswald text-5xl uppercase">
            {isEdit ? "Edit Ticket" : "New Ticket"}
          </p>
          <p className="font-Oswald text-xl uppercase font-thin">
            {project?.title}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="w-full flex flex-col gap-y-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 text-black  lg:gap-x-10">
            <div className="flex flex-col gap-y-5 py-5">
              <AppTextInput
                type="text"
                control={control}
                label="Ticket Title"
                placeholder="Ticket Title"
                name="subject"
                rules={{
                  required: "Subject is required",
                }}
              />
              <AppTextInput
                type="text"
                control={control}
                label="Operating System"
                placeholder="Operating System"
                name="description.operatingSystem"
              />

              <AppTextInput
                type="text"
                control={control}
                label="Browser"
                placeholder="Browser"
                name="description.browser"
              />

              <AppTextArea
                rows={7}
                type="text"
                control={control}
                label="Ticket Description"
                placeholder="Ticket Description"
                name="body"
                rules={{
                  required: "Description is required",
                }}
              />
            </div>
            <div className="flex flex-col gap-y-5 py-5">
              <div className=" w-full flex flex-col  gap-y-5 ">
                <Dropdown
                  title="Priority"
                  items={EnumToArray(TicketPriority)}
                  onChange={(value) => handleOnChange("priority", value)}
                  selectedValue={ticket?.priority}
                />
                {isEdit && (ticket.isAssigned || project?.isLeader) && (
                  <Dropdown
                    title="Status"
                    items={EnumToArray(TicketStatus)}
                    onChange={(value) => handleOnChange("status", value)}
                    selectedValue={ticket?.status}
                  />
                )}
                {isEdit && (isAdmin || project?.isLeader) && (
                  <Dropdown
                    title="Assigned Member"
                    items={members}
                    onChange={(value) =>
                      handleOnChange("assignedMemberId", value)
                    }
                    selectedValue={ticket?.assignedMember}
                  />
                )}
                <Dropdown
                  title="Occurrence"
                  items={EnumToArray(IssueOccurrence)}
                  onChange={(value) =>
                    handleOnChange("description.occurrence", value)
                  }
                  selectedValue={ticket?.description.occurrence}
                />
                <Dropdown
                  title="Severity"
                  items={EnumToArray(IssueSeverity)}
                  onChange={(value) =>
                    handleOnChange("description.severity", value)
                  }
                  selectedValue={ticket?.description.severity}
                />
                <Dropdown
                  title="Nature"
                  items={EnumToArray(IssueNature)}
                  onChange={(value) =>
                    handleOnChange("description.nature", value)
                  }
                  selectedValue={ticket?.description.nature}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:h-[200px]">
            <div className="h-auto border-x-2 px-5 py-5 border-x-white text-white bg-slate-500 bg-opacity-50 flex-auto">
              <MediaDropZone control={control} name="file" />
            </div>
            <div className="flex flex-row h-full w-full border-x-2 px-5 border-x-white text-white bg-slate-500 bg-opacity-50">
              <div className=" mx-auto flex items-center justify-center">
                {watchFile ? (
                  <img
                    className=" object-auto w-auto object-center max-h-[200px]"
                    src={watchFile.preview}
                    alt="preview"
                  />
                ) : (
                  <img
                    className=" object-auto w-auto object-center max-h-[200px]"
                    src={ticket?.description.photo}
                    alt={ticket?.subject}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-0 mx-auto w-full justify-center lg:justify-end py-5">
            <input
              className="cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin"
              type="button"
              value="Cancel"
              onClick={onClose}
            />
            <input
              className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
              type="submit"
              value={isEdit ? "Update Ticket" : "Create Ticket"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

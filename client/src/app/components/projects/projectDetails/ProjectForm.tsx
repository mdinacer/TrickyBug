import { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import agent from "../../../api/agent";
import { CreateMember, ProjectMember } from "../../../models/member";
import { ProjectDetails } from "../../../models/project";
import { updateProject, setProject } from "../../../slices/projectSlice";
import { useAppDispatch } from "../../../store/configureStore";
import useMediaQuery from "../../../util/mediaQuery";
import MediaDropZone from "../../common/MediaDropZone";
import AppTextArea from "../../common/TextArea";
import AppTextInput from "../../common/TextInput";
import MembersForm from "../../Forms/MembersForm";

interface Props {
  project?: ProjectDetails | null;
  handleClose: () => void;
}

export default function ProjectForm({ project, handleClose }: Props) {
  const [projectId, setProjectId] = useState<string | null>(null);
  const [members, setMembers] = useState<CreateMember[]>([]);
  const isEdit = !!project;
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: "all",
    //resolver: yupResolver<any>(productValidation)
  });

  const watchFile = watch("file", null);
  const dispatch = useAppDispatch();

  async function handleSubmitData(data: FieldValues) {
    const item: any = { id: project?.id ?? 0, ...data };
    const hasChanged =
      project &&
      (project.title !== item.title ||
        project.description !== item.description ||
        item.file !== null);
    console.log(hasChanged);

    try {
      if (isEdit && hasChanged) {
        const result = await agent.Projects.update(item);
        dispatch(updateProject({ id: project.id, changes: { ...result } }));
      }

      if (!isEdit) {
        const result = await agent.Projects.create(item);
        dispatch(setProject(result));
        setProjectId(result.id);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  useEffect(() => {
    if (project) {
      setProjectId(project.id);
      if (!watchFile && !isDirty) {
        const item = {
          title: project.title,
          description: project.description,
        };
        reset(item, { keepTouched: true });
      }
    }

    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview);
    };
  }, [reset, watchFile, isDirty, project]);

  return (
    <div className="w-screen min-h-screen h-full py-16 bg-slate-100">
      <div className="container mx-auto px-5">
        <div className="container mx-auto py-5 border-b-2 border-b-black px-5 lg:px-0 ">
          <p className=" font-Oswald text-5xl">
            {isSubmitting
              ? "Please wait"
              : isEdit
              ? "Edit Project"
              : "New Project"}
          </p>
        </div>

        <div>
          <form className="py-10">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-y-5 max-w-xl w-full mx-auto">
                <p className="font-Oswald text-3xl font-thin pb-4">
                  Project Info
                </p>
                <AppTextInput
                  control={control}
                  name="title"
                  label="Title"
                  placeholder="Title"
                  rules={{ required: "Title is required" }}
                  fullWidth={!isMobile}
                />
                <AppTextArea
                  name="description"
                  placeholder="Description"
                  label="Description"
                  fullWidth={!isMobile}
                  rows={7}
                  control={control}
                  rules={{ required: "Description is required" }}
                />

                <div className="h-auto border-x-2 p-5  border-x-black  bg-slate-200 flex-auto">
                  <MediaDropZone control={control} name="file" />
                </div>

                <div className="flex flex-row h-full w-full border-x-2 px-5 border-x-black  bg-slate-200">
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
                        src={project?.photo}
                        alt={project?.title}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <p className="font-Oswald text-3xl font-thin pb-4">Members</p>
                <MembersForm
                  projectId={projectId!}
                  isEdit={isEdit}
                  members={members}
                  setMembers={setMembers}
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-0 mx-auto w-full justify-center py-10">
              <input
                className="cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin"
                type="button"
                value="Cancel"
                onClick={() => handleClose()}
              />
              <input
                className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
                type="submit"
                value={isEdit ? "Update Project" : "Create Project"}
              />
            </div>
          </form>
        </div>
      </div>
      {/* <div className="flex-auto my-auto mx-auto">
        <div className="container mx-auto py-5 border-b-2 border-b-black px-5 lg:px-0 ">
          <p className=" font-Oswald text-5xl">
            {isSubmitting
              ? "Please wait"
              : isEdit
              ? "Edit Project"
              : "New Project"}
          </p>

          <div>
            <p className="font-Oswald text-3xl font-thin pb-4">Project Info</p>
          </div>
        </div> */}

      {/* <div className="my-auto h-full flex-auto">
          <div className="container mx-auto pt-16">
            <form onSubmit={handleSubmit(handleSubmitData)}>
              <div className="grid grid-cols-1 lg:grid-cols-1 mx-auto w-full gap-10 px-5 lg:px-0 border-black">
                <div className=" w-full flex flex-col h-full">
                  <p className="font-Oswald text-3xl font-thin pb-4">
                    Project Info
                  </p>

                  <div className=" flex flex-col gap-y-5">
                    <div>
                      <AppTextInput
                        control={control}
                        name="title"
                        label="Title"
                        placeholder="Title"
                        rules={{ required: "Title is required" }}
                        fullWidth={!isMobile}
                      />
                    </div>

                    <div className="flex-auto">
                      <AppTextArea
                        name="description"
                        placeholder="Description"
                        label="Description"
                        fullWidth={!isMobile}
                        rows={7}
                        control={control}
                        rules={{ required: "Description is required" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col h-full">
                  <p className="font-Oswald text-3xl font-thin pb-4 flex-initial">
                    Project Image
                  </p>
                  <div className="flex flex-col gap-y-5">
                    <div className="h-auto border-x-2 p-5  border-x-black  bg-slate-200 flex-auto">
                      <MediaDropZone control={control} name="file" />
                    </div>
                    <div className="flex flex-row h-full w-full border-x-2 px-5 border-x-black  bg-slate-200">
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
                            src={project?.photo}
                            alt={project?.title}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col h-full">
                  <p className="font-Oswald text-3xl font-thin pb-4">
                    Image Preview
                  </p>
                  <div className="flex flex-row h-full w-full border-x-2 px-5 border-x-black  bg-slate-200">
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
                          src={project?.photo}
                          alt={project?.title}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <MembersForm
                  projectId={projectId!}
                  isEdit={isEdit}
                  members={members}
                  setMembers={setMembers}
                />
              </div>

              <div className="flex flex-row gap-x-0 mx-auto w-full justify-center py-10">
                <input
                  className="cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin"
                  type="button"
                  value="Cancel"
                  onClick={() => handleClose()}
                />
                <input
                  className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
                  type="submit"
                  value={isEdit ? "Update Project" : "Create Project"}
                />
              </div>
            </form>
          </div>

         
        </div> */}
    </div>
  );
}

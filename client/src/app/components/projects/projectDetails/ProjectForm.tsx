import { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import agent from "../../../api/agent";
import { ProjectDetails } from "../../../models/project";
import { updateProject, setProject } from "../../../slices/projectSlice";
import { useAppDispatch } from "../../../store/configureStore";
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
  const isEdit = !!project;

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
    <div className="w-screen min-h-screen h-full py-16 bg-slate-600 flex   ">
      <div className="flex-auto my-auto mx-auto">
        <div className="container mx-auto text-white py-5 border-b-2 border-b-white">
          <p className=" font-Oswald text-5xl">
            {isSubmitting
              ? "Pleas wait"
              : isEdit
              ? "Edit Project"
              : "New Project"}
          </p>
        </div>
        <div className="my-auto h-full flex-auto">
          <div className="container mx-auto pt-16 text-white">
            <form onSubmit={handleSubmit(handleSubmitData)}>
              <div className="grid grid-cols-3 w-full gap-10">
                <div className=" w-full flex flex-col h-full">
                  <p className="font-Oswald text-3xl font-thin pb-4">
                    Project Info
                  </p>

                  <div className=" flex flex-col gap-y-5">
                    <AppTextInput
                      control={control}
                      name="title"
                      label="Title"
                      placeholder="Title"
                      rules={{ required: "Title is required" }}
                      fullWidth
                    />

                    <AppTextArea
                      name="description"
                      placeholder="Description"
                      label="Description"
                      fullWidth
                      rows={4}
                      control={control}
                      rules={{ required: "Description is required" }}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col h-full">
                  <p className="font-Oswald text-3xl font-thin pb-4 flex-initial">
                    Project Image
                  </p>
                  <div className="h-auto border-x-2 px-5 border-x-white text-white bg-slate-500 flex-auto">
                    <MediaDropZone control={control} name="file" />
                  </div>
                </div>

                <div className="w-full flex flex-col h-full">
                  <p className="font-Oswald text-3xl font-thin pb-4">
                    Image Preview
                  </p>
                  <div className="flex flex-row h-full w-full border-x-2 px-5 border-x-white text-white bg-slate-500">
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

              <div className="flex flex-row gap-x-2 mx-auto w-full justify-center py-10">
                <input
                  className="cursor-pointer border-slate-500 border-2 text-slate-300 py-1 px-5 uppercase font-Oswald text-xl font-thin"
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

          <div className=" drop-shadow-md">
            {projectId && <MembersForm projectId={projectId} isEdit={isEdit} />}
          </div>
        </div>
      </div>
    </div>
  );
}

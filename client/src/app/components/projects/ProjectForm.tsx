import { lazy, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import agent from "../../api/agent";
import { Project } from "../../models/project";
import { setProject, updateProject } from "../../slices/projectSlice";
import { useAppDispatch } from "../../store/configureStore";

const MediaDropZone = lazy(() => import("../common/MediaDropZone"));

interface Props {
  project?: Project | null;
}

export default function ProjectForm({ project }: Props) {
  const isEdit = !!project;
  const {
    control,
    watch,
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, isDirty },
  } = useForm({
    mode: "all",
    //resolver: yupResolver<any>(productValidation)
  });

  const watchFile = watch("file", null);
  const dispatch = useAppDispatch();

  async function handleSubmitData(data: FieldValues) {
    const item = { id: project?.id ?? 0, ...data };
    try {
      if (isEdit) {
        const result = await agent.Projects.update(item);
        dispatch(updateProject({ id: project.id, changes: { ...result } }));
      } else {
        const result = await agent.Projects.create(item);
        dispatch(setProject(result));
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  useEffect(() => {
    if (project && !watchFile && !isDirty) {
      const item = {
        title: project.title,
        description: project.description,
      };
      reset(item);
    }

    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview);
    };
  }, [reset, watchFile, isDirty, project]);

  return (
    <form onSubmit={handleSubmit(handleSubmitData)}>
      <div className="grid grid-flow-row">
        <div className="flex flex-col gap-y-2">
          <label
            className="font-Montserrat text-sm uppercase font-bold"
            htmlFor="titleInput"
          >
            Title
          </label>
          <input
            autoComplete="off"
            id="titleInput"
            type={"text"}
            className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat mb-4"
            {...register("title")}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label
            className="font-Montserrat text-sm uppercase font-bold"
            htmlFor="descriptionInput"
          >
            Description
          </label>
          <textarea
            rows={3}
            autoComplete="off"
            id="descriptionInput"
            className="max-w-md w-full py-2 px-5 rounded-md font-Montserrat mb-4 resize-none"
            {...register("description")}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto w-auto">
        <MediaDropZone control={control} name="file" />

        <div className="flex items-center justify-center h-full w-full">
          {watchFile ? (
            <img
              className="rounded-md"
              src={watchFile.preview}
              alt="preview"
              style={{ maxHeight: 200 }}
            />
          ) : (
            <img
              className="rounded-md object-cover object-center max-h-[200px]"
              src={project?.photo}
              alt={project?.title}
            />
          )}
        </div>
      </div>
      <input
        type="submit"
        value="Add"
        className="py-2 px-5 bg-slate-600 text-white font-Montserrat rounded-md m-5"
      />
    </form>
  );
}

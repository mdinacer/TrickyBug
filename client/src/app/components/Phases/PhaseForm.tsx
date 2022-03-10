import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import agent from "../../api/agent";
import { ProjectPhase } from "../../models/phase";
import { projectSelectors } from "../../slices/projectSlice";
import { useAppSelector } from "../../store/configureStore";
import AppTextArea from "../common/TextArea";
import AppTextInput from "../common/TextInput";

interface Props {
  projectId: string;
  phase?: ProjectPhase | null;
  isFullScreen?: boolean;
  onClose: () => void;
}

export default function PhaseForm({ projectId, phase, onClose }: Props) {
  const isEdit = !!phase;
  const project = useAppSelector((state) =>
    projectSelectors.selectById(state, projectId)
  );
  const { control, handleSubmit, reset } = useForm({
    mode: "all",
    //resolver: yupResolver<any>(productValidation)
  });

  useEffect(() => {
    if (phase) {
      const item = {
        title: phase.title,
        description: phase.description,
      };
      reset(item, { keepTouched: true });
    }
  }, [phase, reset]);

  async function handleSubmitData(data: FieldValues) {
    const item: any = { ...data, projectId };

    if (!projectId) return;

    const itemChanged =
      phase &&
      (phase.title !== item.title || phase.description !== item.description);

    try {
      if (isEdit && itemChanged) {
        await agent.Phases.update({
          ...item,
          id: phase.id,
        });
      }

      if (!isEdit) {
        await agent.Phases.create(projectId, item);
      }
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  }

  return (
    <div className="absolute top-0 left-0 h-full w-full bg-slate-600 z-[5] px-5 lg:px-0 flex items-center justify-center py-20">
      <div className=" max-w-xl w-full text-white">
        <div>
          <div className="flex flex-row justify-between border-b border-b-white py-1 items-end ">
            <p className="font-Oswald text-5xl uppercase">
              {isEdit ? "Edit Phase" : "New Phase"}
            </p>
            <p className="font-Oswald text-xl uppercase font-thin">
              {project?.title}
            </p>
          </div>
          <form
            className="py-5 flex flex-col gap-y-5"
            onSubmit={handleSubmit(handleSubmitData)}
          >
            <AppTextInput
              name="title"
              placeholder="Title"
              label="Title"
              fullWidth
              control={control}
              rules={{ required: "Title is required" }}
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

            <div className="flex flex-row gap-x-2 mx-auto w-full justify-end py-5">
              <input
                className="cursor-pointer border-slate-500 border-2 text-slate-300 py-1 px-5 uppercase font-Oswald text-xl font-thin"
                type="button"
                value="Cancel"
                onClick={onClose}
              />
              <input
                className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
                type="submit"
                value={isEdit ? "Update Phase" : "Create Phase"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

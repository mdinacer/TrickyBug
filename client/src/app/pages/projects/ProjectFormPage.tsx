import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import MediaDropZone from "../../components/common/MediaDropZone";
import { setProject } from "../../slices/projectSlice";
import { useAppDispatch } from "../../store/configureStore";

export default function ProjectFormPage() {
  const { slug } = useParams<{ slug: string }>();
  const {
    control,
    setValue,
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
  const isEdit = false;

  async function handleSubmitData(data: FieldValues) {
    console.log(data);
    try {
      if (isEdit) {
        // const result = await agent.Admin.updateProduct(item);
        // dispatch(updateProduct({id: product.id, changes: {...result}}))
      } else {
        const result = await agent.Projects.create({ ...data });
        console.log(result);

        dispatch(setProject(result));
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  return (
    <div className="py-20 bg-slate-400 min-h-screen w-screen flex items-center justify-center">
      <div className="bg-slate-200 rounded-md p-10">
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
                  src={"..."}
                  alt={"..."}
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
      </div>
    </div>
  );
}

import { useForm, FieldValues } from "react-hook-form";
import AppTextArea from "../common/TextArea";
import AppTextInput from "../common/TextInput";

export default function CommentForm() {
  const { control, handleSubmit } = useForm({
    mode: "all",
    //resolver: yupResolver<any>(productValidation)
  });

  function handleSubmitData(data: FieldValues) {
    // dispatch(setProjectParams(data));
  }
  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className="flex flex-row">
      <AppTextArea
        rows={4}
        fullWidth
        control={control}
        label="search"
        placeholder="post a comment"
        name="searchTerm"
      />
      <input
        className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
        type="submit"
        value={"Post"}
      />
    </form>
  );
}

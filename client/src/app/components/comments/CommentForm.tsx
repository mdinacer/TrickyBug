import { useForm, FieldValues } from "react-hook-form";
import agent from "../../api/agent";
import useComments from "../../hooks/useComments";
import AppTextArea from "../common/TextArea";
import { HubConnection, HubConnectionState } from "@microsoft/signalr";

interface Props {
  ticketId: number;
}

export default function CommentForm({ ticketId }: Props) {
  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  async function handleSubmitData(data: FieldValues) {
    agent.Comments.create(ticketId, data)
      .then(() => {})
      .catch((error) => console.log(error));
  }
  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className="flex flex-row">
      <AppTextArea
        rows={4}
        fullWidth
        control={control}
        label="comment"
        placeholder="post a comment"
        name="body"
        rules={{ required: "Comment cant be empty" }}
      />
      <input
        className="cursor-pointer bg-slate-800 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
        type="submit"
        value={"Post"}
      />
    </form>
  );
}

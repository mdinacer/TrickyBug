import { TicketComment } from "../../models/comment";
import CommentForm from "./CommentForm";
import CommentsContainerHeader from "./CommentsContainerHeader";
import CommentsList from "./CommentsList";

interface Props {
  ticketId: number;
  comments: TicketComment[];
}

export default function CommentsContainer({ comments, ticketId }: Props) {
  return (
    <div className="h-full flex flex-col gap-y-5">
      <div className="flex-initial px-5 lg:px-0">
        <CommentsContainerHeader commentsCount={comments.length} />
      </div>
      <div className=" overflow-y-scroll overflow-x-hidden flex-auto h-full py-5 max-h-[60vh]">
        <CommentsList comments={comments} />
      </div>

      <div className=" flex-initial py-5">
        <CommentForm ticketId={ticketId} />
      </div>
    </div>
  );
}

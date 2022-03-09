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
    <>
      <div className="flex flex-row justify-between items-end border-b-2 border-black pb-1 flex-initial">
        <CommentsContainerHeader commentsCount={comments.length} />
      </div>
      <div className="flex-auto overflow-y-scroll overflow-x-hidden py-5 my-5 ">
        <CommentsList comments={comments} />
      </div>

      <CommentForm ticketId={ticketId} />
    </>
  );
}

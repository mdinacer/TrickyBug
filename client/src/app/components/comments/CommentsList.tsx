import { TicketComment } from "../../models/comment";
import CommentsListItem from "./CommentsListItem";

interface Props {
  comments: TicketComment[];
}

export default function CommentsList({ comments }: Props) {
  return (
    <ul className="flex flex-col gap-y-5 h-auto px-5">
      {comments.map((comment, index) => (
        <li
          key={index}
          className="w-full  overflow-auto bg-gray-100 drop-shadow-md lg:px-10 px-5 lg:rounded-sm h-auto py-3  flex flex-col justify-start items-start"
        >
          <CommentsListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}

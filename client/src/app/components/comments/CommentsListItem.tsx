import { formatDistance } from "date-fns";
import { TicketComment } from "../../models/comment";

interface Props {
  comment: TicketComment;
}

export default function CommentsListItem({ comment }: Props) {
  return (
    <>
      <div className="flex flex-row justify-between w-full items-center border-b border-gray-500 mb-3">
        <p className=" font-Oswald font-thin text-lg leading-loose">
          {comment.author}
        </p>

        <p className=" font-Montserrat text-xs  text-gray-700">
          {formatDistance(new Date(comment.creationDate), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
      <p className=" font-Montserrat min-w-[12rem]">{comment.body}</p>
    </>
  );
}

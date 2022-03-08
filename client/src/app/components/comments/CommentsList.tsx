import CommentsListItem from "./CommentsListItem";

interface Props {
  comments: any[];
}

export default function CommentsList({ comments }: Props) {
  return (
    <ul className="flex flex-col gap-y-2 pr-5">
      {comments.map((comment, index) => (
        <li
          key={index}
          className="w-full bg-slate-100 px-10 rounded-md h-auto py-5  flex flex-col justify-start items-start"
        >
          <CommentsListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}

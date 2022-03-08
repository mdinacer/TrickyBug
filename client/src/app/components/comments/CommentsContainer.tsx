import CommentForm from "./CommentForm";
import CommentsContainerHeader from "./CommentsContainerHeader";
import CommentsList from "./CommentsList";

export default function CommentsContainer() {
  return (
    <>
      <div className="flex flex-row justify-between items-end border-b-2 border-black pb-1 flex-initial">
        <CommentsContainerHeader />
      </div>
      <div className="flex-auto overflow-y-scroll overflow-x-hidden py-5 my-5 ">
        <CommentsList comments={Array.from(Array(52).keys())} />
      </div>

      <CommentForm />
    </>
  );
}

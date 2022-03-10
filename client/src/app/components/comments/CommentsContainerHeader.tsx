interface Props {
  commentsCount: number;
}

export default function CommentsContainerHeader({ commentsCount }: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full">
      <p className=" font-Oswald font-thin uppercase text-3xl">Comments</p>

      <p className=" font-Oswald text-lg uppercase font-thin text-gray-400">
        {commentsCount <= 0
          ? "No Comments"
          : commentsCount === 1
          ? "1 Comment"
          : `${commentsCount} comments`}
      </p>
    </div>
  );
}

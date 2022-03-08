interface Props {
  commentsCount?: number;
}

export default function CommentsContainerHeader({ commentsCount = 52 }: Props) {
  return (
    <>
      <p className=" font-Oswald uppercase text-2xl">Comments</p>

      <p className=" font-Oswald text-lg uppercase font-thin">
        {commentsCount <= 0
          ? "No Comments"
          : commentsCount === 1
          ? "1 Comment"
          : `${commentsCount} comments`}
      </p>
    </>
  );
}

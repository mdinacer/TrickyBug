import { formatDistance } from "date-fns";

interface Props {
  comment: any;
}

export default function CommentsListItem({ comment }: Props) {
  return (
    <>
      <div className="flex flex-row justify-between w-full items-center border-b border-gray-500 mb-3">
        <p className=" font-Oswald font-thin text-lg leading-loose">
          Bob Bobbity
        </p>

        <p className=" font-Montserrat text-xs  text-gray-700">
          {formatDistance(new Date("02-12-2022"), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
      <p className=" font-Montserrat min-w-[12rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora
        distinctio minima incidunt praesentium perspiciatis aspernatur. Quia
        repellat molestiae quaerat maiores! At animi beatae quas?
      </p>

      <p className=" font-Montserrat">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </>
  );
}

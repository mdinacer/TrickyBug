import { format } from "date-fns";
import { ProjectTicketFull } from "../../models/ticket";

interface Props {
  ticket: ProjectTicketFull;
}

export default function TicketHeader({ ticket }: Props) {
  return (
    <div className="flex flex-col gap-y-5 h-full">
      <div className="flex lg:flex-row flex-col justify-between lg:items-end border-b-2 border-black pb-1 flex-initial">
        <p className=" font-Oswald text-4xl">{ticket.project}</p>
        <p className=" font-Oswald text-lg uppercase font-thin">
          Ticket #{ticket.id}
        </p>
      </div>

      <div className="w-full flex-initial">
        <p className=" font-Oswald leading-loose font-thin text-xl  uppercase">
          Subject
        </p>
        <p className=" font-Montserrat text-lg pb-3">{ticket.subject}</p>
      </div>

      <div className="w-full flex-auto">
        <p className=" font-Oswald leading-loose font-thin text-xl  uppercase">
          Description
        </p>
        <p className="font-Montserrat text-base">{ticket.body}</p>
      </div>

      <div className="pt-5 flex flex-col fla">
        <p className=" font-Oswald uppercase text-gray-600 pt-3 text-right font-thin flex flex-row gap-x-2 justify-end">
          <span>Posted the</span>
          <span>{format(new Date(ticket.creationDate), "EE dd MMM yy")}</span>
          <span>by</span>
          <span>{ticket.author}</span>
        </p>
      </div>
    </div>
  );
}

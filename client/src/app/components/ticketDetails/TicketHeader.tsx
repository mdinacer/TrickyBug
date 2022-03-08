import { format } from "date-fns";
import { ProjectTicketFull } from "../../models/ticket";

interface Props {
  ticket: ProjectTicketFull;
}

export default function TicketHeader({ ticket }: Props) {
  return (
    <>
      <div className="flex flex-row justify-between items-end border-b-2 border-black pb-1">
        <p className=" font-Oswald text-4xl">{ticket.project}</p>
        <p className=" font-Oswald text-lg uppercase font-thin">
          Ticket #{ticket.id}
        </p>
      </div>

      <div className="pt-5">
        <p className=" font-Oswald leading-normal font-thin text-base  uppercase">
          Subject
        </p>
        <p className=" font-Montserrat text-lg pb-3">{ticket.subject}</p>
        <p className=" font-Oswald leading-normal font-thin  uppercase">
          Description
        </p>
        <p className=" font-Montserrat text-base">{ticket.body}</p>

        <p className=" font-Oswald uppercase text-gray-600 pt-3 text-right font-thin flex flex-row gap-x-2 justify-end">
          <span>Posted the</span>
          <span>{format(new Date(ticket.creationDate), "EE dd MMM yy")}</span>
          <span>by</span>
          <span>{ticket.author}</span>
        </p>
      </div>
    </>
  );
}

import { format } from "date-fns";
import { Link } from "react-router-dom";
import { TicketStatus, TicketPriority } from "../../models/enums";
import { ProjectTicket } from "../../models/ticket";

interface Props {
  ticket: ProjectTicket;
}

export default function TicketsListItem({ ticket }: Props) {
  return (
    <Link
      to={`/tickets/${ticket.id}`}
      className="flex flex-row justify-start border-b px-5  border-b-black hover:border-red-700 hover:text-white hover:bg-red-500 transition-all duration-200"
    >
      <p className="font-Oswald text-xl font-thin w-full max-w-[7rem]">
        {format(new Date(ticket.creationDate), "dd/MM/YY")}
      </p>
      <p className=" font-Montserrat flex flex-row gap-x-2">
        <span className=" text-lg">{ticket.subject}</span>
        <span className=" text-sm">({TicketStatus[ticket.status]})</span>
      </p>
      <p className="ml-auto font-Oswald uppercase font-thin text-lg">
        {TicketPriority[ticket.priority]}
      </p>
    </Link>
  );
}

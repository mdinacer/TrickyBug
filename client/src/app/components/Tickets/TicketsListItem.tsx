import { PencilAltIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { TicketStatus, TicketPriority } from "../../models/enums";
import { ProjectTicket } from "../../models/ticket";

interface Props {
  ticket: ProjectTicket;
  onActionSelected: (id: number) => void;
}

export default function TicketsListItem({ ticket, onActionSelected }: Props) {
  return (
    <div className="flex flex-row justify-start border-b px-5  border-b-black hover:border-red-700 hover:text-white hover:bg-red-500 transition-all duration-200">
      <Link
        to={`/tickets/${ticket.id}`}
        className="w-full flex flex-row justify-between"
      >
        <p className="font-Oswald text-xl font-thin w-full max-w-[7rem]">
          {format(new Date(ticket.creationDate), "dd/MM/yy")}
        </p>
        <p className=" font-Montserrat flex flex-row gap-x-2">
          <span className=" text-lg">{ticket.subject}</span>
          <span className=" text-sm">({TicketStatus[ticket.status]})</span>
        </p>
        <p className="ml-auto font-Oswald uppercase font-thin text-lg">
          {TicketPriority[ticket.priority]}
        </p>
      </Link>

      <div className="pl-5">
        <button
          type="button"
          title="Edit Phase"
          onClick={() => onActionSelected(ticket.id)}
        >
          <PencilAltIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

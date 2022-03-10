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
      className=" flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-between border-b border-b-gray-400 items-end py-5"
    >
      <div className="">
        <p className=" font-Oswald font-thin leading-loose text-2xl">
          {ticket.subject}
        </p>
        <p className=" font-Montserrat font-thin text-lg pr-5 ">
          {ticket.body}
        </p>
      </div>
      <div className="grid grid-flow-col max-w-xl gap-x-10 ml-auto">
        <div>
          <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
            Created
          </p>
          <p className="font-Oswald text-xl font-thin">
            {format(new Date(ticket.creationDate), "dd/MM/yy")}
          </p>
        </div>

        <div>
          <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
            Status
          </p>
          <p className="font-Oswald text-xl font-thin uppercase">
            {TicketStatus[ticket.status]}
          </p>
        </div>
        <div>
          <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
            Priority
          </p>
          <p className="font-Oswald text-xl font-thin uppercase">
            {TicketPriority[ticket.priority]}
          </p>
        </div>
      </div>
    </Link>
  );
}

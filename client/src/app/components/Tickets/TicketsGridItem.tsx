import { Link } from "react-router-dom";
import { TicketPriority, TicketStatus } from "../../models/enums";
import { ProjectTicket } from "../../models/ticket";

interface Props {
  ticket: ProjectTicket;
}

export default function TicketsGridItem({ ticket }: Props) {
  return (
    <Link
      to={`/tickets/${ticket.id}`}
      className=" min-h-[30vh] w-full bg-slate-600 overflow-hidden text-white rounded-md px-10 py-5 flex items-center justify-start drop-shadow-sm hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2"
    >
      <div className="w-full  h-auto">
        <div
          style={{ borderBottomColor: colors[ticket.priority] }}
          className={`border-b-4 flex-row flex justify-between items-end py-1`}
        >
          <p className=" font-Montserrat font-bold text-2xl  ">#{ticket.id}</p>
          <p className=" font-Oswald font-thin text-3xl ">{ticket.project}</p>
        </div>

        <div className=" flex flex-col gap-y-2 py-5">
          <p className="flex flex-row gap-x-4 items-center">
            <span className="font-Oswald text-base font-thin uppercase">
              Priority:
            </span>
            <span className="font-Montserrat text-lg font-thin uppercase">
              {TicketPriority[ticket.priority]}
            </span>
          </p>
          <p className="flex flex-row gap-x-4 items-center">
            <span className="font-Oswald text-base font-thin uppercase">
              Status:
            </span>
            <span className="font-Montserrat text-lg font-thin uppercase">
              {TicketStatus[ticket.status]}
            </span>
          </p>
          <p className="flex flex-row gap-x-4 items-center">
            <span className="font-Oswald text-base font-thin uppercase">
              Created by:
            </span>
            <span className="font-Montserrat text-lg font-thin uppercase">
              {ticket.author}
            </span>
          </p>
          <p className="flex flex-row gap-x-4 items-center">
            <span className="font-Oswald text-base font-thin uppercase">
              Created at:
            </span>
            <span className="font-Montserrat text-lg font-thin uppercase">
              {new Date(ticket.creationDate).toLocaleDateString()}
            </span>
          </p>

          <p className="flex flex-row gap-x-4 items-center">
            <span className="font-Oswald text-base font-thin uppercase">
              Subject:
            </span>
            <span className="font-Montserrat text-lg font-thin uppercase">
              {ticket.subject}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
const colors = ["#019267", "#FFC900", "#D67D3E", "#D82148"];

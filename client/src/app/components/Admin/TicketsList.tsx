import { TrashIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import useTickets from "../../hooks/useTickets";
import { TicketStatus, TicketPriority } from "../../models/enums";

export default function AdminTicketsList() {
  const { tickets, ticketParams, metaData, ticketsLoaded } = useTickets();
  return (
    <div>
      {ticketsLoaded && tickets.length > 0 && (
        <ul className="list-none">
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              <div className=" flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-between border-b border-b-gray-400 items-end py-5">
                <div className="">
                  {!ticket.isActive && (
                    <p className="font-Oswald text-base font-thin text-gray-500">
                      Archived
                    </p>
                  )}
                  <Link to={`/tickets/${ticket.id}`}>
                    <p className=" font-Oswald font-thin leading-loose text-2xl">
                      {ticket.subject}
                    </p>
                  </Link>
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
                <div className="px-10 self-end ml-auto flex-initial">
                  <button
                    type="button"
                    title="edit"
                    className="flex flex-row gap-x-2 "
                    onClick={() => {}}
                  >
                    <TrashIcon className="h6 w-6  text-red-500" />
                    <p className=" font-Oswald text-lg font-thin">
                      {ticket.isActive ? "Archive" : "Delete"}
                    </p>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

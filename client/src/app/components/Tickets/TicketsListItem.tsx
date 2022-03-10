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
    <div className=" flex flex-row justify-between border-b border-b-gray-400 items-end py-5">
      <div className="">
        <p className=" font-Oswald font-thin text-2xl">{ticket.subject}</p>
        <p className=" font-Montserrat font-thin text-lg">{ticket.body}</p>
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

        <div className=" self-center">
          <button type="button" title="edit" className="flex flex-col">
            <PencilAltIcon className="h6 w-6" />
            <p className=" font-Oswald text-lg font-thin">Status</p>
          </button>
        </div>

        {/* {ticket.endDate && (
          <div className="">
            <p className=" font-Oswald text-base uppercase font-thin text-gray-500">
              End
            </p>
            <p className="font-Oswald text-xl font-thin lg:ml-auto">
              {format(new Date(ticket.endDate), "dd/MM/yy")}
            </p>
          </div>
        )} */}
      </div>
    </div>
    // <div className="flex flex-col lg:flex-row justify-start border-b lg:px-5  border-b-black hover:border-red-700 hover:text-white hover:bg-red-500 transition-all duration-200">
    //   <Link
    //     to={`/tickets/${ticket.id}`}
    //     className="w-full flex flex-col lg:flex-row lg:justify-between"
    //   >
    //     <p className="font-Oswald text-xl font-thin w-full max-w-[7rem]">
    //       {format(new Date(ticket.creationDate), "dd/MM/yy")}
    //     </p>
    //     <p className=" font-Montserrat flex flex-row gap-x-2">
    //       <span className=" text-lg">{ticket.subject}</span>
    //       <span className=" text-sm">({TicketStatus[ticket.status]})</span>
    //     </p>
    //     <p className="lg:ml-auto font-Oswald uppercase font-thin text-lg">
    //       {TicketPriority[ticket.priority]}
    //     </p>
    //   </Link>

    //   <div className="ml-auto lg:pl-5">
    //     <button
    //       type="button"
    //       title="Edit Phase"
    //       onClick={() => onActionSelected(ticket.id)}
    //     >
    //       <PencilAltIcon className="h-6 w-6" />
    //     </button>
    //   </div>
    // </div>
  );
}

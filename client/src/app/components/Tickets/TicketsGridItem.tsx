import { format } from "date-fns";
import { Link } from "react-router-dom";
import { TicketPriority, TicketStatus } from "../../models/enums";
import { ProjectTicket } from "../../models/ticket";
import LabelItem from "../common/LabelItem";

interface Props {
  ticket: ProjectTicket;
}

export default function TicketsGridItem({ ticket }: Props) {
  return (
    <Link
      to={`/tickets/${ticket.id}`}
      className=" min-h-[30vh] w-full border-b-2 border-b-gray-500 bg-white lg:bg-transparent lg:hover:bg-white overflow-hidden  px-10 py-5 flex items-center justify-start drop-shadow-sm hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-2"
    >
      <div className="w-full h-auto">
        <div
          style={{ borderBottomColor: colors[ticket.priority] }}
          className={`border-b-4 flex-row flex justify-between items-end py-1`}
        >
          <p className=" font-Montserrat font-bold text-2xl  ">#{ticket.id}</p>
          <p className=" font-Oswald font-thin text-3xl ">{ticket.project}</p>
        </div>

        <div className=" flex flex-col gap-y-2 py-5">
          <LabelItem title="Subject" value={ticket.subject} />
          <LabelItem title="Priority" value={TicketPriority[ticket.priority]} />
          <LabelItem title="Status" value={TicketStatus[ticket.status]} />
          <LabelItem title="Created by" value={ticket.author} />
          <LabelItem
            title="Created at"
            value={format(new Date(ticket.creationDate), "dd/MM/yy")}
          />
        </div>
      </div>
    </Link>
  );
}
const colors = ["#019267", "#FFC900", "#D67D3E", "#D82148"];

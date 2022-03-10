import { ProjectTicket } from "../../models/ticket";
import TicketsListItem from "./TicketsListItem";

interface Props {
  tickets: ProjectTicket[];
}

export default function TicketsList({ tickets }: Props) {
  return (
    <div className="relative w-full h-full">
      <ul className="list-none flex flex-col py-5 gap-y-5">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="list-item w-full">
            <TicketsListItem ticket={ticket} />
          </li>
        ))}
      </ul>
    </div>
  );
}

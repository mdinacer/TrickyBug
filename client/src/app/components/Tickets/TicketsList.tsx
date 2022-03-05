import { ProjectTicket } from "../../models/ticket";
import TicketsListItem from "./TicketsListItem";

interface Props {
  tickets: ProjectTicket[];
}

export default function TicketsList({ tickets }: Props) {
  return (
    <ul className="list-none flex flex-col py-5 gap-y-4">
      {tickets.map((ticket) => (
        <li key={ticket.id} className="list-item">
          <TicketsListItem  ticket={ticket} />
        </li>
      ))}
    </ul>
  );
}

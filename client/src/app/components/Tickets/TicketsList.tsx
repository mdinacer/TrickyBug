import { ProjectTicket } from "../../models/ticket";
import TicketsListItem from "./TicketsListItem";

interface Props {
  tickets: ProjectTicket[];
  onActionSelected: (id: number) => void;
}

export default function TicketsList({ tickets, onActionSelected }: Props) {
  return (
    <div className="relative w-full h-full">
      <ul className="list-none flex flex-col py-5 gap-y-5">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="list-item w-full">
            <TicketsListItem
              ticket={ticket}
              onActionSelected={onActionSelected}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

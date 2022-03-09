import { lazy } from "react";
import { ProjectTicket } from "../../models/ticket";

const TicketsGridItem = lazy(() => import("./TicketsGridItem"));

interface Props {
  tickets: ProjectTicket[];
}

export default function TicketsGrid({ tickets }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {tickets.map((ticket) => (
        <TicketsGridItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

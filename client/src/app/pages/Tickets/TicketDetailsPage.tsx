import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import CommentsContainer from "../../components/comments/CommentsContainer";
import LoadingComponent from "../../components/common/LoadingComponent";
import TicketHeader from "../../components/ticketDetails/TicketHeader";
import TicketInfo from "../../components/ticketDetails/TicketInfo";
import useComments from "../../hooks/useComments";
import { ProjectTicketFull } from "../../models/ticket";
import { useAppSelector } from "../../store/configureStore";

export default function TicketDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<ProjectTicketFull | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { status: ticketStatus } = useAppSelector((state) => state.ticket);
  const { comments, metaData, setTicketId } = useComments();

  useEffect(() => {
    if (id && !loaded && !loading) {
      setLoading(true);
      agent.Tickets.details(parseInt(id))
        .then((response) => {
          setTicket(response);
          setLoaded(true);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id, loaded, loading, ticket]);

  useEffect(() => {
    if (ticket) {
      setTicketId(ticket.id);
    }

    return () => {
      setTicketId(null);
    };
  }, [setTicketId, ticket]);

  if (ticketStatus.includes("pending"))
    return <LoadingComponent message="Loading ticket..." />;

  if (!ticket) return <div>not found</div>;
  return (
    <div className=" min-h-screen w-full h-screen  bg-slate-600 pb-10 pt-16 flex flex-row items-center ">
      <div className="w-1/3 h-full flex-initial px-10 py-5 flex flex-col gap-y-5">
        <div className=" bg-slate-300 rounded-md overflow-hidden px-10 py-10">
          <TicketHeader ticket={ticket} />
        </div>

        <div className=" bg-slate-300 rounded-md overflow-hidden px-10 py-10">
          <TicketInfo ticket={ticket} />
        </div>
      </div>
      <div className="w-2/3 relative h-full flex-auto px-10 py-5 flex flex-col gap-y-5">
        <div className=" bg-slate-300 flex-auto rounded-md overflow-hidden px-10 py-5 flex flex-col ">
          <CommentsContainer ticketId={ticket.id} comments={comments} />
        </div>
      </div>
    </div>
  );
}

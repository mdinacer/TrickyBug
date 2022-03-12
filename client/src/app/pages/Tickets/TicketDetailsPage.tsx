import {
  PencilAltIcon,
  TrashIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import agent from "../../api/agent";
import CommentsContainer from "../../components/comments/CommentsContainer";
import LoadingComponent from "../../components/common/LoadingComponent";
import TicketHeader from "../../components/ticketDetails/TicketHeader";
import TicketInfo from "../../components/ticketDetails/TicketInfo";
import TicketForm from "../../components/Tickets/TicketForm";
import useComments from "../../hooks/useComments";
import { ProjectTicketFull } from "../../models/ticket";
import { useAppSelector } from "../../store/configureStore";

export default function TicketDetailsPage() {
  const { isAdmin } = useAppSelector((state) => state.account);
  const [isLeader, setIsLeader] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<ProjectTicketFull | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { status: ticketStatus } = useAppSelector((state) => state.ticket);
  const { comments, setTicketId } = useComments();
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isViewImage, setIsViewImage] = useState(false);
  const navigate = useNavigate();

  const loadTicket = useCallback((id: number) => {
    setLoading(true);
    agent.Tickets.details(id)
      .then((response) => {
        setTicket(response);
        setLoaded(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const getIsLeader = useCallback((projectId: string) => {
    agent.Projects.getIsLeader(projectId)
      .then((response) => {
        setIsLeader(response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (id && !loaded && !loading) {
      setLoading(true);
      loadTicket(parseInt(id));
    }
  }, [id, loadTicket, loaded, loading]);

  useEffect(() => {
    if (ticket) {
      setTicketId(ticket.id);
      getIsLeader(ticket.projectId);
    }

    return () => {
      setTicketId(null);
    };
  }, [getIsLeader, setTicketId, ticket]);

  const handleDeleteTicket = (id: number) => {
    agent.Tickets.delete(id).then(() => {
      setIsDelete(false);
      navigate("/projects");
    });
  };

  if (ticketStatus.includes("pending"))
    return <LoadingComponent message="Loading ticket..." />;

  if (!ticket) return <div>not found</div>;

  if (isDelete)
    return (
      <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
        <div className="bg-white h-auto max-w-lg w-full p-5 lg:p-10 rounded-lg drop-shadow-md">
          <p className=" font-Oswald text-2xl uppercase font-thin border-b-2 border-b-red-500">
            Attention
          </p>

          <p className=" font-Montserrat text-lg py-5">
            This Ticket will be deleted permanently, do you want to proceed?
          </p>
          <div className="flex flex-row gap-x-5 mx-auto w-full justify-center lg:justify-end ">
            <button
              className="cursor-pointer border-slate-800 border-2 text-slate-800 py-1 px-5 uppercase font-Oswald text-xl font-thin"
              type="button"
              onClick={() => setIsDelete(false)}
            >
              No
            </button>
            <button
              className="cursor-pointer bg-red-600 text-white py-1 px-5 uppercase font-Oswald text-xl font-thin"
              type="button"
              onClick={() => handleDeleteTicket(ticket.id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );

  if (isViewImage)
    return (
      <div className="relative w-screen h-screen bg-slate-100 flex items-center justify-center pt-20 pb-5">
        <div className="absolute top-16 right-0 p-3 lg:p-10 ">
          <button
            className=" lg:scale-100 lg:hover:scale-110 bg-black bg-opacity-40 rounded-full p-3"
            type="button"
            title="close preview"
            onClick={() => setIsViewImage(false)}
          >
            <XIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className=" overflow-auto  w-full h-full px-5 lg:px-14">
          <img
            src={ticket.description.photo}
            width="auto"
            alt="screenshot"
            className=" object-center object-cover lg:object-contain w-full h-full"
          />
        </div>
      </div>
    );
  return (
    <div className="w-full h-full min-h-screen bg-slate-100 pt-16 lg:pt-20 px-2">
      {isEdit ? (
        <TicketForm
          projectId={ticket.projectId}
          ticketId={ticket.id}
          onClose={() => {
            loadTicket(ticket.id);
            setIsEdit(false);
          }}
        />
      ) : (
        <div className="container mx-auto flex flex-col gap-y-5 py-10">
          <div className="px-5 flex flex-row justify-end items-start gap-x-5 py-3">
            {(isAdmin || ticket.isAuthor || isLeader || ticket.isAssigned) && (
              <button
                className="flex flex-row gap-x-2 items-center"
                onClick={() => setIsEdit(true)}
              >
                <PencilAltIcon className="h-6 w-6" />
                <p className=" font-Oswald text-lg font-thin uppercase">Edit</p>
              </button>
            )}

            {/* {(isAdmin || ticket.isAuthor || isLeader) && (
              <button
                className="flex flex-row gap-x-2 items-center"
                onClick={() => setIsDelete(true)}
              >
                <TrashIcon className="h-6 w-6 text-red-600" />
                <p className=" font-Oswald text-lg font-thin uppercase">
                  Delete
                </p>
              </button>
            )} */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="relative w-full h-full p-10 bg-white text-black drop-shadow-md">
              <TicketHeader ticket={ticket} />
            </div>

            <div className=" w-full h-auto p-10 bg-white text-black drop-shadow-md">
              <TicketInfo onShow={() => setIsViewImage(true)} ticket={ticket} />
            </div>
          </div>

          <div className=" w-full py-10 lg:p-10 bg-white text-black drop-shadow-md h-auto">
            <CommentsContainer ticketId={ticket.id} comments={comments} />
          </div>
        </div>
      )}
    </div>
  );
}

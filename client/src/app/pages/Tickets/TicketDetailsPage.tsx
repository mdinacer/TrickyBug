import { format, formatDistance, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import LoadingComponent from "../../components/common/LoadingComponent";
import { ProjectTicketFull } from "../../models/ticket";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";

export default function TicketDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const [ticket, setTicket] = useState<ProjectTicketFull | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { status: ticketStatus } = useAppSelector((state) => state.ticket);

  useEffect(() => {
    if (id && !loaded && !loading) {
      setLoading(true);
      agent.Tickets.details(parseInt(id))
        .then((response) => {
          setTicket(response);
          setLoaded(true);
          console.log(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id, loaded, loading, ticket]);

  if (ticketStatus.includes("pending"))
    return <LoadingComponent message="Loading ticket..." />;

  if (!ticket) return <div>not found</div>;
  return (
    <div className=" min-h-screen w-full h-screen  bg-slate-600 pb-10 pt-16 flex flex-row items-center ">
      <div className="w-1/3 h-full flex-initial px-10 py-5 flex flex-col gap-y-5">
        <div className=" bg-slate-300 rounded-md overflow-hidden px-10 py-5">
          <div className="flex flex-row justify-between items-end border-b-2 border-black pb-1">
            <p className=" font-Oswald text-4xl">{ticket.project}</p>
            <p className=" font-Oswald text-lg uppercase font-thin">
              Ticket #{ticket.id}
            </p>
          </div>

          <div className="py-5">
            <p className=" font-Oswald leading-normal  uppercase">Subject</p>
            <p className=" font-Montserrat text-lg pb-3">{ticket.subject}</p>
            <p className=" font-Oswald leading-normal  uppercase">
              Description
            </p>
            <p className=" font-Montserrat text-base">{ticket.body}</p>

            <p className=" font-Oswald uppercase text-gray-600 pt-3 text-right font-thin">{`Posted the ${format(
              new Date(ticket.creationDate),
              "EE dd MMM yy"
            )} by ${ticket.author}`}</p>
          </div>
        </div>

        <div className=" bg-slate-300 rounded-md overflow-hidden px-10 py-5 flex flex-col gap-y-3">
          <p className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
            <span className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
              Priority
            </span>
            <span className="text-xl uppercase">{ticket.priority}</span>
          </p>
          <p className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
            <span className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
              Status
            </span>
            <span className="text-xl uppercase">{ticket.status}</span>
          </p>
          <p className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
            <span className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
              Related Phase
            </span>
            {ticket.phase ? (
              <span className="text-xl uppercase">{ticket.phase.title}</span>
            ) : (
              <span className="text-lg uppercase font-thin text-gray-500">
                undefind
              </span>
            )}
          </p>

          {ticket.description && (
            <>
              <p className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
                <span className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
                  Occurrence:
                </span>
                <span className="text-xl uppercase">
                  {ticket.description.occurrence}
                </span>
              </p>
              <p className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
                <span className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
                  Nature:
                </span>
                <span className="text-xl uppercase">
                  {ticket.description.nature}
                </span>
              </p>
              <p className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
                <span className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
                  Severity:
                </span>
                <span className="text-xl uppercase">
                  {ticket.description.severity}
                </span>
              </p>
            </>
          )}
          <p className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
            <span className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
              Assigned member
            </span>
            {ticket.assignedMember ? (
              <span className="text-xl uppercase">{ticket.assignedMember}</span>
            ) : (
              <span className="text-lg uppercase font-thin text-gray-500">
                Unassigned
              </span>
            )}
          </p>
        </div>

        <div className=" bg-slate-300 rounded-md overflow-hidden px-10 py-5 flex flex-col gap-y-3">
          <p className=" flex flex-col items-start  w-full justify-between font-Montserrat border-b border-b-black ">
            <span className="text-base uppercase font-Oswald font-thin min-w-[7rem]">
              Operating system
            </span>
            <span className="text-lg uppercase">
              {ticket.description.operatingSystem}
            </span>
          </p>
          <p className=" flex flex-col items-start  w-full justify-between font-Montserrat border-b border-b-black ">
            <span className="text-base uppercase font-Oswald font-thin min-w-[7rem]">
              Browser
            </span>
            <span className="text-lg uppercase">
              {ticket.description.browser}
            </span>
          </p>
          <div className=" flex flex-row items-end  w-full justify-between font-Montserrat border-b border-b-black ">
            <p className="text-lg uppercase font-Oswald font-thin min-w-[7rem]">
              Screenshot
            </p>
            {ticket.description.photo ? (
              <button className="text-lg uppercase font-Oswald font-thin">
                View
              </button>
            ) : (
              <p className="text-base uppercase font-thin text-gray-500">
                Unavailable
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-2/3 relative h-full flex-auto px-10 py-5 flex flex-col gap-y-5">
        <div className=" bg-slate-300 flex-auto rounded-md overflow-hidden px-10 py-5 flex flex-col ">
          <div className="flex flex-row justify-between items-end border-b-2 border-black pb-1 flex-initial">
            <p className=" font-Oswald uppercase text-2xl">Comments</p>

            <p className=" font-Oswald text-lg uppercase font-thin">
              {`52 Comments`}
            </p>
          </div>
          <div className="flex-auto overflow-y-scroll overflow-x-hidden py-5 my-5 ">
            <ul className="flex flex-col gap-y-2 pr-5">
              {Array.from(Array(52).keys()).map((item, index) => (
                <li
                  key={index}
                  className="w-full bg-slate-100 px-10 rounded-md h-auto py-5  flex flex-col justify-start items-start"
                >
                  <div className="flex flex-row justify-between w-full items-center border-b border-gray-500 mb-3">
                    <p className=" font-Oswald font-thin text-lg leading-loose">
                      Bob Bobbity
                    </p>

                    <p className=" font-Montserrat text-xs  text-gray-700">
                      {formatDistance(new Date("02-12-2022"), new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                  <p className=" font-Montserrat min-w-[12rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis tempora distinctio minima incidunt praesentium
                    perspiciatis aspernatur. Quia repellat molestiae quaerat
                    maiores! At animi beatae quas?
                  </p>

                  <p className=" font-Montserrat">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <form className="relative flex-initial h-52 min-h-[15vh] w-full bg-blue-300 rounded-md overflow-hidden">
            <textarea
              placeholder="Leave a comment"
              className="w-full h-full py-4 px-5 resize-none font-Montserrat  form-control block bg-gray-100 focus-within:outline-none"
              aria-label="test"
              name="commentInput"
              id="commentInput"
              rows={3}
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-slate-600 text-white font-Oswald font-thin uppercase drop-shadow-md px-4 py-2 absolute bottom-0 right-0 m-3 rounded-md  "
            />
          </form>
        </div>
      </div>
    </div>
  );
}

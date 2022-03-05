import { lazy } from "react";
import LoadingComponent from "../../components/common/LoadingComponent";
import LoadingComponentSmall from "../../components/common/LoadingComponentSmall";
import useTickets from "../../hooks/useTickets";
import { TicketParams } from "../../models/ticketParams";
import { setTicketParams } from "../../slices/ticketSlice";
import { useAppDispatch } from "../../store/configureStore";

const TicketsFilters = lazy(
  () => import("../../components/Tickets/TicketsFilters")
);
const TicketsGrid = lazy(() => import("../../components/Tickets/TicketsGrid"));

export default function TicketsPage() {
  const { tickets, ticketsLoaded, ticketParams } = useTickets();
  const dispatch = useAppDispatch();

  const handleChangParams = (value: TicketParams) => {
    dispatch(setTicketParams(value));
  };

  //   if (!ticketsLoaded)
  //     return <LoadingComponent message="Loading Tickets please wait" />;

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 flex ">
      <div className="container flex flex-col mx-auto   flex-auto  w-full rounded-md overflow-hidden">
        <p className="text-5xl flex-initial font-Oswald uppercase underline underline-offset-2 ">
          Tickets
        </p>
        <TicketsFilters params={ticketParams} setParams={handleChangParams} />
        <div className="flex-auto">
          {ticketsLoaded ? (
            <TicketsGrid tickets={tickets} />
          ) : (
            <div className="w-full h-full">
              <LoadingComponentSmall message="loading tickets, please wait" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

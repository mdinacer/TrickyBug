import { lazy, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AppPagination from "../../components/common/AppPagination";
import LoadingComponent from "../../components/common/LoadingComponent";
import LoadingComponentSmall from "../../components/common/LoadingComponentSmall";
import useTickets from "../../hooks/useTickets";
import { TicketParams } from "../../models/ticketParams";
import { setPageNumber, setTicketParams } from "../../slices/ticketSlice";
import { useAppDispatch } from "../../store/configureStore";

const TicketsFilters = lazy(
  () => import("../../components/Tickets/TicketsFilters")
);
const TicketsGrid = lazy(() => import("../../components/Tickets/TicketsGrid"));

export default function TicketsPage() {
  const { tickets, ticketsLoaded, ticketParams, metaData } = useTickets();
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const dispatch = useAppDispatch();

  const handleChangParams = (value: TicketParams) => {
    dispatch(setTicketParams(value));
  };

  useEffect(() => {
    if (projectId) {
      dispatch(setTicketParams({ projectId }));
    }
  }, [dispatch, projectId]);
  useEffect(() => {
    if (startDate && endDate) {
      dispatch(setTicketParams({ startDate, endDate }));
    }
  }, [dispatch, endDate, startDate]);

  //   if (!ticketsLoaded)
  //     return <LoadingComponent message="Loading Tickets please wait" />;

  return (
    <div className="h-full min-h-screen w-screen bg-slate-300 pb-10 pt-20 flex px-5 ">
      <div className="container flex flex-col mx-auto   flex-auto  w-full rounded-md overflow-hidden">
        <h1 className="flex-initial font-Oswald text-7xl pb-10  uppercase">
          Tickets
        </h1>
        {!projectId && (
          <TicketsFilters params={ticketParams} setParams={handleChangParams} />
        )}
        {metaData && (
          <div className="py-5 border-black w-full">
            <AppPagination
              metaData={metaData}
              onPageChange={(page: number) =>
                dispatch(setPageNumber({ pageNumber: page + 1 }))
              }
            />
          </div>
        )}
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

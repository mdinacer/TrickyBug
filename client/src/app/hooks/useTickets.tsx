import { useEffect } from "react";
import { fetchTicketsAsync, ticketSelectors } from "../slices/ticketSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function useTickets() {
  const tickets = useAppSelector(ticketSelectors.selectAll);
  const { ticketsLoaded, metaData, ticketParams } = useAppSelector(
    (state) => state.ticket
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!ticketsLoaded) {
      dispatch(fetchTicketsAsync());
    }
  }, [dispatch, ticketsLoaded]);
  return {
    tickets,
    ticketParams,
    ticketsLoaded,
    metaData,
  };
}

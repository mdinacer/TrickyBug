import { useCallback, useEffect, useState } from "react";
import agent from "../api/agent";
import { TicketComment } from "../models/comment";
import { MetaData } from "../models/pagination";
import { PaginationParams } from "../models/pagingParams";

export default function useComments() {
  const [ticketId, setTicketId] = useState<number | null>(null);
  const [comments, setComments] = useState<TicketComment[]>([]);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [paginationParams, setPaginationParams] = useState<PaginationParams>({
    pageNumber: 1,
    pageSize: 10,
  });
  const [metaData, setMetaData] = useState<MetaData | null>(null);

  function getParams(paginationParams: PaginationParams) {
    const params = new URLSearchParams();
    params.append("pageNumber", paginationParams.pageNumber.toString());
    params.append("pageSize", paginationParams.pageSize.toString());
    return params;
  }

  const loadTickets = useCallback(
    (id: number) => {
      const params = getParams(paginationParams);
      agent.Tickets.listComments(id, params)
        .then((response) => {
          setMetaData(response.metaData);
          setComments(response.items);
          setCommentsLoaded(true);
        })
        .catch((error) => console.log(error));
    },
    [paginationParams]
  );

  useEffect(() => {
    if (!commentsLoaded && ticketId) {
      loadTickets(ticketId);
    }
  }, [commentsLoaded, loadTickets, ticketId]);

  function setParams(value: any) {
    setPaginationParams({ ...value });
    setCommentsLoaded(false);
  }

  return {
    comments,
    commentsLoaded,
    metaData,
    setParams,
    setTicketId,
    setCommentsLoaded,
  };
}

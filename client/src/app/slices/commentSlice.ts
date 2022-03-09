import { TicketComment } from "../models/comment";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { createEntityAdapter } from "@reduxjs/toolkit";


interface CommentState {
    ticketId: number | null;
    comments: TicketComment[];
    hubConnection: HubConnection | null;
    commentsLoaded: boolean;
    hubStarted: boolean;
}

const commentsAdapter = createEntityAdapter<TicketComment>({
    selectId: (comment) => comment.id,
    sortComparer: (a, b) => a.creationDate.localeCompare(b.creationDate),
});


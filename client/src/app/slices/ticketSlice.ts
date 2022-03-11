import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { MetaData } from "../models/pagination";
import { ProjectTicket } from "../models/ticket";
import { TicketParams } from "../models/ticketParams";
import { RootState } from "../store/configureStore";

interface TicketState {
    ticketsLoaded: boolean;
    status: string;
    ticketParams: TicketParams;
    metaData: MetaData | null;
}

const ticketsAdapter = createEntityAdapter<ProjectTicket>({
    selectId: (ticket) => ticket.id,
    sortComparer: (a, b) => a.creationDate.localeCompare(b.creationDate),
});

export function getAxiosParams(ticketParams: TicketParams) {
    const params = new URLSearchParams();
    params.append("pageNumber", ticketParams.pageNumber.toString());
    params.append("pageSize", ticketParams.pageSize.toString());
    params.append("orderBy", ticketParams.orderBy);

    if (ticketParams.searchTerm) {
        params.append("searchTerm", ticketParams.searchTerm);
    }

    if (ticketParams.projectId) {
        params.append("projectId", ticketParams.projectId);
    }

    if (ticketParams.status) {
        params.append("status", ticketParams.status.toString());
    }

    if (ticketParams.priority) {
        params.append("priority", ticketParams.priority.toString());
    }

    if (ticketParams.startDate) {
        params.append("startDate", ticketParams.startDate);
    }

    if (ticketParams.endDate) {
        params.append("endDate", ticketParams.endDate);
    }
    return params;
}


export const fetchTicketsAsync = createAsyncThunk<ProjectTicket[], void, { state: RootState }>(
    "ticket/fetchTicketsAsync",
    async (_, thunkApi) => {
        const ticketParams = thunkApi.getState().ticket.ticketParams;
        const params = getAxiosParams(ticketParams);
        try {
            const response = await agent.Tickets.list(params);
            thunkApi.dispatch(setMetaData(response.metaData));
            return response.items;
        } catch (error: any) {
            return thunkApi.rejectWithValue({ error: error.data });
        }
    }
)

export const fetchTicketAsync = createAsyncThunk<ProjectTicket, number>(
    "ticket/fetchTicketAsync",
    async (id: number, thunkApi) => {
        try {
            return await agent.Tickets.details(id);
        } catch (error: any) {
            return thunkApi.rejectWithValue({ error: error.data });
        }
    }
)

function initParams() {
    return {
        projectId: null,
        status: null,
        priority: null,
        startDate: null,
        endDate: null,
        orderBy: "date",
        searchTerm: null,
        pageNumber: 1,
        pageSize: 6,
    }
}

export const ticketSlice = createSlice({
    name: "ticket",
    initialState: ticketsAdapter.getInitialState<TicketState>({
        ticketsLoaded: false,
        status: "idle",
        ticketParams: initParams(),
        metaData: null
    }),
    reducers: {
        setTicketParams: (state, action) => {
            state.ticketsLoaded = false;
            state.ticketParams = { ...state.ticketParams, ...action.payload, pageNumber: 1 };
        },

        setPageNumber: (state, action) => {
            state.ticketsLoaded = false;
            state.ticketParams = { ...state.ticketParams, ...action.payload };
        },

        setPageSize: (state, action) => {
            state.ticketsLoaded = false;
            state.ticketParams = { ...state.ticketParams, ...action.payload };
        },

        setMetaData: (state, action) => {
            state.metaData = action.payload;
        },
        resetTicketParams: (state) => {
            state.ticketParams = initParams();
            state.ticketsLoaded = false;
        },
        setTicket: ticketsAdapter.addOne,
        updateTicket: ticketsAdapter.updateOne,
        removeTicket: ticketsAdapter.removeOne,
    },
    extraReducers: (builder => {

        builder.addCase(fetchTicketsAsync.pending, (state) => {
            state.status = "pendingFetchTickets";
        });

        builder.addCase(fetchTicketsAsync.fulfilled, (state, action) => {
            ticketsAdapter.setAll(state, action.payload)
            state.status = "idle";
            state.ticketsLoaded = true;
        });

        builder.addCase(fetchTicketsAsync.rejected, (state) => {
            state.status = "idle";
        });

        builder.addCase(fetchTicketAsync.pending, (state) => {
            state.status = "pendingFetchTicket";
        });

        builder.addCase(fetchTicketAsync.fulfilled, (state, action) => {
            ticketsAdapter.upsertOne(state, action.payload)
            state.status = "idle";
        });

        builder.addCase(fetchTicketAsync.rejected, (state) => {
            state.status = "idle";
        });
    })
})


export const ticketSelectors = ticketsAdapter
    .getSelectors<RootState>(
        (state) => state.ticket
    )

export const {
    setTicketParams,
    resetTicketParams,
    setMetaData,
    setPageNumber,
    setPageSize,
    setTicket,
    updateTicket,
    removeTicket,
} = ticketSlice.actions;
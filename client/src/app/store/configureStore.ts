import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountSlice } from "../slices/accountSlice";
import { projectSlice } from "../slices/projectSlice";
import { ticketSlice } from "../slices/ticketSlice";


export const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        project: projectSlice.reducer,
        ticket: ticketSlice.reducer,
    },
    //middleware: new MiddlewareArray().concat(sampleMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
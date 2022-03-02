import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { AppUser } from "../models/user";
import { history } from "../..";
import agent from "../api/agent";


interface AccountState {
    user: AppUser | null,

}

const initialState: AccountState = {
    user: null,
}

export const signInUser = createAsyncThunk<AppUser, FieldValues>(
    "account/signInUser",
    async (data, thunkApi) => {
        try {
            const user = await agent.Account.login(data);
            localStorage.setItem("user", JSON.stringify(user))
            return user;
        } catch (error: any) {
            return thunkApi.rejectWithValue({ error: error.data })
        }
    }
)

export const fetchCurrentUser = createAsyncThunk<AppUser>(
    "account/fetchCurrentUser",
    async (_, thunkApi) => {
        thunkApi.dispatch(setUser(JSON.parse(localStorage.getItem("user")!)));
        try {
            const user = await agent.Account.currentUser();
            localStorage.setItem("user", JSON.stringify(user))
            return user;
        } catch (error: any) {
            return thunkApi.rejectWithValue({ error: error.data });
        }
    },
    {
        condition: () => {
            if (!localStorage.getItem('user')) return false;
        }
    }
)

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null;
            localStorage.removeItem("user");
            history.push('/');
        },
        setUser: (state, action) => {
            const data = action.payload.token.split('.')[1];
            if (data) {
                let claims = JSON.parse(atob(data));
                let roles = claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                state.user = { ...action.payload, "role": typeof (roles) === "string" ? [roles] : roles };
            } else {
                state.user = action.payload;
            }
        },
    },
    extraReducers: (builder => {
        builder.addCase(fetchCurrentUser.rejected, (state) => {
            state.user = null;
            localStorage.removeItem('user');
            history.push('/login');
        });

        builder.addCase(signInUser.rejected, (state, action) => {
            throw action.payload;
        })

        builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
            const data = action.payload.token.split('.')[1];

            if (data) {
                let claims = JSON.parse(atob(data));
                let roles = claims["role"];
                state.user = { ...action.payload, "roles": typeof (roles) === "string" ? [roles] : roles };
            } else {
                state.user = action.payload;
            }

        });

    })
})

export const { setUser, signOut } = accountSlice.actions;


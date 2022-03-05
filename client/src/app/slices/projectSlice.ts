import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { MetaData } from "../models/pagination";
import { Project } from "../models/project";
import { ProjectParams } from "../models/projectParams";
import { RootState } from "../store/configureStore";

interface ProjectState {
    projectsLoaded: boolean;
    status: string;
    projectParams: ProjectParams; 
    metaData: MetaData | null;
}

const projectsAdapter = createEntityAdapter<Project>();

export function getAxiosParams(projectParams: ProjectParams) {
    const params = new URLSearchParams();
    params.append("pageNumber", projectParams.pageNumber.toString());
    params.append("pageSize", projectParams.pageSize.toString());
    // params.append("orderBy", projectParams.orderBy);
    // if (projectParams.searchTerm) {
    //     params.append("searchTerm", projectParams.searchTerm);
    // }

    // if (projectParams.category && projectParams.category > 0) {
    //     params.append("category", projectParams.category.toString());
    // } else {
    //     params.delete("category");
    // }

    return params;
}

export const fetchProjectsAsync = createAsyncThunk<Project[], void, { state: RootState }>(
    "project/fetchProjectsAsync",
    async (_, thunkApi) => {
        const projectParams = thunkApi.getState().project.projectParams;
        const params = getAxiosParams(projectParams);
        try {
            const response = await agent.Projects.list(params);
            thunkApi.dispatch(setMetaData(response.metaData));
            return response.items;
        } catch (error: any) {
            return thunkApi.rejectWithValue({ error: error.data });
        }
    }
)

export const fetchProjectAsync = createAsyncThunk<Project, string>(
    "project/fetchProjectAsync",
    async (projectSlug: string, thunkApi) => {
        try {
            return await agent.Projects.details(projectSlug);
        } catch (error: any) {
            return thunkApi.rejectWithValue({ error: error.data });
        }
    }
)

function initParams() {
    return {
        pageNumber: 1,
        pageSize: 8,
    }
}

export const projectSlice = createSlice({
    name: "project",
    initialState: projectsAdapter.getInitialState<ProjectState>({
        projectsLoaded: false,
        status: "idle",
        projectParams: initParams(),
        metaData: null
    }),
    reducers: {
        setProjectParams: (state, action) => {
            state.projectsLoaded = false;
            state.projectParams = { ...state.projectParams, ...action.payload, pageNumber: 1 };
        },

        setPageNumber: (state, action) => {
            state.projectsLoaded = false;
            state.projectParams = { ...state.projectParams, ...action.payload };
        },

        setPageSize: (state, action) => {
            state.projectsLoaded = false;
            state.projectParams = { ...state.projectParams, ...action.payload };
        },

        setMetaData: (state, action) => {
            state.metaData = action.payload;
        },
        resetProjectParams: (state) => {
            state.projectParams = initParams();
        },
        setProject: projectsAdapter.addOne,
        updateProject: projectsAdapter.updateOne,
        removeProject: projectsAdapter.removeOne,
    },
    extraReducers: (builder => {

        builder.addCase(fetchProjectsAsync.pending, (state) => {
            state.status = "pendingFetchProjects";
        });

        builder.addCase(fetchProjectsAsync.fulfilled, (state, action) => {
            projectsAdapter.setAll(state, action.payload)
            state.status = "idle";
            state.projectsLoaded = true;
        });

        builder.addCase(fetchProjectsAsync.rejected, (state) => {
            state.status = "idle";
        });

        builder.addCase(fetchProjectAsync.pending, (state) => {
            state.status = "pendingFetchProject";
        });

        builder.addCase(fetchProjectAsync.fulfilled, (state, action) => {
            projectsAdapter.upsertOne(state, action.payload)
            state.status = "idle";
        });

        builder.addCase(fetchProjectAsync.rejected, (state) => {
            state.status = "idle";
        });
    })
})


export const projectSelectors = projectsAdapter
    .getSelectors((state: RootState) => state.project);

export const {
    setProjectParams,
    resetProjectParams,
    setMetaData,
    setPageNumber,
    setPageSize,
    setProject,
    updateProject,
    removeProject,
} = projectSlice.actions;
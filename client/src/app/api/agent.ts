import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatedResponse } from "../models/pagination";
import { AppUser } from "../models/user";
import { store } from "../store/configureStore";
import { history } from "../..";
import { ProjectTicket } from "../models/ticket";
import { ProjectPhase } from "../models/phase";
import { ProjectAction } from "../models/action";
import { toast } from "react-toastify";
import { TicketComment } from "../models/comment";

const sleep = () => new Promise(resolve => setTimeout(resolve, 0));

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(async response => {
    if (process.env.NODE_ENV === "development") {
        await sleep();
    }

    const pagination = response.headers["pagination"];
    if (pagination) {
        response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
        return response;
    }

    return response;
}, (error: AxiosError) => {
    if (error.response) {
        const { data, status } = error.response;

        switch (status) {
            case 400:
                if (data.errors) {
                    const modelStateErrors: string[] = [];
                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            modelStateErrors.push(data.errors[key])
                        }
                    }
                    throw modelStateErrors.flat();
                }
                toast.error(data.title)
                break;

            case 401:
                toast.error(data.title)
                break;

            case 403:
                toast.error("You are not allowed")
                break;

            // case 404:
            //     history.push('/not-found', data);
            //     break;

            case 500:
                history.push('/server-error', data);
                break;

            default:
                break;
        }
    }
    return Promise.reject(error.response);
})

const requests = {
    get: <T>(url: string, params?: URLSearchParams) => axios.get<T>(url, { params }).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    patch: <T>(url: string, body: {}) => axios.patch<T>(url, body).then(responseBody),
    delete: <T>(url: string, body?: {}) => axios.delete<T>(url, body).then(responseBody),
    postForm: (url: string, data: FormData) => axios.post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(responseBody),
    putForm: (url: string, data: FormData) => axios.put(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(responseBody),
}

function createFormData(item: any) {
    let formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData
}

const Admin = {
    listUsers: () => requests.get('Account/listAll'),
    listRoles: () => requests.get('admin/getRoles'),
    listUserRoles: (id: string) => requests.get(`admin/${id}/getUserRoles`),
    addRole: (id: string, role: any) => requests.post(`admin/${id}/addUserRole`, { role }),
    removeRole: (id: string, role: any) => requests.post(`admin/${id}/removeUserRole`, { role }),
    // login: (values: any) => requests.post<AppUser>('Account/login', values),
    // register: (values: any) => requests.postForm('account/register', createFormData(values)),
    // currentUser: () => requests.get<AppUser>('account'),
    // fbLogin: (accessToken: string) => requests.post<AppUser>(`/account/fbLogin?accessToken=${accessToken}`, {}),
    // refreshToken: () => requests.post<AppUser>('/account/refreshToken', {}),
    // verifyEmail: (token: string, email: string) => requests.post<void>(`/account/verifyEmail?token=${token}&email=${email}`, {}),
    // resendEmailConfirm: (email: string) => requests.get(`/account/resendEmailConfirmationLink?email=${email}`)
}

const Account = {
    listAll: () => requests.get<AppUser[]>('Account/listAll'),
    login: (values: any) => requests.post<AppUser>('Account/login', values),
    register: (values: any) => requests.postForm('account/register', createFormData(values)),
    currentUser: () => requests.get<AppUser>('account'),
    fbLogin: (accessToken: string) => requests.post<AppUser>(`/account/fbLogin?accessToken=${accessToken}`, {}),
    refreshToken: () => requests.post<AppUser>('/account/refreshToken', {}),
    verifyEmail: (token: string, email: string) => requests.post<void>(`/account/verifyEmail?token=${token}&email=${email}`, {}),
    resendEmailConfirm: (email: string) => requests.get(`/account/resendEmailConfirmationLink?email=${email}`)
}

const Projects = {
    list: (params: URLSearchParams) => requests.get('projects', params),
    details: (slug: string) => requests.get(`projects/${slug}`),
    detailsById: (id: string) => requests.get(`projects/${id}/getById`),
    getIsLeader: (id: string) => requests.get<boolean>(`projects/${id}/isLeader`),
    create: (project: any) => requests.postForm('projects', createFormData(project)),
    update: (project: any) => requests.putForm('projects', createFormData(project)),
    delete: (id: string) => requests.delete<void>(`projects/${id}`),
    listMembers: (id: string) => requests.get(`projects/${id}/members`),
    listActions: (id: string, params: URLSearchParams) => requests.get(`projects/${id}/actions`, params),
    listRecentActions: (id: string) => requests.get(`projects/${id}/recentActions`),
    listTickets: (id: string, params: URLSearchParams) => requests.get(`projects/${id}/tickets`, params),
    listRecentTickets: (id: string) => requests.get(`projects/${id}/recentTickets`),
    listPhases: (id: string) => requests.get(`projects/${id}/phases`),
    listRecentPhases: (id: string) => requests.get(`projects/${id}/recentPhases`),
}

const Tickets = {
    list: (params: URLSearchParams) => requests.get('tickets', params),
    details: (id: number) => requests.get<ProjectTicket>(`tickets/${id}`),
    create: (ticket: any) => requests.postForm(`tickets`, createFormData(ticket)),
    update: (ticket: any) => requests.putForm('tickets', createFormData(ticket)),
    delete: (id: number) => requests.delete<void>(`tickets/${id}`),
    listComments: (id: number, params: URLSearchParams) => requests.get(`tickets/${id}/comments`, params),
}

const Members = {
    //list: (params: URLSearchParams) => requests.get<ProjectTicket[]>('members', params),
    //details: (id: number) => requests.get<ProjectTicket>(`projectMembers/${id}`),
    create: (id: string, member: any) => requests.postForm(`projectMembers/${id}/add`, createFormData(member)),
    update: (id: string, member: any) => requests.putForm(`projectMembers/${id}/edit`, createFormData(member)),
    setLeader: (id: string, userId: any) => requests.patch<void>(`projectMembers/${id}/setLeader`, { userId }),
    delete: (id: string, userId: any) => requests.delete<void>(`projectMembers/${id}/delete`, { data: { userId } }),
    createRange: (id: string, members: any[]) => requests.post(`projectMembers/${id}/addRange`, members),
    updateRange: (id: string, members: any[]) => requests.put(`projectMembers/${id}/editRange`, members),
    deleteRange: (id: string, membersId: any[]) => axios.delete(`projectMembers/${id}/deleteRange`, { data: [...membersId] }),
}

const Phases = {
    list: (params: URLSearchParams) => requests.get<ProjectPhase[]>('phases', params),
    details: (id: number) => requests.get<ProjectPhase>(`phases/${id}`),
    create: (projectId: string, phase: any) => requests.post<ProjectPhase>(`phases/${projectId}`, phase),
    update: (phase: any) => requests.put<ProjectPhase>(`phases`, phase),
    delete: (id: number) => requests.delete<void>(`phases/${id}`),
}

const Actions = {
    list: (params: URLSearchParams) => requests.get<ProjectAction[]>('actions', params),
    details: (id: number) => requests.get<ProjectAction>(`actions/${id}`),
    create: (projectId: string, action: any) => requests.post<ProjectAction>(`actions/${projectId}`, action),
    update: (action: any) => requests.put<ProjectAction>(`actions`, action),
    delete: (id: number) => requests.delete<void>(`actions/${id}`),
}

const Comments = {
    create: (ticketId: number, comment: any) => requests.post<TicketComment>(`comments/${ticketId}`, comment),
    update: (comment: any) => requests.put<TicketComment>(`comments`, comment),
    delete: (id: number) => requests.delete<void>(`comments/${id}`),
}

const agent = {
    Admin,
    Account,
    Actions,
    Comments,
    Members,
    Phases,
    Projects,
    Tickets
}

export default agent;
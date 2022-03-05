import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatedResponse } from "../models/pagination";
import { Project } from "../models/project";
import { AppUser } from "../models/user";
import { store } from "../store/configureStore";
import { history } from "../..";
import { ProjectTicket } from "../models/ticket";

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

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
                console.log(data.title)
                break;

            case 401:
                console.log(data.title)
                break;

            case 403:
                console.log("You are not allowed")
                break;

            // case 404:
            //     toast.error("Element not found")
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
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
    postForm: <T>(url: string, data: FormData) => axios.post<T>(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(responseBody),
    putForm: <T>(url: string, data: FormData) => axios.put<T>(url, data, {
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

const Account = {
    login: (values: any) => requests.post<AppUser>('Account/login', values),
    register: (values: any) => requests.postForm<AppUser>('account/register', createFormData(values)),
    currentUser: () => requests.get<AppUser>('account'),
    fbLogin: (accessToken: string) => requests.post<AppUser>(`/account/fbLogin?accessToken=${accessToken}`, {}),
    refreshToken: () => requests.post<AppUser>('/account/refreshToken', {}),
    verifyEmail: (token: string, email: string) => requests.post<void>(`/account/verifyEmail?token=${token}&email=${email}`, {}),
    resendEmailConfirm: (email: string) => requests.get(`/account/resendEmailConfirmationLink?email=${email}`)
}

const Projects = {
    list: (params: URLSearchParams) => requests.get('projects', params),
    details: (slug: string) => requests.get(`projects/${slug}`),
    create: (project: any) => requests.postForm<Project>('projects', createFormData(project)),
    update: (project: any) => requests.putForm<Project>('projects', createFormData(project)),
    delete: (id: number) => requests.delete<void>(`projects/${id}`),
    listMembers: (id: string) => requests.get(`projects/${id}/members`),
    listActions: (id: string, params: URLSearchParams) => requests.get(`projects/${id}/actions`, params),
    listRecentActions: (id: string) => requests.get(`projects/${id}/recentActions`),
    listTickets: (id: string, params: URLSearchParams) => requests.get(`projects/${id}/tickets`, params),
    listRecentTickets: (id: string) => requests.get(`projects/${id}/recentTickets`),
    listPhases: (id: string) => requests.get(`projects/${id}/phases`),
    listRecentPhases: (id: string) => requests.get(`projects/${id}/recentPhases`),
}

const Tickets = {
    list: (params: URLSearchParams) => requests.get<ProjectTicket[]>('tickets', params),
    details: (id: number) => requests.get<ProjectTicket>(`tickets/${id}`),
    create: (ticket: any) => requests.postForm<ProjectTicket>('tickets', createFormData(ticket)),
    update: (ticket: any) => requests.putForm<ProjectTicket>('tickets', createFormData(ticket)),
    delete: (id: number) => requests.delete<void>(`tickets/${id}`),
}

const agent = {
    Account,
    Projects,
    Tickets
}

export default agent;
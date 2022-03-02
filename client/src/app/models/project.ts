import { ProjectAction } from "./action";
import { ProjectMember } from "./member";
import { ProjectTicket } from "./ticket";

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    creationDate: string;
    lastUpdate: string | null;
    isActive: boolean;
    photoId: string;
    photo: string;
}

export interface ProjectDetails {
    id: string;
    title: string;
    slug: string;
    description: string;
    creationDate: string;
    lastUpdate: string | null;
    isActive: boolean;
    photoId: string;
    photo: string;
    tickets: ProjectTicket[];
    actions: ProjectAction[];
    members: ProjectMember[];
}

export interface CreateProject {
    title: string;
    description: string;
}

export interface UpdateProject {
    id: string;
    title: string;
    description: string;
}
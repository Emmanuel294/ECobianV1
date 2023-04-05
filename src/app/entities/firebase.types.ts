import { PersonalProjectDocument } from "./personalProject.types";
import { ProfileDocument } from "./profile.types";
import { TechnologyDocument } from "./technologie.types";
import { WorkDocument } from "./work.types";

export enum FirebaseCollections {
    profile = 'profile',
    technologies = 'technologies',
    works = 'works',
    personalProjects = 'personalProjects',
}

export type FirebaseDocuments =
    ProfileDocument
    | TechnologyDocument
    | WorkDocument
    | PersonalProjectDocument
    ;
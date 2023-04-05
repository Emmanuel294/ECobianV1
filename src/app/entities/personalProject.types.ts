import { TechnologyDocument } from "./technologie.types"

export type PersonalProjectDocument = {
    name: string,
    description: string,
    technologies: Array<TechnologyDocument>,
    githubLink?: string;
}
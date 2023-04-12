
type LinkT = {
    name: string;
    link: string;
}

export type PersonalProjectDocument = {
    name: string,
    description: string,
    technologies: Array<string>,
    links?: Array<LinkT>;
    icon?: string;
}

import { DescriptionList } from "../interfaces/descriptionList.interface";

export type CardT<T> = {
    header: string;
    headerIcon: string;
    content: any,
    component: DescriptionList
}
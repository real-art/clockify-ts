import { Query } from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";
export declare enum ProjectsQueryClientStatusEnum {
    active = "ACTIVE",
    archived = "ARCHIVED"
}
export declare enum ProjectsQueryUserStatusEnum {
    active = "ACTIVE",
    inactive = "INACTIVE"
}
export declare enum ProjectsQueryAccessEnum {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
export default interface ProjectsQuery extends Query, MultiItemsQuery {
    archived?: boolean;
    name?: string;
    billable?: boolean;
    clients?: Array<string>;
    "contains-client"?: boolean;
    "client-status"?: ProjectsQueryClientStatusEnum;
    users?: Array<string>;
    "contains-users"?: boolean;
    "user-status"?: ProjectsQueryUserStatusEnum;
    "is-template"?: boolean;
    "hydrated"?: boolean;
    access?: ProjectsQueryAccessEnum;
    "expense-limit"?: number;
    "expense-date"?: string;
}

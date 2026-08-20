import { Query } from "./Query";
export default interface TimeOffRequestQuery extends Query {
    end: string;
    page: number;
    pageSize: number;
    start: string;
    statuses: Array<"PENDING" | "APPROVED" | "REJECTED" | "ALL">;
    userGroups: string[];
    users: string[];
}

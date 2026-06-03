import { Query } from "./Query";
export default interface HolidayQuery extends Query {
    "assigned-to"?: string;
    start?: string;
    end?: string;
}

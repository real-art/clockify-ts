import { Query } from "./Query";
export default interface UpdateExpenseQuery extends Query {
    "archive-projects"?: boolean;
}

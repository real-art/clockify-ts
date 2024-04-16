import { Query } from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";
export default interface ExpenseQuery extends Query, MultiItemsQuery {
    archived?: boolean;
    userId?: string;
}

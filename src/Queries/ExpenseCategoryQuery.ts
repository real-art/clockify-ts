import {Query} from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";

export default interface ExpenseCategoryQuery extends Query, MultiItemsQuery {
    /**
     * If true, you'll get only archived clients. If false, you'll get only active clients.
     */
    archived?: boolean,
}

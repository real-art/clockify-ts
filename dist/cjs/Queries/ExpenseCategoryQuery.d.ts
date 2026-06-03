import { Query } from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";
export default interface ExpenseCategoryQuery extends Query, MultiItemsQuery {
    archived?: boolean;
}

import { Query } from "./Query";
export default interface UpdateExpenseCategoryQuery extends Query {
    "hasUnitPrice"?: boolean;
    "priceInCents"?: number;
    "unit"?: string;
}

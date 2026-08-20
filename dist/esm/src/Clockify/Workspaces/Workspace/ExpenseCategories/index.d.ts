import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseCategoryQuery from "../../../../Queries/ExpenseCategoryQuery";
import type { ExpenseCategoryType } from "../../../../Types/ExpenseCategoryType";
export default class ExpenseCategories extends ClockifyAPI implements IGettable<{
    count: number;
    categories: ExpenseCategoryType[];
}>, IPostable<ExpenseCategoryType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    withId(expenseCategoryId: string): ExpenseCategory;
    get(query?: ExpenseCategoryQuery): Promise<{
        count: number;
        categories: ExpenseCategoryType[];
    }>;
    post(data: {
        name: string;
    }): Promise<ExpenseCategoryType>;
}

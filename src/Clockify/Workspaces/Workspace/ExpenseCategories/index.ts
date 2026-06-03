import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import ExpenseCategory from "./ExpenseCategory";
import ExpenseCategoryQuery from "../../../../Queries/ExpenseCategoryQuery";
import type { ExpenseCategoryType } from "../../../../Types/ExpenseCategoryType";

export default class ExpenseCategories extends ClockifyAPI implements IGettable<{ count:number, categories: ExpenseCategoryType[] }>, IPostable<ExpenseCategoryType> {

    workspaceId: string;

    constructor(apiKey: string, workspaceId: string) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }

    resourceSubPath(): string {
        return `/workspaces/${this.workspaceId}/expenses/categories`;
    }

    withId(expenseCategoryId: string): ExpenseCategory {
        return new ExpenseCategory(this._apiKey, this.workspaceId, expenseCategoryId);
    }

    /**
     * Find expense category on workspace
     */
    get(query: ExpenseCategoryQuery = {}): Promise<{ count:number, categories: ExpenseCategoryType[] }> {
      return this.axiosGet<{ count:number, categories: ExpenseCategoryType[] }>(query);
    }

    /**
     * Add a new expense category to workspace
     */
    post(data: { name: string }): Promise<ExpenseCategoryType> {
        return this.axiosPost<ExpenseCategoryType>(data, {});
    }
}

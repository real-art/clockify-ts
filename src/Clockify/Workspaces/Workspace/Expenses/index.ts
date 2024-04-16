import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import Expense from "./Expense";
import ExpenseQuery from "../../../../Queries/ExpenseQuery";
import type { ExpenseType } from "../../../../Types/ExpenseType";

export default class Expenses extends ClockifyAPI implements IGettable<ExpenseType>, IPostable<ExpenseType> {

    workspaceId: string;

    constructor(apiKey: string, workspaceId: string) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }

    resourceSubPath(): string {
        return `/workspaces/${this.workspaceId}/expenses`;
    }

    withId(expenseId: string): Expense {
        return new Expense(this._apiKey, this.workspaceId, expenseId);
    }

    /**
     * Find clients on workspace
     */
    get(query: ExpenseQuery = {}): Promise<ExpenseType> {
      const expenseResult = this.axiosGet<ExpenseType>(query);
      return expenseResult;
    }

    /**
     * Add a new client to workspace
     */
    post(data: { name: string }): Promise<ExpenseType> {
        return this.axiosPost<ExpenseType>(data, {});
    }
}

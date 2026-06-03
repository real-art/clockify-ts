import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import Expense from "./Expense";
import ExpenseQuery from "../../../../Queries/ExpenseQuery";
import type { ExpenseType } from "../../../../Types/ExpenseType";
export default class Expenses extends ClockifyAPI implements IGettable<ExpenseType>, IPostable<ExpenseType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    withId(expenseId: string): Expense;
    get(query?: ExpenseQuery): Promise<ExpenseType>;
    post(data: {
        name: string;
    }): Promise<ExpenseType>;
}

import ClockifyAPI, { IDeletable, IPuttable } from "../../../../../Api/ClockifyApi";
import { ExpenseType } from "../../../../../Types/ExpenseType";
import { UpdateExpenseType } from "../../../../../Types/UpdateExpenseType";
import UpdateExpenseQuery from "../../../../../Queries/UpdateExpenseQuery";
export default class Expense extends ClockifyAPI implements IPuttable<ExpenseType>, IDeletable<ExpenseType> {
    workspaceId: string;
    expenseId: string;
    constructor(apiKey: string, workspaceId: string, expenseId: string);
    resourceSubPath(): string;
    put(data: UpdateExpenseType, query?: UpdateExpenseQuery): Promise<ExpenseType>;
    delete(): Promise<ExpenseType>;
}

import ClockifyAPI, { IDeletable, IPuttable } from "../../../../../Api/ClockifyApi";
import { ExpenseCategoryType } from "../../../../../Types/ExpenseCategoryType";
import { UpdateExpenseCategoryType } from "../../../../../Types/UpdateExpenseCategoryType";
import UpdateExpenseCategoryQuery from "../../../../../Queries/UpdateExpenseCategoryQuery";
export default class ExpenseCategory extends ClockifyAPI implements IPuttable<{
    count: number;
    categories: ExpenseCategoryType[];
}>, IDeletable<ExpenseCategoryType> {
    workspaceId: string;
    expenseCategoryId: string;
    constructor(apiKey: string, workspaceId: string, expenseCategoryId: string);
    resourceSubPath(): string;
    put(data: UpdateExpenseCategoryType, query?: UpdateExpenseCategoryQuery): Promise<{
        count: number;
        categories: ExpenseCategoryType[];
    }>;
    delete(): Promise<ExpenseCategoryType>;
}

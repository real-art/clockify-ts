import ClockifyAPI, {IDeletable, IPuttable} from "../../../../../Api/ClockifyApi";
import {ExpenseType} from "../../../../../Types/ExpenseType";
import {UpdateExpenseType} from "../../../../../Types/UpdateExpenseType";
import UpdateExpenseQuery from "../../../../../Queries/UpdateExpenseQuery";

export default class Expense extends ClockifyAPI implements IPuttable<ExpenseType>, IDeletable<ExpenseType> {

    workspaceId: string;
    expenseId: string;

    constructor(apiKey: string, workspaceId: string, expenseId: string) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.expenseId = expenseId;
    }

    resourceSubPath(): string {
        return `/workspaces/${this.workspaceId}/expenses/${this.expenseId}`;
    }

    /**
     * Update client
     */
    put(data: UpdateExpenseType, query: UpdateExpenseQuery = {}): Promise<ExpenseType> {
        return this.axiosPut<ExpenseType>(data, query);
    }

    /**
     * Delete client
     */
    delete(): Promise<ExpenseType> {
        return this.axiosDelete<ExpenseType>({});
    }

}

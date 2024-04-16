import ClockifyAPI, {IDeletable, IPuttable} from "../../../../../Api/ClockifyApi";
import {ExpenseCategoryType} from "../../../../../Types/ExpenseCategoryType";
import {UpdateExpenseCategoryType} from "../../../../../Types/UpdateExpenseCategoryType";
import UpdateExpenseCategoryQuery from "../../../../../Queries/UpdateExpenseCategoryQuery";

export default class ExpenseCategory extends ClockifyAPI implements IPuttable<{
  count:number, categories: ExpenseCategoryType[]
}>, IDeletable<ExpenseCategoryType> {

    workspaceId: string;
    expenseCategoryId: string;

    constructor(apiKey: string, workspaceId: string, expenseCategoryId: string) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.expenseCategoryId = expenseCategoryId;
    }

    resourceSubPath(): string {
        return `/workspaces/${this.workspaceId}/expenses/categories/${this.expenseCategoryId}`;
    }

    /**
     * Update client
     */
    put(data: UpdateExpenseCategoryType, query: UpdateExpenseCategoryQuery = {}): Promise<{
      count:number, categories: ExpenseCategoryType[]
    }> {
        return this.axiosPut<{
          count:number, categories: ExpenseCategoryType[]
        }>(data, query);
    }

    /**
     * Delete client
     */
    delete(): Promise<ExpenseCategoryType> {
        return this.axiosDelete<ExpenseCategoryType>({});
    }

}

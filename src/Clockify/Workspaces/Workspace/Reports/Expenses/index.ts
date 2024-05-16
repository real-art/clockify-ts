import {IPostable} from "../../../../../Api/ClockifyApi";
import ReportsApi from "../../../../../Api/ReportsApi";
import {ExpenseReportType} from "../../../../../Types/ExpenseReportType";
import {RequestExpenseReportType} from "../../../../../Types/RequestExpenseReportType";

export default class Expenses extends ReportsApi implements IPostable<ExpenseReportType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/reports/expenses/detailed`;
  }

  post(data: RequestExpenseReportType): Promise<ExpenseReportType> {
    return this.axiosPost<ExpenseReportType>(data, {});
  }
}

import { IPostable } from "../../../../../Api/ClockifyApi";
import ReportsApi from "../../../../../Api/ReportsApi";
import { ExpenseReportType } from "../../../../../Types/ExpenseReportType";
import { RequestExpenseReportType } from "../../../../../Types/RequestExpenseReportType";
export default class Expenses extends ReportsApi implements IPostable<ExpenseReportType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    post(data: RequestExpenseReportType): Promise<ExpenseReportType>;
}

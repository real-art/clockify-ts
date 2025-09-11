import { IPostable } from "../../../../../Api/ClockifyApi";
import { RequestWeeklyReportType } from "../../../../../Types/RequestWeeklyReportType";
import { WeeklyReportType } from "../../../../../Types/WeeklyReportType";
import ReportsApi from "../../../../../Api/ReportsApi";
export default class Weekly extends ReportsApi implements IPostable<WeeklyReportType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    post(data: RequestWeeklyReportType): Promise<WeeklyReportType>;
}

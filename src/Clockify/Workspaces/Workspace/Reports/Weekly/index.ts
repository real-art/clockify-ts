import {IPostable} from "../../../../../Api/ClockifyApi";
import {RequestWeeklyReportType} from "../../../../../Types/RequestWeeklyReportType";
import {WeeklyReportType} from "../../../../../Types/WeeklyReportType";
import ReportsApi from "../../../../../Api/ReportsApi";

export default class Weekly extends ReportsApi implements IPostable<WeeklyReportType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/reports/weekly`;
  }

  post(data: RequestWeeklyReportType): Promise<WeeklyReportType> {
    return this.axiosPost<WeeklyReportType>(data, {});
  }
}
import {IGettable} from "../../../../../Api/ClockifyApi";
import {SharedReportType} from "../../../../../Types/SharedReportType";
import ReportsApi from "../../../../../Api/ReportsApi";

export default class Shared extends ReportsApi implements IGettable<SharedReportType[]> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/reports/shared`;
  }

  get(): Promise<SharedReportType[]> {
    return this.axiosGet<SharedReportType[]>();
  }
}
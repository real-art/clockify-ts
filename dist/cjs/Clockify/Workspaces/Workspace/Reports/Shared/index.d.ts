import { IGettable } from "../../../../../Api/ClockifyApi";
import { SharedReportType } from "../../../../../Types/SharedReportType";
import ReportsApi from "../../../../../Api/ReportsApi";
export default class Shared extends ReportsApi implements IGettable<SharedReportType[]> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    get(): Promise<SharedReportType[]>;
}

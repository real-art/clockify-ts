import ClockifyAPI, { IPostable } from "../../../../Api/ClockifyApi";
import TimeEntry from "./TimeEntry";
import Approval from "./Approval";
import type { NewTimeEntryType } from "../../../../Types/NewTimeEntryType";
import type { TimeEntryType } from "../../../../Types/TimeEntryType";
export default class TimeEntries extends ClockifyAPI implements IPostable<TimeEntryType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    withId(timeEntryId: string): TimeEntry;
    post(data: NewTimeEntryType): Promise<TimeEntryType>;
    get approval(): Approval;
}

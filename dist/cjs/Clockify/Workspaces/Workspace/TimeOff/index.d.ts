import ClockifyAPI, { IPostable } from "../../../../Api/ClockifyApi";
import { TimeOffRequestType } from "../../../../Types/TimeOffType";
import TimeOffRequestQuery from "../../../../Queries/TimeOffRequestQuery";
export default class TimeOff extends ClockifyAPI implements IPostable<{
    count: number;
    requests: TimeOffRequestType[];
}> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    post(query: TimeOffRequestQuery): Promise<{
        count: number;
        requests: TimeOffRequestType[];
    }>;
}

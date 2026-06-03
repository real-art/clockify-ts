import ClockifyAPI, {IPostable} from "../../../../Api/ClockifyApi";
import {TimeOffRequestType} from "../../../../Types/TimeOffType";
import TimeOffRequestQuery from "../../../../Queries/TimeOffRequestQuery";

export default class TimeOff extends ClockifyAPI implements IPostable<{ count: number, requests: TimeOffRequestType[] }> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/time-off/requests`;
  }

  /**
   * Find all time off requests on workspace
   */
  post(query: TimeOffRequestQuery): Promise<{ count: number, requests: TimeOffRequestType[] }> {
    return this.axiosPost(query);
  }
}

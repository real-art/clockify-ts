import ClockifyAPI, {IGettable} from "../../../../../Api/ClockifyApi";
import HolidayQuery from "../../../../../Queries/HolidayQuery";
import {HolidayType} from "../../../../../Types/HolidayType";

export default class HolidayByPeriod extends ClockifyAPI implements IGettable<
  HolidayType[]
> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/holidays/in-period`;
  }

  /**
   * Get list of holidays within date range for workspace
   * NOTE: We use the same query parameters as for time-entries, but
   * the optional parameters are now required (per Clockify API docs)
   */
  get(query: HolidayQuery): Promise<HolidayType[]> {
    if (!query.start || !query.end || !query["assigned-to"]) {
      return Promise.reject(
        new Error("Parameters 'start', 'end' and 'assigned-to' parameters are required")
      );
    }
    return this.axiosGet(query);
  }
}

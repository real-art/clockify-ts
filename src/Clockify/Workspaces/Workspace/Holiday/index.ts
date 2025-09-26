import ClockifyAPI, {IGettable} from "../../../../Api/ClockifyApi";
import HolidayQuery from "../../../../Queries/HolidayQuery";
import {HolidayType} from "../../../../Types/HolidayType";
import HolidayByPeriod from "./HolidayByPeriod";

export default class Holiday extends ClockifyAPI implements IGettable<
  HolidayType[]
> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/holidays`;
  }

  /**
   * Get list of holidays for workspace
   */
  get(query: HolidayQuery): Promise<HolidayType[]> {
    return this.axiosGet(query);
  }

  get withDates(): HolidayByPeriod {
    return new HolidayByPeriod(this._apiKey, this.workspaceId);
  }
}

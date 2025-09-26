import ClockifyAPI, { IGettable } from "../../../../../Api/ClockifyApi";
import HolidayQuery from "../../../../../Queries/HolidayQuery";
import { HolidayType } from "../../../../../Types/HolidayType";
export default class HolidayByPeriod extends ClockifyAPI implements IGettable<HolidayType[]> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    get(query: HolidayQuery): Promise<HolidayType[]>;
}

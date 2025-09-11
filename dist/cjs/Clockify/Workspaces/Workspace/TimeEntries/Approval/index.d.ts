import ClockifyAPI, { IPatchable } from "../../../../../Api/ClockifyApi";
export default class Approval extends ClockifyAPI implements IPatchable<null> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    patch(data: {
        "timeEntryIds": Array<string>;
        "approved": boolean;
    }): Promise<null>;
}

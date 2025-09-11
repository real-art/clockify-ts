import ClockifyAPI, {IPatchable} from "../../../../../Api/ClockifyApi";


export default class Approval extends ClockifyAPI implements IPatchable<null> {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/time-entries/approval`;
  }

  /**
   * Approve or reject time entries
   */
  patch(data: { "timeEntryIds": Array<string>, "approved": boolean }): Promise<null> {
    return this.axiosPatch<null>(data, {});
  }

}
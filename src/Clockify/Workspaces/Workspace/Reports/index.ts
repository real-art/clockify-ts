import Summary from "./Summary";
import ClockifyAPI from "../../../../Api/ClockifyApi";
import Detailed from "./Detailed";
import Expenses from "./Expenses";
import Weekly from "./Weekly";
import Shared from "./Shared";

export default class Reports extends ClockifyAPI {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  get summary(): Summary {
    return new Summary(this._apiKey, this.workspaceId);
  }

  get detailed(): Detailed {
    return new Detailed(this._apiKey, this.workspaceId);
  }

  get weekly(): Weekly {
    return new Weekly(this._apiKey, this.workspaceId);
  }

  get shared(): Shared {
    return new Shared(this._apiKey, this.workspaceId);
  }

  get expenses(): Expenses {
    return new Expenses(this._apiKey, this.workspaceId);
  }
}

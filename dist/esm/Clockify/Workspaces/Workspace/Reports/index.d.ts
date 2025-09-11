import Summary from "./Summary";
import ClockifyAPI from "../../../../Api/ClockifyApi";
import Detailed from "./Detailed";
import Expenses from "./Expenses";
import Weekly from "./Weekly";
import Shared from "./Shared";
export default class Reports extends ClockifyAPI {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    get summary(): Summary;
    get detailed(): Detailed;
    get weekly(): Weekly;
    get shared(): Shared;
    get expenses(): Expenses;
}

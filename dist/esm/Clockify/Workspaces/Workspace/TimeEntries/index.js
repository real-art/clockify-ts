"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const TimeEntry_1 = __importDefault(require("./TimeEntry"));
class TimeEntries extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/time-entries`;
    }
    withId(timeEntryId) {
        return new TimeEntry_1.default(this._apiKey, this.workspaceId, timeEntryId);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = TimeEntries;
//# sourceMappingURL=index.js.map
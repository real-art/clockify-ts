"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
class TimeEntry extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, timeEntryId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.timeEntryId = timeEntryId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/time-entries/${this.timeEntryId}`;
    }
    get(query = {}) {
        return this.axiosGet(query);
    }
    put(data) {
        return this.axiosPut(data, {});
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = TimeEntry;
//# sourceMappingURL=index.js.map
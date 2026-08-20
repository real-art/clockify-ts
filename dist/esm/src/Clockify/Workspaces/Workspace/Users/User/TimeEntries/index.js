"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../Api/ClockifyApi"));
class TimeEntries extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, userId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.userId = userId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/user/${this.userId}/time-entries`;
    }
    get(query = {}) {
        return this.axiosGet(query);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
    patch(data) {
        return this.axiosPatch(data);
    }
}
exports.default = TimeEntries;
//# sourceMappingURL=index.js.map
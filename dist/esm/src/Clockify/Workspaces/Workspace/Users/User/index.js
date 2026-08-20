"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
const TimeEntries_1 = __importDefault(require("./TimeEntries"));
class User extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, userId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.userId = userId;
    }
    get timeEntries() {
        return new TimeEntries_1.default(this._apiKey, this.workspaceId, this.userId);
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/users/${this.userId}`;
    }
    put(data) {
        return this.axiosPut(data, {});
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = User;
//# sourceMappingURL=index.js.map
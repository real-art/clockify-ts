"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const HolidayByPeriod_1 = __importDefault(require("./HolidayByPeriod"));
class Holiday extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/holidays`;
    }
    get(query) {
        return this.axiosGet(query);
    }
    get withDates() {
        return new HolidayByPeriod_1.default(this._apiKey, this.workspaceId);
    }
}
exports.default = Holiday;
//# sourceMappingURL=index.js.map
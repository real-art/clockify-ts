"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
class HolidayByPeriod extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/holidays/in-period`;
    }
    get(query) {
        if (!query.start || !query.end || !query["assigned-to"]) {
            return Promise.reject(new Error("Parameters 'start', 'end' and 'assigned-to' parameters are required"));
        }
        return this.axiosGet(query);
    }
}
exports.default = HolidayByPeriod;
//# sourceMappingURL=index.js.map
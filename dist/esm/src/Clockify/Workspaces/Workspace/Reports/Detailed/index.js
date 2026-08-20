"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReportsApi_1 = __importDefault(require("../../../../../Api/ReportsApi"));
class Detailed extends ReportsApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/reports/detailed`;
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = Detailed;
//# sourceMappingURL=index.js.map
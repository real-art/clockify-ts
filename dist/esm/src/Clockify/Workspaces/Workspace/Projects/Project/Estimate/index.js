"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../Api/ClockifyApi"));
class Estimate extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, projectId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.projectId = projectId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/projects/${this.projectId}/estimate`;
    }
    patch(data) {
        return this.axiosPatch(data, {});
    }
}
exports.default = Estimate;
//# sourceMappingURL=index.js.map
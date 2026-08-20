"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const Project_1 = __importDefault(require("./Project"));
class Projects extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/projects`;
    }
    withId(projectId) {
        return new Project_1.default(this._apiKey, this.workspaceId, projectId);
    }
    get(query = {}) {
        return this.axiosGet(query);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = Projects;
//# sourceMappingURL=index.js.map
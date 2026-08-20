"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../Api/ClockifyApi"));
const Task_1 = __importDefault(require("./Task"));
class Tasks extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, projectId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.projectId = projectId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/projects/${this.projectId}/tasks`;
    }
    withId(taskId) {
        return new Task_1.default(this._apiKey, this.workspaceId, this.projectId, taskId);
    }
    get(query = {}) {
        return this.axiosGet(query);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = Tasks;
//# sourceMappingURL=index.js.map
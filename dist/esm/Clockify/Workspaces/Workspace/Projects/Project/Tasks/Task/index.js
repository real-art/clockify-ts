"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../../Api/ClockifyApi"));
class Task extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, projectId, taskId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.projectId = projectId;
        this.taskId = taskId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/projects/${this.projectId}/tasks/${this.taskId}`;
    }
    get() {
        return this.axiosGet({});
    }
    put(data) {
        return this.axiosPut(data, {});
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = Task;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
const CustomFields_1 = __importDefault(require("./CustomFields"));
const Estimate_1 = __importDefault(require("./Estimate"));
const Memberships_1 = __importDefault(require("./Memberships"));
const Tasks_1 = __importDefault(require("./Tasks"));
const Template_1 = __importDefault(require("./Template"));
class Project extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, projectId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.projectId = projectId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/projects/${this.projectId}`;
    }
    get customFields() {
        return new CustomFields_1.default(this._apiKey, this.workspaceId, this.projectId);
    }
    get estimate() {
        return new Estimate_1.default(this._apiKey, this.workspaceId, this.projectId);
    }
    get memberships() {
        return new Memberships_1.default(this._apiKey, this.workspaceId, this.projectId);
    }
    get tasks() {
        return new Tasks_1.default(this._apiKey, this.workspaceId, this.projectId);
    }
    get template() {
        return new Template_1.default(this._apiKey, this.workspaceId, this.projectId);
    }
    get(query = {}) {
        return this.axiosGet(query);
    }
    put(data, query = {}) {
        return this.axiosPut(data, query);
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = Project;
//# sourceMappingURL=index.js.map
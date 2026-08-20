"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../Api/ClockifyApi"));
const CustomField_1 = __importDefault(require("./CustomField"));
class CustomFields extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, projectId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.projectId = projectId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/projects/${this.projectId}/custom-fields`;
    }
    withId(customFieldId) {
        return new CustomField_1.default(this._apiKey, this.workspaceId, this.projectId, customFieldId);
    }
    get(query) {
        return this.axiosGet(query);
    }
}
exports.default = CustomFields;
//# sourceMappingURL=index.js.map
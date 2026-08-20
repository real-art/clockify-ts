"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../../Api/ClockifyApi"));
class CustomField extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, projectId, customFieldId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.projectId = projectId;
        this.customFieldId = customFieldId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/projects/${this.projectId}/custom-fields/${this.customFieldId}`;
    }
    patch(data) {
        return this.axiosPatch(data, {});
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = CustomField;
//# sourceMappingURL=index.js.map
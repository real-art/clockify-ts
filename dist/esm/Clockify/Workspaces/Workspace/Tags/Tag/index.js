"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
class Tag extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, tagId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.tagId = tagId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/tags/${this.tagId}`;
    }
    put(data) {
        return this.axiosPut(data, {});
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = Tag;
//# sourceMappingURL=index.js.map
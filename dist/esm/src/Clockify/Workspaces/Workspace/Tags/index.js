"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const Tag_1 = __importDefault(require("./Tag"));
class Tags extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/tags`;
    }
    withId(tagId) {
        return new Tag_1.default(this._apiKey, this.workspaceId, tagId);
    }
    get(query) {
        return this.axiosGet(query);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = Tags;
//# sourceMappingURL=index.js.map
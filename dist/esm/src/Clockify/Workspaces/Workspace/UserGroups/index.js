"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const UserGroup_1 = __importDefault(require("./UserGroup"));
class UserGroups extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/user-groups`;
    }
    withId(userGroupId) {
        return new UserGroup_1.default(this._apiKey, this.workspaceId, userGroupId);
    }
    get(query) {
        return this.axiosGet(query);
    }
    post(data) {
        return this.axiosPost(data);
    }
}
exports.default = UserGroups;
//# sourceMappingURL=index.js.map
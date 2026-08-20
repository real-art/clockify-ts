"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../../Api/ClockifyApi"));
class User extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, userGroupId, userId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.userGroupId = userGroupId;
        this.userId = userId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}/users/${this.userId}`;
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = User;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../../Api/ClockifyApi"));
const User_1 = __importDefault(require("./User"));
class Users extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, userGroupId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.userGroupId = userGroupId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}/users`;
    }
    withId(userId) {
        return new User_1.default(this._apiKey, this.workspaceId, this.userGroupId, userId);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = Users;
//# sourceMappingURL=index.js.map
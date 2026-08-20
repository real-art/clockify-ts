"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
const Users_1 = __importDefault(require("./Users"));
class UserGroup extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, userGroupId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.userGroupId = userGroupId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}`;
    }
    get users() {
        return new Users_1.default(this._apiKey, this.workspaceId, this.userGroupId);
    }
    put(data) {
        return this.axiosPut(data, {});
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = UserGroup;
//# sourceMappingURL=index.js.map
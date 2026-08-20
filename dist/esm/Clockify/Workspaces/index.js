"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../Api/ClockifyApi"));
const Workspace_1 = __importDefault(require("./Workspace"));
class Workspaces extends ClockifyApi_1.default {
    resourceSubPath() {
        return "/workspaces";
    }
    withId(workspaceId) {
        return new Workspace_1.default(this._apiKey, workspaceId);
    }
    get() {
        return this.axiosGet();
    }
}
exports.default = Workspaces;
//# sourceMappingURL=index.js.map
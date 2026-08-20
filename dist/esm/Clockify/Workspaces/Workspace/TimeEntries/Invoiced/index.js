"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
class Invoiced extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/time-entries/invoiced`;
    }
    patch(data) {
        return this.axiosPatch(data, {});
    }
}
exports.default = Invoiced;
//# sourceMappingURL=index.js.map
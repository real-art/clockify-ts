"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const Client_1 = __importDefault(require("./Client"));
class Clients extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/clients`;
    }
    withId(clientId) {
        return new Client_1.default(this._apiKey, this.workspaceId, clientId);
    }
    get(query = {}) {
        return this.axiosGet(query);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = Clients;
//# sourceMappingURL=index.js.map
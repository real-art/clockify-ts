"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
class Client extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, clientId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.clientId = clientId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/clients/${this.clientId}`;
    }
    put(data, query = {}) {
        return this.axiosPut(data, query);
    }
    get() {
        return this.axiosGet({});
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = Client;
//# sourceMappingURL=index.js.map
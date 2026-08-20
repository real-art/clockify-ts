"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
class Expense extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, expenseId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.expenseId = expenseId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/expenses/${this.expenseId}`;
    }
    put(data, query = {}) {
        return this.axiosPut(data, query);
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = Expense;
//# sourceMappingURL=index.js.map
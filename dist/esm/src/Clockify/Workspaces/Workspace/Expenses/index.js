"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const Expense_1 = __importDefault(require("./Expense"));
class Expenses extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/expenses`;
    }
    withId(expenseId) {
        return new Expense_1.default(this._apiKey, this.workspaceId, expenseId);
    }
    get(query = {}) {
        const expenseResult = this.axiosGet(query);
        return expenseResult;
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = Expenses;
//# sourceMappingURL=index.js.map
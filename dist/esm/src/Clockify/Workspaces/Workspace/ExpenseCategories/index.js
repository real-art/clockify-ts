"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const ExpenseCategory_1 = __importDefault(require("./ExpenseCategory"));
class ExpenseCategories extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/expenses/categories`;
    }
    withId(expenseCategoryId) {
        return new ExpenseCategory_1.default(this._apiKey, this.workspaceId, expenseCategoryId);
    }
    get(query = {}) {
        return this.axiosGet(query);
    }
    post(data) {
        return this.axiosPost(data, {});
    }
}
exports.default = ExpenseCategories;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../../../Api/ClockifyApi"));
class ExpenseCategory extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId, expenseCategoryId) {
        super(apiKey);
        this.workspaceId = workspaceId;
        this.expenseCategoryId = expenseCategoryId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}/expenses/categories/${this.expenseCategoryId}`;
    }
    put(data, query = {}) {
        return this.axiosPut(data, query);
    }
    delete() {
        return this.axiosDelete({});
    }
}
exports.default = ExpenseCategory;
//# sourceMappingURL=index.js.map
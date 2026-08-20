"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Summary_1 = __importDefault(require("./Summary"));
const ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
const Detailed_1 = __importDefault(require("./Detailed"));
const Expenses_1 = __importDefault(require("./Expenses"));
class Reports extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    get summary() {
        return new Summary_1.default(this._apiKey, this.workspaceId);
    }
    get detailed() {
        return new Detailed_1.default(this._apiKey, this.workspaceId);
    }
    get expenses() {
        return new Expenses_1.default(this._apiKey, this.workspaceId);
    }
}
exports.default = Reports;
//# sourceMappingURL=index.js.map
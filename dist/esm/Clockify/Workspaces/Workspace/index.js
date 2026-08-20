"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../../Api/ClockifyApi"));
const Users_1 = __importDefault(require("./Users"));
const Clients_1 = __importDefault(require("./Clients"));
const Projects_1 = __importDefault(require("./Projects"));
const Tags_1 = __importDefault(require("./Tags"));
const CustomFields_1 = __importDefault(require("./CustomFields"));
const TimeEntries_1 = __importDefault(require("./TimeEntries"));
const UserGroups_1 = __importDefault(require("./UserGroups"));
const Reports_1 = __importDefault(require("./Reports"));
const Expenses_1 = __importDefault(require("./Expenses"));
const ExpenseCategories_1 = __importDefault(require("./ExpenseCategories"));
const TimeOff_1 = __importDefault(require("./TimeOff"));
const Holiday_1 = __importDefault(require("./Holiday"));
class Workspace extends ClockifyApi_1.default {
    constructor(apiKey, workspaceId) {
        super(apiKey);
        this.workspaceId = workspaceId;
    }
    resourceSubPath() {
        return `/workspaces/${this.workspaceId}`;
    }
    get clients() {
        return new Clients_1.default(this._apiKey, this.workspaceId);
    }
    get customFields() {
        return new CustomFields_1.default(this._apiKey, this.workspaceId);
    }
    get projects() {
        return new Projects_1.default(this._apiKey, this.workspaceId);
    }
    get tags() {
        return new Tags_1.default(this._apiKey, this.workspaceId);
    }
    get timeEntries() {
        return new TimeEntries_1.default(this._apiKey, this.workspaceId);
    }
    get userGroups() {
        return new UserGroups_1.default(this._apiKey, this.workspaceId);
    }
    get users() {
        return new Users_1.default(this._apiKey, this.workspaceId);
    }
    get reports() {
        return new Reports_1.default(this._apiKey, this.workspaceId);
    }
    get expenses() {
        return new Expenses_1.default(this._apiKey, this.workspaceId);
    }
    get expenseCategories() {
        return new ExpenseCategories_1.default(this._apiKey, this.workspaceId);
    }
    get timeOff() {
        return new TimeOff_1.default(this._apiKey, this.workspaceId);
    }
    get holidays() {
        return new Holiday_1.default(this._apiKey, this.workspaceId);
    }
}
exports.default = Workspace;
//# sourceMappingURL=index.js.map
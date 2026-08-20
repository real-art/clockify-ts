"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../Api/ClockifyApi"));
const Users_1 = __importDefault(require("./Users"));
const Workspaces_1 = __importDefault(require("./Workspaces"));
const Workspaces_2 = __importDefault(require("./Workspaces"));
class Clockify extends ClockifyApi_1.default {
    constructor(apiKey) {
        super(apiKey);
        this.workspace = new Workspaces_1.default(apiKey);
    }
    get user() {
        return new Users_1.default(this._apiKey);
    }
    get workspaces() {
        return new Workspaces_2.default(this._apiKey);
    }
}
exports.default = Clockify;
//# sourceMappingURL=index.js.map
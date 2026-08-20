"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClockifyApi_1 = __importDefault(require("../../Api/ClockifyApi"));
class Users extends ClockifyApi_1.default {
    resourceSubPath() {
        return "/user";
    }
    get() {
        return this.axiosGet();
    }
}
exports.default = Users;
//# sourceMappingURL=index.js.map
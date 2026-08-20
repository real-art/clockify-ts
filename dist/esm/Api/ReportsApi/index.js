"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ClockifyApi_1 = __importDefault(require("../ClockifyApi"));
class ReportsApi extends ClockifyApi_1.default {
    clockifyApiInstance(apiKey) {
        return axios_1.default.create({
            baseURL: "https://reports.api.clockify.me/v1",
            headers: {
                'content-type': 'application/json',
                'X-Api-Key': apiKey,
            },
        });
    }
}
exports.default = ReportsApi;
//# sourceMappingURL=index.js.map
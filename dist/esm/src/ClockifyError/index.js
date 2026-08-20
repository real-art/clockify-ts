"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
class ClockifyError extends Error {
    constructor(error) {
        var _a, _b;
        let message;
        const requestMethod = (_b = (_a = error.config) === null || _a === void 0 ? void 0 : _a.method) === null || _b === void 0 ? void 0 : _b.toUpperCase();
        if (error.response) {
            const statusCode = error.response.status;
            const errorData = error.response.data;
            message = `Response Error[${requestMethod}:${statusCode}]: ${(0, http_status_codes_1.getReasonPhrase)(statusCode)}. Message: ${errorData.message}. Resource: ${errorData.path}`;
        }
        else if (error.request) {
            message = `Response Error[${requestMethod}]: ${JSON.stringify(error.request)}`;
        }
        else {
            message = `Error: ${error.message}`;
        }
        super(message);
    }
}
exports.default = ClockifyError;
//# sourceMappingURL=index.js.map
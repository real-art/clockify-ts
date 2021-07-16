"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = __importDefault(require("../../../../../Api"));
var Client = (function (_super) {
    __extends(Client, _super);
    function Client(apiKey, workspaceId, clientId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.clientId = clientId;
        return _this;
    }
    Client.prototype.resourceSubPath = function () {
        return "/workspaces/" + this.workspaceId + "/clients/" + this.clientId;
    };
    Client.prototype.put = function (data, query) {
        if (query === void 0) { query = {}; }
        return this.axiosPut(data, query);
    };
    Client.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return Client;
}(Api_1.default));
exports.default = Client;
//# sourceMappingURL=index.js.map
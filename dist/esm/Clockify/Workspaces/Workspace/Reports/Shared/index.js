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
import ReportsApi from "../../../../../Api/ReportsApi";
var Shared = (function (_super) {
    __extends(Shared, _super);
    function Shared(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Shared.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/reports/shared");
    };
    Shared.prototype.get = function () {
        return this.axiosGet();
    };
    return Shared;
}(ReportsApi));
export default Shared;
//# sourceMappingURL=index.js.map
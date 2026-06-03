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
import ClockifyAPI from "../../../../Api/ClockifyApi";
import HolidayByPeriod from "./HolidayByPeriod";
var Holiday = (function (_super) {
    __extends(Holiday, _super);
    function Holiday(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Holiday.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/holidays");
    };
    Holiday.prototype.get = function (query) {
        return this.axiosGet(query);
    };
    Object.defineProperty(Holiday.prototype, "withDates", {
        get: function () {
            return new HolidayByPeriod(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    return Holiday;
}(ClockifyAPI));
export default Holiday;
//# sourceMappingURL=index.js.map
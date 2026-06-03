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
import ClockifyAPI from "../../../../../Api/ClockifyApi";
var Expense = (function (_super) {
    __extends(Expense, _super);
    function Expense(apiKey, workspaceId, expenseId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.expenseId = expenseId;
        return _this;
    }
    Expense.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/expenses/").concat(this.expenseId);
    };
    Expense.prototype.put = function (data, query) {
        if (query === void 0) { query = {}; }
        return this.axiosPut(data, query);
    };
    Expense.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return Expense;
}(ClockifyAPI));
export default Expense;
//# sourceMappingURL=index.js.map
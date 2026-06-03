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
import Expense from "./Expense";
var Expenses = (function (_super) {
    __extends(Expenses, _super);
    function Expenses(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Expenses.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/expenses");
    };
    Expenses.prototype.withId = function (expenseId) {
        return new Expense(this._apiKey, this.workspaceId, expenseId);
    };
    Expenses.prototype.get = function (query) {
        if (query === void 0) { query = {}; }
        var expenseResult = this.axiosGet(query);
        return expenseResult;
    };
    Expenses.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    return Expenses;
}(ClockifyAPI));
export default Expenses;
//# sourceMappingURL=index.js.map
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
import ExpenseCategory from "./ExpenseCategory";
var ExpenseCategories = (function (_super) {
    __extends(ExpenseCategories, _super);
    function ExpenseCategories(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    ExpenseCategories.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/expenses/categories");
    };
    ExpenseCategories.prototype.withId = function (expenseCategoryId) {
        return new ExpenseCategory(this._apiKey, this.workspaceId, expenseCategoryId);
    };
    ExpenseCategories.prototype.get = function (query) {
        if (query === void 0) { query = {}; }
        return this.axiosGet(query);
    };
    ExpenseCategories.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    return ExpenseCategories;
}(ClockifyAPI));
export default ExpenseCategories;
//# sourceMappingURL=index.js.map
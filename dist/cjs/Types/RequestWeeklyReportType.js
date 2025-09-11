"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWeeklyReportTaskStatusFilterEnum = exports.RequestWeeklyReportUserStatusFilterEnum = exports.RequestWeeklyReportTagStatusFilterEnum = exports.RequestWeeklyReportClientStatusFilterEnum = exports.RequestWeeklyReportProjectStatusFilterEnum = exports.RequestWeeklyReportContainedInTimeEntryFilterEnum = exports.RequestWeeklyReportContainsFilterEnum = exports.RequestWeeklyReportExportTypeEnum = exports.RequestWeeklyReportAmountShownEnum = exports.RequestWeeklyReportSortColumnEnum = exports.RequestWeeklyReportApprovalStateEnum = exports.RequestWeeklyReportInvoicingStateEnum = exports.RequestWeeklyReportSortOrderEnum = exports.RequestWeeklyReportGroupsEnum = void 0;
var RequestWeeklyReportGroupsEnum;
(function (RequestWeeklyReportGroupsEnum) {
    RequestWeeklyReportGroupsEnum["project"] = "PROJECT";
    RequestWeeklyReportGroupsEnum["client"] = "CLIENT";
    RequestWeeklyReportGroupsEnum["task"] = "TASK";
    RequestWeeklyReportGroupsEnum["tag"] = "TAG";
    RequestWeeklyReportGroupsEnum["user"] = "USER";
    RequestWeeklyReportGroupsEnum["userGroup"] = "USER_GROUP";
})(RequestWeeklyReportGroupsEnum || (exports.RequestWeeklyReportGroupsEnum = RequestWeeklyReportGroupsEnum = {}));
var RequestWeeklyReportSortOrderEnum;
(function (RequestWeeklyReportSortOrderEnum) {
    RequestWeeklyReportSortOrderEnum["ascending"] = "ASCENDING";
    RequestWeeklyReportSortOrderEnum["descending"] = "DESCENDING";
})(RequestWeeklyReportSortOrderEnum || (exports.RequestWeeklyReportSortOrderEnum = RequestWeeklyReportSortOrderEnum = {}));
var RequestWeeklyReportInvoicingStateEnum;
(function (RequestWeeklyReportInvoicingStateEnum) {
    RequestWeeklyReportInvoicingStateEnum["invoiced"] = "INVOICED";
    RequestWeeklyReportInvoicingStateEnum["uninvoiced"] = "UNINVOICED";
    RequestWeeklyReportInvoicingStateEnum["all"] = "ALL";
})(RequestWeeklyReportInvoicingStateEnum || (exports.RequestWeeklyReportInvoicingStateEnum = RequestWeeklyReportInvoicingStateEnum = {}));
var RequestWeeklyReportApprovalStateEnum;
(function (RequestWeeklyReportApprovalStateEnum) {
    RequestWeeklyReportApprovalStateEnum["approved"] = "APPROVED";
    RequestWeeklyReportApprovalStateEnum["unapproved"] = "UNAPPROVED";
    RequestWeeklyReportApprovalStateEnum["all"] = "ALL";
})(RequestWeeklyReportApprovalStateEnum || (exports.RequestWeeklyReportApprovalStateEnum = RequestWeeklyReportApprovalStateEnum = {}));
var RequestWeeklyReportSortColumnEnum;
(function (RequestWeeklyReportSortColumnEnum) {
    RequestWeeklyReportSortColumnEnum["group"] = "GROUP";
    RequestWeeklyReportSortColumnEnum["duration"] = "DURATION";
    RequestWeeklyReportSortColumnEnum["amount"] = "AMOUNT";
})(RequestWeeklyReportSortColumnEnum || (exports.RequestWeeklyReportSortColumnEnum = RequestWeeklyReportSortColumnEnum = {}));
var RequestWeeklyReportAmountShownEnum;
(function (RequestWeeklyReportAmountShownEnum) {
    RequestWeeklyReportAmountShownEnum["hideAmount"] = "HIDE_AMOUNT";
    RequestWeeklyReportAmountShownEnum["earned"] = "EARNED";
    RequestWeeklyReportAmountShownEnum["cost"] = "COST";
    RequestWeeklyReportAmountShownEnum["profit"] = "PROFIT";
})(RequestWeeklyReportAmountShownEnum || (exports.RequestWeeklyReportAmountShownEnum = RequestWeeklyReportAmountShownEnum = {}));
var RequestWeeklyReportExportTypeEnum;
(function (RequestWeeklyReportExportTypeEnum) {
    RequestWeeklyReportExportTypeEnum["json"] = "JSON";
    RequestWeeklyReportExportTypeEnum["csv"] = "CSV";
    RequestWeeklyReportExportTypeEnum["xlsx"] = "XLSX";
    RequestWeeklyReportExportTypeEnum["pdf"] = "PDF";
})(RequestWeeklyReportExportTypeEnum || (exports.RequestWeeklyReportExportTypeEnum = RequestWeeklyReportExportTypeEnum = {}));
var RequestWeeklyReportContainsFilterEnum;
(function (RequestWeeklyReportContainsFilterEnum) {
    RequestWeeklyReportContainsFilterEnum["contains"] = "CONTAINS";
    RequestWeeklyReportContainsFilterEnum["doesNotContain"] = "DOES_NOT_CONTAIN";
})(RequestWeeklyReportContainsFilterEnum || (exports.RequestWeeklyReportContainsFilterEnum = RequestWeeklyReportContainsFilterEnum = {}));
var RequestWeeklyReportContainedInTimeEntryFilterEnum;
(function (RequestWeeklyReportContainedInTimeEntryFilterEnum) {
    RequestWeeklyReportContainedInTimeEntryFilterEnum["containedInTimeentry"] = "CONTAINED_IN_TIMEENTRY";
    RequestWeeklyReportContainedInTimeEntryFilterEnum["notContainedInTimeentry"] = "NOT_CONTAINED_IN_TIMEENTRY";
})(RequestWeeklyReportContainedInTimeEntryFilterEnum || (exports.RequestWeeklyReportContainedInTimeEntryFilterEnum = RequestWeeklyReportContainedInTimeEntryFilterEnum = {}));
var RequestWeeklyReportProjectStatusFilterEnum;
(function (RequestWeeklyReportProjectStatusFilterEnum) {
    RequestWeeklyReportProjectStatusFilterEnum["active"] = "ACTIVE";
    RequestWeeklyReportProjectStatusFilterEnum["archived"] = "ARCHIVED";
    RequestWeeklyReportProjectStatusFilterEnum["all"] = "ALL";
})(RequestWeeklyReportProjectStatusFilterEnum || (exports.RequestWeeklyReportProjectStatusFilterEnum = RequestWeeklyReportProjectStatusFilterEnum = {}));
var RequestWeeklyReportClientStatusFilterEnum;
(function (RequestWeeklyReportClientStatusFilterEnum) {
    RequestWeeklyReportClientStatusFilterEnum["active"] = "ACTIVE";
    RequestWeeklyReportClientStatusFilterEnum["archived"] = "ARCHIVED";
    RequestWeeklyReportClientStatusFilterEnum["all"] = "ALL";
})(RequestWeeklyReportClientStatusFilterEnum || (exports.RequestWeeklyReportClientStatusFilterEnum = RequestWeeklyReportClientStatusFilterEnum = {}));
var RequestWeeklyReportTagStatusFilterEnum;
(function (RequestWeeklyReportTagStatusFilterEnum) {
    RequestWeeklyReportTagStatusFilterEnum["active"] = "ACTIVE";
    RequestWeeklyReportTagStatusFilterEnum["archived"] = "ARCHIVED";
    RequestWeeklyReportTagStatusFilterEnum["all"] = "ALL";
})(RequestWeeklyReportTagStatusFilterEnum || (exports.RequestWeeklyReportTagStatusFilterEnum = RequestWeeklyReportTagStatusFilterEnum = {}));
var RequestWeeklyReportUserStatusFilterEnum;
(function (RequestWeeklyReportUserStatusFilterEnum) {
    RequestWeeklyReportUserStatusFilterEnum["active"] = "ACTIVE";
    RequestWeeklyReportUserStatusFilterEnum["inactive"] = "INACTIVE";
    RequestWeeklyReportUserStatusFilterEnum["all"] = "ALL";
})(RequestWeeklyReportUserStatusFilterEnum || (exports.RequestWeeklyReportUserStatusFilterEnum = RequestWeeklyReportUserStatusFilterEnum = {}));
var RequestWeeklyReportTaskStatusFilterEnum;
(function (RequestWeeklyReportTaskStatusFilterEnum) {
    RequestWeeklyReportTaskStatusFilterEnum["active"] = "ACTIVE";
    RequestWeeklyReportTaskStatusFilterEnum["done"] = "DONE";
    RequestWeeklyReportTaskStatusFilterEnum["all"] = "ALL";
})(RequestWeeklyReportTaskStatusFilterEnum || (exports.RequestWeeklyReportTaskStatusFilterEnum = RequestWeeklyReportTaskStatusFilterEnum = {}));
//# sourceMappingURL=RequestWeeklyReportType.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestExpenseReportZoomLevelEnum = exports.RequestExpenseReportWeekStartEnum = exports.RequestExpenseReportUserStatusFilterEnum = exports.RequestExpenseReportDateRangeTypeEnum = exports.RequestExpenseReportClientStatusFilterEnum = exports.RequestExpenseReportProjectStatusFilterEnum = exports.RequestExpenseReportContainsFilterEnum = exports.RequestExpenseReportExportTypeEnum = exports.RequestExpenseReportSortColumnEnum = exports.RequestExpenseReportApprovalStateEnum = exports.RequestExpenseReportInvoicingStateEnum = exports.RequestExpenseReportSortOrderEnum = void 0;
var RequestExpenseReportSortOrderEnum;
(function (RequestExpenseReportSortOrderEnum) {
    RequestExpenseReportSortOrderEnum["ascending"] = "ASCENDING";
    RequestExpenseReportSortOrderEnum["descending"] = "DESCENDING";
})(RequestExpenseReportSortOrderEnum || (exports.RequestExpenseReportSortOrderEnum = RequestExpenseReportSortOrderEnum = {}));
var RequestExpenseReportInvoicingStateEnum;
(function (RequestExpenseReportInvoicingStateEnum) {
    RequestExpenseReportInvoicingStateEnum["invoiced"] = "INVOICED";
    RequestExpenseReportInvoicingStateEnum["uninvoiced"] = "UNINVOICED";
    RequestExpenseReportInvoicingStateEnum["all"] = "ALL";
})(RequestExpenseReportInvoicingStateEnum || (exports.RequestExpenseReportInvoicingStateEnum = RequestExpenseReportInvoicingStateEnum = {}));
var RequestExpenseReportApprovalStateEnum;
(function (RequestExpenseReportApprovalStateEnum) {
    RequestExpenseReportApprovalStateEnum["approved"] = "APPROVED";
    RequestExpenseReportApprovalStateEnum["unapproved"] = "UNAPPROVED";
    RequestExpenseReportApprovalStateEnum["all"] = "ALL";
})(RequestExpenseReportApprovalStateEnum || (exports.RequestExpenseReportApprovalStateEnum = RequestExpenseReportApprovalStateEnum = {}));
var RequestExpenseReportSortColumnEnum;
(function (RequestExpenseReportSortColumnEnum) {
    RequestExpenseReportSortColumnEnum["id"] = "ID";
    RequestExpenseReportSortColumnEnum["project"] = "PROJECT";
    RequestExpenseReportSortColumnEnum["user"] = "USER";
    RequestExpenseReportSortColumnEnum["category"] = "CATEGORY";
    RequestExpenseReportSortColumnEnum["date"] = "DATE";
    RequestExpenseReportSortColumnEnum["amount"] = "AMOUNT";
})(RequestExpenseReportSortColumnEnum || (exports.RequestExpenseReportSortColumnEnum = RequestExpenseReportSortColumnEnum = {}));
var RequestExpenseReportExportTypeEnum;
(function (RequestExpenseReportExportTypeEnum) {
    RequestExpenseReportExportTypeEnum["json"] = "JSON";
    RequestExpenseReportExportTypeEnum["jsonV1"] = "JSON_V1";
    RequestExpenseReportExportTypeEnum["pdf"] = "PDF";
    RequestExpenseReportExportTypeEnum["csv"] = "CSV";
    RequestExpenseReportExportTypeEnum["xlsx"] = "XLSX";
    RequestExpenseReportExportTypeEnum["zip"] = "ZIP";
})(RequestExpenseReportExportTypeEnum || (exports.RequestExpenseReportExportTypeEnum = RequestExpenseReportExportTypeEnum = {}));
var RequestExpenseReportContainsFilterEnum;
(function (RequestExpenseReportContainsFilterEnum) {
    RequestExpenseReportContainsFilterEnum["contains"] = "CONTAINS";
    RequestExpenseReportContainsFilterEnum["doesNotContain"] = "DOES_NOT_CONTAIN";
})(RequestExpenseReportContainsFilterEnum || (exports.RequestExpenseReportContainsFilterEnum = RequestExpenseReportContainsFilterEnum = {}));
var RequestExpenseReportProjectStatusFilterEnum;
(function (RequestExpenseReportProjectStatusFilterEnum) {
    RequestExpenseReportProjectStatusFilterEnum["all"] = "ALL";
    RequestExpenseReportProjectStatusFilterEnum["active"] = "ACTIVE";
    RequestExpenseReportProjectStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestExpenseReportProjectStatusFilterEnum || (exports.RequestExpenseReportProjectStatusFilterEnum = RequestExpenseReportProjectStatusFilterEnum = {}));
var RequestExpenseReportClientStatusFilterEnum;
(function (RequestExpenseReportClientStatusFilterEnum) {
    RequestExpenseReportClientStatusFilterEnum["all"] = "ALL";
    RequestExpenseReportClientStatusFilterEnum["active"] = "ACTIVE";
    RequestExpenseReportClientStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestExpenseReportClientStatusFilterEnum || (exports.RequestExpenseReportClientStatusFilterEnum = RequestExpenseReportClientStatusFilterEnum = {}));
var RequestExpenseReportDateRangeTypeEnum;
(function (RequestExpenseReportDateRangeTypeEnum) {
    RequestExpenseReportDateRangeTypeEnum["absolute"] = "ABSOLUTE";
    RequestExpenseReportDateRangeTypeEnum["today"] = "TODAY";
    RequestExpenseReportDateRangeTypeEnum["yesterday"] = "YESTERDAY";
    RequestExpenseReportDateRangeTypeEnum["thisWeek"] = "THIS_WEEK";
    RequestExpenseReportDateRangeTypeEnum["lastWeek"] = "LAST_WEEK";
    RequestExpenseReportDateRangeTypeEnum["pastTwoWeeks"] = "PAST_TWO_WEEKS";
    RequestExpenseReportDateRangeTypeEnum["thisMonth"] = "THIS_MONTH";
    RequestExpenseReportDateRangeTypeEnum["lastMonth"] = "LAST_MONTH";
    RequestExpenseReportDateRangeTypeEnum["thisYear"] = "THIS_YEAR";
    RequestExpenseReportDateRangeTypeEnum["lastYear"] = "LAST_YEAR";
})(RequestExpenseReportDateRangeTypeEnum || (exports.RequestExpenseReportDateRangeTypeEnum = RequestExpenseReportDateRangeTypeEnum = {}));
var RequestExpenseReportUserStatusFilterEnum;
(function (RequestExpenseReportUserStatusFilterEnum) {
    RequestExpenseReportUserStatusFilterEnum["all"] = "ALL";
    RequestExpenseReportUserStatusFilterEnum["active"] = "ACTIVE";
    RequestExpenseReportUserStatusFilterEnum["inactive"] = "INACTIVE";
})(RequestExpenseReportUserStatusFilterEnum || (exports.RequestExpenseReportUserStatusFilterEnum = RequestExpenseReportUserStatusFilterEnum = {}));
var RequestExpenseReportWeekStartEnum;
(function (RequestExpenseReportWeekStartEnum) {
    RequestExpenseReportWeekStartEnum["monday"] = "MONDAY";
    RequestExpenseReportWeekStartEnum["tuesday"] = "TUESDAY";
    RequestExpenseReportWeekStartEnum["wednesday"] = "WEDNESDAY";
    RequestExpenseReportWeekStartEnum["thursday"] = "THURSDAY";
    RequestExpenseReportWeekStartEnum["friday"] = "FRIDAY";
    RequestExpenseReportWeekStartEnum["saturday"] = "SATURDAY";
    RequestExpenseReportWeekStartEnum["sunday"] = "SUNDAY";
})(RequestExpenseReportWeekStartEnum || (exports.RequestExpenseReportWeekStartEnum = RequestExpenseReportWeekStartEnum = {}));
var RequestExpenseReportZoomLevelEnum;
(function (RequestExpenseReportZoomLevelEnum) {
    RequestExpenseReportZoomLevelEnum["week"] = "WEEK";
    RequestExpenseReportZoomLevelEnum["month"] = "MONTH";
    RequestExpenseReportZoomLevelEnum["year"] = "YEAR";
})(RequestExpenseReportZoomLevelEnum || (exports.RequestExpenseReportZoomLevelEnum = RequestExpenseReportZoomLevelEnum = {}));
//# sourceMappingURL=RequestExpenseReportType.js.map
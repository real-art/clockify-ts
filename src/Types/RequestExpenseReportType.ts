export enum RequestExpenseReportSortOrderEnum {
  ascending = "ASCENDING",
  descending = "DESCENDING",
}

export enum RequestExpenseReportInvoicingStateEnum {
  invoiced = "INVOICED",
  uninvoiced = "UNINVOICED",
  all = "ALL",
}

export enum RequestExpenseReportApprovalStateEnum {
  approved = "APPROVED",
  unapproved = "UNAPPROVED",
  all = "ALL",
}

export enum RequestExpenseReportSortColumnEnum {
  id = "ID",
  project = "PROJECT",
  user = "USER",
  category = "CATEGORY",
  date = "DATE",
  amount = "AMOUNT",
}

export enum RequestExpenseReportExportTypeEnum {
  json = "JSON",
  jsonV1 = "JSON_V1",
  pdf = "PDF",
  csv = "CSV",
  xlsx = "XLSX",
  zip = "ZIP",
}

export enum RequestExpenseReportContainsFilterEnum {
  contains = "CONTAINS",
  doesNotContain = "DOES_NOT_CONTAIN",
}

export enum RequestExpenseReportProjectStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestExpenseReportClientStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestExpenseReportDateRangeTypeEnum {
  absolute = "ABSOLUTE",
  today = "TODAY",
  yesterday = "YESTERDAY",
  thisWeek = "THIS_WEEK",
  lastWeek = "LAST_WEEK",
  pastTwoWeeks = "PAST_TWO_WEEKS",
  thisMonth = "THIS_MONTH",
  lastMonth = "LAST_MONTH",
  thisYear = "THIS_YEAR",
  lastYear = "LAST_YEAR",
}

export enum RequestExpenseReportUserStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  inactive = "INACTIVE",
}

export enum RequestExpenseReportWeekStartEnum {
  monday = "MONDAY",
  tuesday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
  sunday = "SUNDAY",
}

export enum RequestExpenseReportZoomLevelEnum {
  week = "WEEK",
  month = "MONTH",
  year = "YEAR",
}

type RequestExpenseReportType = {
  approvalState?: RequestExpenseReportApprovalStateEnum,
  billable?: boolean,
  categories?: {
    ids: string[],
    contains: RequestExpenseReportContainsFilterEnum,
    status: RequestExpenseReportClientStatusFilterEnum,
  },
  clients?: {
    ids: string[],
    contains: RequestExpenseReportContainsFilterEnum,
    status: RequestExpenseReportClientStatusFilterEnum,
  },
  currency?: {
    ids: string[],
    contains: RequestExpenseReportContainsFilterEnum,
    status: RequestExpenseReportClientStatusFilterEnum,
  },
  dateRangeEnd: Date,
  dateRangeStart: Date,
  dateRangeType?: RequestExpenseReportDateRangeTypeEnum,
  exportType?: RequestExpenseReportExportTypeEnum,
  invoicingState?: RequestExpenseReportInvoicingStateEnum,
  note?: string,
  page?: number,
  pageSize?: number,
  projects?: {
    ids: string[],
    contains: RequestExpenseReportContainsFilterEnum,
    status: RequestExpenseReportProjectStatusFilterEnum,
  },
  sortColumn?: RequestExpenseReportSortColumnEnum,
  sortOrder?: RequestExpenseReportSortOrderEnum,
  timeZone?: string,
  userGroups?: {
    ids: string[],
    contains: RequestExpenseReportContainsFilterEnum,
    status: RequestExpenseReportProjectStatusFilterEnum,
  },
  userLocale?: string,
  users?: {
    ids: string[],
    contains: RequestExpenseReportContainsFilterEnum,
    status: RequestExpenseReportUserStatusFilterEnum,
  },
  weekStart?: RequestExpenseReportWeekStartEnum,
  withoutDescription?: boolean,
  withoutNote?: boolean,
  zoomLevel?: RequestExpenseReportZoomLevelEnum,
}

export {
  RequestExpenseReportType
}

export enum RequestWeeklyReportGroupsEnum {
  project = "PROJECT",
  client = "CLIENT",
  task = "TASK",
  tag = "TAG",
  user = "USER",
  userGroup = "USER_GROUP",
}

export enum RequestWeeklyReportSortOrderEnum {
  ascending = "ASCENDING",
  descending = "DESCENDING",
}

export enum RequestWeeklyReportInvoicingStateEnum {
  invoiced = "INVOICED",
  uninvoiced = "UNINVOICED",
  all = "ALL",
}

export enum RequestWeeklyReportApprovalStateEnum {
  approved = "APPROVED",
  unapproved = "UNAPPROVED",
  all = "ALL",
}

export enum RequestWeeklyReportSortColumnEnum {
  group = "GROUP",
  duration = "DURATION",
  amount = "AMOUNT",
}

export enum RequestWeeklyReportAmountShownEnum {
  hideAmount = "HIDE_AMOUNT",
  earned = "EARNED",
  cost = "COST",
  profit = "PROFIT",
}

export enum RequestWeeklyReportExportTypeEnum {
  json = "JSON",
  csv = "CSV",
  xlsx = "XLSX",
  pdf = "PDF",
}

export enum RequestWeeklyReportContainsFilterEnum {
  contains = "CONTAINS",
  doesNotContain = "DOES_NOT_CONTAIN",
}

export enum RequestWeeklyReportContainedInTimeEntryFilterEnum {
  containedInTimeentry = "CONTAINED_IN_TIMEENTRY",
  notContainedInTimeentry = "NOT_CONTAINED_IN_TIMEENTRY",
}

export enum RequestWeeklyReportProjectStatusFilterEnum {
  active = "ACTIVE",
  archived = "ARCHIVED",
  all = "ALL",
}

export enum RequestWeeklyReportClientStatusFilterEnum {
  active = "ACTIVE",
  archived = "ARCHIVED",
  all = "ALL",
}

export enum RequestWeeklyReportTagStatusFilterEnum {
  active = "ACTIVE",
  archived = "ARCHIVED",
  all = "ALL",
}

export enum RequestWeeklyReportUserStatusFilterEnum {
  active = "ACTIVE",
  inactive = "INACTIVE",
  all = "ALL",
}

export enum RequestWeeklyReportTaskStatusFilterEnum {
  active = "ACTIVE",
  done = "DONE",
  all = "ALL",
}

type RequestWeeklyReportType = {
  dateRangeStart: Date,
  dateRangeEnd: Date,
  summaryFilter: {
    groups: RequestWeeklyReportGroupsEnum[],
    sortColumn?: RequestWeeklyReportSortColumnEnum,
    sortOrder?: RequestWeeklyReportSortOrderEnum,
  },
  exportType?: RequestWeeklyReportExportTypeEnum,
  amountShown?: RequestWeeklyReportAmountShownEnum,
  timeZone?: string,
  invoicingState?: RequestWeeklyReportInvoicingStateEnum,
  approvalState?: RequestWeeklyReportApprovalStateEnum,
  users?: {
    ids: string[],
    contains: RequestWeeklyReportContainsFilterEnum,
    status: RequestWeeklyReportUserStatusFilterEnum,
  },
  clients?: {
    ids: string[],
    contains: RequestWeeklyReportContainsFilterEnum,
    status: RequestWeeklyReportClientStatusFilterEnum,
  },
  projects?: {
    ids: string[],
    contains: RequestWeeklyReportContainsFilterEnum,
    status: RequestWeeklyReportProjectStatusFilterEnum,
  },
  tasks?: {
    ids: string[],
    contains: RequestWeeklyReportContainsFilterEnum,
    status: RequestWeeklyReportTaskStatusFilterEnum,
  },
  tags?: {
    ids: string[],
    containedInTimeentry: RequestWeeklyReportContainedInTimeEntryFilterEnum,
    status: RequestWeeklyReportTagStatusFilterEnum,
  },
  billable?: boolean,
  description?: string,
  withoutDescription?: boolean,
  customFields?: {
    id: string,
    value: string,
    type: string,
    typeCondition: string,
    empty: boolean,
  }[]
}

export {
  RequestWeeklyReportType
}
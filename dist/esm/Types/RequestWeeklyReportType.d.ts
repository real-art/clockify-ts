export declare enum RequestWeeklyReportGroupsEnum {
    project = "PROJECT",
    client = "CLIENT",
    task = "TASK",
    tag = "TAG",
    user = "USER",
    userGroup = "USER_GROUP"
}
export declare enum RequestWeeklyReportSortOrderEnum {
    ascending = "ASCENDING",
    descending = "DESCENDING"
}
export declare enum RequestWeeklyReportInvoicingStateEnum {
    invoiced = "INVOICED",
    uninvoiced = "UNINVOICED",
    all = "ALL"
}
export declare enum RequestWeeklyReportApprovalStateEnum {
    approved = "APPROVED",
    unapproved = "UNAPPROVED",
    all = "ALL"
}
export declare enum RequestWeeklyReportSortColumnEnum {
    group = "GROUP",
    duration = "DURATION",
    amount = "AMOUNT"
}
export declare enum RequestWeeklyReportAmountShownEnum {
    hideAmount = "HIDE_AMOUNT",
    earned = "EARNED",
    cost = "COST",
    profit = "PROFIT"
}
export declare enum RequestWeeklyReportExportTypeEnum {
    json = "JSON",
    csv = "CSV",
    xlsx = "XLSX",
    pdf = "PDF"
}
export declare enum RequestWeeklyReportContainsFilterEnum {
    contains = "CONTAINS",
    doesNotContain = "DOES_NOT_CONTAIN"
}
export declare enum RequestWeeklyReportContainedInTimeEntryFilterEnum {
    containedInTimeentry = "CONTAINED_IN_TIMEENTRY",
    notContainedInTimeentry = "NOT_CONTAINED_IN_TIMEENTRY"
}
export declare enum RequestWeeklyReportProjectStatusFilterEnum {
    active = "ACTIVE",
    archived = "ARCHIVED",
    all = "ALL"
}
export declare enum RequestWeeklyReportClientStatusFilterEnum {
    active = "ACTIVE",
    archived = "ARCHIVED",
    all = "ALL"
}
export declare enum RequestWeeklyReportTagStatusFilterEnum {
    active = "ACTIVE",
    archived = "ARCHIVED",
    all = "ALL"
}
export declare enum RequestWeeklyReportUserStatusFilterEnum {
    active = "ACTIVE",
    inactive = "INACTIVE",
    all = "ALL"
}
export declare enum RequestWeeklyReportTaskStatusFilterEnum {
    active = "ACTIVE",
    done = "DONE",
    all = "ALL"
}
type RequestWeeklyReportType = {
    dateRangeStart: Date;
    dateRangeEnd: Date;
    summaryFilter: {
        groups: RequestWeeklyReportGroupsEnum[];
        sortColumn?: RequestWeeklyReportSortColumnEnum;
        sortOrder?: RequestWeeklyReportSortOrderEnum;
    };
    exportType?: RequestWeeklyReportExportTypeEnum;
    amountShown?: RequestWeeklyReportAmountShownEnum;
    timeZone?: string;
    invoicingState?: RequestWeeklyReportInvoicingStateEnum;
    approvalState?: RequestWeeklyReportApprovalStateEnum;
    users?: {
        ids: string[];
        contains: RequestWeeklyReportContainsFilterEnum;
        status: RequestWeeklyReportUserStatusFilterEnum;
    };
    clients?: {
        ids: string[];
        contains: RequestWeeklyReportContainsFilterEnum;
        status: RequestWeeklyReportClientStatusFilterEnum;
    };
    projects?: {
        ids: string[];
        contains: RequestWeeklyReportContainsFilterEnum;
        status: RequestWeeklyReportProjectStatusFilterEnum;
    };
    tasks?: {
        ids: string[];
        contains: RequestWeeklyReportContainsFilterEnum;
        status: RequestWeeklyReportTaskStatusFilterEnum;
    };
    tags?: {
        ids: string[];
        containedInTimeentry: RequestWeeklyReportContainedInTimeEntryFilterEnum;
        status: RequestWeeklyReportTagStatusFilterEnum;
    };
    billable?: boolean;
    description?: string;
    withoutDescription?: boolean;
    customFields?: {
        id: string;
        value: string;
        type: string;
        typeCondition: string;
        empty: boolean;
    }[];
};
export { RequestWeeklyReportType };

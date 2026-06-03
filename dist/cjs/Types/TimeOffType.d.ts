export declare enum TimeOffRequestStatusEnum {
    pending = "PENDING",
    approved = "APPROVED",
    rejected = "REJECTED",
    all = "ALL"
}
export declare enum TimeOffPeriodTimeUnitEnum {
    days = "DAYS",
    hours = "HOURS"
}
type TimeOffRequestType = {
    balance: number;
    balanceDiff: number;
    createdAt: string;
    id: string;
    note: string;
    policyId: string;
    policyName: string;
    requesterUserId: string;
    requesterUserName: string;
    status: {
        changedAt: string;
        changedByUserId: string;
        changedByUserName: string;
        changedForUserName: string;
        note: string;
        statusType: TimeOffRequestStatusEnum;
    };
    timeOffPeriod: {
        halfDay: boolean;
        halfDayHours: {
            end: string;
            start: string;
        };
        halfDayPeriod: "FIRST_HALF" | "SECOND_HALF" | "NOT_DEFINED";
        period: {
            end: string;
            start: string;
        };
    };
    timeUnit: TimeOffPeriodTimeUnitEnum;
    userEmail: string;
    userId: string;
    userName: string;
    userTimeZone: string;
    workspaceId: string;
};
export { TimeOffRequestType };

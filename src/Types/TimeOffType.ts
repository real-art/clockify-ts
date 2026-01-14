export enum TimeOffRequestStatusEnum {
  pending = "PENDING",
  approved = "APPROVED",
  rejected = "REJECTED",
  all = "ALL",
}

export enum TimeOffPeriodTimeUnitEnum {
  days = "DAYS",
  hours = "HOURS",
}

type TimeOffRequestType = {
  balance: number; // double
  balanceDiff: number; // double
  createdAt: string; // date-time
  id: string; // time off requester identifier
  note: string; // note of the time off request
  policyId: string; // policy identifier
  policyName: string; // policy name of the time off request
  requesterUserId: string; // requester user's id
  requesterUserName: string; // requester user's username
  status: { // TimeOffRequestStatus
    changedAt: string; // date-time
    changedByUserId: string; // string
    changedByUserName: string; // string
    changedForUserName: string; // string
    note: string; // string
    statusType: TimeOffRequestStatusEnum
  };
  timeOffPeriod: {
    halfDay: boolean; // boolean
    halfDayHours: {
      end: string; // date-time
      start: string; // date-time
    };
    halfDayPeriod: "FIRST_HALF" | "SECOND_HALF" | "NOT_DEFINED"; // string enum
    period: {
      end: string; // date-time
      start: string; // date-time
    };
  };
  timeUnit: TimeOffPeriodTimeUnitEnum
  userEmail: string; // user's email
  userId: string; // user identifier
  userName: string; // user's username
  userTimeZone: string; // user's time zone
  workspaceId: string; // workspace identifier
}

export { TimeOffRequestType };


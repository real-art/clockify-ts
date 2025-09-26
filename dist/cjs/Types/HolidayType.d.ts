type HolidayType = {
    automaticTimeEntryCreation: boolean;
    datePeriod: {
        endDate: string;
        startDate: string;
    };
    everyoneIncludingNew: boolean;
    id: string;
    name: string;
    occursAnnually: boolean;
    projectId: string | null;
    taskId: string | null;
    userGroupIds: string[];
    userIds: string[];
    workspaceId: string;
};
export { HolidayType };

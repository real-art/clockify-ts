type HolidayType = {
  automaticTimeEntryCreation: boolean;
  datePeriod: {
    endDate: string; // date in format yyyy-mm-dd
    startDate: string; // date in format yyyy-mm-dd
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
}

export { HolidayType };

